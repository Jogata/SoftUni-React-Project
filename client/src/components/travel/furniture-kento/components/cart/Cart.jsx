import { Navigation } from "../navigation/Navigation";
import "./cart.css";
// import { productsData } from "../../data";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

export function Cart() {
    const { cart, clearCart } = useContext(ShopContext);

    return (
        <>
            <Navigation />
            <div className="cart-container">
                <div className="cart-table">
                    <div className="cart-header">
                        <h1>Shopping Cart</h1>
                        <h1>Items: ({cart.length})</h1>
                        <button className="delete-btn" onClick={clearCart}>
                            <i className="ri-delete-bin-line"></i>
                        </button>
                    </div>
                    <div className="cart-header">
                        <span>Product Description</span>
                        <span>Quantity</span>
                        <span>Price</span>
                        <span>Total</span>
                    </div>
                    <div className="cart-rows">
                        {cart.length > 0 ? (
                            cart.map(item => (
                                <Product product={item} key={item.id} />
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

function Product({ product }) {
    const { id, name, image, price, amount } = product;
    console.log(product);

    return (
        <div className="cart-row">
            {/* <div className="cart-item"> */}
            <div className="cart-product-details">
                <img src={image} alt="" />
                <div className="cart-product-info">
                    <h3>{name}</h3>
                    <div className="delete-btn">
                        <i className="ri-delete-bin-line"></i> Remove
                    </div>
                </div>
            </div>
            <div className="quantity">
                <button>
                    <i className="fa fa-plus"></i>
                </button>
                <span>{amount}</span>
                <button>
                    <i className="fa fa-minus"></i>
                </button>
            </div>
            <div className="price">${price}</div>
            <div className="total">${parseFloat(price * amount).toFixed(2)}</div>
        </div>
        // </div>
    )
}