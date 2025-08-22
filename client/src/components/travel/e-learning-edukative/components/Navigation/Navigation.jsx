import { useState } from "react";
import { Link } from "react-router-dom";
import "./navigation.css";

export function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleButtonIcon = isMenuOpen ? "ri-close-line" : "ri-menu-3-fill";
    const menuClass = isMenuOpen ? "tabloor-nav-links open" : "tabloor-nav-links";

    return (
        <nav className="edukative-navbar">
            <div className="edukative-nav-logo">
                <Link to="/">Edukative</Link>
            </div>
            <div className={menuClass} onClick={() => setIsMenuOpen(false)}>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/courses">Courses</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
            <div className="edukative-nav-btn">
                <button>Enroll Now</button>
            </div>
            <button 
                className="edukative-toggle-btn" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <i className={toggleButtonIcon}></i>
            </button>
        </nav>
    )
}