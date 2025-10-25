import { useContext } from "react";
import { ProductsContext, ShopContext } from "../../context/ShopContext";
import { Link } from "react-router-dom";
import "./products.css";

export function Products({ category }) {
    const { products } = useContext(ProductsContext);

    let filtered = products;

    if (category != "All") {
        filtered = products.filter(p => p.category === category)
    }

    return (
        <div className="products" id="products">
            <h2>Our <span>Elegant Collections</span></h2>
            <div className="products-grid">
                {filtered.map(product => {
                    const { id, image, name, price } = product;
                    return (
                        <div className="product-card" key={id}>
                            <Link to={`/product/${product.id}`}>
                                <img src={image} alt="" className="product-image" />
                                <h4>{name}</h4>
                            </Link>
                            <div className="product-info">
                                <p className="price">${price}</p>
                                <Button product={product} />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

function Button({product}) {
    const { addToCart } = useContext(ShopContext);

    return (
        <button 
            className="add-to-cart" 
            onClick={() => addToCart(product)}
        >
            <i className="fa fa-plus cart-icon"></i>
        </button>
    )
}