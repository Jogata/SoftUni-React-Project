import "./skyrim-locations-page.css";

import { Link } from 'react-router-dom'

export default function SkyrimLocationsPage() {
  return (
    <>
      <div className="page">

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
          <div className="page-content locations details-content">
            <div className="header-section">
              <h1 className="big-fs cursive">
                <span className="silver decor-1">Locations</span>
              </h1>
              <div className="header-content">
                <div className="main-description">
                  <p>Skyrim, the northernmost province of Tamriel, is a cold and mountainous region also known as the Old Kingdom, Mereth, or the Fatherland, or Keizaal in the dragon tongue. Many past battles have given it a ravaged appearance and many ruins. Though currently inhabited primarily by Nords, the Elves who they replaced had resided there since time immemorial. The sovereign, the High King of Skyrim, is chosen by the Moot, a convention of jarls. A jarl is a regional ruler chosen through heredity and, rarely, through right of arms. The High King typically rules until death, though acts of dishonor, particularly the appearance of cowardice, can lead to the recall and reconsideration of the Moot. Since the Pact of Chieftains was signed in 1E 420, the Moot does not give serious consideration to anyone but the High King's direct heir unless one is not available.</p>
                  <p>Skyrim has a vast open-world map that features a variety of environments to explore and sights to behold. Players are able to fast travel to places they have already discovered through their map or to undiscovered cities through paid carriages found at several city gates. This page is an overview of all of the locations in Skyrim and each of the nine <a href="./skyrim-holds.html" className="link">Holds</a> found in the region, as well as the island of Solstheim. You may navigate to each specific page to find out more about the locale and its available Quests, services and Items.</p>
                </div>
                <div className="image">
                  <div className="image-mask">
                    <img className="mask-3" src="/skyrim/locations/map-with-compass.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <h2 className="cursive">Geography</h2>
            <p>Morrowind lies to the east over the Velothi Mountains, Cyrodiil is south beyond the Jerall Mountains, Hammerfell (and the latest incarnation of Orsinium) is to the south and west, High Rock is past the Druadach Mountains to the west, and the Sea of Ghosts runs along the province's long northern coastline. Skyrim holds four of the five highest mountains in Tamriel (the Red Mountain being the only one outside Skyrim). Much of the northern half of Skyrim is cold and covered in snow. However, the southern regions of the province are relatively mild.</p>
            {/* <!-- <article> --> */}
            <h3 className="cursive">Holds</h3>
            <p>The Nords long ago divided the province into nine geopolitical regions known as "holds". Each hold is a large area of land roughly equivalent to a county in Cyrodiil, each individually governed by a jarl who maintains court in the hold's capital city. The nine traditional holds of Skyrim are: Haafingar, Hjaalmarch, the Pale, Winterhold, <a className="link" href="./skyrim-eastmarch.html">Eastmarch</a>, the Rift, Whiterun, Falkreath, and the Reach. During the Interregnum, when the Reach became an independent Reachman kingdom and lost its status as a Nordic hold, a tenth hold named Karthald was created from the Reach's northern fringe.</p>
            <a href="./skyrim-holds.html" className="details-btn">Learn More</a>
            {/* <!-- <div className="article-image"> --> */}
            {/* <!-- <img src="./img/337316387_606335980996691_4651753538642375914_n.jpg" alt="" /> --> */}
            {/* <!-- </div> --> */}
            {/* <!-- </article> --> */}
            <article>
              <div className="article-content">
                <h3 className="cursive">Cities</h3>
                <p>A city is a settlement that is large enough to graduate from the status of being a town. Cities range from small cities with less than 20 buildings, to some of the largest metropoles in Tamriel. Typically, a substantial number of civilian NPCs, ranging from 30-150, may be found in a given town. They are located across Tamriel, and may be found in all provinces of the Empire.</p>
                <p>Each city is located in a different hold and is home to that hold's ruler, or jarl. The five largest cities (the major cities) are walled. Carriages are available for hire outside each major city to transport the player to any other major city.</p>
                <a className="btn not-active">Learn More</a>
              </div>
              <div className="article-image">
                <img className="mask-3" src="/skyrim/locations/city.jpg" alt="" />
              </div>
            </article>
            <article>
              <div className="article-content">
                <h3 className="cursive">Towns</h3>
                <p>A town is a small settlement. Towns range from scattered groupings of buildings to substantial settlements. Typically, a substantial number of civilian NPCs, ranging from 5-40, may be found in a given town. They are located across Tamriel and may be found in all provinces of the Empire.</p>
                <a className="btn not-active">Learn More</a>
              </div>
              <div className="article-image">
                <img className="mask-3" src="/skyrim/locations/town.jpg" alt="" />
              </div>
            </article>
          </div>
        </main>
      </div>
    </>
  )
}