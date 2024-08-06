// import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import { getOneGame } from '../../../hooks/useRaids';

import "./skyrim-raid-details-page.css"

export default function SkyrimRaidDetailsPage() {
  const { id } = useParams();
  // console.log(id);
  const [raid] = getOneGame(id);
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
          <div className="page-content raid-details">
            <div className="details-card">
              <div className="flex-container">
                <div className="details-card-content">
                  <h2>{raid.location}</h2>
                  <p>Level: {raid.level}</p>
                  <p>Enemies: {raid.enemies}</p>
                  <p>Region: {raid.region}</p>
                  <p>Starts at: {raid.start}</p>
                  <p>Min players: {raid.minPlayers}</p>
                  <p>Max players: {raid.maxPlayers}</p>
                </div>
                <div className="details-card-image">
                  <img src={`${raid.img}`} alt="" />
                </div>
              </div>
              <div className="buttons">
                <Link to={`/raids/${raid._id}`}>Join</Link>
                <Link to="/raids">Back to Raids</Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}