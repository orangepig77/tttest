# 企业官网部署检查清单

## 🚀 部署前准备

### ✅ 已完成项目
- [x] Vue 3 + Vite 项目搭建
- [x] 响应式页面设计
- [x] SEO 基础配置
- [x] 百度站长平台验证代码
- [x] 结构化数据配置
- [x] Sitemap.xml 生成
- [x] Robots.txt 配置
- [x] 项目构建成功

### 🔄 需要完成的步骤

## 1. 百度统计配置
- [ ] 访问 https://tongji.baidu.com
- [ ] 注册并创建网站统计
- [ ] 获取统计代码
- [ ] 替换 `index.html` 中的 `YOUR_BAIDU_TONGJI_CODE`

## 2. 选择部署平台

### 方案A：Vercel（推荐）
- [ ] 注册 https://vercel.com
- [ ] 连接 GitHub 仓库
- [ ] 配置构建命令：`npm run build`
- [ ] 配置输出目录：`dist`
- [ ] 自动部署，获得域名

### 方案B：Netlify
- [ ] 注册 https://netlify.com
- [ ] 连接 GitHub 仓库
- [ ] 配置构建命令：`npm run build`
- [ ] 配置发布目录：`dist`
- [ ] 自动部署

### 方案C：GitHub Pages
- [ ] 在仓库设置中启用 GitHub Pages
- [ ] 选择部署分支（main）
- [ ] 配置构建工作流
- [ ] 获得域名：`https://用户名.github.io/仓库名`

## 3. 自定义域名配置
- [ ] 购买域名（推荐：阿里云、腾讯云）
- [ ] 在部署平台配置自定义域名
- [ ] 配置 DNS 解析
- [ ] 等待 DNS 生效（通常 24-48 小时）

## 4. SSL 证书配置
- [ ] Vercel/Netlify：自动配置
- [ ] 自建服务器：使用 Let's Encrypt 免费证书

## 5. 百度收录优化
- [ ] 在百度站长平台提交网站
- [ ] 提交 sitemap.xml
- [ ] 提交网站 URL
- [ ] 等待收录（通常 1-4 周）

## 6. 内容优化
- [ ] 添加真实公司信息
- [ ] 上传公司 Logo 和图片
- [ ] 完善产品信息
- [ ] 添加真实联系方式
- [ ] 优化页面加载速度

## 7. 监控和维护
- [ ] 配置百度统计监控
- [ ] 设置 Google Search Console
- [ ] 定期更新网站内容
- [ ] 监控网站性能

## 📋 部署命令

```bash
# 1. 构建项目
npm run build

# 2. 检查构建结果
ls -la dist/

# 3. 本地预览
npm run preview
```

## 🔗 重要链接

- **百度站长平台**：https://ziyuan.baidu.com
- **百度统计**：https://tongji.baidu.com
- **Vercel**：https://vercel.com
- **Netlify**：https://netlify.com
- **Google Search Console**：https://search.google.com/search-console

## 📞 技术支持

如有问题，请联系：
- 电话：18156018435
- 邮箱：contact@your-domain.com

---

**注意**：部署完成后，请及时更新 `index.html` 中的网站 URL 和联系信息。 