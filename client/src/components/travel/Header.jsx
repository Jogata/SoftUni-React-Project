import { useContext, useState } from "react";
import { ShopContext } from "../../contexts/AuthContext";

export function Navigation() {
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
    // console.log("SearchField");

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
    return (
        <div className="page-container">
            {children}
        </div>
    )
}

function FiltersSection({children}) {
    return (
        <div className="filters-container">
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
    console.log("Products");
    const { filtered } = useContext(ShopContext);
    const [sortType, setSortType] = useState("relevant");
    let sorted = [...filtered];

    // function sortProduct() {
    //     switch (sortType) {
    //         case "low-high":
    //             sorted.sort((a, b) => a.price - b.price);
    //             break;
    //         case "high-low":
    //             sorted.sort((a, b) => b.price - a.price);
    //             break;
    //         default:
    //             sorted = [...filtered];
    //             break;
    //     }
    // }

    function sortProduct(type) {
        const sort = {
            "low": () => sorted.sort((a, b) => a.price - b.price), 
            "high": () => sorted.sort((a, b) => b.price - a.price), 
            "relevant": () => sorted = [...filtered]
        }

        sort[type]();
    }
    
    sortProduct(sortType);

    return (
        <div className="products-container">
            <div className="products-header">
                <h2>All Collection</h2>
                <PriceFilters setSortType={setSortType} />
                {/* <select className="sort-dropdown">
                    <option 
                        value="relevant" 
                        onClick={(e) => setSortType(e.target.value)}
                    >
                        Sort by: Relevant
                    </option>
                    <option 
                        value="low" 
                        onClick={(e) => setSortType(e.target.value)}
                    >
                        Sort by: Low to High
                    </option>
                    <option 
                        value="high" 
                        onClick={(e) => setSortType(e.target.value)}
                    >
                        Sort by: High to Low
                    </option>
                </select> */}
            </div>

            <div className="product-grid">
                {sorted.map(product => (
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

function PriceFilters({setSortType}) {
    console.log("PriceFilters");

    return (
        <select className="sort-dropdown">
            <option
                value="relevant"
                onClick={(e) => setSortType(e.target.value)}
            >
                Sort by: Relevant
            </option>
            <option
                value="low"
                onClick={(e) => setSortType(e.target.value)}
            >
                Sort by: Low to High
            </option>
            <option
                value="high"
                onClick={(e) => setSortType(e.target.value)}
            >
                Sort by: High to Low
            </option>
        </select>
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