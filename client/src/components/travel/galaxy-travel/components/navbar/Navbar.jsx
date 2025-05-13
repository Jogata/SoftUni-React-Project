import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const [isDark, setIsDark] = useState(false);

    let navClass = "nav dark-bg";
    // console.log(window.scrollY);

    if (!isDark) {
        // console.log(isDark);
        navClass = "nav";
    }

    // if (window.scrollY <= 90) {
    //     console.log(window.scrollY);
    //     navClass = "nav";
    // }

    const changeColor = () => {
        // console.log("color");
        if (window.scrollY >= 90) {
            setIsDark(true);
        } else {
            setIsDark(false);
        }
    }

    useEffect(() => {
        if (window.scrollY <= 90) {
            // console.log(window.scrollY);
            navClass = "nav";
            setIsDark(false);
        }

        window.addEventListener("scroll", changeColor);
    }, [])

        // useEffect(() => {
        // if (!isDark) {
        //     console.log(isDark);
        //     navClass = "nav";
        // }
    // }, [isDark])

    // useEffect(() => {
    //     console.log(window.scrollY);
    // }, [window.scrollY])

    return (
        <nav className={navClass}>
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
            <button className="hamburger" onClick={toggleMenu}>
                {isMenuOpen ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
            </button>
        </nav>
    )
}