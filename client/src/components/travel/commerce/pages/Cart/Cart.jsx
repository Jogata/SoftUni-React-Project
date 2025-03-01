import { useContext } from "react";
import { CartDetails } from "../../components/CartDetails/CartDetails";
import "./cart.css";
import { ShopContext } from "../../components/ShopContext/ShopContext";

export function Cart() {
    const {cart} = useContext(ShopContext);
    // console.log(cart);

    return (
        // <h1>Cart comp</h1>
        <div className="cart">
            <div className="cart-left">
                <div className="cart-header">
                    <h1>Shopping Cart</h1>
                    <h1>Items: (0)</h1>
                    <i className="ri-delete-bin-line clear-btn"></i>
                </div>
                <div className="cart-header">
                    <span>Description</span>
                    <span>Quantity</span>
                    <span>Price</span>
                    <span>Total</span>
                </div>
                <div className="cart-details">
                    {/* <em style={{fontSize: "80px"}}>place cart details here</em> */}
                    {/* <CartDetails /> */}
                    {/* <CartDetails /> */}
                    {/* <CartDetails /> */}
                    {cart.map(item => (
                        <CartDetails key={item.id} />
                    ))}
                </div>
            </div>
            <div className="cart-right">
                <h2>Cart Summary</h2>
                <div className="cart-summary">
                    <div className="summary-item">
                        <span>Items</span>
                        <span> 0</span>
                    </div>
                    <div className="summary-item">
                        <span>Subtotal</span>
                        <span> 0</span>
                    </div>
                    <div className="summary-item">
                        <span>Shipping</span>
                        <span>Free</span>
                    </div>
                    <div className="summary-item">
                        <span>Promo Code</span>
                        <input type="text" name="code" id="code" placeholder="Enter your code" />
                        <button className="apply-btn">Apply</button>
                    </div>
                    <div className="summary-item total">
                        <span>Total Cost</span>
                        <span> 0</span>
                    </div>
                    <button className="checkout-btn">CHECKOUT</button>
                </div>
            </div>
        </div>
    )
}