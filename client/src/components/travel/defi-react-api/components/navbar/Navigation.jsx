import { useState } from "react";
import "./navigation.css";

export function Navigation() {
    const [isOpen, setisOpen] = useState(false);

    const navClasses = isOpen ? "nav active" : "nav";
    const menuButtonIconClass = isOpen ? "fa fa-times icon" : "fa fa-bars icon";

    const toggleMenu = () => setisOpen(!isOpen);

    return (
        <div className="navigation">
            <div className="container">
                <span className="logo">Defi</span>
                <ul className={navClasses}>
                    <li className="nav-item">
                        <a href="/">Platform</a>
                    </li>
                    <li className="nav-item">
                        <a href="/">Developers</a>
                    </li>
                    <li className="nav-item">
                        <a href="/">Community</a>
                    </li>
                    <li className="nav-item">
                        <a href="/">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="btn" href="/">Use Defi</a>
                    </li>
                </ul>
                <button onClick={toggleMenu} className="hamburger">
                    <i className={menuButtonIconClass}></i>
                </button>
            </div>
        </div>
    )

}