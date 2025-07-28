import { useEffect, useState } from 'react';
import logo from "../../images/logo.png";
import './navbar.css';

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDark, setIsDark] = useState(true);

    let headerClass = "header dark-bg";

    if (!isDark) {
        headerClass = "header";
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
            headerClass = "header";
            setIsDark(false);
        }

        window.addEventListener("scroll", changeColor);
    }, [])

    const handleClick = () => setIsMenuOpen(!isMenuOpen);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <div className={headerClass}>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src={logo} alt='logo' />
                </a>
                <div className='hamburger' onClick={handleClick}>
                    <i className="fa fa-bars"></i>
                </div>
                <ul className={isMenuOpen ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href='/' onClick={closeMenu}>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about' onClick={closeMenu}>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#testimonials' onClick={closeMenu}>Testimonials</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#demo' onClick={closeMenu}>Demo</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}