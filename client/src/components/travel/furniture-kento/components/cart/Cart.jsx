import { Navigation } from "../navigation/Navigation";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import "./cart.css";

export function Cart() {
    const { clearCart, itemsAmount, total } = useContext(ShopContext);

    return (
        <>
            <Navigation />
            <div className="cart-container">
                <div className="cart-table">
                    <div className="cart-header">
                        <h1>Shopping Cart</h1>
                        <h1>Items: {itemsAmount}</h1>
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
                    <CartRows />
                </div>
                <div className="cart-right">
                    <h2>Cart Summary</h2>
                    <div className="summary-item">
                        <span>Items : </span>
                        <span>{itemsAmount}</span>
                    </div>
                    <div className="summary-item">
                        <span>Subtotal</span>
                        <span> $ {total}</span>
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
                        <span>$ {total} </span>
                    </div>
                    <button className="checkout">CHECKOUT</button>
                </div>
            </div>
        </>
    )
}

function CartRows() {
    const { cart } = useContext(ShopContext);

    return (
        <div className="cart-rows">
            {/* <List> */}
            {cart.length > 0 ? (
                    cart.map(item => (
                        <Product
                            key={item.id}
                            product={item}
                            // removeItemFromCart={removeItemFromCart}
                        />
                    ))
                ) : (
                    <h2>Your cart is empty</h2>
                )}
            {/* </List> */}
        </div>
    )
}

// function List({ children }) {
//     return (
//         <>
//         {children}
//         </>
//     )
// }

function Product({ product }) {
    const { increaseAmount, decreaseAmount, removeItemFromCart } = useContext(ShopContext);
    const { id, name, image, price, amount } = product;
    console.log(name);

    return (
        <div className="cart-row">
            <div className="cart-product-details">
                <img src={image} alt="" />
                <div className="cart-product-info">
                    <h3>{name}</h3>
                    {/* <RemoveItemFromCartButton id={id} /> */}
                    <button className="delete-btn" onClick={() => removeItemFromCart(id)}>
                        <i className="ri-delete-bin-line"></i> Remove
                    </button>
                </div>
            </div>
            <div className="quantity">
                <button onClick={() => decreaseAmount(id)}>
                    <i className="ri-subtract-line"></i>
                </button>
                <span>{amount}</span>
                <button onClick={() => increaseAmount(id)}>
                    <i className="ri-add-line"></i>
                </button>
            </div>
            <div className="price">${price}</div>
            <div className="total">${parseFloat(price * amount).toFixed(2)}</div>
        </div>
    )
}

// function RemoveItemFromCartButton({ id }) {
//     const { removeItemFromCart } = useContext(ShopContext);

//     return (
//         <button className="delete-btn" onClick={() => removeItemFromCart(id)}>
//             <i className="ri-delete-bin-line"></i> Remove
//         </button>
//     )
// }