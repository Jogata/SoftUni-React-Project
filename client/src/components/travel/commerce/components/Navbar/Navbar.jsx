import { Link } from "react-router-dom";
import "./navbar.css";

export function Navbar() {
    return (
        <nav className="e-navbar">
            {/* <h1>navbar</h1> */}
            <div className="logo">
                <span>ShopX</span>
            </div>
            <div className="links">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">Products</Link>
                    </li>
                    <li>
                        <Link to="/contacts">Contacts</Link>
                    </li>
                    <li>
                        <Link to="/app">App</Link>
                    </li>
                </ul>
            </div>
            <div className="nav-icons">
                <Link to={"/cart"} className="nav-cart">
                    <i className="ri-shopping-cart-line"></i>
                    <span className="cart-amount">0</span>
                </Link>
                <i className="fa fa-user-o"></i>
            </div>
        </nav>
    )
}