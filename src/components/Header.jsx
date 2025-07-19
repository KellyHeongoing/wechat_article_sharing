import { Link, useLocation } from 'react-router-dom'
import { Building2, Map, Info } from 'lucide-react'
import './Header.css'

const Header = () => {
  const location = useLocation()

  const navItems = [
    { path: '/', label: '首页', icon: Building2 },
    { path: '/projects', label: '项目展示', icon: Map },
    { path: '/about', label: '关于我们', icon: Info }
  ]

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Building2 size={32} />
          <h1>城市规划分享</h1>
        </div>
        
        <nav className="nav">
          {navItems.map(({ path, label, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              className={`nav-link ${location.pathname === path ? 'active' : ''}`}
            >
              <Icon size={20} />
              <span>{label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header 