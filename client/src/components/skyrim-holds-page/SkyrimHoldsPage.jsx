import { useEffect, useState } from "react"
import "./skyrim-holds-page.css"

import { Link } from 'react-router-dom'

const classes = ["item active", "item", "item", "item", "item", "item", "item", "item", "item"];

export default function SkyrimHoldsPage() {
  const [ index, setIndex ] = useState(0);
  // console.log("render");
  // console.log(classes);
  // const [classes, setClasses] = useState(["item active", "item", "item", "item", "item", "item", "item", "item", "item"]);

  function nextSlide() {
    classes[index] = "item";
    // console.log(index);
    // console.log(classes);
    // setClasses(classes[index] = "item");
    setIndex(index => ++index);
    setIndex(index => index % classes.length);
    let nextIndex = index + 1;
    nextIndex = nextIndex % classes.length;
    // console.log(index);
    classes[nextIndex] = "item active";
  }

  function prevSlide() {
    classes[index] = "item";
    setIndex(index => --index);
    setIndex(index => index + classes.length);
    setIndex(index => index % classes.length);
    // console.log(index);
    let prevIndex = index - 1;
    prevIndex = prevIndex + classes.length;
    prevIndex = prevIndex % classes.length;
    classes[prevIndex] = "item active";
  }

  useEffect(() => {
    // classes[0] = "item";
    classes[index] = "item active";
    console.log(index);
    console.log(classes);
  }, [index]);

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
        <div className="carousel">
        <div className="slider">
          <div className={classes[0]} id="relative">
            <img src="/skyrim/holds/Eastmarch-bg.jpg" />
            <div className="slide-content">
              <div className="slide-subtitle">holds</div>
              <div className="slide-title">Eastmarch</div>
              {/* <!-- <div className="topic"></div> --> */}
              <p className="des">
                Eastmarch or the Eastmarch Hold makes up the volcanic tundra of the Old Holds, within the province of Skyrim; it is one of the nine holds of the province. Eastmarch is largely a rural area, with sulfur pools that stretch the inner wastes. Eastmarch and its capital, <a href="#" className="valid">Windhelm</a> was formerly the seat of power for the First Empire of the Nords, beginning with Ysgramor and continuing through the Ysgramor Dynasty.
              </p>
              <div className="buttons">
                <a href="./skyrim-eastmarch.html">SEE MORE</a>
              </div>
            </div>
          </div>
          <div className={classes[1]}>
            <img src="/skyrim/holds/Falkreath-hold-copy.jpeg" />
            <div className="slide-content">
              <div className="slide-subtitle">holds</div>
              <div className="slide-title">Falkreath</div>
              <div className="topic">Under Construction</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
              </div>
              <div className="buttons">
                <a href="#" className="not-active">SEE MORE</a>
              </div>
            </div>
          </div>
          <div className={classes[2]}>
            <img src="/skyrim/holds/Haafingar-2.jpg" />
            {/* <!-- <img src="/skyrim/holds/Haafingar-3a.jpg"> --> */}
            <div className="slide-content">
              <div className="slide-subtitle">holds</div>
              <div className="slide-title">Haafingar</div>
              <div className="topic">Under Construction</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
              </div>
              <div className="buttons">
                <a href="#" className="not-active">SEE MORE</a>
              </div>
            </div>
          </div>
          <div className={classes[3]}>
            <img src="/skyrim/holds/Hjaalmarch.png" />
            <div className="slide-content">
              <div className="slide-subtitle">holds</div>
              <div className="slide-title">Hjaalmarch</div>
              <div className="topic">Under Construction</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
              </div>
              <div className="buttons">
                <a href="#" className="not-active">SEE MORE</a>
              </div>
            </div>
          </div>
          <div className={classes[4]}>
            <img src="/skyrim/holds/The-Pale-bg-1-copy.jpg" />
            <div className="slide-content">
              <div className="slide-subtitle">holds</div>
              <div className="slide-title">The Pale</div>
              <div className="topic">Under Construction</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
              </div>
              <div className="buttons">
                <a href="#" className="not-active">SEE MORE</a>
              </div>
            </div>
          </div>
          <div className={classes[5]}>
            <img src="/skyrim/holds/the-Reach-bg-copy.jpg" />
            <div className="slide-content">
              <div className="slide-subtitle">holds</div>
              <div className="slide-title">The Reach</div>
              <div className="topic">Under Construction</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
              </div>
              <div className="buttons">
                <a href="#" className="not-active">SEE MORE</a>
              </div>
            </div>
          </div>
          <div className={classes[6]}>
            <img src="/skyrim/holds/the-rift-copy.jpg" />
            <div className="slide-content">
              <div className="slide-subtitle">holds</div>
              <div className="slide-title">The Rift</div>
              <div className="topic">Under Construction</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
              </div>
              <div className="buttons">
                <a href="#" className="not-active">SEE MORE</a>
              </div>
            </div>
          </div>
          <div className={classes[7]}>
            <img src="/skyrim/holds/whiterun-hold-bg.png" />
            <div className="slide-content">
              <div className="slide-subtitle">holds</div>
              <div className="slide-title">Whiterun hold</div>
              <div className="topic">Under Construction</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
              </div>
              <div className="buttons">
                <a href="#" className="not-active">SEE MORE</a>
              </div>
            </div>
          </div>
          <div className={classes[8]}>
            <img src="/skyrim/holds/Winterhold-region.jpg" />
            <div className="slide-content">
              <div className="slide-subtitle">holds</div>
              <div className="slide-title">Winterhold</div>
              <div className="topic">Under Construction</div>
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
              </div>
              <div className="buttons">
                <a href="#" className="not-active">SEE MORE</a>
              </div>
            </div>
          </div>
        </div>
        <div className="thumbnails render">
          <div className="thumbnail">
            <img src="/skyrim/holds/Eastmarch-bg.jpg" />
            <div className="thumbnail-content">
              <div className="thumbnail-title">
                Eastmarch
              </div>
              {/* <!-- <div className="thumbnail-description">
                Description
              </div> --> */}
            </div>
          </div>
          <div className="thumbnail">
            <img src="/skyrim/holds/Falkreath-hold-copy.jpeg" />
            <div className="thumbnail-content">
              <div className="thumbnail-title">
                Falkreath
              </div>
              {/* <!-- <div className="thumbnail-description">
                Description
              </div> --> */}
            </div>
          </div>
          <div className="thumbnail">
            <img src="/skyrim/holds/Haafingar-2.jpg" />
            {/* <!-- <img src="/skyrim/holds/Haafingar-3a.jpg"> --> */}
            <div className="thumbnail-content">
              <div className="thumbnail-title">
                Haafingar
              </div>
              {/* <!-- <div className="thumbnail-description">
                Description
              </div> --> */}
            </div>
          </div>          
          <div className="thumbnail">
            <img src="/skyrim/holds/Hjaalmarch.png" />
            <div className="thumbnail-content">
              <div className="thumbnail-title">
                Hjaalmarch
              </div>
              {/* <!-- <div className="thumbnail-description">
                Description
              </div> --> */}
            </div>
          </div>
          <div className="thumbnail">
            <img src="/skyrim/holds/The-Pale-bg-1-copy.jpg" />
            <div className="thumbnail-content">
              <div className="thumbnail-title">
                The Pale
              </div>
              {/* <!-- <div className="thumbnail-description">
                Description
              </div> --> */}
            </div>
          </div>
          <div className="thumbnail">
            <img src="/skyrim/holds/the-Reach-bg-copy.jpg" />
            <div className="thumbnail-content">
              <div className="thumbnail-title">
                The Reach
              </div>
              {/* <!-- <div className="thumbnail-description">
                Description
              </div> --> */}
            </div>
          </div>
          <div className="thumbnail">
            <img src="/skyrim/holds/the-rift-copy.jpg" />
            <div className="thumbnail-content">
              <div className="thumbnail-title">
                The Rift
              </div>
              {/* <!-- <div className="thumbnail-description">
                Description
              </div> --> */}
            </div>
          </div>
          <div className="thumbnail">
            <img src="/skyrim/holds/whiterun-hold-bg.png" />
            <div className="thumbnail-content">
              <div className="thumbnail-title">
                Whiterun Hold
              </div>
              {/* <!-- <div className="thumbnail-description">
                Description
              </div> --> */}
            </div>
          </div>
          <div className="thumbnail">
            <img src="/skyrim/holds/Winterhold-region.jpg" />
            <div className="thumbnail-content">
              <div className="thumbnail-title">
                Winterhold
              </div>
              {/* <!-- <div className="thumbnail-description">
                Description
              </div> --> */}
            </div>
          </div>
        </div>
        
        <div className="arrows">
          <button id="prev" onClick={prevSlide}>&lsaquo;</button>
          <button id="next" onClick={nextSlide}>&rsaquo;</button>
        </div>
      </div>

        </main>
      </div>
    </>
  )
}