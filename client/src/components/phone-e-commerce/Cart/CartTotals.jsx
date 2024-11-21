import { Link } from "react-router-dom";
import PaypalExpressBtn from "../PayPalButton";

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
                            <span> ${cartSubtotal.toFixed(2)}</span>
                        </span>
                        <span className="block">
                            tax: 
                            <span> ${cartTax.toFixed(2)}</span>
                        </span>
                        <span className="block">
                            total: 
                            <span> ${cartTotal.toFixed(2)}</span>
                        </span>
                        {/* <PaypalExpressBtn total={cartTotal} clearCart={clearCart} history={history} /> */}
                    {/* </div> */}
                {/* </div> */}
            </div>
        </>
    )
}
