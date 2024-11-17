import { ProductConsumer } from "../Context";
import { Title } from "../Title";
import { CartColums } from "./CartColumns";
import { CartList } from "./CartList";
import { EmptyCart } from "./EmptyCart";

export function Cart() {
    return (
        <section className="cart-component">
            <ProductConsumer>
                {ctx => {
                    const { cart } = ctx;
                    if (cart.length > 0) {
                        return (
                            <>
                                <Title name={"Your"} title={"Cart"} />
                                <CartColums />
                                <CartList ctx={ctx} />
                            </>
                        )
                    } else {
                        return <EmptyCart />
                    }
                }}
            </ProductConsumer>
        </section>
    )
}