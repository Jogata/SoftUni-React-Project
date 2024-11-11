import { Link } from "react-router-dom"
import logo from "./assets/logo.svg"

export function Navbar() {
    return (
        <nav>
            {/* <h2 className="blue-text">navbar component</h2> */}
            <Link to="/" className="logo">
                {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
                    Creative Commons (Attribution 3.0 Unported);
                    https://www.iconfinder.com/Makoto_msk 
                */}
                <img src={logo} />
            </Link>
            <ul>
                <li>
                    <Link to="/">Products</Link>
                </li>
                <li className="cart-link">
                    <Link to="/cart">
                        <i className="fa fa-shopping-cart"></i>
                        my cart
                    </Link>
                </li>
            </ul>
        </nav>
    )
}