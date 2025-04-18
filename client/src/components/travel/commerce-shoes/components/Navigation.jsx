import { useContext, useState } from "react";
import { ShopContext } from "../contexts/ShopContext";
import { Link } from "react-router-dom";

export function Navigation() {
    const { quantity, searchProducts } = useContext(ShopContext);
    const [query, setQuery] = useState("");

    const handleSearch = (e) => {
        console.log("change");
        setQuery(e.target.value);
        searchProducts(e.target.value);
    };

    return (
        <nav className="navigation">
            <div className="logo">
                <Link to={"/"}>
                    <span>Logo</span>
                </Link>
            </div>
            <form className="search-form">
                <label htmlFor="search">
                    search
                    <i className="ri-search-line"></i>
                </label>
                <input 
                    type="text" 
                    name="search" 
                    id="search" 
                    placeholder="Search for products" 
                    value={query}
                    onChange={(e) => handleSearch(e)}
                />
            </form>
            <div className="user-info">
                <div className="cart">
                    <Link to={"/cart"}>
                        <i className="fa fa-shopping-cart"></i>
                        <span className="amount">
                            {quantity}
                        </span>
                    </Link>
                </div>
                <i className="fa fa-user-o"></i>
            </div>
        </nav>
    )
}