// 项目数据
const projects = [
    {
        id: 1,
        title: '深圳湾超级总部基地规划',
        category: '城市设计',
        location: '深圳',
        date: '2024-01',
        image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=250&fit=crop',
        description: '探索未来城市发展模式，打造国际化商务中心。项目占地面积约117公顷，规划建设成为综合性城市中心。',
        tags: ['商务中心', '城市更新', '可持续发展']
    },
    {
        id: 2,
        title: '成都天府新区生态规划',
        category: '生态规划',
        location: '成都',
        date: '2023-12',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop',
        description: '人与自然和谐共生的现代城市典范。通过生态廊道建设、湿地保护、绿色基础设施规划，构建生态友好的城市空间结构。',
        tags: ['生态廊道', '湿地保护', '绿色基础设施']
    },
    {
        id: 3,
        title: '杭州西湖文化景观保护',
        category: '文化保护',
        location: '杭州',
        date: '2023-11',
        image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400&h=250&fit=crop',
        description: '传统文化与现代城市发展的完美融合。通过文化景观保护规划，传承历史文脉，提升城市文化品质，实现文化遗产的活态保护。',
        tags: ['文化遗产', '历史保护', '文化传承']
    },
    {
        id: 4,
        title: '北京大兴国际机场周边规划',
        category: '交通规划',
        location: '北京',
        date: '2023-10',
        image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=250&fit=crop',
        description: '以机场为核心的交通枢纽规划，构建高效便捷的综合交通体系。通过多式联运、智能交通系统，提升区域交通可达性。',
        tags: ['交通枢纽', '多式联运', '智能交通']
    },
    {
        id: 5,
        title: '上海黄浦江滨江景观设计',
        category: '景观设计',
        location: '上海',
        date: '2023-09',
        image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop',
        description: '打造世界级滨水公共空间，提升城市品质。通过滨江绿道、观景平台、文化设施建设，创造市民喜爱的休闲场所。',
        tags: ['滨水空间', '公共空间', '城市品质']
    },
    {
        id: 6,
        title: '西安古城墙保护与更新',
        category: '文化保护',
        location: '西安',
        date: '2023-08',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop',
        description: '古都文化的传承与创新。通过城墙保护、周边环境整治、文化展示设施建设，展现古都风貌，提升城市文化魅力。',
        tags: ['古城保护', '文化展示', '环境整治']
    }
];

// DOM元素
const projectsGrid = document.getElementById('projectsGrid');
const navLinks = document.querySelectorAll('.nav-link');



// 初始化
document.addEventListener('DOMContentLoaded', function() {
    renderProjects();
    setupEventListeners();
    setupSmoothScrolling();
});

// 设置事件监听器
function setupEventListeners() {
    // 导航链接点击
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // 如果是外部链接（包含.html或http），不阻止默认行为
            if (href.includes('.html') || href.startsWith('http')) {
                return;
            }
            
            // 如果是内部锚点链接，阻止默认行为并滚动
            e.preventDefault();
            const targetId = href.substring(1);
            scrollToSection(targetId);
            updateActiveNavLink(this);
        });
    });

    // 加入我们按钮
    const joinBtn = document.querySelector('.join-btn');
    if (joinBtn) {
        joinBtn.addEventListener('click', function() {
            alert('感谢您的关注！我们会尽快与您联系。');
        });
    }
}

// 渲染项目列表 - 首页只显示6个项目
function renderProjects() {
    // 渲染项目卡片
    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-item">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
                <div class="project-category">${project.category}</div>
            </div>
            
            <div class="project-info">
                <h3>${project.title}</h3>
                
                <div class="project-meta">
                    <div class="meta-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${project.location}</span>
                    </div>
                    <div class="meta-item">
                        <i class="fas fa-calendar"></i>
                        <span>${project.date}</span>
                    </div>
                </div>
                
                <p class="project-description">${project.description}</p>
                
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                
                <button class="read-more-btn" onclick="showProjectDetail(${project.id})">
                    阅读详情 <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
    `).join('');
}



// 显示项目详情
function showProjectDetail(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (project) {
        alert(`项目详情：${project.title}\n\n${project.description}\n\n标签：${project.tags.join(', ')}`);
    }
}

// 平滑滚动到指定区域
function setupSmoothScrolling() {
    // 检查浏览器是否支持平滑滚动
    if ('scrollBehavior' in document.documentElement.style) {
        document.documentElement.style.scrollBehavior = 'smooth';
    }
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// 更新活动导航链接
function updateActiveNavLink(activeLink) {
    navLinks.forEach(link => link.classList.remove('active'));
    activeLink.classList.add('active');
}

// 滚动时更新导航链接状态
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// 添加一些动画效果
function addAnimationEffects() {
    // 为项目卡片添加进入动画
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // 观察所有项目卡片
    document.querySelectorAll('.project-item, .feature-card, .team-member, .stat-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// 页面加载完成后添加动画效果
window.addEventListener('load', addAnimationEffects);

