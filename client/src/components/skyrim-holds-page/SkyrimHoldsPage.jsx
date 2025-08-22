import { Link } from "react-router-dom";
import { useState } from "react";

import Thumbnail from "./thumbnail/Thumbnail";
import PageNavigation from "../navigation/PageNavigation";

import "./skyrim-holds-page.css";

const classes = ["item active", "item", "item", "item", "item", "item", "item", "item", "item"];
const thumbnailsData = [
  {
    img: "/skyrim/holds/Falkreath-hold-copy.jpeg",
    title: "Falkreath"
  },
  {
    img: "/skyrim/holds/Haafingar-2.jpg",
    title: "Haafingar"
  },
  {
    img: "/skyrim/holds/Hjaalmarch.png",
    title: "Hjaalmarch"
  },
  {
    img: "/skyrim/holds/The-Pale-bg-1-copy.jpg",
    title: "The Pale"
  },
  {
    img: "/skyrim/holds/the-Reach-bg-copy.jpg",
    title: "The Reach"
  },
  {
    img: "/skyrim/holds/the-rift-copy.jpg",
    title: "The Rift"
  },
  {
    img: "/skyrim/holds/whiterun-hold-bg.png",
    title: "Whiterun Hold"
  },
  {
    img: "/skyrim/holds/Winterhold-region.jpg",
    title: "Winterhold"
  }, 
  {
    img: "/skyrim/holds/Eastmarch-bg.jpg",
    title: "Eastmarch"
  }
]

export default function SkyrimHoldsPage() {
  const [index, setIndex] = useState(0);
  // console.log("render");
  // console.log(classes);
  // const [classes, setClasses] = useState(["item active", "item", "item", "item", "item", "item", "item", "item", "item"]);

  function nextSlide() {
    classes[index] = "item";
    // console.log(index);
    // console.log(classes);
    // setClasses(classes[index] = "item");
    // const newIndex = index + 1;
    // setIndex(index => ++index);
    // setIndex(index => index % classes.length);
    let nextIndex = index + 1;
    nextIndex = nextIndex % classes.length;
    // console.log(index);
    classes[nextIndex] = "item active";
    thumbnailsData.push(thumbnailsData.shift());
    setIndex(index => nextIndex);
  }

  function prevSlide() {
    classes[index] = "item";
    // setIndex(index => --index);
    // setIndex(index => index + classes.length);
    // setIndex(index => index % classes.length);
    // console.log(index);
    let prevIndex = index - 1;
    prevIndex = prevIndex + classes.length;
    prevIndex = prevIndex % classes.length;
    classes[prevIndex] = "item active";
    thumbnailsData.unshift(thumbnailsData.pop());
    setIndex(index => prevIndex);
  }

  // useEffect(() => {
    // classes[0] = "item";
    // classes[index] = "item active";
    // console.log(index);
    // console.log(classes);
  // }, [index]);

  return (
    <>
      <div className="page full-screen">
        <div className="carousel-images">
          <img className={classes[0]} src="/skyrim/holds/Eastmarch-bg.jpg" />
          <img className={classes[1]} src="/skyrim/holds/Falkreath-hold-copy.jpeg" />
          <img className={classes[2]} src="/skyrim/holds/Haafingar-2.jpg" />
          <img className={classes[3]} src="/skyrim/holds/Hjaalmarch.png" />
          <img className={classes[4]} src="/skyrim/holds/The-Pale-bg-1-copy.jpg" />
          <img className={classes[5]} src="/skyrim/holds/the-Reach-bg-copy.jpg" />
          <img className={classes[6]} src="/skyrim/holds/the-rift-copy.jpg" />
          <img className={classes[7]} src="/skyrim/holds/whiterun-hold-bg.png" />
          <img className={classes[8]} src="/skyrim/holds/Winterhold-region.jpg" />
        </div>

        <PageNavigation />
        
        <main>

          <div className="carousel">

            <div className="slider">
              <div className={classes[0]}>
                {/* <img src="/skyrim/holds/Eastmarch-bg.jpg" /> */}
                <div className="slide-content">
                  <div className="slide-subtitle">holds</div>
                  <div className="slide-title">Eastmarch</div>
                  {/* <!-- <div className="topic"></div> --> */}
                  <p className="des">
                    Eastmarch or the Eastmarch Hold makes up the volcanic tundra of the Old Holds, within the province of Skyrim; it is one of the nine holds of the province. Eastmarch is largely a rural area, with sulfur pools that stretch the inner wastes. Eastmarch and its capital, <Link to="/skyrim-windhelm" className="valid">Windhelm</Link> was formerly the seat of power for the First Empire of the Nords, beginning with Ysgramor and continuing through the Ysgramor Dynasty.
                  </p>
                  <div className="buttons">
                    <Link to="/skyrim-eastmarch">SEE MORE</Link>
                  </div>
                </div>
              </div>
              <div className={classes[1]} id="relative">
                {/* <img src="/skyrim/holds/Falkreath-hold-copy.jpeg" /> */}
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
                {/* <img src="/skyrim/holds/Haafingar-2.jpg" /> */}
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
                {/* <img src="/skyrim/holds/Hjaalmarch.png" /> */}
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
                {/* <img src="/skyrim/holds/The-Pale-bg-1-copy.jpg" /> */}
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
                {/* <img src="/skyrim/holds/the-Reach-bg-copy.jpg" /> */}
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
                {/* <img src="/skyrim/holds/the-rift-copy.jpg" /> */}
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
                {/* <img src="/skyrim/holds/whiterun-hold-bg.png" /> */}
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
                {/* <img src="/skyrim/holds/Winterhold-region.jpg" /> */}
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
              {thumbnailsData.map(data => <Thumbnail key={data.title} img={data.img} title={data.title} />)}
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