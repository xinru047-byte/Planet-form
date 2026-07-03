exports.handler = async function(event, context) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  const APP_ID     = 'cli_aacf7345c2b95beb';
  const APP_SECRET = '4vRwhsC6goY6jAx01ZNGEhSLs6tLOJeF';
  const APP_TOKEN  = 'T5L4b0oMxaHK8psa79ycow7MnGe';
  const TABLE_ID   = 'tblFrYwQvXkfs9ko';

  try {
    const tokenRes = await fetch('https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ app_id: APP_ID, app_secret: APP_SECRET })
    });
    const tokenData = await tokenRes.json();
    const token = tokenData.tenant_access_token;
    if (!token) return {
      statusCode: 500, headers,
      body: JSON.stringify({ error: '获取token失败' })
    };

    const fields = JSON.parse(event.body);
    if (fields['提交时间']) fields['提交时间'] = Date.now();

    const writeRes = await fetch(
      `https://open.feishu.cn/open-apis/bitable/v1/apps/${APP_TOKEN}/tables/${TABLE_ID}/records`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ fields })
      }
    );
    const writeData = await writeRes.json();
    if (writeData.code !== 0) return {
      statusCode: 500, headers,
      body: JSON.stringify({ error: writeData.msg })
    };

    return { statusCode: 200, headers, body: JSON.stringify({ success: true }) };
  } catch(err) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: err.message }) };
  }
};
