import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../contexts/ShopContext";
import { CartDetails } from "./Cart/CartDetails";

export function Cart() {
    const { cart, quantity } = useContext(ShopContext);
    // const [total, setTotal] = useState(0);

    const clearCart = () => {
        setCart([]);
    };

    const total = cart.reduce((accumulator, currentItem) => {
        const priceAsNumber = parseFloat(currentItem.price);

        if (isNaN(priceAsNumber)) {
            return accumulator;
        }

        return accumulator + priceAsNumber * currentItem.amount;
    }, 0);
    // useEffect(() => {
        // setTotal(total);
    // }, [cart]);

    return (
        <div className="cart-page">
            <div className="cart-table">
                <div className="cart-header">
                    <h1>Shopping Cart</h1>
                    <h2>Items: {quantity}</h2>
                    <button onClick={clearCart}>
                        <i className="fa fa-trash"></i>
                    </button>
                </div>
                <div className="cart-table-header">
                    <span>Product Description</span>
                    <span>Quantity</span>
                    <span>Price</span>
                    <span>Total</span>
                </div>
                <div className="cart-table-body">
                    {cart.length > 0 ? (
                        cart.map((item) => <CartDetails key={item.id} item={item} />)
                    ) : (
                        <p>Your cart is currently empty</p>
                    )}
                </div>
            </div>
            <div className="cart-summary">
                <h2>Cart Summary</h2>
                <div className="flex-row">
                    <span>Items: </span>
                    <span>{quantity}</span>
                </div>
                <div className="cart-cost">
                    <div className="flex-row">
                        <span>Subtotal: </span>
                        <span>$ {isNaN(total) ? 0 : total}</span>
                    </div>
                    <div className="flex-row">
                        <span>Shipping: </span>
                        <span>Free</span>
                    </div>
                    <div className="flex-row total">
                        <span>Total Cost: </span>
                        <span>$ {isNaN(total) ? 0 : total}</span>
                    </div>
                    <button>
                        CHECKOUT
                    </button>
                </div>
            </div>
        </div>
    )
}