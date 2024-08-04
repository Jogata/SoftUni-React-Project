import { Link } from 'react-router-dom'

import { useEffect, useState } from "react"

import "./skyrim-raids-page.css"
import Raid from './raid/Raid';

export default function SkyrimRaidsPage() {
  const [raids, setRaids] = useState([]);
  // console.log("render");

  useEffect(() => {
    // console.log("use effect");
    fetch("http://localhost:3030/jsonstore/advanced/raids")
      .then(response => response.json())
      // .then(data => console.log(Object.values(data)))
      .then(data => setRaids(Object.values(data)))
  }, []);

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
                  <p>TODO: add main description</p>
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
                {raids.map(raid => <Raid key={raid._id} data={raid} />)}
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