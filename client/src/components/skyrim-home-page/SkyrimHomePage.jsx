import PageNavigation from "../navigation/PageNavigation";
import "./skyrim-home-page.css";

import { Link } from 'react-router-dom';

export default function SkyrimHomePage() {
  return (
    <>
      <div className="page full-screen skyrim">

        {/* <a href="#" class="logo">Logo</a>
      <ul class="nav-list alt">
        <li><a href="./index.html" class="nav-link">main</a></li>
        <li><a href="./skyrim.html" class="nav-link">home</a></li>
        <li class="sub-nav">
          <a href="./skyrim-overview.html" class="nav-link">info</a>
          <ul>
            <li><a href="./skyrim-overview.html">overview</a></li>
            <li><a href="./skyrim-locations.html">locations</a></li>
            <li><a href="./skyrim-equipment.html">equipment</a></li>
            <li><a href="./skyrim-overview.html">races</a></li>
            <li><a href="./skyrim-overview.html">skills</a></li>
            <li><a href="./skyrim-overview.html">spells</a></li>
            <li><a href="./skyrim-overview.html">overview</a></li>
          </ul>
        </li>
        <li><a href="#" class="nav-link">contact</a></li>
        <li><a href="./skyrim-auth.html" class="nav-link">login</a></li>
        <li><a href="./skyrim-auth.html" class="nav-link">register</a></li>
        <li><a href="#" class="nav-link">logout</a></li>
      </ul> */}
      
        <PageNavigation />

        <main>
          <section className="start-page">
            <div className="moon">
              <img src="/skyrim/home/moon.png" alt="Moon" />
            </div>
            <div className="clouds">
              <img src="/skyrim/home/cloud1-copy.png" alt="cloud" className="cloud1" />
              <img src="/skyrim/home/cloud2-copy.png" alt="cloud" className="cloud2" />
              <img src="/skyrim/home/cloud3-copy.png" alt="cloud" className="cloud3" />
              <img src="/skyrim/home/cloud1-copy.png" alt="cloud" className="cloud4" />
              <img src="/skyrim/home/cloud2-copy.png" alt="cloud" className="cloud5" />
              <img src="/skyrim/home/cloud3-copy.png" alt="cloud" className="cloud6" />
              {/* <img src="/skyrim/home/skyrim_mountains__transparent_mask.png" alt="" id="clouds-mask"> */}
            </div>
            <div className="main-title-container">
              <img className="main-title" src="/skyrim/home/title-2-copy.png" alt="Skyrim logo" />
            </div>
            <div className="bottom-section">
              <div className="play-btn">
                <img src="/skyrim/home/skyrim-icon-41590-copy.png" alt="warrior" />
                <Link to="/skyrim-overview"> explore </Link>
              </div>
            </div>
          </section>
        </main>

      </div>
    </>
  )
}