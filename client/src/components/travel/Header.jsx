import { useState } from "react";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const linksClass = isMenuOpen ? "nav-links" : "links";
    const toggleButtonIcon = isMenuOpen ? "ri-close-fill close-icon" : "ri-menu-fill open-icon";

    window.addEventListener("scroll", function () {
        const navbar = document.querySelector(".navbar")
        navbar.classList.toggle("active", window.scrollY > 100)

    });
    return (
        <>
            <div className="navigation">
                <div className="nav-logo">
                    <h2>Investo</h2>
                </div>
                <div className={linksClass} onClick={() => setIsMenuOpen(false)}>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#projects">Projects</a></li>
                    </ul>
                </div>
                <div className="nav-btn">
                    <a href="#contact">Contact Us</a>
                </div>
                <button className="toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <i className={toggleButtonIcon}></i>
                </button>
            </div>
        </>
    )
}

// export function Navbar() {
//     return (
//         <>
//             <div className="navigation">
//                 <div className="nav-logo">
//                     <h2>Orange Media</h2>
//                 </div>
//                 <div className={linksClass} onClick={() => setIsMenuOpen(false)}>
//                     <ul>
//                         <li>Home</li>
//                         <li>About</li>
//                         <li>Service</li>
//                         <li>Projects</li>
//                     </ul>
//                 </div>
//                 <div className="btn-box">
//                     <a href="#">Contact Us</a>
//                 </div>
//                 <button className="toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//                     <i className={toggleButtonIcon}></i>
//                 </button>
//             </div>
//             <hr className="line" />
//         </>
//     )
// }
// export function Header() {
//     return (
//         <header>
//             <img src="https://raw.githubusercontent.com/scrimba/learn-react/refs/heads/main/02.%20Data-Driven%20React/01.%20Section%202%20Intro/images/globe.png" alt="" />
//             <h1>my travel journal.</h1>
//         </header>
//     )
// }