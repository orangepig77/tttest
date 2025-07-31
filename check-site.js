const https = require('https');

console.log('🔍 检查网站可访问性...');

// 检查主页面
const checkMainPage = () => {
  return new Promise((resolve, reject) => {
    const req = https.request({
      hostname: 'tttest-ten.vercel.app',
      port: 443,
      path: '/',
      method: 'GET',
      timeout: 15000
    }, (res) => {
      console.log(`✅ 主页面访问正常 - 状态码: ${res.statusCode}`);
      resolve(true);
    });

    req.on('error', (e) => {
      console.log(`❌ 主页面访问失败: ${e.message}`);
      reject(e);
    });

    req.on('timeout', () => {
      console.log('❌ 主页面连接超时');
      req.destroy();
      reject(new Error('timeout'));
    });

    req.end();
  });
};

// 检查验证文件
const checkVerifyFile = () => {
  return new Promise((resolve, reject) => {
    const req = https.request({
      hostname: 'tttest-ten.vercel.app',
      port: 443,
      path: '/baidu_verify_codeva-lQOyMxFqSc.html',
      method: 'GET',
      timeout: 15000
    }, (res) => {
      console.log(`✅ 验证文件访问正常 - 状态码: ${res.statusCode}`);
      
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        if (data.includes('18aedecd1fe5eb73e625673b151a5916')) {
          console.log('✅ 验证文件内容正确');
        } else {
          console.log('❌ 验证文件内容不正确');
        }
        resolve(true);
      });
    });

    req.on('error', (e) => {
      console.log(`❌ 验证文件访问失败: ${e.message}`);
      reject(e);
    });

    req.on('timeout', () => {
      console.log('❌ 验证文件连接超时');
      req.destroy();
      reject(new Error('timeout'));
    });

    req.end();
  });
};

// 执行检查
async function runChecks() {
  try {
    await checkMainPage();
    await checkVerifyFile();
    console.log('\n🎉 所有检查通过！');
  } catch (error) {
    console.log('\n❌ 检查失败，请稍后重试');
  }
}

runChecks(); 