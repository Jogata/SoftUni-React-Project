import { Link } from "react-router-dom";

export function CartTotals({ctx}) {
    const { cartSubtotal, cartTax, cartTotal, clearCart } = ctx;
    return (
        <>
            <div className="cart-totals">
                {/* <div className="row"> */}
                    {/* <div className="col"> */}
                        <Link to="/" onClick={clearCart}>
                            clear cart
                        </Link>
                        <span className="block">
                            subtotal: 
                            <span> ${cartSubtotal}</span>
                        </span>
                        <span className="block">
                            tax: 
                            <span> ${cartTax}</span>
                        </span>
                        <span className="block">
                            total: 
                            <span> ${cartTotal}</span>
                        </span>
                    {/* </div> */}
                {/* </div> */}
            </div>
        </>
    )
}
