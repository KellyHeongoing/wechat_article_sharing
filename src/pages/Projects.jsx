import { useState } from 'react'
import { Search, Filter, ArrowRight, Calendar, MapPin } from 'lucide-react'
import './Projects.css'

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('全部')

  const categories = ['全部', '城市设计', '生态规划', '文化保护', '交通规划', '景观设计']

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
  ]

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === '全部' || project.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="projects-page">
      <div className="page-header">
        <h1>项目展示</h1>
        <p>探索城市规划和设计领域的优秀项目案例</p>
      </div>

      {/* 搜索和筛选 */}
      <div className="search-filter">
        <div className="search-box">
          <Search size={20} />
          <input
            type="text"
            placeholder="搜索项目..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="filter-box">
          <Filter size={20} />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      {/* 项目统计 */}
      <div className="projects-stats">
        <span>共找到 {filteredProjects.length} 个项目</span>
      </div>

      {/* 项目列表 */}
      <div className="projects-grid">
        {filteredProjects.map(project => (
          <div key={project.id} className="project-item">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-category">{project.category}</div>
            </div>
            
            <div className="project-info">
              <h3>{project.title}</h3>
              
              <div className="project-meta">
                <div className="meta-item">
                  <MapPin size={16} />
                  <span>{project.location}</span>
                </div>
                <div className="meta-item">
                  <Calendar size={16} />
                  <span>{project.date}</span>
                </div>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              
              <button className="read-more-btn">
                阅读详情 <ArrowRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="no-results">
          <p>没有找到匹配的项目</p>
          <button onClick={() => {
            setSearchTerm('')
            setSelectedCategory('全部')
          }}>
            清除筛选条件
          </button>
        </div>
      )}
    </div>
  )
}

export default Projects 