import { Link } from "react-router-dom";
import "./navigation.css";

export function Navigation() {
    return (
        <nav className="navbar">
            <div className="nav-logo">
                <Link to="/">Cantar</Link>
            </div>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/pricing">Pricing</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className="nav-btns">
                <Link to="/login" className="btn">Login</Link>
                <Link to="/register" className="btn">Register</Link>
            </div>
        </nav>
    )
}