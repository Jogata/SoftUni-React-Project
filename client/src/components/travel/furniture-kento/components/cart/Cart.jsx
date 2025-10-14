import { Navigation } from "../navigation/Navigation";
import "./cart.css";
import { productsData } from "../../data";

export function Cart() {
    const cart = productsData;

    return (
        <>
            <Navigation />
            <div className="cart-container">
                <div className="cart-table">
                    <div className="cart-header">
                        <h1>Shopping Cart</h1>
                        <h1>Items: ({cart.length})</h1>
                        <button className="delete-btn">
                        <i className="ri-delete-bin-line"></i>
                        </button>
                    </div>
                    <div className="cart-header">
                        <span>Product Description</span>
                        <span>Quantity</span>
                        <span>Price</span>
                        <span>Total</span>
                    </div>
                    <div className="cart-details">
                        {cart.length > 0 ? (
                            cart.map(item => (
                                <h1>{item.name}</h1>
                            ))
                        ) : (
                            <p>Your cart is empty</p>
                        )}
                    </div>
                </div>
                <div className="cart-right">
                    <h2>Cart Summary</h2>
                    <div className="summary-item">
                        <span>Items : </span>
                        <span>{cart.length}</span>
                    </div>
                    <div className="summary-item">
                        <span>Subtotal</span>
                        <span> $ {cart.length}</span>
                    </div>
                    <div className="summary-item">
                        <span>Shipping</span>
                        <span>Free</span>
                    </div>
                    <div className="summary-item">
                        <span>Promo Code</span>
                        <input type="text" placeholder="Enter your code" />
                        <button className="apply-btn">Apply</button>
                    </div>
                    <div className="summary-item total-cost">
                        <span>Total Cost</span>
                        <span>$ {cart.length} </span>
                    </div>
                    <button className="checkout">CHECKOUT</button>
                </div>
            </div>
        </>
    )
}