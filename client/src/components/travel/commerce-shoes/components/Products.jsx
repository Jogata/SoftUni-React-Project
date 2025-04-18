import { useContext } from "react";
import { ShopContext } from "../contexts/ShopContext";
import { Link } from "react-router-dom";

export function Products() {
    const { filteredProducts, addToCart } = useContext(ShopContext);

    return (
        <div className="products-section">
            <h2>Our Collection</h2>
            <div className="products">
                {filteredProducts.map(product => {
                    const { id, image, title, price } = product;
                    return (
                        <div key={id} className="product">
                            <div className="product-image-box">
                                <img src={image} alt="product-img" />
                                <div className="card-buttons">
                                    <button onClick={() => addToCart(product, id)}>
                                        <i className="fa fa-cart-plus"></i>
                                    </button>
                                    <Link to={"/cart"}>
                                        <i className="fa fa-eye"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="product-info">
                                <h3>{title}</h3>
                                <p>${price}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}