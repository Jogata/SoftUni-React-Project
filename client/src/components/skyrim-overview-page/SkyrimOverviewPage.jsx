import "./skyrim-overview-page.css";

import { Link } from 'react-router-dom'

export default function SkyrimOverviewPage() {
  return (
    <>
      <div className="page overview-page">

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
                <li><a href="./skyrim-locations.html" className="nav-link">locations</a></li>
                <li><a href="./skyrim-equipment.html" className="nav-link">equipment</a></li>
                <li><a href="./skyrim-overview.html" className="nav-link">races</a></li>
                <li><a href="./skyrim-overview.html" className="nav-link">skills</a></li>
                <li><a href="./skyrim-overview.html" className="nav-link">spells</a></li>
                <li><a href="./skyrim-overview.html" className="nav-link">overview</a></li>
              </ul>
            </li>
            <li><a href="#" className="nav-link">contact</a></li>
            <li><a href="#" className="nav-link">login</a></li>
            <li><a href="#" className="nav-link">register</a></li>
            <li><a href="#" className="nav-link">logout</a></li>
          </ul>
        </nav>

        <main>
          <section className="header-content details-content">
            <h1 className="cursive">The Elder Scrolls V: Skyrim</h1>
            <p>The Elder Scrolls V: Skyrim is a single-player role-playing video game.</p>
            <p>It is the fifth installment in The Elder Scrolls action/adventure RPG fantasy video game series, and follows The Elder Scrolls IV: Oblivion by approximately 200 years, during the Fourth Era.</p>
            <h2 className="cursive">Plot</h2>
            <p>Two hundred years have passed since the events of The Elder Scrolls IV: Oblivion, and it is now 4E 201. The High King of Skyrim has been killed, and the threat of Civil War looms over the land of Skyrim; One side wishes to secede from the weakened Third Empire, while the other wishes to remain a part of it. To make matters worse, this schism is the final event in a prophecy foretold by the Elder Scrolls that will lead to the return of the dragons under Alduin, the Nordic god of destruction.</p>
            <h2 className="cursive">Setting</h2>
            <p>The fifth installment of The Elder Scrolls takes place in Skyrim, where peace and stability is threatened by the ongoing civil war between a Nordic separatist faction called the Stormcloaks and the Empire's Imperial Legion, as well as the return of the dragons under the game's main antagonist, the great dragon Alduin.</p>
            <p>Skyrim is the northernmost region of Tamriel and its geography consists of mountains, snowy tundras, pine forests, rural countrysides, and arctic plains. Its architecture and atmosphere are very similar to the town of Bruma in The Elder Scrolls IV: Oblivion. Although it is roughly the same size as Oblivion's Cyrodiil, it is the least populated of all regions in Tamriel. Although there are only five cities within the province, they are complemented with smaller townships dotted through the land with huge swathes of wilderness separating them all.</p>
            {/* <h2 className="cursive">Races</h2>
        <p>Players can craft their character using one of the ten races of Tamriel—Imperials, Nords, Redguards, Bretons, Dunmer, Altmer, Bosmer, Orsimer, Khajiit, and Argonians. Each race is characterized by a specific power and passive bonus, as well as starting with a few skills at slightly higher levels. For example, High Elves begin the game with 50 extra magicka, the ability to drastically increase their magicka regeneration rate for 60 seconds once per day, and five extra points in several of the magic skills.</p> */}
          </section>

          <section className="middle-section">
            <div className="inner-middle-section">
              <div className="text">
                <h2><span className="big-fs cursive gold block">Learn</span> more about Skyrim history</h2>
              </div>
              <div className="image">
                <img src="/skyrim/overview/hardcover-magic-book_953425-107.jpg" alt="" />
              </div>
            </div>
          </section>

          <section className="section" id="page-4">
            <div className="locations-page inner">
              <div id="skyrim-history-section">
                <p>
                  Tamriel, also known as Taazokaan in the Dragon Language, is one of the continents on Nirn - the Mortal Plane,
                  the planet upon which Tamriel and the mortal races reside. Tamriel is a great melting pot of cultures and races.
                  It is home to at least a dozen races, with dozens more having died out or changed.
                </p>
                <p>
                  There are nine distinct provinces, each home to one of the more populous races of Tamriel. A proposed tenth
                  province, Orsinium, has never been taken very seriously except by those who want it, namely the Orcs, who wish
                  to have a home province of their own.
                </p>
                <p>
                  Skyrim, the northernmost province of Tamriel, is a cold and mountainous region also known as the Old Kingdom, Mereth,
                  or the Fatherland, or Keizaal in the dragon tongue. Many past battles have given it a ravaged appearance and many
                  ruins. Though currently inhabited primarily by Nords, the Elves who they replaced had resided there since time
                  immemorial. The sovereign, the High King of Skyrim, is chosen by the Moot, a convention of jarls. A jarl is a regional
                  ruler chosen through heredity and, rarely, through right of arms. The High King typically rules until death, though
                  acts of dishonor, particularly the appearance of cowardice, can lead to the recall and reconsideration of the Moot.
                  Since the Pact of Chieftains was signed in 1E 420, the Moot does not give serious consideration to anyone but the High
                  King's direct heir unless one is not available.
                </p>
                <p>
                  Skyrim has nine holds, or regions, each governed by a jarl - Eastmarch, Falkreath Hold, Haafingar, Hjaalmarch,
                  The Pale, The Reach, The Rift, Whiterun Hold, Winterhold. Many of the holds have distinct climates, such as the
                  Rift being an aspen forest, Falkreath Hold being a pine forest, and Eastmarch being tundra. Snowy mountain
                  environments are also found in part of most holds.
                </p>
              </div>
            </div>
          </section>

          <section className="middle-section">
            <div className="inner-middle-section">
              <div className="text">
                <h2><span className="big-fs cursive gold block">Explore</span> the Land of Skyrim</h2>
                <p>Skyrim, the northernmost province of Tamriel, is a cold and mountainous region also known as the Old Kingdom, Mereth, or the Fatherland, or Keizaal in the dragon tongue. It's a vast land, consists of mountains, snowy tundras, pine forests, rural countrysides, and arctic plains. There are over 150 dungeons scattered across Skyrim, full with mysteries and hidden treasures.</p>
              </div>
              <div className="image">
                <img src="/skyrim/overview/fantasy-camping-backpack-601406073.jpeg" alt="" />
              </div>
            </div>
          </section>

          <section className="section" id="page-3">
            <div className="inner">
              <div className="inner-section locations">
                {/* <!-- <img src="./asset/skyrim/overview/00test/compass-0.png" alt="Compass"> --> */}
                {/* <!-- <img src="./asset/skyrim/overview/00test/compass-1.png" alt="Compass"> --> */}
                <img src="/skyrim/overview/compass-2.png" alt="Compass" />
                {/* <!-- <img src="/skyrim/overview/compass-3.png" alt="Compass"> --> */}
                {/* <!-- <img src="/skyrim/overview/compass-4.png" alt="Compass"> --> */}
                {/* <!-- <img src="./asset/skyrim/overview/00test/compass-5.png" alt="Compass"> --> */}
                <div className="title flex">
                  <img src="/skyrim/overview/ornament-1.png" alt="" className="ornament-left" />
                  <a href="./skyrim-locations.html">locations</a>
                  {/* <!-- <h2>locations</h2> --> */}
                  <img src="/skyrim/overview/ornament-1.png" alt="" className="ornament-right" />
                </div>
                {/* <!-- <h2>locations</h2> --> */}
              </div>
              <div className="inner-section factions">
                <div className="flex">
                  {/* <!-- <img src="./asset/skyrim/overview/00test/fractions-logo-copy.png" alt="Monster"> --> */}
                  <img src="/skyrim/overview/factions-logo-2-copy.png" alt="different races" />
                </div>
                <div className="title flex">
                  <img src="/skyrim/overview/ornament-1.png" alt="" className="ornament-left" />
                  <h2>factions</h2>
                  <img src="/skyrim/overview/ornament-1.png" alt="" className="ornament-right" />
                </div>
              </div>
            </div>
          </section>

          <section className="middle-section">
            <div className="inner-middle-section">
              <div className="text">
                <h2><span className="big-fs cursive gold block">Learn</span> the Art of Magic</h2>
                <p>Magic, also known as the Clever Craft, and the Arcane Arts is the art or ability to alter the world through magicka - the energy used to cast spells. Spells in Skyrim are split into different Schools of magic depending on their use. There are 5 different schools that serve as skills under the sign of The Mage.</p>
              </div>
              <div className="image">
                <img src="/skyrim/overview/hardcover-book-with-golden-details_1032986-40748.jpg" alt="" />
              </div>
            </div>
          </section>

          <section className="section" id="page-2">
            <div className="inner">
              <div className="inner-section magic-schools">
                {/* <!-- <img src="./asset/skyrim/overview/00test/magic-circle-symbol-blue-copy.png" alt="Magic Circle Symbol"> --> */}
                <img src="/skyrim/overview/magic-circle-symbol-red-copy.png" alt="Magic Circle Symbol" />
                <h2>school of magic</h2>
              </div>
              <div className="inner-section bestiary">
                <div className="flex">
                  {/* <!-- <img id="splash" src="./asset/skyrim/overview/00test/splash-black-2-copy.png" alt=""> --> */}
                  {/* <!-- <img id="splash" src="./asset/skyrim/overview/00test/torn-edges_6177521-copy.png" alt=""> --> */}
                  {/* <!-- <img id="splash" src="./asset/skyrim/overview/00test/torn-edges-effect-6020235-copy.png" alt=""> --> */}
                  {/* <!-- <img id="splash" src="./asset/skyrim/overview/00test/1.png" alt=""> --> */}
                  {/* <!-- <img id="splash" src="./asset/skyrim/overview/00test/2.png" alt=""> --> */}
                  {/* <!-- <img id="splash" src="./asset/skyrim/overview/00test/hole-trans-copy.png" alt=""> --> */}
                  <img id="splash" src="/skyrim/overview/claw-1-copy.png" alt="Claw trail" />

                  <img id="tigrex" src="/skyrim/overview/Tigrex-copy.png" alt="Monster" />
                  {/* <!-- <img src="./asset/skyrim/overview/00test/Rathian-copy.png" alt="Monster"> --> */}
                  {/* <!-- <img src="./asset/skyrim/overview/00test/war-for-the-overworld-shadow-of-the-colossus-copy.png" alt="Monster"> --> */}
                  {/* <!-- <img src="./asset/skyrim/overview/00test/skyrim-icon-41567-copy.png" alt="Monster"> --> */}
                </div>
                <section className="title flex">
                  {/* <!-- <img src="./asset/skyrim/overview/00test/rig-kilt-Copy.png" alt="" className="h2l"> --> */}
                  <img src="/skyrim/overview/ornament-1.png" alt="Decorative ornament" className="ornament-left" />
                  <a href="#bestiary">bestiary</a>
                  {/* <!-- <img src="./asset/skyrim/overview/00test/rig-kilt-Copy.png" alt="" className="h2r"> --> */}
                  <img src="/skyrim/overview/ornament-1.png" alt="Decorative ornament" className="ornament-right" />
                </section>
              </div>
            </div>
          </section>

        </main>

      </div>
    </>
  )
}