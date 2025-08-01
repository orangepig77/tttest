# 域名配置指南 - ahhonglan.com

## 当前状态
- Netlify 部署地址：https://ahhl.netlify.app/
- 自定义域名：ahhonglan.com

## 配置步骤

### 1. Netlify 控制台配置

1. **登录 Netlify**
   - 访问：https://app.netlify.com
   - 找到您的站点：ahhl.netlify.app

2. **添加自定义域名**
   - 进入 "Domain settings" 标签页
   - 点击 "Add custom domain"
   - 输入：`ahhonglan.com`
   - 点击 "Verify"

3. **配置 SSL 证书**
   - Netlify 会自动为您的域名生成 SSL 证书
   - 等待证书生效（通常几分钟到几小时）

### 2. DNS 配置

在您的域名注册商控制面板中配置以下记录：

#### 推荐配置（CNAME 记录）
```
记录类型: CNAME
主机记录: @ (或留空)
记录值: ahhl.netlify.app
TTL: 3600
```

#### 备用配置（A 记录）
```
记录类型: A
主机记录: @ (或留空)
记录值: 75.2.60.5
TTL: 3600
```

### 3. 验证配置

1. **DNS 传播检查**
   - 使用 https://dnschecker.org 检查 DNS 传播
   - 等待 24-48 小时完全生效

2. **访问测试**
   - 测试 https://ahhonglan.com
   - 确认自动重定向到 HTTPS

### 4. 可选：添加 www 子域名

如果需要支持 www.ahhonglan.com：

1. **在 Netlify 中添加**
   - 在 Domain settings 中添加 `www.ahhonglan.com`

2. **DNS 配置**
   ```
   记录类型: CNAME
   主机记录: www
   记录值: ahhl.netlify.app
   TTL: 3600
   ```

## 常见问题

### Q: DNS 记录配置后无法访问？
A: 
- 检查 DNS 记录是否正确
- 等待 DNS 传播（最多 48 小时）
- 确认 Netlify 中已添加域名

### Q: SSL 证书问题？
A:
- Netlify 自动提供 SSL 证书
- 等待证书生成（通常几分钟）
- 检查域名是否正确配置

### Q: 如何强制 HTTPS？
A:
- Netlify 自动重定向 HTTP 到 HTTPS
- 可在 Domain settings 中配置强制 HTTPS

## 监控和维护

1. **定期检查**
   - 监控域名解析状态
   - 检查 SSL 证书有效期
   - 测试网站访问速度

2. **备份配置**
   - 保存 DNS 记录配置
   - 记录 Netlify 设置

## 联系支持

- **Netlify 支持**：https://netlify.com/support
- **域名注册商支持**：联系您的域名注册商客服

## 更新日志

- 2024-12-19：初始配置
- 域名：ahhonglan.com
- Netlify 站点：ahhl.netlify.app 