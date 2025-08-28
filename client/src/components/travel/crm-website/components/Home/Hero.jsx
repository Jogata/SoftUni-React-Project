// import dash from "../../images/dash-cut.png";

import { Link } from "react-router-dom";
import hero1 from "../../images/clean/cleaner 2.jpg";
import hero2 from "../../images/clean/cleaner 3.jpg";

export function Hero() {
    return (
        <div className="hero">
            <div className="hero-content">
                <h1>
                    Specialize Cleaning Service Solution
                </h1>
                <p>
                    Your trusted partner for home and office cleaning —
                    professional, reliable, and eco-friendly.
                </p>
                <div className="buttons">
                    <Link to="/contact" className="cta-button">Contact Us</Link>
                    <Link to="/services" className="service-button">View All Services</Link>
                </div>
            </div>
            <div className="images">
                <div className="image-container">
                    <img src={hero1} alt="" />
                </div>
                <div className="image-container-small">
                    <img src={hero2} alt="" />
                </div>
            </div>
        </div>
    )
}

// export function Hero() {
//     return (
//         <div className="hero">
//             <h1 className="hero-header">
//                 Streamline Your Business with Our CMR Software
//             </h1>
//             <p>Menage your customer relationships effortlessly and grow your business.</p>
//             <div className="btns">
//                 <button className="cta-btn">Get Started</button>
//                 <button className="cta-btn">Watch Demo</button>
//             </div>
//             <img src={dash} alt="" className="hero-img" />
//         </div>
//     )
// }