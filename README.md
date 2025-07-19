# 城市规划与设计项目分享网站

一个专业的城市规划与设计项目分享平台，为行业专业人士提供高质量的项目案例展示和交流平台。

## 功能特色

- 🏙️ **项目展示**: 展示城市规划和设计领域的优秀项目案例
- 🔍 **智能搜索**: 支持按关键词、分类等条件筛选项目
- 📱 **响应式设计**: 完美适配桌面端和移动端
- 🎨 **现代UI**: 采用现代化的设计风格，用户体验优秀
- 🌐 **多页面结构**: 首页、项目展示、关于我们等完整页面

## 技术栈

- **前端框架**: React 18
- **构建工具**: Vite
- **路由**: React Router DOM
- **图标**: Lucide React
- **样式**: CSS3 (Grid, Flexbox, 渐变等)

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:3000 查看网站

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
src/
├── components/          # 可复用组件
│   ├── Header.jsx      # 网站头部导航
│   └── Header.css
├── pages/              # 页面组件
│   ├── Home.jsx        # 首页
│   ├── Home.css
│   ├── Projects.jsx    # 项目展示页
│   ├── Projects.css
│   ├── About.jsx       # 关于我们页
│   └── About.css
├── App.jsx             # 主应用组件
├── App.css
├── main.jsx            # 应用入口
└── index.css           # 全局样式
```

## 部署说明

本项目可以部署到以下免费平台：

### GitHub Pages
1. 将代码推送到GitHub仓库
2. 在仓库设置中启用GitHub Pages
3. 选择部署分支（通常是main分支）

### Vercel
1. 注册Vercel账号
2. 导入GitHub仓库
3. 自动部署，无需额外配置

### Netlify
1. 注册Netlify账号
2. 连接GitHub仓库
3. 设置构建命令：`npm run build`
4. 设置发布目录：`dist`

## 自定义配置

### 修改项目数据
在 `src/pages/Projects.jsx` 中修改 `projects` 数组来添加或修改项目数据。

### 修改团队信息
在 `src/pages/About.jsx` 中修改 `teamMembers` 数组来更新团队信息。

### 修改样式
所有样式文件都使用CSS，可以根据需要修改颜色、布局等。

## 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge

## 许可证

MIT License

## 联系方式

如有问题或建议，请联系：contact@urbanplanning.com 