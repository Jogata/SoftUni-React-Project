import hero from "./images/hero-prudento.jpg";
import glovo from "./images/glovo-logo.svg";
import oracle from "./images/oracle-logo.svg";
import paypal from "./images/paypal-logo.svg";
import stripe from "./images/stripe-logo.svg";
import segment from "./images/segment-logo.svg";
import ionic from "./images/ionic-logo.svg";

export function Navigation() {
    return (
        <>
            <nav className="navigation">
                <div className="nav-logo">
                    <h2>Prudento</h2>
                </div>
                <div className="links">
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#services">Services</a>
                        </li>
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                    </ul>
                </div>
                <div className="nav-link">
                    <a href="#contact">Contact Us</a>
                </div>
            </nav>
        </>
    )
}

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
                    <button className="cta-button">Get Started Free</button>
                </div>
                <img src={hero} alt="hero-img" className="hero-img" />
            </div>
            <div className="trusted">
                <h2>Over 2,000 Organizations use our platform</h2>
                <div className="trusted-imgs">
                    <img src={glovo} alt="" />
                    <img src={oracle} alt="" />
                    <img src={segment} alt="" />
                    <img src={ionic} alt="" />
                    <img src={paypal} alt="" />
                    <img src={stripe} alt="" />
                </div> 
            </div>
        </div>
    )
}

// export function Footer() {
//     return (
//         <div className="footer">
//             <div className="footer-content">
//                 <div className="footer-name">
//                     <h2>Nika Shoes</h2>
//                 </div>
//                 <div className="footer-socials">
//                     <i className="fa fa-facebook footer-icon"></i>
//                     <i className="fa fa-instagram footer-icon"></i>
//                     <i className="fa fa-twitter footer-icon"></i>
//                 </div>
//             </div>
//             <div className="copy">
//                 <p>Copyright © Nika Shoes 2024. All rights reserved</p>
//             </div>
//         </div>
//     )
// }