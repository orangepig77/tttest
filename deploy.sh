#!/bin/bash

# 企业官网部署脚本
echo "开始部署企业官网..."

# 1. 安装依赖
echo "安装依赖..."
npm install

# 2. 构建项目
echo "构建项目..."
npm run build

# 3. 检查构建结果
if [ -d "dist" ]; then
    echo "构建成功！"
    echo "构建文件位于 dist/ 目录"
    
    # 4. 显示文件大小
    echo "构建文件大小："
    du -sh dist/
    
    # 5. 检查关键文件
    echo "检查关键文件："
    ls -la dist/
    
    echo "部署准备完成！"
    echo ""
    echo "下一步操作："
    echo "1. 将 dist/ 目录中的文件上传到您的服务器"
    echo "2. 配置域名和SSL证书"
    echo "3. 在百度站长平台提交网站"
    echo "4. 提交sitemap.xml到搜索引擎"
    
else
    echo "构建失败！请检查错误信息。"
    exit 1
fi 