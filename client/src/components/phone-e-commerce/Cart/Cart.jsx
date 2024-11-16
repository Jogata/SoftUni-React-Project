import { ProductConsumer } from "../Context";
import { Title } from "../Title";
import { CartColums } from "./CartColumns";

export function Cart() {
    return (
        <section>
            {/* <h2 className="blue-text">Cart component</h2> */}
            <Title name={"Your"} title={"Cart"} />
            <CartColums />
        </section>
    )
}