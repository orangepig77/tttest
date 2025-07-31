# Netlify 部署指南

## 🚀 快速部署到 Netlify

### 第一步：注册 Netlify 账号

1. **访问 Netlify**
   - 打开 https://netlify.com
   - 点击 "Sign up" 注册账号
   - 推荐使用 GitHub 账号登录

### 第二步：连接 GitHub 仓库

1. **登录后点击 "New site from Git"**
2. **选择 GitHub**
3. **授权 Netlify 访问您的 GitHub 仓库**
4. **选择仓库**：`orangepig77/tttest`

### 第三步：配置部署设置

#### 自动检测配置：
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: 18

#### 如果自动检测失败，手动配置：
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: 18

### 第四步：部署设置

1. **点击 "Deploy site"**
2. **等待部署完成**（通常 2-3 分钟）
3. **获得域名**：类似 `https://your-site-name.netlify.app`

### 第五步：配置自定义域名（可选）

1. **在 Netlify 控制台点击 "Domain settings"**
2. **添加自定义域名**
3. **配置 DNS 解析**

## 📋 部署检查清单

### ✅ 已完成：
- [x] 项目构建成功
- [x] Netlify 配置文件创建
- [x] 百度验证文件准备
- [x] SEO 优化配置

### 🔄 需要完成：
- [ ] 注册 Netlify 账号
- [ ] 连接 GitHub 仓库
- [ ] 配置部署设置
- [ ] 等待部署完成
- [ ] 更新网站 URL
- [ ] 重新配置百度站长平台验证

## 🔧 部署后配置

### 1. 更新网站 URL
部署成功后，需要更新以下文件中的网站 URL：

```html
<!-- 将 https://tttest-ten.vercel.app 替换为新的 Netlify 域名 -->
<meta property="og:url" content="https://your-site-name.netlify.app/" />
<meta property="twitter:url" content="https://your-site-name.netlify.app/" />
```

### 2. 更新结构化数据
```json
{
  "url": "https://your-site-name.netlify.app",
  "logo": "https://your-site-name.netlify.app/logo.png"
}
```

### 3. 重新配置百度站长平台验证
1. 访问 https://ziyuan.baidu.com
2. 删除现有网站
3. 添加新网站：`https://your-site-name.netlify.app`
4. 选择验证方式（HTML标签或文件验证）
5. 等待验证完成

## 🎯 Netlify 优势

### 相比 Vercel 的优势：
- ✅ 在中国访问更稳定
- ✅ 免费额度更 generous
- ✅ 部署速度更快
- ✅ 支持更多自定义配置

### 功能特性：
- ✅ 自动 HTTPS
- ✅ 全球 CDN
- ✅ 自动部署
- ✅ 自定义域名
- ✅ 表单处理
- ✅ 重定向规则

## 📞 技术支持

- **Netlify 文档**: https://docs.netlify.com
- **Netlify 支持**: https://www.netlify.com/support
- **GitHub 仓库**: https://github.com/orangepig77/tttest

## ⏰ 预计时间

- **注册和配置**: 5-10 分钟
- **首次部署**: 2-3 分钟
- **域名配置**: 5-10 分钟
- **百度验证**: 10-15 分钟

---

**注意**：部署完成后，请及时更新网站 URL 和重新配置百度站长平台验证。 