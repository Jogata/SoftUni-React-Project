import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export default function PageNavigation() {
    const { isAuthenticated } = useContext(AuthContext);
    // console.log("nav");
    return (
        <>
            <nav className="main-nav alt">
                {/* <a href="#" className="logo">Logo</a> */}
                <Link to="/skyrim" className="logo skyrim-logo">
                    <img src="/skyrim-favicon-192.png" alt="Skyrim logo" />
                </Link>
                <ul className="nav-list">
                    <li><Link to='/' className="nav-link">main</Link></li>
                    <li><Link to="/skyrim" className="nav-link">home</Link></li>
                    <li className="sub-nav">
                        <Link to="/skyrim-overview" className="nav-link">info</Link>
                        <ul>
                            <li><Link to="/skyrim-overview" className="nav-link">overview</Link></li>
                            <li><Link to="/skyrim-locations" className="nav-link">locations</Link></li>
                            <li><Link to="/skyrim-equipment" className="nav-link">equipment</Link></li>
                            <li><a href="./skyrim-overview.html" className="nav-link">races</a></li>
                            <li><a href="./skyrim-overview.html" className="nav-link">skills</a></li>
                            <li><a href="./skyrim-overview.html" className="nav-link">spells</a></li>
                            <li><a href="./skyrim-overview.html" className="nav-link">overview</a></li>
                        </ul>
                    </li>
                    <li><Link to="/raids" className="nav-link">raids</Link></li>
                    <li><a href="#" className="nav-link">contact</a></li>
                    {isAuthenticated
                        ? (
                            <li><Link to="/logout" className="nav-link">logout</Link></li>
                        ) : (
                        <>
                            <li><Link to="/login" className="nav-link">login</Link></li>
                            <li><Link to="/register" className="nav-link">register</Link></li>
                        </>
                    )}
                </ul>
                <button id="menu-btn">
                    menu <i className="ri-menu-3-line"></i>
                </button>
            </nav>
        </>
    )
}