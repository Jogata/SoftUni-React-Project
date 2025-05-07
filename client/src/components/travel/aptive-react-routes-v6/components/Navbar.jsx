import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./navbar.css";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const menuClasses = isMenuOpen ? "nav-menu active" : "nav-menu";
    const menuButtonClasses = isMenuOpen ? "fa fa-times" : "fa fa-bars";

    return (
        <header>
            <nav className="navbar">
                <div className="logo">
                    <Link to="/"><img src={logo} alt="" /></Link>
                </div>
                <ul className={menuClasses}>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/pricing" className="nav-link">Pricing</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/faq" className="nav-link">FAQ</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </li>
                </ul>
                <button className="hamburger" onClick={toggleMenu}>
                    <i className={menuButtonClasses}></i>
                </button>
            </nav>
        </header>
    )
}