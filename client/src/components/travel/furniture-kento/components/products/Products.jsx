import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { Link } from "react-router-dom";
import "./products.css";
// import { productsData } from "../../data";

export function Products({ category }) {
    const { products } = useContext(ShopContext);

    return (
        <div>
            <div className="products">
                <h2>Our Elegant Collections</h2>
                <div className="products-grid">
                    {products.map(product => {
                        const { id, image, name, price } = product;
                        if (category === "All" || category === product.category) {
                            return (
                                <div className="product-card" key={id}>
                                    <Link to={`/product/${product.id}`}>
                                        <img src={image} alt="" className="product-image" />
                                        <h4>{name}</h4>
                                    </Link>
                                    <div className="product-info">
                                        <p className="price">${price}</p>
                                        <p className="add-to-cart">
                                            <i className="fa fa-plus cart-icon"></i>
                                        </p>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        </div>
    )
}