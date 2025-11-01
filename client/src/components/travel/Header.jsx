import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../contexts/AuthContext";

export function Navigation() {
    const { filterByQuery } = useContext(ShopContext);
    const [query, setQuery] = useState("");
    console.log("navigation");

    return (
        <nav className="navigation">
            <div className="nav-top">
                <h2>Luma</h2>
                <div className="search-bar">
                    <input
                        type="text"
                        className="search-input"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search for products...."
                    />
                    <button className="search-btn" onClick={() => filterByQuery(query)}>Search</button>
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
    const [test, setTest] = useState(0);
    console.log("HomeContent");
    console.log(test);

    return (
        <div className="page-container">
                        <button 
                            onClick={() => setTest(test + 1)} 
                            style={{color: "red", fontSize: "2rem", marginBottom: "auto"}}
                        >
                            test
                        </button>
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
    // const [categoryFilters, setCategoryFilters] = useState([]);
    // const [sizeFilters, setSizeFilters] = useState([]);
    const [materialFilters, setMaterialFilters] = useState([]);
    // console.log(categoryFilters);
    // console.log("Filters");

    // function check(e) {
    //     console.log(e.target.checked);
    // }

    function addFilter(e, setter) {
        // console.log("add");
        if (e.target.checked) {
            setter(oldArray => [...oldArray, e.target.value]);
        } else {
            setter(oldArray => oldArray.filter(cat => cat !== e.target.value));
        }
    }

    return (
        <details className="filters-container" open>
            <summary className="filter-title">
                FILTERS
            </summary>
            <CategoryFilters addFilter={addFilter} />
            <SizeFilters addFilter={addFilter} />
            {/* <fieldset className="filter-section">
                <legend className="filter-title">CLOTHING SIZE</legend>
                <label className="filter-item">
                    <input 
                        type="checkbox" 
                        name="size" 
                        value="Juniors" 
                    /> Juniors
                </label>
                <label className="filter-item">
                    <input 
                        type="checkbox" 
                        name="size" 
                        value="Petite" 
                    /> Petite
                </label>
                <label className="filter-item">
                    <input 
                        type="checkbox" 
                        name="size" 
                        value="Plussize" 
                    /> Plus Size
                </label>
            </fieldset> */}
            <MaterialFilters addFilter={addFilter} />
            {/* <fieldset className="filter-section">
                <legend className="filter-title">MATERIAL</legend>
                <label className="filter-item">
                    <input 
                        type="checkbox" 
                        name="material" 
                        value="Cotton" 
                    /> Cotton
                </label>
                <label className="filter-item">
                    <input 
                        type="checkbox" 
                        name="material" 
                        value="Leather" 
                    /> Leather
                </label>
                <label className="filter-item">
                    <input 
                        type="checkbox" 
                        name="material" 
                        value="Silk" 
                    /> Silk
                </label>
                <label className="filter-item">
                    <input 
                        type="checkbox" 
                        name="material" 
                        value="Suede" 
                    /> Suede
                </label>
            </fieldset> */}
        </details>
    )
}

function CategoryFilters({addFilter}) {
    const { filterByCategory } = useContext(ShopContext);
    const [categoryFilters, setCategoryFilters] = useState([]);
    // console.log(categoryFilters);
    
    useEffect(() => {
        // console.log(categoryFilters);
        filterByCategory(categoryFilters);
    }, [categoryFilters])

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

// export function name(params) {
//     return (
//         <fieldset className="filter-section">
//         <label className="filter-item">
//         </label>
//         <label className="filter-item">
//         </label>
//         <label className="filter-item">
//         </label>

//     </fieldset>

//     )
// }

function SizeFilters({addFilter}) {
    const { filterBySize } = useContext(ShopContext);
    const [sizeFilters, setSizeFilters] = useState([]);
    console.log(sizeFilters);
    
    useEffect(() => {
        // console.log(sizeFilters);
        filterBySize(sizeFilters);
    }, [sizeFilters])

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

function MaterialFilters({addFilter}) {
    const { filterByMaterial } = useContext(ShopContext);
    const [materialFilters, setMaterialFilters] = useState([]);
    console.log(materialFilters);
    
    useEffect(() => {
        // console.log(materialFilters);
        filterByMaterial(materialFilters);
    }, [materialFilters])

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
    // const { products } = props;
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