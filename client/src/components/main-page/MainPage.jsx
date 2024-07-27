import "./main-page.css";

import { Link } from 'react-router-dom'

export default function MainPage() {
  return (
    <>
      <main>
        <div className="main-slider">
          <section className="slide relative">
            <div className="content">
              <h1>skyrim</h1>
              <Link to={'/skyrim'}>explore</Link>
            </div>
            <img src="/main/skyrim-3840x2400.jpg" alt="" />
          </section>
          <section className="slide">
            <div className="content">
              <h1>the witcher</h1>
              <a href="#">explore</a>
            </div>
            <img src="/main/witcher-background.jpg" alt="" />
          </section>
          <section className="slide">
            <div className="content">
              <h1>god of wars</h1>
              <a href="#">explore</a>
            </div>
            <img src="/main/GodBG.png" alt="" />
          </section>
        </div>
      </main>
    </>
  )
}