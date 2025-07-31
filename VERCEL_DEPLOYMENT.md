# Vercel 部署指南

## 🚀 快速部署到 Vercel

### 第一步：上传到 GitHub

1. **创建 GitHub 仓库**
   - 访问 https://github.com
   - 点击 "New repository"
   - 仓库名：`enterprise-website`
   - 选择 "Public"
   - 不要初始化 README（已有文件）

2. **上传代码到 GitHub**
   ```bash
   # 添加远程仓库（替换 YOUR_USERNAME 为您的 GitHub 用户名）
   git remote add origin https://github.com/YOUR_USERNAME/enterprise-website.git
   
   # 推送代码
   git push -u origin main
   ```

### 第二步：部署到 Vercel

1. **访问 Vercel**
   - 打开 https://vercel.com
   - 使用 GitHub 账号登录

2. **导入项目**
   - 点击 "New Project"
   - 选择您的 GitHub 仓库 `enterprise-website`
   - 点击 "Import"

3. **配置部署设置**
   - **Framework Preset**: 选择 "Vite"
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. **环境变量（可选）**
   - 如果需要，可以添加环境变量
   - 点击 "Deploy"

### 第三步：配置自定义域名

1. **购买域名**
   - 推荐：阿里云、腾讯云、GoDaddy
   - 域名建议：`your-company.com`

2. **在 Vercel 配置域名**
   - 项目部署成功后，进入项目设置
   - 点击 "Domains"
   - 添加您的自定义域名

3. **配置 DNS 解析**
   - 在域名提供商后台添加 DNS 记录
   - 类型：CNAME
   - 主机记录：@
   - 记录值：cname.vercel-dns.com

### 第四步：更新网站信息

部署成功后，需要更新以下文件中的网站 URL：

1. **更新 index.html**
   ```html
   <!-- 将 https://tttest-ten.vercel.app 替换为您的域名 -->
   <meta property="og:url" content="https://your-domain.com/" />
   <meta property="twitter:url" content="https://your-domain.com/" />
   ```

2. **更新结构化数据**
   ```json
   {
     "url": "https://your-domain.com",
     "logo": "https://your-domain.com/logo.png"
   }
   ```

### 第五步：百度站长平台验证

1. **访问百度站长平台**
   - 打开 https://ziyuan.baidu.com
   - 添加您的网站域名

2. **验证网站**
   - 验证代码已配置：`codeva-VsZt0VbsZa`
   - 点击"验证"按钮

3. **提交网站地图**
   - 验证成功后，提交 sitemap.xml
   - URL：`https://your-domain.com/sitemap.xml`

## 📋 部署检查清单

### ✅ 已完成
- [x] 项目构建成功
- [x] 百度验证代码配置
- [x] SEO 优化配置
- [x] 响应式设计

### 🔄 需要完成
- [ ] 上传到 GitHub
- [ ] 部署到 Vercel
- [ ] 配置自定义域名
- [ ] 更新网站 URL
- [ ] 百度站长平台验证

## 🔗 重要链接

- **Vercel**: https://vercel.com
- **GitHub**: https://github.com
- **百度站长平台**: https://ziyuan.baidu.com
- **阿里云域名**: https://wanwang.aliyun.com
- **腾讯云域名**: https://dnspod.cloud.tencent.com

## 📞 技术支持

如有问题，请联系：
- 电话：18156018435
- 邮箱：contact@your-domain.com

---

**注意**：部署完成后，请及时更新网站 URL 和联系信息。 