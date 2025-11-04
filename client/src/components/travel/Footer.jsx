import { useContext, useState } from "react";
import { ShopContext1 } from "../../contexts/AuthContext";

export function Navbar() {
    const { updateSearchTerm } = useContext(ShopContext1);

    const [searchInput, setSearchInput] = useState("");

    const handleSearch = () => {
        updateSearchTerm(searchInput);
    }

    return (
        <div>
            <nav className="navigation">
                <div className="nav-top">
                    <h2>Luma</h2>
                    <div className="search-bar">
                        <input
                            type="text"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                            className="search-input" 
                            placeholder="Search for products..."
                        />
                        <button
                            onClick={handleSearch}
                            className="search-btn"
                        >
                            Search
                        </button>
                    </div>
                    <div className="icons">
                        <div className="profile-group">
                            <i className="fa fa-user-o icon"></i>
                        </div>
                        <div className="cart-icon">
                            <i className="fa fa-shopping-cart icon"></i>
                            <span className="cart-count">0</span>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export function ProductFilter() {
    const { products } = useContext(ShopContext1);

    return (
        <>
            <div className="filter-and-products-container">
                <div className="products-container">
                    <div className="products-header">
                        <h2>All Collection</h2>
                        <select className="sort-dropdown">
                            <option value="relevant">Sort by: Relevant</option>
                            <option value="low-high">Sort by: Low to High</option>
                            <option value="high-low">Sort by: High to Low</option>
                        </select>
                    </div>

                    <div className="product-grid">
                        {products.map((product) => (
                            <div className="product-card" key={product._id}>
                                <div className="product-image">
                                    <img src={product.image[0]} alt={product.name} />
                                </div>
                                <h3>{product.name}</h3>
                                <p>${product.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

// export function Footer() {
//     return (
//         <div className="footer">
//             <div className="footer-content">
//                 <div className="footer-name">
//                     <h2>Nika Shoes</h2>
//                 </div>
//                 <div className="footer-socials">
//                     <i className="fa fa-facebook footer-icon"></i>
//                     <i className="fa fa-instagram footer-icon"></i>
//                     <i className="fa fa-twitter footer-icon"></i>
//                 </div>
//             </div>
//             <div className="copy">
//                 <p>Copyright © Nika Shoes 2024. All rights reserved</p>
//             </div>
//         </div>
//     )
// }