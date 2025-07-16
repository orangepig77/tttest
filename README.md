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
├── vite.config.js         # Vite 配置
├── tailwind.config.js     # Tailwind 配置
├── postcss.config.js      # PostCSS 配置
└── README.md              # 项目说明
```

## 功能特性

### 响应式设计
- 移动端优先的设计理念
- 断点：sm (640px), md (768px), lg (1024px), xl (1280px)
- 流畅的布局适配

### 表单验证
- 实时表单验证
- 自定义验证规则
- 错误提示显示
- 验证码功能

### 交互体验
- 平滑的过渡动画
- 悬停效果
- 加载状态
- 用户反馈

### 性能优化
- 组件懒加载
- 图片优化
- 代码分割
- 缓存策略

## 自定义配置

### 主题颜色

在 `tailwind.config.js` 中修改主题颜色：

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',
        100: '#dbeafe',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
      }
    }
  }
}
```

### 添加新页面

1. 在 `src/views/` 目录下创建新的 Vue 组件
2. 在 `src/main.js` 中添加路由配置
3. 在 `src/App.vue` 中添加导航链接

## 部署说明

### 静态部署

构建项目后，将 `dist` 目录部署到任何静态文件服务器。

### Nginx 配置示例

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

## 浏览器支持

- Chrome >= 87
- Firefox >= 78
- Safari >= 14
- Edge >= 88

## 开发指南

### 代码规范

- 使用 Vue 3 Composition API
- 遵循 ESLint 规则
- 组件命名使用 PascalCase
- 文件命名使用 kebab-case

### 组件开发

- 使用 `<script setup>` 语法
- 响应式数据使用 `ref` 和 `reactive`
- 计算属性使用 `computed`
- 生命周期使用 `onMounted` 等

### 样式开发

- 优先使用 Tailwind CSS 类名
- 自定义样式使用 `@layer` 指令
- 响应式设计使用 Tailwind 断点
- 动画使用 CSS transitions

## 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 联系方式

- 项目维护者：[您的姓名]
- 邮箱：[your-email@example.com]
- 项目地址：[项目 GitHub 地址]

---

感谢使用我们的企业官网模板！如果您有任何问题或建议，请随时联系我们。 