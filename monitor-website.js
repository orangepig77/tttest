import https from 'https';
import fs from 'fs';
import path from 'path';

// 配置
const CONFIG = {
    domain: 'ahhonglan.com',
    checkInterval: 300000, // 5分钟检查一次
    logFile: 'website-monitor.log',
    alertThreshold: 3 // 连续失败3次后报警
};

let failureCount = 0;
let lastCheckTime = new Date();

// 日志函数
function log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    
    console.log(logMessage);
    
    // 写入日志文件
    fs.appendFileSync(CONFIG.logFile, logMessage + '\n');
}

// 检查网站状态
function checkWebsite() {
    return new Promise((resolve) => {
        const startTime = Date.now();
        
        const req = https.request({
            hostname: CONFIG.domain,
            port: 443,
            method: 'HEAD',
            timeout: 10000,
            headers: {
                'User-Agent': 'Website-Monitor/1.0'
            }
        }, (res) => {
            const responseTime = Date.now() - startTime;
            const statusCode = res.statusCode;
            
            if (statusCode >= 200 && statusCode < 400) {
                failureCount = 0;
                log(`✅ 网站正常 - 状态码: ${statusCode}, 响应时间: ${responseTime}ms`, 'SUCCESS');
                
                // 记录性能指标
                log(`📊 性能指标 - 响应时间: ${responseTime}ms, 服务器: ${res.headers.server || 'Unknown'}`, 'INFO');
                
                // 检查安全头
                const securityHeaders = {
                    'strict-transport-security': res.headers['strict-transport-security'],
                    'x-frame-options': res.headers['x-frame-options'],
                    'x-content-type-options': res.headers['x-content-type-options'],
                    'x-xss-protection': res.headers['x-xss-protection']
                };
                
                Object.entries(securityHeaders).forEach(([header, value]) => {
                    if (value) {
                        log(`🔒 安全头 ${header}: ${value}`, 'INFO');
                    }
                });
                
                resolve(true);
            } else {
                failureCount++;
                log(`❌ 网站异常 - 状态码: ${statusCode}, 响应时间: ${responseTime}ms`, 'ERROR');
                resolve(false);
            }
        });
        
        req.on('error', (error) => {
            failureCount++;
            const responseTime = Date.now() - startTime;
            log(`❌ 连接失败 - 错误: ${error.message}, 响应时间: ${responseTime}ms`, 'ERROR');
            resolve(false);
        });
        
        req.on('timeout', () => {
            failureCount++;
            const responseTime = Date.now() - startTime;
            log(`⏰ 连接超时 - 响应时间: ${responseTime}ms`, 'ERROR');
            req.destroy();
            resolve(false);
        });
        
        req.end();
    });
}

// 发送警报
function sendAlert(message) {
    log(`🚨 警报: ${message}`, 'ALERT');
    
    // 这里可以集成邮件、短信或其他通知方式
    // 例如：发送邮件、钉钉通知、微信通知等
    
    console.log('\n' + '='.repeat(50));
    console.log('🚨 网站监控警报');
    console.log('='.repeat(50));
    console.log(`时间: ${new Date().toLocaleString()}`);
    console.log(`域名: ${CONFIG.domain}`);
    console.log(`问题: ${message}`);
    console.log('='.repeat(50) + '\n');
}

// 生成报告
function generateReport() {
    const now = new Date();
    const uptime = now - lastCheckTime;
    const uptimeHours = Math.floor(uptime / (1000 * 60 * 60));
    const uptimeMinutes = Math.floor((uptime % (1000 * 60 * 60)) / (1000 * 60));
    
    log(`📊 监控报告 - 运行时间: ${uptimeHours}小时${uptimeMinutes}分钟`, 'INFO');
    log(`📊 监控报告 - 失败次数: ${failureCount}`, 'INFO');
    
    // 计算可用性
    const totalChecks = Math.floor(uptime / CONFIG.checkInterval);
    const availability = totalChecks > 0 ? ((totalChecks - failureCount) / totalChecks * 100).toFixed(2) : 100;
    log(`📊 监控报告 - 可用性: ${availability}%`, 'INFO');
}

// 主监控循环
async function startMonitoring() {
    log('🚀 开始网站监控...', 'INFO');
    log(`📋 监控域名: ${CONFIG.domain}`, 'INFO');
    log(`📋 检查间隔: ${CONFIG.checkInterval / 1000}秒`, 'INFO');
    
    // 创建日志文件
    if (!fs.existsSync(CONFIG.logFile)) {
        fs.writeFileSync(CONFIG.logFile, '');
    }
    
    // 定期检查
    setInterval(async () => {
        const isHealthy = await checkWebsite();
        
        if (!isHealthy && failureCount >= CONFIG.alertThreshold) {
            sendAlert(`网站连续${failureCount}次检查失败，请立即检查！`);
        }
        
        // 每小时生成一次报告
        if (new Date().getMinutes() === 0) {
            generateReport();
        }
    }, CONFIG.checkInterval);
    
    // 立即执行一次检查
    await checkWebsite();
}

// 优雅退出
process.on('SIGINT', () => {
    log('🛑 监控停止', 'INFO');
    generateReport();
    process.exit(0);
});

process.on('SIGTERM', () => {
    log('🛑 监控停止', 'INFO');
    generateReport();
    process.exit(0);
});

// 启动监控
startMonitoring().catch((error) => {
    log(`❌ 监控启动失败: ${error.message}`, 'ERROR');
    process.exit(1);
}); 