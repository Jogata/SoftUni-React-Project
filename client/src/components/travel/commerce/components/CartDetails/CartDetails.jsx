import { useContext } from "react";
import { ShopContext } from "../ShopContext/ShopContext";

export function CartDetails({product}) {
    const {id, title, image, price, amount} = product;
    // console.log(id, image, price, title);
    const {removeFromCart, decreaseItemAmount} = useContext(ShopContext);

    return (
        <>
            <div className="cart-item">
                <div className="product-details">
                    <img src={image} alt="" />
                    <div className="product-info">
                        <h3>{title}</h3>
                        <button 
                            className="remove-btn" 
                            onClick={() => removeFromCart(id)}
                        >
                            Remove
                            <i className="ri-delete-bin-line"></i>
                        </button>
                    </div>
                </div>
                <div className="quantity">
                    <button onClick={() => decreaseItemAmount(id)}>
                        <i className="fa fa-minus" aria-hidden="true"></i>
                    </button>
                    <span>{amount}</span>
                    <button>
                        <i className="fa fa-plus" aria-hidden="true"></i>
                    </button>
                </div>
                <div className="price">
                    $ <span>{price}</span>
                </div>
                <div className="total">
                    (amount * price)
                </div>
            </div>
        </>
    )
}