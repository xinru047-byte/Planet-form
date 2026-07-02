export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const APP_ID     = 'cli_aacf7345c2b95beb';
  const APP_SECRET = '4vRwhsC6goY6jAx01ZNGEhSLs6tLOJeF';
  const APP_TOKEN  = 'T5L4b0oMxaHK8psa79ycow7MnGe';
  const TABLE_ID   = 'tblFrYwQvXkfs9ko';

  try {
    const tokenRes = await fetch('https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({app_id: APP_ID, app_secret: APP_SECRET})
    });
    const tokenData = await tokenRes.json();
    const token = tokenData.tenant_access_token;
    if (!token) return res.status(500).json({error: '获取token失败'});

    const writeRes = await fetch(
      `https://open.feishu.cn/open-apis/bitable/v1/apps/${APP_TOKEN}/tables/${TABLE_ID}/records`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({fields: req.body})
      }
    );
    const writeData = await writeRes.json();
    if (writeData.code !== 0) return res.status(500).json({error: writeData.msg});
    res.status(200).json({success: true});
  } catch(err) {
    res.status(500).json({error: err.message});
  }
}
