import { ArrowRight, Users, Globe, Award } from 'lucide-react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  const features = [
    {
      icon: Users,
      title: '专业团队',
      description: '汇聚城市规划与设计领域的专业人才，分享最新项目成果'
    },
    {
      icon: Globe,
      title: '全球视野',
      description: '涵盖国内外优秀城市规划案例，提供多元化的设计思路'
    },
    {
      icon: Award,
      title: '精品内容',
      description: '精选高质量项目文章，确保内容的专业性和实用性'
    }
  ]

  const recentProjects = [
    {
      id: 1,
      title: '深圳湾超级总部基地规划',
      category: '城市设计',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=250&fit=crop',
      description: '探索未来城市发展模式，打造国际化商务中心'
    },
    {
      id: 2,
      title: '成都天府新区生态规划',
      category: '生态规划',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop',
      description: '人与自然和谐共生的现代城市典范'
    },
    {
      id: 3,
      title: '杭州西湖文化景观保护',
      category: '文化保护',
      image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400&h=250&fit=crop',
      description: '传统文化与现代城市发展的完美融合'
    }
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            探索城市之美
            <br />
            <span className="highlight">分享规划智慧</span>
          </h1>
          <p className="hero-description">
            专业的城市规划与设计项目分享平台，汇聚全球优秀案例，
            为城市发展提供创新思路和解决方案。
          </p>
          <div className="hero-actions">
            <Link to="/projects" className="btn btn-primary">
              浏览项目
              <ArrowRight size={20} />
            </Link>
            <Link to="/about" className="btn btn-secondary">
              了解更多
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">
            <Globe size={80} />
            <p>城市规划展示</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2 className="section-title">平台特色</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <feature.icon size={40} />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="recent-projects">
        <div className="section-header">
          <h2 className="section-title">最新项目</h2>
          <Link to="/projects" className="view-all">
            查看全部 <ArrowRight size={16} />
          </Link>
        </div>
        <div className="projects-grid">
          {recentProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-category">{project.category}</div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <Link to={`/projects/${project.id}`} className="read-more">
                  阅读详情 <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home 