import { useState } from "react";
import "./navbar.css";

export function Navbar() {
    const [isOpen, setisOpen] = useState(false);

    const menuClasses = isOpen ? "nav-menu active" : "nav-menu";
    const menuButtonIconClass = isOpen ? "fa fa-times" : "fa fa-bars";

    const toggleMenu = () => setisOpen(!isOpen);

    return (
        <nav className="navigation">
            <div className="container">
                <span className="logo">De<span className="primary">Fi</span></span>
                <ul className={menuClasses}>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">Featured</a>
                    </li>
                    <li>
                        <a href="/">Earn</a>
                    </li>
                    <li>
                        <a href="/">Contact</a>
                    </li>
                </ul>
                <div className="btn-group">
                    <button className="btn">Connect Wallet</button>
                </div>
                <button className="hamburger" onClick={toggleMenu}>
                    <i className={menuButtonIconClass}></i>
                </button>
            </div>
        </nav>
    )
}