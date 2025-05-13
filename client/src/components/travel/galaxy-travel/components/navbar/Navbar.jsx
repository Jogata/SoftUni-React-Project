import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const navMenuClass = isMenuOpen ? "nav-menu active" : "nav-menu";
    const menuButtonClass = isMenuOpen ? "fa fa-times" : "fa fa-bars";

    let navClass = "nav dark-bg";

    if (!isDark) {
        navClass = "nav";
    }

    const changeColor = () => {
        if (window.scrollY >= 90) {
            setIsDark(true);
        } else {
            setIsDark(false);
        }
    }

    useEffect(() => {
        if (window.scrollY <= 90) {
            navClass = "nav";
            setIsDark(false);
        }

        window.addEventListener("scroll", changeColor);
    }, [])

    return (
        <nav className={navClass}>
            <Link to="/" className="logo">GLX TRVL</Link>
            <ul className={navMenuClass}>
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
            <button className="hamburger" onClick={toggleMenu}>
                <i className={menuButtonClass}></i>
            </button>
        </nav>
    )
}