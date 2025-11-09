import { useState } from "react";
import hero from "./images/estates/skyscraper-2.jpg";

export function Navigation() {
    const [Mobile, setMobile] = useState(false);

    const iconClasses = Mobile ? "fa fa-times close" : "fa fa-bars open";
    const navClasses = Mobile ? "nav-links" : "links";

    return (
        <>
            <div className="navigation">
                <div className="nav-logo">
                    <h2>CREVA</h2>
                </div>
                <nav className={navClasses} onClick={() => setMobile(false)}>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact</li>
                    </ul>
                </nav>
                <div className="button">
                    <button>Booking</button>
                </div>
                <button className="toggle" onClick={() => setMobile(!Mobile)}>
                    <i className={iconClasses}></i>
                </button>
            </div>
        </>
    )
}

export function Hero() {
    return (
        <>
            <div className="hero-container">
                <img src={hero} alt="" />
                {/* <div className="hero-overlay"> */}
                <div className="hero-content">
                    <h1>Find The Perfect Dream Property For Your Future</h1>
                    <p>
                        From cozy starter homes to luxurious estates, we offer
                        a diverse range of properties to suit your unique lifestyle.
                        Discover your dream home with CREVA today.
                    </p>
                    <div className="hero-button">
                        <button>Buy Property</button>
                    </div>
                </div>
                {/* </div> */}
            </div>
        </>
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