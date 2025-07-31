const https = require('https');
const dns = require('dns');

console.log('🔍 测试网站可访问性...\n');

// 测试 DNS 解析
console.log('1. 测试 DNS 解析...');
dns.resolve('tttest-ten.vercel.app', (err, addresses) => {
  if (err) {
    console.log('❌ DNS 解析失败:', err.message);
  } else {
    console.log('✅ DNS 解析成功:', addresses);
  }
  
  // 测试 HTTPS 连接
  console.log('\n2. 测试 HTTPS 连接...');
  const req = https.request({
    hostname: 'tttest-ten.vercel.app',
    port: 443,
    path: '/',
    method: 'GET',
    timeout: 10000,
    headers: {
      'User-Agent': 'Mozilla/5.0 (compatible; Baiduspider/2.0)'
    }
  }, (res) => {
    console.log(`✅ HTTPS 连接成功 - 状态码: ${res.statusCode}`);
    console.log(`响应头: ${JSON.stringify(res.headers, null, 2)}`);
    
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    
    res.on('end', () => {
      if (data.includes('codeva-lQOyMxFqSc')) {
        console.log('✅ 验证代码已正确部署');
      } else {
        console.log('❌ 验证代码未找到');
      }
      
      if (data.includes('18aedecd1fe5eb73e625673b151a5916')) {
        console.log('✅ 文件验证内容已部署');
      } else {
        console.log('❌ 文件验证内容未找到');
      }
    });
  });

  req.on('error', (e) => {
    console.log(`❌ HTTPS 连接失败: ${e.message}`);
  });

  req.on('timeout', () => {
    console.log('❌ HTTPS 连接超时');
    req.destroy();
  });

  req.end();
}); 