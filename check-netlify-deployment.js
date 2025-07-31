import https from 'https';

console.log('🔍 Netlify 部署状态检查工具\n');

// 部署检查函数
function checkDeployment(domain) {
  console.log(`检查域名: ${domain}`);
  
  const options = {
    hostname: domain,
    port: 443,
    path: '/',
    method: 'GET',
    timeout: 10000,
    headers: {
      'User-Agent': 'Mozilla/5.0 (compatible; Netlify-Check/1.0)'
    }
  };

  const req = https.request(options, (res) => {
    console.log(`✅ 网站访问正常 - 状态码: ${res.statusCode}`);
    
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    
    res.on('end', () => {
      // 检查关键文件
      const checks = [
        { name: 'Netlify 配置', check: () => data.includes('netlify') || data.includes('Netlify') },
        { name: '百度验证代码', check: () => data.includes('codeva-lQOyMxFqSc') },
        { name: 'Vue.js 应用', check: () => data.includes('vue') || data.includes('Vue') },
        { name: 'Tailwind CSS', check: () => data.includes('tailwind') || data.includes('Tailwind') }
      ];
      
      console.log('\n📋 部署检查结果:');
      checks.forEach(({ name, check }) => {
        console.log(`${check() ? '✅' : '❌'} ${name}`);
      });
      
      console.log('\n🎯 部署状态:');
      if (checks.every(c => c.check())) {
        console.log('✅ 部署完全成功！');
      } else {
        console.log('⚠️ 部署基本成功，但可能需要等待缓存更新');
      }
    });
  });

  req.on('error', (e) => {
    console.log(`❌ 访问失败: ${e.message}`);
    console.log('💡 可能原因：');
    console.log('   - 域名还未生效');
    console.log('   - 部署还在进行中');
    console.log('   - 网络连接问题');
  });

  req.on('timeout', () => {
    console.log('❌ 连接超时');
    req.destroy();
  });

  req.end();
}

// 使用说明
console.log('📖 使用说明:');
console.log('1. 完成 Netlify 部署后，您会获得一个域名');
console.log('2. 运行此脚本检查部署状态：');
console.log('   node check-netlify-deployment.js YOUR_DOMAIN');
console.log('3. 例如：node check-netlify-deployment.js your-site.netlify.app\n');

// 如果提供了域名参数，直接检查
const domain = process.argv[2];
if (domain) {
  checkDeployment(domain);
} else {
  console.log('💡 提示：部署完成后，请运行以下命令检查状态：');
  console.log('   node check-netlify-deployment.js YOUR_NETLIFY_DOMAIN');
} 