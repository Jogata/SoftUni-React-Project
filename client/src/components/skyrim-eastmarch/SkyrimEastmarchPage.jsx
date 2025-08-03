import { Link } from 'react-router-dom'

import "./skyrim-eastmarch-page.css"
import PageNavigation from '../navigation/PageNavigation'

export default function SkyrimEastmarchPage() {
  return (
    <>
      <div className="page full-screen darken-bg eastmarch">

        <PageNavigation />
        
        <main>

          <div className="animated-title-container">
            <div className="animated-title-page-content">
              <h1 className="animated-title" data-text="Eastmarch">Eastmarch</h1>
              <p>
                Eastmarch is one of the nine holds governing its region in Skyrim. 
                It's capital city is <a className="link" href="./skyrim-windhelm.html">Windhelm</a> and 
                Eastmarch is in the northeastern corner of Skyrim.
              </p>
              <a className="details-btn" href="./skyrim-eastmarch-hold-history.html">details</a>
            </div>
          </div>

        </main>
      </div>
    </>
  )
}