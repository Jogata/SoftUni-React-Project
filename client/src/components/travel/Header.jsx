export function Navbar() {
    return (
        <div>
            <div className="prudento-navbar">
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