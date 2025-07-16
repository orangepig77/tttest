# 网站部署指南

## 方案一：GitHub Pages（推荐）

### 步骤：

1. **创建 GitHub 仓库**
   ```bash
   # 初始化 Git 仓库
   git init
   git add .
   git commit -m "Initial commit"
   
   # 在 GitHub 上创建新仓库，然后推送
   git remote add origin https://github.com/你的用户名/仓库名.git
   git branch -M main
   git push -u origin main
   ```

2. **启用 GitHub Pages**
   - 进入仓库设置 (Settings)
   - 找到 Pages 选项
   - Source 选择 "GitHub Actions"
   - 保存设置

3. **自动部署**
   - 每次推送到 main 分支时，GitHub Actions 会自动构建并部署
   - 网站地址：`https://你的用户名.github.io/仓库名`

## 方案二：Vercel（推荐）

### 步骤：

1. **注册 Vercel**
   - 访问 https://vercel.com
   - 使用 GitHub 账号登录

2. **导入项目**
   - 点击 "New Project"
   - 选择你的 GitHub 仓库
   - 框架选择 "Vue.js"
   - 点击 "Deploy"

3. **自动部署**
   - 每次推送代码时自动重新部署
   - 获得一个 `.vercel.app` 域名

## 方案三：Netlify

### 步骤：

1. **注册 Netlify**
   - 访问 https://netlify.com
   - 使用 GitHub 账号登录

2. **导入项目**
   - 点击 "New site from Git"
   - 选择你的 GitHub 仓库
   - Build command: `npm run build`
   - Publish directory: `dist`
   - 点击 "Deploy site"

3. **自动部署**
   - 每次推送代码时自动重新部署
   - 获得一个 `.netlify.app` 域名

## 方案四：传统服务器部署

### 步骤：

1. **构建项目**
   ```bash
   npm run build
   ```

2. **上传文件**
   - 将 `dist` 目录中的所有文件上传到服务器
   - 配置 Nginx 或 Apache

3. **Nginx 配置示例**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       root /path/to/dist;
       index index.html;
       
       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

## 自定义域名

### GitHub Pages
- 在仓库设置中添加自定义域名
- 配置 DNS 记录

### Vercel
- 在项目设置中添加自定义域名
- 自动配置 SSL 证书

### Netlify
- 在站点设置中添加自定义域名
- 自动配置 SSL 证书

## 注意事项

1. **环境变量**：如果有环境变量，需要在部署平台中配置
2. **路由问题**：确保配置了正确的重写规则（SPA 应用）
3. **HTTPS**：所有现代部署平台都自动提供 HTTPS
4. **CDN**：Vercel 和 Netlify 都提供全球 CDN

## 推荐方案

- **个人项目**：GitHub Pages（免费、简单）
- **企业项目**：Vercel 或 Netlify（功能丰富、性能好）
- **传统部署**：自建服务器（完全控制） 