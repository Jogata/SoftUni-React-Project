import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../contexts/AuthContext";

export function Navigation() {
    return (
        <nav className="navigation">
            <div className="nav-top">
                <h2>Luma</h2>
                <div className="search-bar">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search for products...."
                    />
                    <button className="search-btn">Search</button>
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
    )
}

export function Home() {
    const { products, searchTerm } = useContext(ShopContext);
    const [displayFilter, setDisplayFilter] = useState(false);

    return (
        <>
            <div className="page-container">
                <div className="filters-container">
                    <p
                        className="filter-title"
                        onClick={() => setDisplayFilter(!displayFilter)}
                    >
                        FILTERS
                    </p>
                    <div className={`filter-section ${displayFilter ? '' : 'hidden'}`}>
                        <p className="filter-title">GENDER</p>
                        <label className="filter-item">
                            <input type="checkbox" value="Men" /> Men
                        </label>
                        <label className="filter-item">
                            <input type="checkbox" value="Women" /> Women
                        </label>
                        <label className="filter-item">
                            <input type="checkbox" value="Kids" /> Kids
                        </label>
                    </div>
                </div>
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

// https://github.com/Zhully18/Powerful-filtering-react-js

// export function Header() {
//     return (
//         <header>
//             <img src="https://raw.githubusercontent.com/scrimba/learn-react/refs/heads/main/02.%20Data-Driven%20React/01.%20Section%202%20Intro/images/globe.png" alt="" />
//             <h1>my travel journal.</h1>
//         </header>
//     )
// }