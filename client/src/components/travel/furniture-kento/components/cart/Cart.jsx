import { Navigation } from "../navigation/Navigation";
import "./cart.css";
import { productsData } from "../../data";

export function Cart() {
    const cart = productsData;

    return (
        <div>
            <Navigation />
            <div className="cart-container">
                <div className="cart-left">
                    <div className="cart-header">
                        <h1>Shopping Cart</h1>
                        <h1>Items: ({cart.length})</h1>
                        <i className="ri-delete-bin-line delete-cart"></i>
                    </div>
                    <div className="cart-header">
                        <span>Product Description</span>
                        <span>Quantity</span>
                        <span>Price</span>
                        <span>Total</span>
                    </div>
                    <div className="cart-details">
                        {cart.length > 0 ? (
                            cart.map((item) => (
                                <h1>{item.name}</h1>
                            ))
                        ) : (
                            <p>Your cart is empty</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}