import "./navigation.css";

export function Navigation() {
    return (
        <nav>
            <div className="nav-container">
                <input
                    className="search-input" 
                    type="text" 
                    placeholder="Enter your search shoes."
                />
            </div>
            <div className="profile-container">
                <a href="#">
                    <i className="fa fa-heart nav-icons"></i>
                </a>
                <a href="">
                    <i className="fa fa-shopping-cart nav-icons"></i>
                </a>
                <a href="">
                    <i className="fa fa-user-o nav-icons"></i>
                </a>
            </div>
        </nav>
    );
};