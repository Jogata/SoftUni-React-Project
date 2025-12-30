export function Navbar() {
    return (
        <>
            <nav className="prudento-navbar">
                <div className="prudento-nav-logo">
                    <h2>Prudento</h2>
                </div>
                <div className="prudento-links">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#projects">Projects</a></li>
                    </ul>
                </div>
                <div className="prudento-nav-btn">
                    <a href="#contact">
                        Contact Us
                    </a>
                </div>
            </nav>
        </>
    )
}

import hero from "./images/hero2.jpg";
import glovo from "./images/glovo-logo.svg";
import oracle from "./images/oracle-logo.svg";
import paypal from "./images/paypal-logo.svg";
import stripe from "./images/stripe-logo.svg";
import segment from "./images/segment-logo.svg";
import ionic from "./images/ionic-logo.svg";

export function Hero() {
  return (
    <div>
        <div className="hero">
            <h1 className="hero-header">
                Crafting Content That Connects, Converts and Reflect Your Brand Voice
            </h1>
            <p>
                We bring your brand's story to life with strategic, engaging content. 
                From blogs and social media posts to full content strategies, we're 
                here to help you stand out.
            </p>
            <div className="btns">
              <button className="demo-button">Get Free Demo</button>
                <button className="cta-button">Get Started Free</button>
            </div>
            <img src={hero} alt="hero-img" className="hero-img"/>
        </div>
        <div className="trusted">
        <h2>Over 2,000 Organizations use our platform</h2>
        <div className="hero-imgs">
          <img src={oracle} alt="" />
          <img src={segment} alt="" />
            <img src={glovo} alt="" />            
            <img src={ionic} alt="" />
            <img src={stripe} alt="" />
            <img src={paypal} alt="" />
        </div>
        </div>
    </div>
  )
}

export function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-top">
                <h3 className="footer-title">Prudento</h3>
                <p className="footer-address">
                    123, Steet Name, Close Axis, State, Country
                </p>
                <div className="social-icons">
                    <a href="#">
                        <i className="fa fa-facebook-f"></i>
                    </a>
                    <a href="#">
                        <i className="fa fa-instagram"></i>
                    </a>
                    <a href="#">
                        <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                        <i className="fa fa-google-plus"></i>
                    </a>
                    <a href="#">
                        <i className="fa fa-linkedin"></i>
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                <ul className="footer-menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Testimonial</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <p className="copyright">
                    Copyright © Prudento 2025. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

// export function Header() {
//     return (
//         <header>
//             <img src="https://raw.githubusercontent.com/scrimba/learn-react/refs/heads/main/02.%20Data-Driven%20React/01.%20Section%202%20Intro/images/globe.png" alt="" />
//             <h1>my travel journal.</h1>
//         </header>
//     )
// }