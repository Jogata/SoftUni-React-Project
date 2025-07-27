import "./hero.css";

// export function Hero() {
//     return (
//         <div className="hero">
//             <div className="content">
//                 <p>Call us</p>
//                 <p>1-800-123-4567</p>
//                 <p>Because Money</p>
//                 <p>Doesn"t come with instructions</p>
//                 <button href="/" className="button">Free Consultation</button>
//             </div>
//         </div>
//     )
// }

import { Link } from "react-router-dom";

export function Hero() {
    return (
        <section id="hero">
            <div className="hero-left">
                <span className="hello">Hello,</span>
                <span className="intro">I'm <span className="name">Zhuliakho</span><br /> Frontend Developer</span>
                <p className="introPara">
                    I'm a skilled frontend developer with experience in
                    creating visually appealing, fully functional and
                    user friendly website
                </p>
                <Link to="/" className="btn">Hire Me</Link>
            </div>
            <div className="hero-right"></div>
        </section>
    )
}