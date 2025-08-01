# www 子域名配置指南

## 当前状态
- 主域名：ahhonglan.com ✅
- www 子域名：www.ahhonglan.com ⚠️ 需要配置

## DNS 配置步骤

### 1. 在域名注册商控制面板中添加 CNAME 记录

```
记录类型: CNAME
主机记录: www
记录值: ahhl.netlify.app
TTL: 3600
```

### 2. 验证配置

配置完成后，运行以下命令验证：

```bash
# 检查 www 域名解析
nslookup www.ahhonglan.com

# 检查 ping 连接
ping www.ahhonglan.com

# 运行完整检查
node check-domain-status.js
```

### 3. Netlify 配置

已在 `netlify.toml` 中添加了以下重定向规则：

```toml
# www 子域名重定向到主域名
[[redirects]]
  from = "https://www.ahhonglan.com/*"
  to = "https://ahhonglan.com/:splat"
  status = 301
  force = true

[[redirects]]
  from = "http://www.ahhonglan.com/*"
  to = "https://ahhonglan.com/:splat"
  status = 301
  force = true
```

## 百度站长工具验证

### 已添加的验证代码

在 `index.html` 中添加了新的百度站长验证代码：

```html
<meta name="baidu-site-verification" content="codeva-8l6lr1thad" />
```

### 验证步骤

1. **配置 DNS 记录**（如上所述）
2. **等待 DNS 传播**（最多 24-48 小时）
3. **访问 https://www.ahhonglan.com** 确认可以访问
4. **在百度站长工具中点击验证**

## 预期结果

配置完成后：
- `www.ahhonglan.com` 会自动重定向到 `ahhonglan.com`
- 百度站长工具验证应该成功
- 两个域名都指向同一个网站

## 故障排除

### 如果 www 域名无法访问

1. **检查 DNS 记录**
   - 确认 CNAME 记录已正确配置
   - 等待 DNS 传播完成

2. **检查 Netlify 设置**
   - 登录 Netlify 控制台
   - 确认域名配置正确

3. **运行诊断脚本**
   ```bash
   node check-domain-status.js
   ```

## 更新日志

- 2024-12-19：添加 www 子域名支持
- 2024-12-19：更新百度站长验证代码
- 2024-12-19：创建 www 域名配置指南 