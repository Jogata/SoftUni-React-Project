import { ProductConsumer } from "../Context";
import { Title } from "../Title";
import { CartColums } from "./CartColumns";
import { EmptyCart } from "./EmptyCart";

export function Cart() {
    return (
        <section className="cart-container">
            <ProductConsumer>
                {ctx => {
                    const { cart } = ctx;
                    if (cart.length > 0) {
                        return (
                            <>
                                <Title name={"Your"} title={"Cart"} />
                                <CartColums />
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