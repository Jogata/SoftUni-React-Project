import { useContext } from "react";
import { ShopContext } from "../contexts/ShopContext";
import { CartDetails } from "./Cart/CartDetails";

export function Cart() {
    const { cart, clearCart, total, quantity } = useContext(ShopContext);

    return (
        <>
            <div>
                <div>
                    <h1>Shopping Cart</h1>
                    <h2>Items: {quantity}</h2>
                    <button onClick={clearCart}>
                        <i className="fa fa-recycle-bin"></i>
                    </button>
                </div>
                <div>
                    <span>Product Description</span>
                    <span>Quantity</span>
                    <span>Price</span>
                    <span>Total</span>
                </div>
                <div className="">
                    {cart.length > 0 ? (
                        cart.map((item) => <CartDetails item={item} />)
                    ) : (
                        <p>Your cart is empty</p>
                    )}
                </div>
            </div>
            <div>
                <h2 className="">Cart Summary</h2>
                <div className="">
                    <span>Items:</span>
                    <span>{quantity}</span>
                </div>
                <div className="">
                    <div className="">
                        <span>Subtotal</span>
                        <span>$ {isNaN(total) ? 0 : total}</span>
                    </div>
                    <div className="">
                        <span>Shipping</span>
                        <span>Free</span>
                    </div>
                    <div className="">
                        <span>Total Cost</span>
                        <span>$ {isNaN(total) ? 0 : total}</span>
                    </div>
                    <button className="">
                        CHECKOUT
                    </button>
                </div>
            </div>
        </>
    )
}