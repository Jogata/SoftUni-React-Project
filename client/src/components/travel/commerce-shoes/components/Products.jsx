import { useContext } from "react";
import { ShopContext } from "../contexts/ShopContext";

export function Products() {
    const products = useContext(ShopContext);

    return (
        <div className="products-section">
            <h2>Our Collection</h2>
            <div className="products">
                {products.map(product => {
                    const { id, image, title, price } = product;
                    return (
                        <div key={id} className="product">
                            <div className="product-image-box">
                                <img src={image} alt="product-img" />
                                <div className="card-buttons">
                                    <button>
                                        <i className="fa fa-cart-plus"></i>
                                    </button>
                                    <a href="#cart">
                                        <i className="fa fa-eye"></i>
                                    </a>
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