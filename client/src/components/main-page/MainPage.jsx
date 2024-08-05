import { useContext } from "react";

import { Link } from 'react-router-dom'
import { AuthContext } from "../../contexts/AuthContext";

import "./main-page.css";

export default function MainPage() {
  const { isAuthenticated } = useContext(AuthContext);
  // console.log(isAuthenticated);
  return (
    <>
      <div className="page full-screen main-menu">

        <nav className="main-nav">
          <a href="#" className="logo">Logo</a>
          <ul className="nav-list">
            <li><Link to='/' className="nav-link">main</Link></li>
            <li className="sub-nav">
              <span>games</span>
              <ul>
                <li><Link to='/skyrim' className="nav-link">skyrim</Link></li>
                <li><Link to='/witcher' className="nav-link">the witcher</Link></li>
                <li><Link to="/god-of-war" className="nav-link">god of war</Link></li>
              </ul>
            </li>
            <li><a href="#" className="nav-link">about</a></li>
            <li><a href="#" className="nav-link">contact</a></li>
            {isAuthenticated
              ? (
                  <li><Link to="/logout" className="nav-link">logout</Link></li>
              ) : (
                <>
                  <li><Link to="/login" className="nav-link">login</Link></li>
                  <li><Link to="/register" className="nav-link">register</Link></li>
                </>
              )}
          </ul>
        </nav>

        <main>
          <div className="main-slider">
            <section className="slide relative">
              <div className="content">
                <h1>skyrim</h1>
                <Link to={'/skyrim'}>explore</Link>
              </div>
              <img src="/main/skyrim-3840x2400.jpg" alt="" />
            </section>
            <section className="slide">
              <div className="content">
                <h1>the witcher</h1>
                <Link to={'/witcher'}>explore</Link>
              </div>
              <img src="/main/witcher-background.jpg" alt="" />
            </section>
            <section className="slide">
              <div className="content">
                <h1>god of wars</h1>
                <Link to={"/god-of-war"}>explore</Link>
              </div>
              <img src="/main/GodBG.png" alt="" />
            </section>
          </div>
        </main>

      </div>
    </>
  )
}