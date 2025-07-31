const https = require('https');

console.log('🔍 检查网站验证状态...');

const options = {
  hostname: 'tttest-ten.vercel.app',
  port: 443,
  path: '/',
  method: 'GET',
  timeout: 10000
};

const req = https.request(options, (res) => {
  console.log(`✅ 网站访问正常`);
  console.log(`状态码: ${res.statusCode}`);
  console.log(`响应头: ${JSON.stringify(res.headers, null, 2)}`);
  
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    if (data.includes('codeva-lQOyMxFqSc')) {
      console.log('✅ 新验证代码已正确部署');
    } else if (data.includes('codeva-VsZt0VbsZa')) {
      console.log('⚠️ 仍在使用旧验证代码，请等待部署完成');
    } else {
      console.log('❌ 未找到验证代码');
    }
  });
});

req.on('error', (e) => {
  console.log(`❌ 访问失败: ${e.message}`);
});

req.on('timeout', () => {
  console.log('❌ 连接超时');
  req.destroy();
});

req.end(); 