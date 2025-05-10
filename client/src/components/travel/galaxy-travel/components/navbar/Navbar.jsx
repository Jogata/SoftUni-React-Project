import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";


export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="nav">
            <Link to="/" className="logo">GLX TRVL</Link>
            <ul className={isMenuOpen ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/pricing">Pricing</Link>
                </li>
                <li>
                    <Link to="/training">Training</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <div className="hamburger" onClick={toggleMenu}>
                {isMenuOpen ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
            </div>
        </nav>
    )
}