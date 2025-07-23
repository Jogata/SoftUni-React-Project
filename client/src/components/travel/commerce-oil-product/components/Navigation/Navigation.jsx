import "./navigation.css";

export function Navigation() {
    return (
        <nav className="nav" id="top">
            <div className="navigation">
                <div className="nav-header">
                    <a href="#top" className="nav-logo">
                        Healing <span>Bird</span>
                    </a>
                </div>
                <div className="nav-links">
                    <ul>
                        <li><a href="#shop">SHOP</a></li>
                        <li><a href="#about">ABOUT</a></li>
                        <li><a href="#contact">CONTACT</a></li>
                        <li><a href="#blog">BLOG</a></li>
                    </ul>
                </div>
                <div className="nav-icons">
                    <i className="ri-search-line icon"></i>
                    <i className="fa fa-shopping-cart icon"></i>
                    <i className="fa fa-user-o icon"></i>
                </div>
            </div>
        </nav>
    )
}