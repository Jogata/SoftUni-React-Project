import { useEffect, useState } from "react";
import classroom from './images/coin_up.jpg';

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const linksClass = isMenuOpen ? "nav-links" : "links";
    const toggleButtonIcon = isMenuOpen ? "ri-close-fill close-icon" : "ri-menu-fill open-icon";

    useEffect(() => {
        const navbar = document.querySelector(".navigation");

        window.addEventListener("scroll", toggleClass);

        function toggleClass() {
            navbar.classList.toggle("active", window.scrollY > 100);
        }

        return window.removeEventListener("click", toggleClass);
    }, [])
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

export function Hero() {
    return (
        <>
            <div className="hero">
                <div className="media-container">
                    <h1 className="hero-header">EMPOWER</h1>
                    <div className="invest">
                        <p>Growth Investing</p>
                    </div>
                    <div className="invest">
                        <p>Income Investing</p>
                    </div>
                    <div className="invest">
                        <p>Value Investing</p>
                    </div>
                    <div className="invest">
                        <p>ESG Investing</p>
                    </div>
                </div>
                <img src={classroom} alt="hero-img" className="hero-img" />
                <h1 className="hero-bottom-header">YOUR FINANCIAL FUTURE</h1>
                <h1 className="hero-txt">ONE SMART INVESTMENT AT A TIME.</h1>
            </div>
        </>
    )
}

export function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footer-top">
                    <h2>Ready To Get Started ?</h2>
                    <p>Join our community of Investors</p>
                    <div className="input">
                        <input type="email" name="email" id="" placeholder="Enter your Email" />
                        <button>Join Now</button>
                    </div>
                </div>
                <hr />
                <div className="footer-bottom">
                    <div className="footer-left">
                        <h2>Investo</h2>
                        <div className="socials">
                            <i className="fa fa-facebook social-icon"></i>
                            <i className="fa fa-instagram social-icon"></i>
                            <i className="fa fa-youtube social-icon"></i>
                        </div>
                    </div>
                    <div className="footer-right">
                        <ul>
                            <li>Home</li>
                            <li>Services</li>
                            <li>About Us</li>
                            <li>Privacy policy</li>
                        </ul>
                    </div>
                </div>
                <p className="copy">© 2024 Investo. All rights reserved.</p>
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