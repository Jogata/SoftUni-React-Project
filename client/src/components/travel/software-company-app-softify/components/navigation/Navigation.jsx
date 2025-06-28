import { useEffect, useState } from "react";
import "./navigation.css";

export function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            // const navbar = document.querySelector(".navbar");
            // navbar.classList.toggle("active", window.scrollY > 100);
            if (window.scrollY > 100) {
                setIsDark(true);
            } else {
                setIsDark(false);
            }
        });
    }, [])

    const navClass = isDark ? "navigation active" : "navigation";
    const menuButtonIconClass = isMenuOpen ? "fa fa-times" : "fa fa-bars";
    const menuClass = isMenuOpen ? "nav-links open" : "nav-links";

    //   document.querySelector(".toggle").addEventListener("click", function() {
    //     document.querySelector(".navbar").classList.toggle("active");
    // });

    return (
        <nav>
            <div className={navClass}>
                <div className="nav-logo">
                    <h2>Softify</h2>
                </div>
                <div className={menuClass} onClick={() => setIsMenuOpen(false)}>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#projects">Projects</a></li>
                    </ul>
                </div>
                <div className="nav-btn">
                    <a href="#contact">Contact Us</a>
                </div>
                <button className="toggle-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <i className={menuButtonIconClass}></i>
                </button>
            </div>
        </nav>
    )
}