# GitHub上传清单

## 需要上传的文件和文件夹：

### ✅ 核心项目文件
- [x] `package.json` - 项目配置
- [x] `package-lock.json` - 依赖锁定文件
- [x] `vite.config.js` - Vite配置
- [x] `tailwind.config.js` - Tailwind CSS配置
- [x] `postcss.config.js` - PostCSS配置
- [x] `index.html` - 主HTML文件（已优化SEO）
- [x] `README.md` - 项目说明
- [x] `DEPLOYMENT.md` - 部署指南
- [x] `DEPLOYMENT_GUIDE.md` - 完整部署指南
- [x] `deploy.sh` - 部署脚本

### ✅ 源代码文件夹
- [x] `src/` - Vue.js源代码
- [x] `public/` - 静态资源（包含SEO文件）

### ✅ SEO优化文件
- [x] `public/sitemap.xml` - 网站地图
- [x] `public/robots.txt` - 搜索引擎爬虫指南

### ❌ 不需要上传的文件夹
- [x] `node_modules/` - 依赖包（会自动安装）
- [x] `dist/` - 构建输出（会自动生成）
- [x] `.git/` - Git版本控制文件

## 上传步骤：

1. **访问GitHub仓库**：
   - 打开 https://github.com/orangepig77/company_web

2. **上传文件**：
   - 点击 "Add file" → "Upload files"
   - 选择以下文件和文件夹：
     - `package.json`
     - `package-lock.json`
     - `vite.config.js`
     - `tailwind.config.js`
     - `postcss.config.js`
     - `index.html`
     - `README.md`
     - `DEPLOYMENT.md`
     - `DEPLOYMENT_GUIDE.md`
     - `deploy.sh`
     - `src/` 文件夹
     - `public/` 文件夹

3. **提交更改**：
   - 添加提交信息："优化SEO配置，添加部署指南"
   - 选择 "Commit directly to the main branch"
   - 点击 "Commit changes"

## 注意事项：
- 确保不要上传 `node_modules/` 和 `dist/` 文件夹
- 上传后Vercel会自动检测到Vue.js项目并开始部署 