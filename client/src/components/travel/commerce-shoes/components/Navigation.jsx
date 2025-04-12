export function Navigation() {
    return (
        <nav className="navigation">
            <div className="logo">
                <span>Logo</span>
            </div>
            <form className="search-form">
                <label htmlFor="search">
                    search
                    <i className="ri-search-line"></i>
                </label>
                <input type="text" name="search" id="search" placeholder="Search for products" />
            </form>
            <div className="cart">
                <i className="fa fa-shopping-cart"></i>
                <span className="amount">0</span>
                <i className="fa fa-user-o"></i>
            </div>
        </nav>
    )
}