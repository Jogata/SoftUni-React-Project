import { Link } from 'react-router-dom'

import "./skyrim-eastmarch-page.css"

export default function SkyrimEastmarchPage() {
  return (
    <>
      <div className="page full-screen darken-bg eastmarch">

        <nav className="main-nav">
          <a href="#" className="logo skyrim-logo">
            <img src="/skyrim-favicon-192.png" alt="" />
          </a>
          <ul className="nav-list">
            <li><Link to='/' className="nav-link">main</Link></li>
            <li><Link to="/skyrim" className="nav-link">home</Link></li>
            <li className="sub-nav">
              <Link to="/skyrim-overview" className="nav-link">info</Link>
              <ul>
                <li><Link to="/skyrim-overview" className="nav-link">overview</Link></li>
                <li><Link to="/skyrim-locations" className="nav-link">locations</Link></li>
                <li><a href="./skyrim-equipment.html" className="nav-link">equipment</a></li>
                <li><a href="./skyrim-overview.html" className="nav-link">races</a></li>
                <li><a href="./skyrim-overview.html" className="nav-link">skills</a></li>
                <li><a href="./skyrim-overview.html" className="nav-link">spells</a></li>
                <li><a href="./skyrim-overview.html" className="nav-link">overview</a></li>
              </ul>
            </li>
            <li><a href="#" className="nav-link">contact</a></li>
            <li><Link to="/login" className="nav-link">login</Link></li>
            <li><Link to="/register" className="nav-link">register</Link></li>
            <li><a href="#" className="nav-link">logout</a></li>
          </ul>
        </nav>

        <main>

          <div className="animated-title-container">
            <div className="animated-title-page-content">
              <h1 className="animated-title" data-text="Eastmarch">Eastmarch</h1>
              <p>Eastmarch is one of the nine holds governing its region in Skyrim. It's capital city is <a className="link" href="./skyrim-windhelm.html">Windhelm</a> and Eastmarch is in the northeastern corner of Skyrim.</p>
              <a className="details-btn" href="./skyrim-eastmarch-hold-history.html">details</a>
            </div>
          </div>

        </main>
      </div>
    </>
  )
}