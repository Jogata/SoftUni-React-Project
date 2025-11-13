import { Link } from "react-router-dom";

export function Navigation() {
    return (
        <div>
            <div className="navigation">
                <div className="logo">
                    <h2>YBL Bags</h2>
                </div>
                <div className="links">
                    <ul>
                        <li>Home</li>
                        <li>Products</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="nav-icons">
                    <Link to="/cart">
                        <span className="nav-cart">
                            <i className="fa fa-shopping-bag nav-icon"></i>
                            <span className="cart-amount">0</span>
                        </span>
                    </Link>
                    <i className="fa fa-user-o nav-icon"></i>
                </div>
            </div>
        </div>
    )
}

// export function Header() {
//     return (
//         <header>
//             <img src="https://raw.githubusercontent.com/scrimba/learn-react/refs/heads/main/02.%20Data-Driven%20React/01.%20Section%202%20Intro/images/globe.png" alt="" />
//             <h1>my travel journal.</h1>
//         </header>
//     )
// }