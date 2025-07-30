# 企业官网项目

一个基于 Vue3 和 Tailwind CSS 构建的现代化企业官网，具有响应式设计和完整的页面功能。

## 项目特性

- 🎨 **现代化设计** - 采用 Tailwind CSS 构建美观的响应式界面
- 📱 **移动端适配** - 完美支持各种设备尺寸
- ⚡ **高性能** - 基于 Vue3 Composition API 构建
- 🚀 **快速开发** - 使用 Vite 作为构建工具
- 🎯 **SEO友好** - 优化的页面结构和元数据

## 页面结构

### 首页 (`/`)
- 自动轮播图展示
- 服务卡片展示
- 数据统计展示
- 客户案例展示
- 联系引导

### 产品中心 (`/products`)
- 三级分类产品展示
- 产品筛选功能
- 产品特色介绍
- 客户评价展示

### 关于我们 (`/about`)
- 公司简介
- 核心价值观
- 团队成员卡片
- 资质证书墙
- 发展历程时间线

### 联系我们 (`/contact`)
- 联系信息展示
- 在线咨询表单
- 表单验证功能
- 验证码功能
- 常见问题解答

## 技术栈

- **前端框架**: Vue 3.3.4
- **路由管理**: Vue Router 4.2.4
- **样式框架**: Tailwind CSS 3.3.3
- **图标库**: Heroicons
- **构建工具**: Vite 4.4.9
- **开发语言**: JavaScript

## 快速开始

### 环境要求

- Node.js >= 16.0.0
- npm >= 8.0.0

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

项目将在 `http://localhost:3000` 启动

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 项目结构

```
jrzizhi/
├── public/                 # 静态资源
├── src/
│   ├── views/             # 页面组件
│   │   ├── Home.vue       # 首页
│   │   ├── Products.vue   # 产品中心
│   │   ├── About.vue      # 关于我们
│   │   └── Contact.vue    # 联系我们
│   ├── App.vue            # 主应用组件
│   ├── main.js            # 应用入口
│   └── style.css          # 全局样式
├── index.html             # HTML 模板
├── package.json           # 项目配置
```

## 部署指南

### Vercel部署（推荐）

1. 注册 [Vercel](https://vercel.com)
2. 连接GitHub仓库
3. 自动部署，获得域名

### 其他部署选项

- **Netlify**: 免费、功能丰富
- **GitHub Pages**: 简单易用
- **传统服务器**: 完全控制

## SEO优化

项目已包含完整的SEO优化配置：

- ✅ Meta标签优化
- ✅ 结构化数据
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Open Graph标签
- ✅ 百度统计代码

## 联系信息

- 电话：18156018435
- 邮箱：contact@your-domain.com

## 许可证

MIT License
