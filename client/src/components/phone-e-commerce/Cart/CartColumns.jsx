import { ProductConsumer } from "../Context";

export function CartColums() {
    return (
        // <div className="container">
            <div className="flex-container cart-header">
                <div className="col">
                    <p>products</p>
                </div>
                <div className="col">
                    <p>name of product</p>
                </div>
                <div className="col">
                    <p>price</p>
                </div>
                <div className="col">
                    <p>quantity</p>
                </div>
                <div className="col">
                    <p>remove</p>
                    {/* <i className="fa fa-trash"></i> */}
                </div>
                <div className="col">
                    <p>total</p>
                </div>
            </div>
        // </div>
    )
}