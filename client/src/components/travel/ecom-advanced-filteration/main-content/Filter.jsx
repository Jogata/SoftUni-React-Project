import { useState } from "react";

export function Filter({ filter, setFilter }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
    <div className="filter relative">
    <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="dropdown-btn"
    >
        <i className="ri-menu-line"></i>
        {filter === "all"
            ? "Filter"
            : filter.charAt(0).toUpperCase() + filter.slice(1)}
    </button>
    {dropdownOpen && (
        <div className="dropdown">
            <button
                onClick={() => setFilter("cheap")}
                className="price-btn"
            >
                Cheap
            </button>
            <button
                onClick={() => setFilter("expensive")}
                className="price-btn"
            >
                Expensive
            </button>
            <button
                onClick={() => setFilter("popular")}
                className="price-btn"
            >
                Popular
            </button>
        </div>
    )}
</div>
    )
}