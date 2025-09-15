import { useState } from "react";
import pix1 from "./images/about.jpg";
import pix2 from "./images/lady3.jpg";
import pix3 from "./images/hero1.jpg";
import pix4 from "./images/man3.jpg";
import pix5 from "./images/lady2.jpg";


export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const linksClass = isMenuOpen ? "nav-links" : "links";
    const toggleButtonIcon = isMenuOpen ? "ri-close-fill close-icon" : "ri-menu-fill open-icon";

    return (
        <>
            <div className="navigation">
                <div className="nav-logo">
                    <h2>Orange Media</h2>
                </div>
                <div className={linksClass} onClick={() => setIsMenuOpen(false)}>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Service</li>
                        <li>Projects</li>
                    </ul>
                </div>
                <div className="btn-box">
                    <a href="#">Contact Us</a>
                </div>
                <button className="toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <i className={toggleButtonIcon}></i>
                </button>
            </div>
            <hr className="line" />
        </>
    )
}

export function Hero() {
    return (
        <>
            <section className="hero">
                <div className="hero-content">
                    <h1>Transforming <span>Brands</span>, One Story at a Time</h1>
                    <p>Unlock the power of strategic storytelling and dynamic communication. Let"s build a brand narrative that resonates and lasts</p>
                    <div className="buttons">
                        <a href="#" className="cta-button">Contact Us</a>
                        <a href="#" className="services-button">View All Services</a>
                    </div>
                </div>
                <div className="images">
                    <div className="image-container-small-one">
                        <img src={pix1} alt="Professional Teams" className="small-clean-img" />
                        <img src={pix2} alt="Professional Teams" className="small-clean-img" />
                    </div>
                    <div className="image-container-small">
                        <img src={pix3} alt="Affordable Pricing" className="small-clean-img" />
                    </div>
                    <div className="image-container-small-one">
                        <img src={pix4} alt="Affordable Pricing" className="small-clean-img" />
                        <img src={pix5} alt="Affordable Pricing" className="small-clean-img" />
                    </div>
                </div>
            </section>
            <div className="hero-trusted">
                <div className="trusted-content">
                    <i className="fa fa-empire hero-icon"></i>
                    <p>Dedicated </p>
                </div>
                <div className="trusted-content">
                    <i className="fa fa-empire hero-icon"></i>
                    <p>Innovative</p>
                </div>
                <div className="trusted-content">
                    <i className="fa fa-empire hero-icon"></i>
                    <p>Strategics</p>
                </div>
                <div className="trusted-content">
                    <i className="fa fa-empire hero-icon"></i>
                    <p>Observant</p>
                </div>
                <div className="trusted-content">
                    <i className="fa fa-empire hero-icon"></i>
                    <p>Deliver</p>
                </div>
                <div className="trusted-content">
                    <i className='fa fa-empire hero-icon'></i>
                    <p>Dedicated </p>
                </div>
            </div>
        </>
    )
}

export default Hero

// export function Footer() {
//     return (
//         <footer>
//             <h1>footer component</h1>
//         </footer>
//     )
// }