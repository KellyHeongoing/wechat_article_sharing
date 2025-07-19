# 静态版本部署说明

这是城市规划分享网站的静态HTML版本，可以直接部署到任何静态网站托管服务上。

## 文件结构

```
static/
├── index.html      # 主页面
├── styles.css      # 样式文件
├── script.js       # JavaScript功能
└── README.md       # 说明文档
```

## 快速部署

### 方案一：直接上传到GitHub Pages

1. 创建GitHub仓库
2. 将 `static` 文件夹中的所有文件上传到仓库根目录
3. 在仓库设置中启用GitHub Pages
4. 选择部署分支（通常是main分支）

### 方案二：使用Netlify

1. 注册Netlify账号
2. 将文件拖拽到Netlify部署区域
3. 自动部署完成

### 方案三：使用Vercel

1. 注册Vercel账号
2. 创建新项目
3. 上传文件或连接GitHub仓库
4. 自动部署

### 方案四：使用Surge.sh

1. 安装Surge：
   ```bash
   npm install -g surge
   ```

2. 在static目录下运行：
   ```bash
   surge
   ```

3. 按提示设置域名

## 自定义配置

### 修改项目数据

编辑 `script.js` 文件中的 `projects` 数组来添加或修改项目：

```javascript
const projects = [
    {
        id: 1,
        title: '项目标题',
        category: '项目分类',
        location: '项目地点',
        date: '2024-01',
        image: '图片URL',
        description: '项目描述',
        tags: ['标签1', '标签2']
    }
    // 添加更多项目...
];
```

### 修改团队信息

编辑 `index.html` 文件中的团队部分：

```html
<div class="team-member">
    <div class="member-avatar">
        <img src="头像URL" alt="成员姓名">
    </div>
    <div class="member-info">
        <h3>成员姓名</h3>
        <div class="member-role">职位</div>
        <p>个人描述</p>
    </div>
</div>
```

### 修改联系信息

编辑 `index.html` 文件中的联系信息部分：

```html
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <div>
        <h3>邮箱</h3>
        <p>your-email@example.com</p>
    </div>
</div>
```

### 修改样式

编辑 `styles.css` 文件来自定义：

- 颜色主题
- 字体样式
- 布局结构
- 动画效果

## 功能特性

- ✅ 响应式设计，支持移动端
- ✅ 项目搜索和筛选
- ✅ 平滑滚动导航
- ✅ 现代化UI设计
- ✅ 键盘快捷键支持（Ctrl+K搜索，ESC清除）
- ✅ 性能优化（防抖搜索）
- ✅ 动画效果

## 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge

## 性能优化

- 使用CDN加载Font Awesome图标
- 图片使用Unsplash CDN
- CSS和JavaScript文件压缩
- 防抖搜索减少不必要的渲染

## 注意事项

1. 确保所有图片URL可访问
2. 检查Font Awesome CDN链接是否正常
3. 测试所有交互功能
4. 验证移动端显示效果

## 故障排除

### 图片不显示
- 检查图片URL是否正确
- 确认网络连接正常
- 考虑使用本地图片

### 样式不生效
- 检查CSS文件路径
- 清除浏览器缓存
- 确认CSS语法正确

### 功能不正常
- 检查JavaScript控制台错误
- 确认script.js文件正确加载
- 验证HTML结构完整

## 联系支持

如有问题，请检查：
1. 浏览器控制台错误信息
2. 网络连接状态
3. 文件路径是否正确

## 更新日志

### v1.0.0
- 初始版本发布
- 完整的项目展示功能
- 响应式设计
- 搜索和筛选功能 