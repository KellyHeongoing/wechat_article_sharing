import { Users, Globe, Award, Mail, Phone, MapPin } from 'lucide-react'
import './About.css'

const About = () => {
  const teamMembers = [
    {
      name: '张明',
      role: '城市规划师',
      description: '拥有15年城市规划经验，专注于城市更新和可持续发展',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: '李华',
      role: '景观设计师',
      description: '专注于生态景观设计，致力于创造人与自然和谐的空间',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: '王强',
      role: '交通规划师',
      description: '专注于智能交通系统规划，推动城市交通可持续发展',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    }
  ]

  const stats = [
    { number: '50+', label: '项目案例' },
    { number: '10+', label: '专业团队' },
    { number: '5+', label: '年经验' },
    { number: '100%', label: '用户满意度' }
  ]

  return (
    <div className="about-page">
      <div className="page-header">
        <h1>关于我们</h1>
        <p>专业的城市规划与设计项目分享平台</p>
      </div>

      {/* 平台介绍 */}
      <section className="platform-intro">
        <div className="intro-content">
          <h2>平台使命</h2>
          <p>
            我们致力于为城市规划与设计领域的专业人士提供一个高质量的分享平台。
            通过汇聚全球优秀项目案例，促进知识交流，推动行业发展，为创造更美好的城市空间贡献力量。
          </p>
          
          <div className="mission-points">
            <div className="mission-point">
              <Globe size={24} />
              <div>
                <h3>全球视野</h3>
                <p>汇集国内外优秀城市规划案例，提供多元化的设计思路和解决方案</p>
              </div>
            </div>
            <div className="mission-point">
              <Users size={24} />
              <div>
                <h3>专业交流</h3>
                <p>搭建专业人才交流平台，促进经验分享和知识传播</p>
              </div>
            </div>
            <div className="mission-point">
              <Award size={24} />
              <div>
                <h3>品质保证</h3>
                <p>严格筛选项目内容，确保专业性和实用性，为用户提供有价值的信息</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 数据统计 */}
      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 团队介绍 */}
      <section className="team-section">
        <h2>核心团队</h2>
        <p className="section-description">
          我们的团队由经验丰富的城市规划与设计专家组成，
          致力于为用户提供最优质的内容和服务。
        </p>
        
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <div className="member-avatar">
                <img src={member.avatar} alt={member.name} />
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <div className="member-role">{member.role}</div>
                <p>{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 联系我们 */}
      <section className="contact-section">
        <h2>联系我们</h2>
        <p className="section-description">
          如果您有任何问题或建议，欢迎与我们联系。
        </p>
        
        <div className="contact-info">
          <div className="contact-item">
            <Mail size={24} />
            <div>
              <h3>邮箱</h3>
              <p>contact@urbanplanning.com</p>
            </div>
          </div>
          <div className="contact-item">
            <Phone size={24} />
            <div>
              <h3>电话</h3>
              <p>+86 400-123-4567</p>
            </div>
          </div>
          <div className="contact-item">
            <MapPin size={24} />
            <div>
              <h3>地址</h3>
              <p>北京市朝阳区建国门外大街1号</p>
            </div>
          </div>
        </div>
      </section>

      {/* 加入我们 */}
      <section className="join-section">
        <div className="join-content">
          <h2>加入我们</h2>
          <p>
            我们欢迎更多城市规划与设计领域的专业人士加入我们的平台，
            一起分享优秀的项目案例，推动行业发展。
          </p>
          <button className="join-btn">申请加入</button>
        </div>
      </section>
    </div>
  )
}

export default About 