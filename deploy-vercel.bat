@echo off
echo ========================================
echo 企业官网 Vercel 部署脚本
echo ========================================

echo.
echo 1. 构建项目...
call npm run build
if %errorlevel% neq 0 (
    echo 构建失败！请检查错误信息。
    pause
    exit /b 1
)

echo.
echo 2. 检查构建结果...
if exist dist\index.html (
    echo ✅ 构建成功！
    echo 📁 构建文件位于 dist/ 目录
) else (
    echo ❌ 构建失败！未找到 dist/index.html
    pause
    exit /b 1
)

echo.
echo 3. 提交代码到 Git...
git add .
git commit -m "更新网站内容 - %date% %time%"
if %errorlevel% neq 0 (
    echo 警告：Git 提交失败，但继续部署...
)

echo.
echo ========================================
echo 🚀 部署准备完成！
echo ========================================
echo.
echo 下一步操作：
echo 1. 访问 https://github.com 创建仓库
echo 2. 运行以下命令上传代码：
echo    git remote add origin https://github.com/YOUR_USERNAME/enterprise-website.git
echo    git push -u origin main
echo 3. 访问 https://vercel.com 部署项目
echo 4. 配置自定义域名
echo 5. 在百度站长平台验证网站
echo.
echo 📋 详细步骤请查看 VERCEL_DEPLOYMENT.md
echo.
pause 