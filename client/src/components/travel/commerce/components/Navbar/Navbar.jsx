import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../ShopContext/ShopContext";
import "./navbar.css";

export function Navbar() {
    const {itemAmount} = useContext(ShopContext);
    const [classes, setClasses] = useState("e-navbar");
    // console.log(classes);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                // console.log("fixed");
                setClasses("e-navbar fixed");
            } else {
                setClasses("e-navbar");
            }
        })
    })

    return (
        <nav className={classes}>
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
                    <span className="cart-amount">{itemAmount}</span>
                </Link>
                <i className="fa fa-user-o"></i>
            </div>
        </nav>
    )
}