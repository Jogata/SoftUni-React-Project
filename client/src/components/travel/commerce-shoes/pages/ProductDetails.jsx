import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../contexts/ShopContext";

export function ProductDetails() {
    const { id } = useParams();
    // console.log(id);
    const { products, addToCart } = useContext(ShopContext);
    // console.log(products);

    const product = products.find(p => p.id == id);
    console.log(product);

    return (
        <div className="products-section">
            <div className="">
                <div className="">
                    <img src={product.image} alt="" className="" />
                </div>
                <div className="">
                    <h2 className="">{product.title}</h2>
                    <p className="">$ {product.price}</p>
                    <p className="">{product.description}</p>
                    <button
                        onClick={() => addToCart(product, id)}
                        className=""
                    >
                        ADD TO CART
                    </button>
                </div>
            </div>
        </div>
    )
}