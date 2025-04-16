import { useContext } from "react";
import { ShopContext } from "../contexts/ShopContext";

export function Navigation() {
    const { quantity } = useContext(ShopContext);
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
                <input 
                    type="text" 
                    name="search" 
                    id="search" 
                    placeholder="Search for products" 
                />
            </form>
            <div className="user-info">
                <div className="cart">
                    <i className="fa fa-shopping-cart"></i>
                    <span className="amount">
                        {quantity}
                    </span>
                </div>
                <i className="fa fa-user-o"></i>
            </div>
        </nav>
    )
}