// 网站使用情况监控脚本
class WebsiteMonitor {
    constructor() {
        this.startTime = Date.now();
        this.pageViews = 0;
        this.uniqueVisitors = this.getUniqueVisitors();
        this.init();
    }

    init() {
        // 记录页面访问
        this.recordPageView();
        
        // 记录用户行为
        this.trackUserBehavior();
        
        // 性能监控
        this.monitorPerformance();
        
        // 错误监控
        this.monitorErrors();
    }

    // 记录页面访问
    recordPageView() {
        this.pageViews++;
        this.saveToLocalStorage('pageViews', this.pageViews);
        
        // 发送到Google Analytics（如果已配置）
        if (typeof gtag !== 'undefined') {
            gtag('event', 'page_view', {
                page_title: document.title,
                page_location: window.location.href
            });
        }
    }

    // 获取独立访客数
    getUniqueVisitors() {
        let visitors = localStorage.getItem('uniqueVisitors');
        if (!visitors) {
            visitors = 1;
            localStorage.setItem('uniqueVisitors', visitors);
        } else {
            visitors = parseInt(visitors) + 1;
            localStorage.setItem('uniqueVisitors', visitors);
        }
        return visitors;
    }

    // 跟踪用户行为
    trackUserBehavior() {
        // 跟踪点击事件
        document.addEventListener('click', (e) => {
            const target = e.target.closest('a, button, .nav-link');
            if (target) {
                this.trackEvent('click', {
                    element: target.tagName,
                    text: target.textContent.trim(),
                    href: target.href || 'N/A'
                });
            }
        });

        // 跟踪搜索行为
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                if (e.target.value.length > 2) {
                    this.trackEvent('search', {
                        query: e.target.value,
                        length: e.target.value.length
                    });
                }
            });
        }

        // 跟踪滚动行为
        let scrollTimeout;
        window.addEventListener('scroll', () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
                this.trackEvent('scroll', {
                    percent: scrollPercent
                });
            }, 1000);
        });
    }

    // 性能监控
    monitorPerformance() {
        window.addEventListener('load', () => {
            const loadTime = Date.now() - this.startTime;
            this.trackEvent('performance', {
                loadTime: loadTime,
                userAgent: navigator.userAgent,
                screenSize: `${screen.width}x${screen.height}`
            });
        });
    }

    // 错误监控
    monitorErrors() {
        window.addEventListener('error', (e) => {
            this.trackEvent('error', {
                message: e.message,
                filename: e.filename,
                lineno: e.lineno,
                colno: e.colno
            });
        });
    }

    // 跟踪事件
    trackEvent(eventName, parameters = {}) {
        // 保存到本地存储
        const events = JSON.parse(localStorage.getItem('events') || '[]');
        events.push({
            event: eventName,
            parameters: parameters,
            timestamp: new Date().toISOString()
        });
        
        // 只保留最近100个事件
        if (events.length > 100) {
            events.splice(0, events.length - 100);
        }
        
        localStorage.setItem('events', JSON.stringify(events));

        // 发送到Google Analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, parameters);
        }
    }

    // 保存到本地存储
    saveToLocalStorage(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.warn('无法保存到本地存储:', e);
        }
    }

    // 获取统计数据
    getStats() {
        return {
            pageViews: this.pageViews,
            uniqueVisitors: this.uniqueVisitors,
            sessionDuration: Date.now() - this.startTime,
            events: JSON.parse(localStorage.getItem('events') || '[]')
        };
    }

    // 导出统计数据
    exportStats() {
        const stats = this.getStats();
        const dataStr = JSON.stringify(stats, null, 2);
        const dataBlob = new Blob([dataStr], {type: 'application/json'});
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = `website-stats-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
    }
}

// 初始化监控
const monitor = new WebsiteMonitor();

// 在控制台中可以访问监控数据
window.websiteMonitor = monitor;

// 添加监控面板（仅在开发环境显示）
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('网站监控已启动');
    console.log('访问 window.websiteMonitor.getStats() 查看统计数据');
    console.log('访问 window.websiteMonitor.exportStats() 导出数据');
} 