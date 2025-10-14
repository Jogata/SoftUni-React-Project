import { Link } from "react-router-dom";
import "./navigation.css";

export function Navigation() {
    return (
        <nav className="navigation">
            <div className="logo">
                <h2>Kento Furniture</h2>
            </div>
            <div className="links">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li>About</li>
                    <li>Products</li>
                </ul>
            </div>
            <div className="nav-icons">
                <a href='#cart'>
                    <div className="nav-cart">
                        <i className="ri-shopping-cart-line nav-icon"></i>
                        <span className="nav-cart-amount">0</span>
                    </div>
                </a>
                <i className="fa fa-user-o nav-icon"></i>
            </div>
        </nav>
    )
};