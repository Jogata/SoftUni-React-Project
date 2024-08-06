import { Link } from 'react-router-dom'

// import { useEffect, useState } from "react"

import { useGetAllRaids } from '../../../hooks/useRaids'
import Raid from './raid/Raid'
import PageNavigation from '../../navigation/PageNavigation'

import "./skyrim-raids-page.css"

export default function SkyrimRaidsPage() {
  const [raids] = useGetAllRaids();

  return (
    <>
      <div className="page full-screen">

        <PageNavigation />

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
                    <Link to="/create-raid" className='create-btn'>Start New Raid</Link>
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