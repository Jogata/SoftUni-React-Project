import { useEffect, useState } from "react";
import { useFilter } from "../FiltrContext";
import "./main-content.css";

export function MainContent() {
    const {
        searchQuery,
        selectedCategory,
        minPrice,
        maxPrice,
        keyword
    } = useFilter();

    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const itemsPerPage = 12;

    useEffect(() => {
        let url = `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${(currentPage - 1) * itemsPerPage}`;

        if (keyword) {
            url = `https://dummyjson.com/products/search?q=${keyword}`;
        }

        fetch(url)
            .then(response => response.json())
            .then(data => setProducts(data.products))
            // .then(data => console.log(data))
            .catch((error) => {
                console.error("Error fetching data: ", error);
            });
    }, [currentPage, keyword]);

    const getFilteredProducts = () => {
        let filteredProducts = products;

        if (selectedCategory) {
            filteredProducts = filteredProducts.filter(
                (product) => product.category === selectedCategory
            );
        }

        if (minPrice !== undefined) {
            filteredProducts = filteredProducts.filter(
                (product) => product.price >= minPrice
            );
        }

        if (maxPrice !== undefined) {
            filteredProducts = filteredProducts.filter(
                (product) => product.price <= maxPrice
            );
        }

        if (searchQuery) {
            filteredProducts = filteredProducts.filter((product) =>
                product.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        switch (filter) {
            case "expensive":
                return filteredProducts.sort((a, b) => b.price - a.price);
            case "cheap":
                return filteredProducts.sort((a, b) => a.price - b.price);
            case "popular":
                return filteredProducts.sort((a, b) => b.rating - a.rating);
            default:
                return filteredProducts;
        }
    };

    const filteredProducts = getFilteredProducts();

    const totalProducts = 100;
    const totalPages = Math.ceil(totalProducts / itemsPerPage);

    const handlePageChange = (page) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const getPaginationButtons = () => {
        const buttons = [];
        let startPage = Math.max(1, currentPage - 2);
        let endPage = Math.min(totalPages, currentPage + 2);

        if (currentPage - 2 < 1) {
            endPage = Math.min(totalPages, endPage + (2 - (currentPage - 1)));
        }

        if (currentPage + 2 > totalPages) {
            startPage = Math.max(1, startPage - (2 - (totalPages - currentPage)));
        }

        for (let page = startPage; page <= endPage; page++) {
            buttons.push(page);
        }

        return buttons;
    };

    return (
        <section className="main-content">
            <div className="">
                <div className="">
                    <div className="">
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className=""
                        >
                            {filter === "all"
                                ? "Filter"
                                : filter.charAt(0).toUpperCase() + filter.slice(1)}
                        </button>
                        {dropdownOpen && (
                            <div className="">
                                <button
                                    onClick={() => setFilter("cheap")}
                                    className=""
                                >
                                    Cheap
                                </button>
                                <button
                                    onClick={() => setFilter("expensive")}
                                    className=""
                                >
                                    Expensive
                                </button>
                                <button
                                    onClick={() => setFilter("popular")}
                                    className=""
                                >
                                    Popular
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                <div className="products">
                    {filteredProducts.map(product => (
                        <div className="product" key={product.id}>
                            <a href={`/product/${product.id}`}>
                                <img src={product.images[0]} alt={product.title} />
                                <h2>{product.title}</h2>
                                <p>${product.price}</p>
                            </a>
                        </div>
                    ))}
                </div>

                <div className="pagination">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className=""
                    >
                        Previous
                    </button>

                    <div className="pages">
                        {getPaginationButtons().map((page) => (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                className={`${page === currentPage ? "page-btn active" : "page-btn"}`}
                            >
                                {page}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className=""
                    >
                        Next
                    </button>
                </div>
            </div>
        </section>
    );
};