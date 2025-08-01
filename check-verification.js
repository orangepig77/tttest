import https from 'https';

// 配置
const DOMAIN = 'ahhonglan.com';
const EXPECTED_CODES = [
    'codeva-lQOyMxFqSc',
    'codeva-8l6lr1thad', 
    'codeva-Z2EUMFYzQm'
];

// 颜色输出
const colors = {
    green: '\x1b[32m',
    red: '\x1b[31m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    reset: '\x1b[0m'
};

function log(message, color = 'reset') {
    console.log(`${colors[color]}${message}${colors.reset}`);
}

// 检查验证代码
function checkVerificationCodes() {
    return new Promise((resolve) => {
        log('\n🔍 检查百度站长验证代码...', 'blue');
        
        const req = https.request({
            hostname: DOMAIN,
            port: 443,
            method: 'GET',
            timeout: 10000,
            headers: {
                'User-Agent': 'Verification-Checker/1.0'
            }
        }, (res) => {
            let data = '';
            
            res.on('data', (chunk) => {
                data += chunk;
            });
            
            res.on('end', () => {
                log(`✅ 网站访问成功 - 状态码: ${res.statusCode}`, 'green');
                
                // 检查验证代码
                const foundCodes = [];
                const missingCodes = [];
                
                EXPECTED_CODES.forEach(code => {
                    if (data.includes(code)) {
                        foundCodes.push(code);
                        log(`✅ 找到验证代码: ${code}`, 'green');
                    } else {
                        missingCodes.push(code);
                        log(`❌ 未找到验证代码: ${code}`, 'red');
                    }
                });
                
                // 总结
                log(`\n📊 验证代码检查结果:`, 'blue');
                log(`✅ 找到 ${foundCodes.length}/${EXPECTED_CODES.length} 个验证代码`, 'green');
                
                if (missingCodes.length > 0) {
                    log(`❌ 缺失 ${missingCodes.length} 个验证代码: ${missingCodes.join(', ')}`, 'red');
                }
                
                if (foundCodes.length === EXPECTED_CODES.length) {
                    log('\n🎉 所有验证代码都已生效！', 'green');
                    log('现在可以在百度站长工具中进行验证了。', 'green');
                } else {
                    log('\n⚠️  部分验证代码未生效，请等待部署完成。', 'yellow');
                    log('建议等待 5-10 分钟后再次检查。', 'yellow');
                }
                
                resolve(foundCodes.length === EXPECTED_CODES.length);
            });
        });
        
        req.on('error', (error) => {
            log(`❌ 网站访问失败: ${error.message}`, 'red');
            resolve(false);
        });
        
        req.on('timeout', () => {
            log('❌ 网站访问超时', 'red');
            req.destroy();
            resolve(false);
        });
        
        req.end();
    });
}

// 主函数
async function main() {
    log('🚀 开始检查百度站长验证代码...', 'blue');
    log(`📋 检查域名: ${DOMAIN}`, 'blue');
    log(`📋 期望的验证代码: ${EXPECTED_CODES.join(', ')}`, 'blue');
    
    const success = await checkVerificationCodes();
    
    if (success) {
        log('\n✨ 验证代码检查完成！', 'green');
        log('✅ 所有验证代码都已生效', 'green');
        log('✅ 可以在百度站长工具中进行验证', 'green');
    } else {
        log('\n⚠️  验证代码检查完成', 'yellow');
        log('❌ 部分验证代码未生效', 'red');
        log('💡 建议等待几分钟后重新检查', 'yellow');
    }
}

// 运行检查
main().catch(console.error); 