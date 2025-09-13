import { useEffect, useState } from "react";
import man from "./images/man2.png";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const linksClass = isOpen ? "nav-links" : "links";
    const toggleButtonIcon = isOpen ? "ri-close-fill close" : "ri-menu-fill open";

    useEffect(() => {
        const navbar = document.querySelector(".navigation");
        window.addEventListener("scroll", toggleNavbarOnScroll);

        function toggleNavbarOnScroll() {
            navbar.classList.toggle("active", window.scrollY > 100);
        }

        return window.removeEventListener("scroll", toggleNavbarOnScroll)
    }, [])

    return (
        <nav className="navigation">
            <div className="navbar-logo">
                <h2>JOHN DOE</h2>
            </div>
            <div className={linksClass} onClick={() => setIsOpen(false)}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#projects">Projects</a></li>
                </ul>
            </div>
            <div className="navbar-btn">
                <a href="#contact">Hit Me Up</a>
            </div>
            <button className="toggle" onClick={() => setIsOpen(!isOpen)}>
                <i className={toggleButtonIcon}></i>
            </button>
        </nav>
    );
};

export function Hero() {
    return (
        <>
            <div className="hero">
                <div className="hero-content">
                    <h1>I'm John Doe, </h1>
                    <h2>A Fullstack developer </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <button>Hit Me Up</button>
                    <div className="icons">
                        <i className='fa fa-star one'></i>
                        <i className='fa fa-star two'></i>
                        <i className='fa fa-star three'></i>
                        <i className='fa fa-star four'></i>
                        <i className='fa fa-star five'></i>
                        <i className='fa fa-star six'></i>
                    </div>
                </div>
                <div className="hero-img">
                    <img src={man} alt="" />
                </div>
            </div>
        </>
    )
}

export function About() {
    return (
        <>
            <div className="about" id='about'>
                <div className="about-left">
                    <img src={man} alt="" />
                </div>
                <div className="about-right">
                    <h2>About Me</h2>
                    <h3>I'm John Doe, A Fullstack developer</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, odit.
                        Et corrupti fugiat harum rerum! Sint beatae reprehenderit deleniti expedita
                        neque suscipit perferendis facilis reiciendis error. Amet aperiam eos ea.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio hic dolorem
                        esse accusamus atque, impedit, cum quibusdam commodi repellendus dicta earum
                        veritatis voluptate? Illo incidunt nostrum recusandae rem. Cumque, dolores.
                    </p>
                    <button>Hit Me Up</button>
                </div>
            </div>
        </>
    )
}

// export function Header() {
//     return (
//         <header>
//             <img src="https://raw.githubusercontent.com/scrimba/learn-react/refs/heads/main/02.%20Data-Driven%20React/01.%20Section%202%20Intro/images/globe.png" alt="" />
//             <h1>my travel journal.</h1>
//         </header>
//     )
// }