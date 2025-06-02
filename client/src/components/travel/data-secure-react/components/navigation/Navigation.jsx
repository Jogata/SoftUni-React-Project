import { useState } from "react";
import { Link } from "react-router-dom";
import "./navigation.css";

export function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const menuClass = isMenuOpen ? "nav-menu active" : "nav-menu";
    const menuButtonIconClass = !isMenuOpen ? "fa fa-bars icon" : "fa fa-close icon";

    return (
        <div id="top" className="navigation">
            <div className="container">
                <div className="logo">
                    <i className="fa fa-th-large icon" aria-hidden="true"></i>
                    <h1>Secured</h1>
                </div>

                <ul className={menuClass}>
                    <li><Link to="#top">Home</Link></li>
                    <li><Link to="#recovery">Recovery</Link> </li>
                    <li><Link to="#cloud">Cloud</Link></li>
                    <li><Link to="#contact">Contact</Link></li>
                    <button>Sign in</button>
                </ul>
                <button className="hamburger" onClick={toggleMenu}>
                    <i className={menuButtonIconClass}></i>
                </button>
            </div>
        </div>
    )

}