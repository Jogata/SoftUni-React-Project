import derek from "./images/derek.jpg";
import figma from "./images/figma.svg";
import css from "./images/css.svg";
import html5 from "./images/html5.svg";
import php from "./images/php.svg";
import nodejs from "./images/nodejs.svg";
import mongodb from "./images/mongodb.svg";
import tailwindcss from "./images/tailwindcss.svg";
import visualstudio from "./images/visualstudio.svg";
import react from "./images/reactjs.svg";
import javascript from "./images/javascript.svg";

export function Navbar() {
    return (
        <nav>
            <div className="navigation">
                <ul className="links">
                    <li>About</li>
                    <li>Projects</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
    )
}

export function Hero() {
    return (
        <>
            <div className="hero">
                <div className="hero-top">
                    <div className="hero-left">
                        <h2>I'm Derek Einstein</h2>
                        {/* <h1>Professional <span>FullStack</span> Developer</h1> */}
                        <h1><span className="first">Professional</span> <span className="second">FullStack</span> <span className="third">Developer</span></h1>
                        <p>
                            I'm a senior fullstack engineer with over 15 years 
                            of industrial working experience.
                        </p>
                        <div className="buttons">
                            <button>Hire Me</button>
                            <button>View My Projects</button>
                        </div>
                    </div>
                    <div className="hero-right">
                        <div className="hero-img">
                            <img src={derek} alt="" />
                        </div>
                    </div>
                </div>
                <div className="hero-bottom">
                    <div className="inner">
                        <div className="hero-info">
                            <h1>3+</h1>
                            <p>Years of Experience</p>
                        </div>
                        <div className="hero-info">
                            <h1>1000+</h1>
                            <p>Projects Completed</p>
                        </div>
                        <div className="hero-info">
                            <h1>800+</h1>
                            <p>Satisfied Clients</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export function About() {
    return (
        <div className="about">
            <div className="about-left">
                <div className="about-img">
                    <img src={derek} alt="" />
                </div>
            </div>
            <div className="about-right">
                <h2>About Me</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Porro rem nihil, veritatis dolores beatae dolor id nesciunt 
                    quis quisquam saepe sapiente unde, at itaque ex ducimus 
                    aliquid. Ea saepe nihil mollitia omnis.
                </p>
                <div className="about-btns">
                    <button>Download CV</button>
                    <button>Hire Me</button>
                </div>
            </div>
        </div>
    )
}

export function Skills() {
    return (
        <div className="skills">
            <h2>My Work Tools</h2>
            <div className="skills-container">
                <div className="skills-img">
                    <img src={figma} alt="" />
                    <img src={tailwindcss} alt="" />
                    <img src={html5} alt="" />
                    <img src={css} alt="" />
                    <img src={php} alt="" />
                </div>
                <div className="skills-img">
                    <img src={nodejs} alt="" />
                    <img src={mongodb} alt="" />
                    <img src={javascript} alt="" />
                    <img src={react} alt="" />
                    <img src={visualstudio} alt="" />
                </div>
            </div>
        </div>
    )
}

// export function Footer() {
//     return (
//         <footer>
//             <h1>footer component</h1>
//         </footer>
//     )
// }