import { useContext, useState } from "react";
import { ShopContext } from "../../contexts/AuthContext";

export function Navigation() {
    // const { setQuery } = useContext(ShopContext);
    // const [value, setValue] = useState("");
    console.log("Navigation");

    return (
        <nav className="navigation">
            <div className="nav-top">
                <h2>Luma</h2>
                <SearchField />
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

function SearchField() {
    const { setQuery } = useContext(ShopContext);
    const [value, setValue] = useState("");
    console.log("SearchField");

    return (
        <div className="search-field">
            <input
                type="text"
                className="search-input"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Search for products...."
            />
            <button
                className="search-btn"
                onClick={() => setQuery(value)}
            >
                Search
            </button>
        </div>
    )
}

export function Home() {
    // const [products, setProducts] = useState(data);
    // const [categoryFilters, setCategoryFilters] = useState([]);
    // const [sizeFilters, setSizeFilters] = useState([]);
    // const [materialFilters, setMaterialFilters] = useState([]);
    // const [query, setQuery] = useState("");
    // const filtered = applyAllFilters();

    // function addFilter(e, setter) {
    //     if (e.target.checked) {
    //         setter(oldArray => [...oldArray, e.target.value]);
    //     } else {
    //         setter(oldArray => oldArray.filter(cat => cat !== e.target.value));
    //     }
    // }

    // function applyAllFilters() {
    //     let filteredProducts = [...products];

    //     if (categoryFilters.length > 0) {
    //         filteredProducts = filterByCategory(filteredProducts);
    //     }

    //     if (sizeFilters.length > 0) {
    //         filteredProducts = filterBySize(filteredProducts);
    //     }

    //     if (materialFilters.length > 0) {
    //         filteredProducts = filterByMaterial(filteredProducts);
    //     }

    //     if (query.length > 0) {
    //         filteredProducts = filterByQuery(filteredProducts);
    //     }

    //     return filteredProducts;
    // }

    // function filterByCategory(products) {
    //     products = products.filter(p => {
    //         const isSameCategory = categoryFilters.includes(p.category);
    //         return isSameCategory;
    //     });
    //     return products;
    // }

    // function filterBySize(products) {
    //     products = products.filter(p => {
    //         const isSameSize = sizeFilters.includes(p.sizeCategory);
    //         return isSameSize;
    //     });
    //     return products;
    // }

    // function filterByMaterial(products) {
    //     products = products.filter(p => {
    //         const isSameMaterial = materialFilters.includes(p.material);
    //         return isSameMaterial;
    //     });
    //     return products;
    // }

    // function filterByQuery(products) {
    //     products = products.filter(p => (
    //         p.name.toLowerCase().includes(query.toLowerCase())
    //     ));
    //     return products;
    // }

    // const { filtered } = useContext(ShopContext);

    // const filtered = [...products];

    return (
        <HomeContent>
            <FiltersSection >
                <Filters />
            </FiltersSection>
            <Products />
        </HomeContent>
    )
}

function HomeContent({ children }) {
    // const [test, setTest] = useState(0);
    // console.log("HomeContent");
    // console.log(test);

    return (
        <div className="page-container">
                        {/* <button 
                            onClick={() => setTest(test + 1)} 
                            style={{color: "red", fontSize: "2rem", marginBottom: "auto"}}
                        >
                            test
                        </button> */}
            {children}
        </div>
    )
}

function FiltersSection({children}) {
    // const [test, setTest] = useState(0);
    // console.log(test);
    console.log("FiltersSection");
    // console.log(children);
    return (
        <div className="filters-container">
            {/* <button 
                onClick={() => setTest(test + 1)} 
                style={{color: "red", fontSize: "2rem"}}
            >
                test
            </button> */}
            {children}
        </div>
    )
}

function Filters() {
    console.log("Filters");
    return (
        <details className="filters-container" open>
            <summary className="filter-title">
                FILTERS
            </summary>
            <CategoryFilters />
            <SizeFilters />
            <MaterialFilters />
        </details>
    )
}

function CategoryFilters() {
    const { addFilter, setCategoryFilters } = useContext(ShopContext);

    return (
        <fieldset className="filter-section">
            <legend className="filter-title">GENDER</legend>
            <label className="filter-item">
                <input
                    type="checkbox"
                    name="category"
                    value="Men"
                    onChange={e => addFilter(e, setCategoryFilters)}
                /> Men
            </label>
            <label className="filter-item">
                <input
                    type="checkbox"
                    name="category"
                    value="Women"
                    onChange={e => addFilter(e, setCategoryFilters)}
                /> Women
            </label>
            <label className="filter-item">
                <input
                    type="checkbox"
                    name="category"
                    value="Kids"
                    onChange={e => addFilter(e, setCategoryFilters)}
                /> Kids
            </label>
        </fieldset>
    )
}

function SizeFilters() {
    const { addFilter, setSizeFilters } = useContext(ShopContext);

    return (
        <fieldset className="filter-section">
            <legend className="filter-title">CLOTHING SIZE</legend>
            <label className="filter-item">
                <input 
                    type="checkbox" 
                    name="size" 
                    value="Juniors" 
                    onChange={e => addFilter(e, setSizeFilters)}
                /> Juniors
            </label>
            <label className="filter-item">
                <input 
                    type="checkbox" 
                    name="size" 
                    value="Petite" 
                    onChange={e => addFilter(e, setSizeFilters)}
                /> Petite
            </label>
            <label className="filter-item">
                <input 
                    type="checkbox" 
                    name="size" 
                    value="Plussize" 
                    onChange={e => addFilter(e, setSizeFilters)}
                /> Plus Size
            </label>
        </fieldset>
    )
}

function MaterialFilters() {
    const { addFilter, setMaterialFilters } = useContext(ShopContext);

    return (
        <fieldset className="filter-section">
            <legend className="filter-title">MATERIAL</legend>
            <label className="filter-item">
                <input 
                    type="checkbox" 
                    name="material" 
                    value="Cotton" 
                    onChange={e => addFilter(e, setMaterialFilters)}
                /> Cotton
            </label>
            <label className="filter-item">
                <input 
                    type="checkbox" 
                    name="material" 
                    value="Leather" 
                    onChange={e => addFilter(e, setMaterialFilters)}
                /> Leather
            </label>
            <label className="filter-item">
                <input 
                    type="checkbox" 
                    name="material" 
                    value="Silk" 
                    onChange={e => addFilter(e, setMaterialFilters)}
                /> Silk
            </label>
            <label className="filter-item">
                <input 
                    type="checkbox" 
                    name="material" 
                    value="Suede" 
                    onChange={e => addFilter(e, setMaterialFilters)}
                /> Suede
            </label>
        </fieldset>
    )
}

function Products() {
    const { filtered } = useContext(ShopContext);
    console.log("Products");

    return (
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
                {filtered.map(product => (
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