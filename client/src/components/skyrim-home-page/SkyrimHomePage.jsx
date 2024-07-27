import "./skyrim-home-page.css";

export default function SkyrimHomePage() {
  return (
    <>
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
            <a href="./skyrim-overview.html"> explore </a>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}