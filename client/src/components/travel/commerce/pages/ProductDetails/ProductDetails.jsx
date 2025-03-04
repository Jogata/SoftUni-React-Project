import { useParams } from "react-router-dom"
import { useContext } from "react";
import { ShopContext } from "../../components/ShopContext/ShopContext";
import { productsData } from "../../data";
import "./ProductDetails.css";

export function ProductDetails() {
    const {id} = useParams();
    // const id = 1;
    // console.log(id);
    const {addToCart} = useContext(ShopContext);

    const product = productsData.find(item => {
        return item.id === parseInt(id);
    });

    return (
        <div className="product-details-info">
            <div className="details-left">
                <img src={product.image} alt="" />
            </div>
            <div className="details-right">
                <h3>{product.title}</h3>
                <p className="product-price">
                    $ {product.price}
                </p>
                <p className="description">
                    {product.description}
                </p>
                <button onClick={() => addToCart(product, parseInt(id))}>
                    Add To Cart
                </button>
            </div>
        </div>
    )
}