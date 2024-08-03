import { Link } from 'react-router-dom'

import { useState } from "react"

import "./skyrim-raids-page.css"

export default function SkyrimRaidsPage() {
    return (
    <>
      <div className="page full-screen">

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
          <div className="page-content raids">
            <div className="header-section">
              <h1 className="big-fs cursive"><span className="silver decor-1">Raids</span></h1>
              <div className="header-content">
                <div className="main-description">
                  <p>main description</p>
                </div>
                <div className="image">
                  <div className="image-mask">
                    <img className="mask-3" src="/skyrim/locations/map-with-compass.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="raids-list">
              <ul>
                <li className='raid'>
                  <h2 className='location'>Location name 1</h2>
                  <div className="raid-info">
                    <p className='time'>Start at: <span>12:00 AM</span></p>
                    <p className="level">Level: <span>5</span></p>
                    <div className="buttons">
                      <Link to="/raids/:id">Join</Link>
                      <Link to="/raids/details/:id">Details</Link>
                    </div>
                  </div>
                </li>
                <li className='raid'>
                  <h2 className='location'>Location name 2</h2>
                  <div className="raid-info">
                    <p className='time'>Start at: <span>14:30 AM</span></p>
                    <p className="level">Level: <span>8</span></p>
                    <div className="buttons">
                      <Link to="/raids/:id">Join</Link>
                      <Link to="/raids/details/:id">Details</Link>
                    </div>
                  </div>
                </li>
                <li className='raid'>
                  <h2 className='location'>Location name 3</h2>
                  <div className="raid-info">
                    <p className='time'>Start at: <span>18:10 AM</span></p>
                    <p className="level">Level: <span>3</span></p>
                    <div className="buttons">
                      <Link to="/raids/:id">Join</Link>
                      <Link to="/raids/details/:id">Details</Link>
                    </div>
                  </div>
                </li>
                <li className='raid'>
                  <h2 className='location'>Location name 4</h2>
                  <div className="raid-info">
                    <p className='time'>Start at: <span>18:10 AM</span></p>
                    <p className="level">Level: <span>3</span></p>
                    <div className="buttons">
                      <Link to="/raids/:id">Join</Link>
                      <Link to="/raids/details/:id">Details</Link>
                    </div>
                  </div>
                </li>
                <li className='raid'>
                  <h2 className='location'>Location name 5</h2>
                  <div className="raid-info">
                    <p className='time'>Start at: <span>18:10 AM</span></p>
                    <p className="level">Level: <span>3</span></p>
                    <div className="buttons">
                      <Link to="/raids/:id">Join</Link>
                      <Link to="/raids/details/:id">Details</Link>
                    </div>
                  </div>
                </li>
                <li>
                  <span>
                  <Link to="" className='create-btn'>Start New Raid</Link>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}