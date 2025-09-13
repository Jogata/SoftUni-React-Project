import { useEffect, useState } from "react";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const linksClass = isOpen ? "nav-links" : "link";
    const toggleButtonIcon = isOpen ? "ri-close-fill close" : "ri-menu-fill open";

    useEffect(() => {
        const navbar = document.querySelector(".navbar");
        window.addEventListener("scroll", toggleNavbarOnScroll);

        function toggleNavbarOnScroll() {
            navbar.classList.toggle("active", window.scrollY > 100);
        }

        return window.removeEventListener("scroll", toggleNavbarOnScroll)
    }, [])

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h2>JOHN DOE</h2>
            </div>
            <div className={linksClass} onClick={() => setIsOpen(false)}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#projects">Projects</a></li>
                </ul>
            </div>
            <div className="navbar-btn">
                <a href="#contact"><button>Hit Me Up</button></a>
            </div>
            <button className="toggle" onClick={() => setIsOpen(!Mobile)}>
                <i className={toggleButtonIcon}></i>
            </button>
        </nav>
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