import { Link } from "react-router-dom";
import "./navigation.css";

export function Navigation() {
    return (
        <nav>
            <Link to="/" className="logo">
                <i className="ri-token-swap-fill icon"></i>
                <span>Coin<span className="purple">Search</span></span>
            </Link>
        </nav>
    )
}