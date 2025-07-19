# 部署指南

## 本地开发环境设置

### 1. 安装Node.js
首先需要安装Node.js（包含npm）：

**Windows用户：**
1. 访问 https://nodejs.org/
2. 下载并安装LTS版本
3. 安装完成后，打开命令提示符或PowerShell验证：
   ```bash
   node --version
   npm --version
   ```

**macOS用户：**
```bash
# 使用Homebrew安装
brew install node

# 或使用官方安装包
# 访问 https://nodejs.org/ 下载安装
```

**Linux用户：**
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install nodejs npm

# CentOS/RHEL
sudo yum install nodejs npm
```

### 2. 安装项目依赖
```bash
npm install
```

### 3. 启动开发服务器
```bash
npm run dev
```

访问 http://localhost:3000 查看网站

## 免费部署方案

### 方案一：GitHub Pages（推荐）

**优点：**
- 完全免费
- 自动部署
- 支持自定义域名
- 无需信用卡

**步骤：**
1. 创建GitHub账号
2. 创建新仓库，命名为 `urban-planning-sharing`
3. 将项目代码上传到仓库
4. 在仓库设置中找到 "Pages"
5. 选择 "Deploy from a branch"
6. 选择 `main` 分支和 `/ (root)` 文件夹
7. 点击 "Save"

**自定义域名（可选）：**
1. 购买域名（如阿里云、腾讯云等）
2. 在GitHub Pages设置中添加自定义域名
3. 在域名提供商处添加CNAME记录

### 方案二：Vercel

**优点：**
- 完全免费
- 自动部署
- 全球CDN
- 支持自定义域名

**步骤：**
1. 访问 https://vercel.com/
2. 使用GitHub账号登录
3. 点击 "New Project"
4. 导入GitHub仓库
5. 保持默认设置，点击 "Deploy"
6. 等待部署完成

### 方案三：Netlify

**优点：**
- 完全免费
- 自动部署
- 支持表单处理
- 支持自定义域名

**步骤：**
1. 访问 https://netlify.com/
2. 使用GitHub账号登录
3. 点击 "New site from Git"
4. 选择GitHub仓库
5. 设置构建命令：`npm run build`
6. 设置发布目录：`dist`
7. 点击 "Deploy site"

### 方案四：Surge.sh

**优点：**
- 简单快速
- 命令行部署
- 完全免费

**步骤：**
1. 安装Surge：
   ```bash
   npm install -g surge
   ```
2. 构建项目：
   ```bash
   npm run build
   ```
3. 部署：
   ```bash
   cd dist
   surge
   ```
4. 按提示设置域名和密码

## 部署后配置

### 1. 自定义域名设置

**GitHub Pages：**
1. 在仓库设置 > Pages 中添加自定义域名
2. 在域名提供商处添加CNAME记录：
   ```
   类型: CNAME
   名称: @ 或 www
   值: yourusername.github.io
   ```

**Vercel：**
1. 在项目设置 > Domains 中添加域名
2. 按照提示配置DNS记录

**Netlify：**
1. 在站点设置 > Domain management 中添加域名
2. 按照提示配置DNS记录

### 2. HTTPS配置
所有推荐的平台都自动提供HTTPS证书，无需额外配置。

### 3. 性能优化

**启用Gzip压缩：**
- GitHub Pages：自动启用
- Vercel：自动启用
- Netlify：自动启用

**CDN加速：**
- 所有平台都提供全球CDN，自动优化访问速度

## 维护和更新

### 更新网站内容
1. 修改本地代码
2. 提交到GitHub仓库
3. 平台会自动重新部署

### 添加新项目
1. 编辑 `src/pages/Projects.jsx` 文件
2. 在 `projects` 数组中添加新项目
3. 提交并推送代码

### 修改样式
1. 编辑相应的CSS文件
2. 提交并推送代码

## 故障排除

### 常见问题

**1. 构建失败**
- 检查Node.js版本（建议使用16+）
- 删除 `node_modules` 文件夹，重新运行 `npm install`
- 检查控制台错误信息

**2. 页面显示空白**
- 检查浏览器控制台是否有JavaScript错误
- 确认路由配置正确
- 检查构建输出是否正常

**3. 样式不生效**
- 清除浏览器缓存
- 检查CSS文件路径是否正确
- 确认CSS语法正确

**4. 图片不显示**
- 检查图片URL是否正确
- 确认图片文件存在
- 考虑使用CDN图片服务

## 联系支持

如果在部署过程中遇到问题，可以：

1. 查看平台官方文档
2. 在GitHub Issues中提问
3. 联系技术支持

## 成本估算

**完全免费方案：**
- 域名：免费（使用平台提供的子域名）
- 托管：免费
- SSL证书：免费
- CDN：免费

**自定义域名方案：**
- 域名：约50-100元/年
- 其他服务：免费

总计：0-100元/年 