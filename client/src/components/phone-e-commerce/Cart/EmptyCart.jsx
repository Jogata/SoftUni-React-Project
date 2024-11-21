import { Link } from "react-router-dom";

export function EmptyCart() {
    return (
        <section className="cart-inner-container">
            <h1>your cart is currently empty</h1>
            <Link to="/">back to products</Link>
        </section>
    )
}