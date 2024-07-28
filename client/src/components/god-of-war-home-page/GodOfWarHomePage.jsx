import "./god-of-war-home-page.css";

import { Link } from 'react-router-dom'

export default function GodOfWarHomePage() {
  return (
    <>
      <div className="page full-screen gow">
        <nav className="navbar">
          {/* <div className="menu"> */}
            <div className="logo">
              <img src="/god-of-war/god-logo.png" />
            </div>
            <button className="menu-btn">
              <i className="fa fa-bars"></i>
            </button>
            <ul className="nav-list">
              <li><Link to="/">Main</Link></li>
              <li><a href="#">Home</a></li>
              <li><a href="#">Battle</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">More</a></li>
            </ul>
            <div className="nav-btn">
              <button>Play Now</button>
            </div>
          {/* </div> */}
        </nav>

        <main>
          <div className="inner-container">
            <div className="center">
              <p className="title">Responsive Game Ui</p>
              <p className="sub-des">God of War is an action-adventure game franchise created by David Jaffe at Sony's Santa Monica Studio.</p>
              <div className="btns">
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </main>

      </div>

    </>
  )
}