import { Link } from "react-router-dom";
import { ProductConsumer } from "./Context";

export function Modal() {
    return (
        <ProductConsumer>
            {(ctx) => {
                const {title, img, price} = ctx.modalProduct;
                // console.log(ctx.modalProduct);
                const {isModalOpen} = ctx;
                // console.log(isModalOpen);

                if (!isModalOpen) {
                    return null;
                }

                return (
                    <div className="modal-container">
                        <div className="inner-modal-container">
                            <h2>Item added to the cart</h2>
                            <div className="modal-box">
                            <div className="details-img-container">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGP6WeUbCjx-4cV8Z9CilpsGGOXNrcpFGPCg&s" alt="" />
                            </div>
                            <div className="product-info">
                                <h3>{title}</h3>
                                <h4 className="blue-text">
                                    price: <span>$</span>{price}
                                </h4>
                                <div className="flex-container modal-footer">
                                    <Link to="/" onClick={ctx.closeModal}>continue shopping</Link>
                                    <Link to="/cart" onClick={ctx.closeModal}>go to cart</Link>
                                    {/* <button
                                        disabled={inCart ? true : false}
                                        onClick={ctx.closeModal}
                                    >
                                        go to cart
                                    </button> */}
                                </div>
                            </div>

                            </div>
                        </div>
                    </div>
                )
            }}
        </ProductConsumer>

    )
}