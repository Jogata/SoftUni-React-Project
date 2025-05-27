import { useState } from "react";
import { Link } from "react-router-dom";
import "./navigation.css";

export function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const homeSectionClass = isMenuOpen ? "navbar navbar-bg" : "navbar";
    const logoClass = isMenuOpen ? "logo dark" : "logo";
    const menuButtonClass = !isMenuOpen ? "ri-menu-3-line icon" : "ri-close-line icon";
    const mobilMenuClass = isMenuOpen ? "mobile-menu active" : "mobile-menu";

    return (
        <div id="home" className={homeSectionClass}>
            <div className={logoClass}>
                <h2>BEACHES.</h2>
            </div>
            <ul className="nav-menu">
                <li>
                    <Link to="#home">Home</Link>
                </li>
                <li>
                    <Link to="#destinations">Destinations</Link>
                </li>
                <li>
                    <Link to="#travel">Travel</Link>
                </li>
                <li>
                    <Link to="#book">Book</Link>
                </li>
                <li>
                    <Link to="#views">Views</Link>
                </li>

            </ul>
            <div className="nav-icons">
                <i className="fa fa-search icon" />
                <i className="fa fa-user-o icon" />
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                <i className={menuButtonClass}></i>
            </div>

            <div className={mobilMenuClass}>
                <ul className="mobile-nav">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/destinations">Destinations</Link>
                    </li>
                    <li>
                        <Link to="/travel">Travel</Link>
                    </li>
                    <li>
                        <Link to="/book">Book</Link>
                    </li>
                    <li>
                        <Link to="/views">Views</Link>
                    </li>
                </ul>
                <div className="mobile-menu-bottom">
                    <div className="menu-icons">
                        <button>Search</button>
                        <button>Account</button>
                    </div>
                    <div className="social-icons">
                        <i className="fa fa-facebook icon"></i>
                        <i className="fa fa-instagram icon"></i>
                        <i className="fa fa-twitter icon"></i>
                        <i className="fa fa-pinterest icon"></i>
                        <i className="fa fa-youtube-play icon"></i>
                    </div>
                </div>
            </div>

        </div>
    )
}