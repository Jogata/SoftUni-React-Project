import { useState } from "react";
import "./navigation.css";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const menuClasses = isMenuOpen ? "nav-menu active" : "nav-menu";
    const menuButtonIconClasses = isMenuOpen ? "fa fa-times" : "fa fa-bars";

    return (
        <div className="nav">
            <div className="container">
                <h1>
                    <i className="fa fa-home"></i>
                    <span>Real</span>Estate
                </h1>
                <button className="btn">Sign In</button>
                <ul className={menuClasses}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Search</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <button className="hamburger" onClick={toggleMenu}>
                    <i className={menuButtonIconClasses}></i>
                </button>
            </div>
        </div>
    )
}