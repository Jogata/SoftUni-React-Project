import { useState } from "react";
import "./navigation.css";

export function Navigation() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const mobileNavClass = isNavOpen ? "mobile-nav" : "mobile-nav open";

    function toggleNavigation() {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <nav>
            <div className="desktop-nav">
            <ul className="nav-links desktop-menu">
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='#gallery'>Gallery</a>
                </li>
                <li>
                    <a href='#deals'>Deals</a>
                </li>
                <li>
                    <a href='#contact'>Contact</a>
                </li>
            </ul>

            <ul className="socail-links">
                <li><i className="fa fa-facebook"></i></li>
                <li><i className="fa fa-twitter"></i></li>
                <li><i className="fa fa-google-plus"></i></li>
                <li><i className="fa fa-instagram"></i></li>
            </ul>

            <button onClick={toggleNavigation} className="menu-button">
                <i className="fa fa-bars"></i>
            </button>
            </div>

            <div className={mobileNavClass} onClick={toggleNavigation}>
                <ul>
                    <li className='text-2xl py-8'>
                        <a href='/'>Home</a>
                    </li>
                    <li className='text-2xl py-8'>
                        <a href='#gallery'>Gallery</a>
                    </li>
                    <li className='text-2xl py-8'>
                        <a href='#deals'>Deals</a>
                    </li>
                    <li className='text-2xl py-8'>
                        <a href='#contact'>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}