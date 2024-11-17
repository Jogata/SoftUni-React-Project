import { CartItem } from "./CartItem";

export function CartList({ctx}) {
    // console.log(ctx);
    const { cart } = ctx;
    // console.log(cart);

    return (
        <div>
            {/* <h2>cart list</h2> */}
            {cart.map(item => {
                return <CartItem key={item.id} item={item} ctx={ctx} />;
            })}
        </div>
    )
}