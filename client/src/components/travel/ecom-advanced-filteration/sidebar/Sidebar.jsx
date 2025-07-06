import { useEffect, useState } from "react";
import { useFilter } from "../FiltrContext";
import "./sidebar.css";

export function Sidebar() {
    const {
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,
        keyword,
        setKeyword,
    } = useFilter();

    const [categories, setCategories] = useState([]);
    const [keywords] = useState([
        "apple",
        "watch",
        "Fashion",
        "trend",
        "shoes",
        "shirt",
    ]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch("https://dummyjson.com/products");
                const data = await response.json();
                // console.log(data.products);
                const uniqueCategories = Array.from(
                    new Set(data.products.map((product) => product.category))
                );
                setCategories(uniqueCategories);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchCategories();
    }, []);

    const handleMinPriceChange = (e) => {
        const value = e.target.value;
        console.log(value);
        setMinPrice(value ? parseFloat(value) : undefined);
    };

    const handleMaxPriceChange = (e) => {
        const value = e.target.value;
        console.log(value);
        setMaxPrice(value ? parseFloat(value) : undefined);
    };

    const handleRadioChangeCategories = (category) => {
        console.log(category);
        setSelectedCategory(category);
    };

    const handleKeywordClick = (keyword) => {
        console.log(keyword);
        setKeyword(keyword);
    };

    const handleResetFilters = () => {
        setSearchQuery("");
        setSelectedCategory("");
        setMinPrice(undefined);
        setMaxPrice(undefined);
        setKeyword("");
    };
        
    return (
        <div className="sidebar">
            <h1>React Store</h1>

            <section>
                <input
                    type="text"
                    placeholder="Search Product" 
                    value={searchQuery} 
                    onChange={e => setSearchQuery(e.target.value)} 
                />
                <div className="search-btns">
                    <input
                        type="number"
                        placeholder="Min" 
                        min={0}
                        value={minPrice ?? ""} 
                        onChange={e => handleMinPriceChange(e)} 
                    />
                    <input
                        type="number"
                        placeholder="Max" 
                        min={minPrice}
                        value={maxPrice ?? ""} 
                        onChange={e => handleMaxPriceChange(e)} 
                    />
                </div>

                <div className="categories">
                    <h2>Categories</h2>
                    <div>
                        {categories.map((category, index) => (
                            <label key={index} className="block mb-2">
                                <input
                                    type="radio"
                                    name="category"
                                    className="radio" 
                                    value={category} 
                                    onChange={() => handleRadioChangeCategories(category)} 
                                    checked={selectedCategory === category}
                                />
                                {category.toUpperCase()}
                            </label>
                        ))}
                    </div>
                </div>

                {/* Keywords Section */}
                <div className="keywords">
                    <h2>Keywords</h2>
                    <div>
                        {keywords.map((keyword, index) => (
                            <button 
                                key={index} 
                                onClick={() => handleKeywordClick(keyword)}
                            >
                                {keyword.toUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>

                <button 
                    className="reset" 
                    onClick={handleResetFilters}
                >
                    Reset Filters
                </button>
            </section>
        </div>
    );
};