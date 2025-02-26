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
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Products</a>
                    </li>
                    <li>
                        <a href="">Contacts</a>
                    </li>
                    <li>
                        <a href="">App</a>
                    </li>
                </ul>
            </div>
            <div className="nav-icons">
                <button className="nav-cart">
                    <i className="ri-shopping-cart-line"></i>
                    <span className="cart-amount">0</span>
                </button>
                <i className="fa fa-user-o"></i>
            </div>
        </nav>
    )
}