import https from 'https';
import dns from 'dns';
import { promisify } from 'util';

const resolve4 = promisify(dns.resolve4);
const resolveCname = promisify(dns.resolveCname);

// 配置
const DOMAIN = 'ahhonglan.com';
const WWW_DOMAIN = 'www.ahhonglan.com';
const NETLIFY_DOMAIN = 'ahhl.netlify.app';
const NETLIFY_IP = '75.2.60.5';

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

// 检查 DNS 解析
async function checkDNS() {
    log('\n🔍 检查 DNS 解析...', 'blue');
    
    try {
        const ips = await resolve4(DOMAIN);
        log(`✅ DNS A 记录解析成功: ${ips.join(', ')}`, 'green');
        
        if (ips.includes(NETLIFY_IP)) {
            log('✅ 域名正确指向 Netlify 服务器', 'green');
        } else {
            log('⚠️  域名未指向预期的 Netlify IP', 'yellow');
        }
    } catch (error) {
        log(`❌ DNS A 记录解析失败: ${error.message}`, 'red');
    }
    
    try {
        const cnames = await resolveCname(DOMAIN);
        log(`✅ DNS CNAME 记录: ${cnames.join(', ')}`, 'green');
    } catch (error) {
        log(`ℹ️  无 CNAME 记录或解析失败: ${error.message}`, 'yellow');
    }
}

// 检查 HTTPS 连接
function checkHTTPS() {
    return new Promise((resolve) => {
        log('\n🔒 检查 HTTPS 连接...', 'blue');
        
        const req = https.request({
            hostname: DOMAIN,
            port: 443,
            method: 'HEAD',
            timeout: 10000
        }, (res) => {
            log(`✅ HTTPS 连接成功 - 状态码: ${res.statusCode}`, 'green');
            log(`✅ 服务器: ${res.headers.server || 'Unknown'}`, 'green');
            log(`✅ 内容类型: ${res.headers['content-type'] || 'Unknown'}`, 'green');
            
            if (res.headers['strict-transport-security']) {
                log('✅ HSTS 已启用', 'green');
            }
            
            resolve(true);
        });
        
        req.on('error', (error) => {
            log(`❌ HTTPS 连接失败: ${error.message}`, 'red');
            resolve(false);
        });
        
        req.on('timeout', () => {
            log('❌ HTTPS 连接超时', 'red');
            req.destroy();
            resolve(false);
        });
        
        req.end();
    });
}

// 检查重定向
function checkRedirect() {
    return new Promise((resolve) => {
        log('\n🔄 检查重定向...', 'blue');
        
        const req = https.request({
            hostname: DOMAIN,
            port: 443,
            method: 'HEAD',
            timeout: 10000
        }, (res) => {
            if (res.statusCode >= 300 && res.statusCode < 400) {
                log(`✅ 重定向检测到 - 状态码: ${res.statusCode}`, 'green');
                log(`✅ 重定向到: ${res.headers.location}`, 'green');
            } else {
                log(`ℹ️  无重定向 - 状态码: ${res.statusCode}`, 'yellow');
            }
            resolve(true);
        });
        
        req.on('error', (error) => {
            log(`❌ 重定向检查失败: ${error.message}`, 'red');
            resolve(false);
        });
        
        req.end();
    });
}

// 检查 SSL 证书
function checkSSLCertificate() {
    return new Promise((resolve) => {
        log('\n🔐 检查 SSL 证书...', 'blue');
        
        const req = https.request({
            hostname: DOMAIN,
            port: 443,
            method: 'HEAD',
            timeout: 10000
        }, (res) => {
            const cert = req.socket.getPeerCertificate();
            
            if (cert && cert.subject) {
                log(`✅ 证书主题: ${cert.subject.CN || cert.subject.O}`, 'green');
                log(`✅ 证书颁发者: ${cert.issuer.CN || cert.issuer.O}`, 'green');
                
                const now = new Date();
                const validFrom = new Date(cert.valid_from);
                const validTo = new Date(cert.valid_to);
                
                if (now >= validFrom && now <= validTo) {
                    log('✅ 证书在有效期内', 'green');
                } else {
                    log('❌ 证书已过期或未生效', 'red');
                }
            } else {
                log('⚠️  无法获取证书信息', 'yellow');
            }
            
            resolve(true);
        });
        
        req.on('error', (error) => {
            log(`❌ SSL 证书检查失败: ${error.message}`, 'red');
            resolve(false);
        });
        
        req.end();
    });
}

// 检查 www 子域名
async function checkWWWDomain() {
    log('\n🌐 检查 www 子域名...', 'blue');
    
    try {
        const ips = await resolve4(WWW_DOMAIN);
        log(`✅ www 域名 DNS 解析成功: ${ips.join(', ')}`, 'green');
        
        if (ips.includes(NETLIFY_IP)) {
            log('✅ www 域名正确指向 Netlify 服务器', 'green');
        } else {
            log('⚠️  www 域名未指向预期的 Netlify IP', 'yellow');
        }
    } catch (error) {
        log(`❌ www 域名 DNS 解析失败: ${error.message}`, 'red');
    }
}

// 主函数
async function main() {
    log('🚀 开始检查域名状态...', 'blue');
    log(`📋 检查域名: ${DOMAIN}`, 'blue');
    log(`📋 www 域名: ${WWW_DOMAIN}`, 'blue');
    log(`📋 Netlify 域名: ${NETLIFY_DOMAIN}`, 'blue');
    
    await checkDNS();
    await checkWWWDomain();
    await checkHTTPS();
    await checkRedirect();
    await checkSSLCertificate();
    
    log('\n✨ 检查完成！', 'green');
    log('\n📝 建议:', 'blue');
    log('1. 如果所有检查都通过，您的域名配置已成功', 'green');
    log('2. 如果发现问题，请检查 DNS 配置和 Netlify 设置', 'yellow');
    log('3. 定期运行此脚本监控域名状态', 'blue');
}

// 运行检查
main().catch(console.error); 