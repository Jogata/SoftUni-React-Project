import { useContext, useEffect, useState } from "react";
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
                    <div className="search-field">
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
    const { products, searchTerm } = useContext(ShopContext1);
    const [displayFilter, setDisplayFilter] = useState(false);
    const [filteredProduct, setFilteredProduct] = useState([]);
    const [category, setCategory] = useState([]);
    const [sizeCategory, setSizeCategory] = useState([]);
    const [material, setMaterialCategory] = useState([]);
    const [sortType, setSortType] = useState("relevant");
    console.log(sortType);

    useEffect(() => {
        filterResults();
    }, [category, sizeCategory, material, searchTerm, products]);

    useEffect(() => {
        sortProduct();
    }, [sortType]);

    function filterResults() {
        let filtered = [...products];

        if (searchTerm) {
            filtered = filtered.filter(item => 
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (category.length > 0) {
            filtered = filtered.filter(
                item => category.includes(item.category)
            );
        }

        if (sizeCategory.length > 0) {
            filtered = filtered.filter(
                item => sizeCategory.includes(item.sizeCategory)
            );
        }

        if (material.length > 0) {
            filtered = filtered.filter(
                item => material.includes(item.material)
            );
        }

        setFilteredProduct(filtered);
    };

    function toggleCategory(e) {
        if (category.includes(e.target.value)) {
            setCategory(prev => prev.filter(item => item !== e.target.value));
        } else {
            setCategory(prev => [...prev, e.target.value]);
        }
    };

    function toggleSizeCategory(e) {
        if (sizeCategory.includes(e.target.value)) {
            setSizeCategory(prev => prev.filter(item => item !== e.target.value));
        } else {
            setSizeCategory(prev => [...prev, e.target.value]);
        }
    };

    function toggleMaterialCategory(e) {
        if (material.includes(e.target.value)) {
            setMaterialCategory(prev => prev.filter(item => item !== e.target.value));
        } else {
            setMaterialCategory(prev => [...prev, e.target.value]);
        }
    };

    function sortProduct() {
        let sorted = [...filteredProduct];
        console.log(sorted);

        switch (sortType) {
            case "low-high":
                setFilteredProduct(sorted.sort((a, b) => a.price - b.price));
                break;

            case "high-low":
                setFilteredProduct(sorted.sort((a, b) => b.price - a.price));
                break;

            default:
                filterResults();
                break;
        }
    };

    return (
        <>
            <div className="page-container">

                <div className="filter-container">
                    <p
                        onClick={() => setDisplayFilter(!displayFilter)}
                        className="filter-title"
                    >
                        FILTERS
                    </p>

                    <div className={`filter-section ${displayFilter ? "" : "hidden"}`}>
                        <p className="filter-sizetitle">GENDER</p>
                        <p className="filter-item">
                            <input type="checkbox" onChange={toggleCategory} value="Men" /> Men
                        </p>
                        <p className="filter-item">
                            <input type="checkbox" onChange={toggleCategory} value="Women" /> Women
                        </p>
                        <p className="filter-item">
                            <input type="checkbox" onChange={toggleCategory} value="Kids" /> Kids
                        </p>
                    </div>

                    <div className={`filter-section ${displayFilter ? "" : "hidden"}`}>
                        <p className="filter-sizetitle">CLOTHING SIZE</p>
                        <div className="filter-sizecategory">
                            <p className="filter-item">
                                <input type="checkbox" onChange={toggleSizeCategory} value="Juniors" /> Juniors
                            </p>
                            <p className="filter-item">
                                <input type="checkbox" onChange={toggleSizeCategory} value="Petite" /> Petite
                            </p>
                            <p className="filter-item">
                                <input type="checkbox" onChange={toggleSizeCategory} value="Plussize" /> Plus Size
                            </p>
                        </div>
                    </div>

                    <div className={`filter-section ${displayFilter ? "" : "hidden"}`}>
                        <p className="filter-sizetitle">MATERIAL</p>
                        <div className="filter-sizecategory">
                            <p className="filter-item">
                                <input type="checkbox" onChange={toggleMaterialCategory} value="Cotton" /> Cotton
                            </p>
                            <p className="filter-item">
                                <input type="checkbox" onChange={toggleMaterialCategory} value="Leather" /> Leather
                            </p>
                            <p className="filter-item">
                                <input type="checkbox" onChange={toggleMaterialCategory} value="Silk" /> Silk
                            </p>
                            <p className="filter-item">
                                <input type="checkbox" onChange={toggleMaterialCategory} value="Suede" /> Suede
                            </p>
                        </div>
                    </div>
                </div>

                <div className="products-container">
                    <div className="products-header">
                        <h2>All Collection</h2>
                        <select 
                            className="sort-dropdown" 
                            onChange={(e) => setSortType(e.target.value)} 
                        >
                            <option value="relevant">Sort by: Relevant</option>
                            <option value="low-high">Sort by: Low to High</option>
                            <option value="high-low">Sort by: High to Low</option>
                        </select>
                    </div>

                    <div className="product-grid">
                        {filteredProduct.map((product) => (
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