import { ProductConsumer } from "./Context";
import { Title } from "../Title";

export function Cart() {
    return (
        <section>
            {/* <h2 className="blue-text">Cart component</h2> */}
            <Title name={"Your"} title={"Cart"} />
        </section>
    )
}