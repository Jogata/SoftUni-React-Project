import { useEffect, useState } from "react";
import classroom from "./images/coin_up.jpg";
import about from "./images/about.jpg";

const aboutItems = [
    {
        icon: "fa fa-check-circle",
        title: "Trusted Advisors with Decades of Experience",
    },
    {
        icon: "fa fa-check-circle",
        title: "Personalized, Client-Centric Approach",
    },
    {
        icon: "fa fa-check-circle",
        title: "Proven Track Record of Success",
    },
    {
        icon: "fa fa-check-circle",
        title: "Strategic planning to ensure a secure and comfortable retirement.",
    },
    {
        icon: "fa fa-check-circle",
        title: "Expert management of your investment portfolio to maximize returns.",
    },
    {
        icon: "fa fa-check-circle",
        title: "Strategies to minimize tax liability and maximize investment returns.",
    },
]

export const services = [
    {
        icon: "ri-coin-fill",
        head: 'Wealth Management',
        desc: 'A short description of the service your company provides and how it helps your clients business increase revenue using the technology and strategy your company provides',
    },
    {
        icon: "ri-bank-line",
        head: 'Retirement Planning',
        desc: 'A short description of the service your company provides and how it helps your clients business increase revenue using the technology and strategy your company provides',
    },
    {
        icon: "fa fa-folder-open",
        head: 'Portfolio Management',
        desc: 'A short description of the service your company provides and how it helps your clients business increase revenue using the technology and strategy your company provides',
    },
]

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

export function Insight() {
    return (
        <>
            <div className="insight">
                <div className="insight-container">
                    <div className="insight-list">
                        <h2>16,000</h2>
                        <p>Investment Managed</p>
                    </div>
                    <hr />
                    <div className="insight-list">
                        <h2>20,000</h2>
                        <p>Wealth Created</p>
                    </div>
                    <hr />
                    <div className="insight-list">
                        <h2>15,000</h2>
                        <p>Asset Management</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export function About() {
    return (
        <>
            <div className="about" id="about">
                <div className="left-about">
                    <img src={about} alt="" />
                </div>
                <div className="right-about">
                    <h2 className="right-header"> About Us</h2>
                    <p>At Investo, we are committed to guiding you through the complex world
                        of investing with confidence and clarity. With over 16 years of experience in the
                        financial industry, our team of experts is dedicated to crafting investment strategies
                        that align with your unique financial goals.</p>
                    {aboutItems.map(({ icon, title }, index) => {
                        return (
                            <div className="list-container" key={index}>
                                <div className="list">
                                    <h2 className="icon">
                                        <i className={icon}></i>
                                    </h2>
                                    <p>{title} </p>
                                </div>
                            </div>
                        )
                    })}
                    <button>Book A Call</button>
                </div>
            </div>
        </>
    )
}

export function Services() {
  return (
    <>
        <div className="services" id="services">
            <h2 className="service-header">Our Services</h2>
            <p className="text">Tailored Investment Solutions to Meet Your Needs</p>
            <div className="service-container">
                {services.map(({icon, head, desc}, index) => {
                    return (
                        <div className="service-list" key={index}>
                            <div className="service-icon">
                                <h2 className="icon">
                                    <i className={icon}></i>
                                </h2>
                            </div>
                            <h2>{head} </h2>
                            <p>{desc}</p>
                        </div>
                    )
                })}
            </div>
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