import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { Link } from "react-router-dom";
import "./navigation.css";

export function Navigation() {
    const { itemsAmount } = useContext(ShopContext);
    console.log("nav");

    return (
        <nav className="navigation">
            <div className="logo">
                <h2>Kento Furniture</h2>
            </div>
            <div className="links">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li>Products</li>
                </ul>
            </div>
            <div className="nav-icons">
                <Link to="/cart">
                    <div className="nav-cart">
                        <i className="ri-shopping-cart-line nav-icon"></i>
                        <span className="nav-cart-amount">{itemsAmount}</span>
                    </div>
                </Link>
                <i className="fa fa-user-o nav-icon"></i>
            </div>
        </nav>
    )
};