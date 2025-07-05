import { useEffect, useState } from "react";
import "./sidebar.css";

export function Sidebar() {
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
        console.log(data.products);
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

  return (
    <div className="sidebar">
      <h1>React Store</h1>

      <section>
        <input
          type="text"
          placeholder="Search Product"
        />
        <div className="search-btns">
          <input
            type="number"
            placeholder="Min"
          />
          <input
            type="number"
            placeholder="Max"
          />
        </div>

        {/* Categories Section */}
        <div className="categories">
          <h2>Categories</h2>
          <div>
            {categories.map((category, index) => (
              <label key={index} className="block mb-2">
                <input
                  type="radio"
                  name="category" 
                  className="radio"
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
              <button key={index}>
                {keyword.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <button className="reset">
          Reset Filters
        </button>
      </section>
    </div>
  );
};