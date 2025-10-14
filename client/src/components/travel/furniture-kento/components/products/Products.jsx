import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { Link } from "react-router-dom";
import "./products.css";

export function Products({ category }) {
    const { products } = useContext(ShopContext);

    let filtered = products;

    if (category != "All") {
        filtered = products.filter(p => p.category === category)
    }

    return (
        <div>
            <div className="products">
                <h2>Our <span>Elegant Collections</span></h2>
                <div className="products-grid">
                    {filtered.map(product => {
                        const { id, image, name, price } = product;
                        // if (category === "All" || category === product.category) {
                            return (
                                <div className="product-card" key={id}>
                                    <Link to={`/product/${product.id}`}>
                                        <img src={image} alt="" className="product-image" />
                                        <h4>{name}</h4>
                                    </Link>
                                    <div className="product-info">
                                        <p className="price">${price}</p>
                                        <button className="add-to-cart">
                                            <i className="fa fa-plus cart-icon"></i>
                                        </button>
                                    </div>
                                </div>
                            )
                        // }
                    })}
                </div>
            </div>
        </div>
    )
}