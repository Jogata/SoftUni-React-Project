import { Link } from "react-router-dom";
import { ProductConsumer } from "./Context";

export function Details() {
    return (
        <ProductConsumer>
            {(ctx) => {
                const {id, company, info, title, img, price, inCart} = ctx.detailProduct;
                return (
                    <div className="details">
                        <h1 className="blue-text">{title}</h1>
                        <div className="details-container">
                            <div className="flex-container">
                                <div className="details-img-container">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGP6WeUbCjx-4cV8Z9CilpsGGOXNrcpFGPCg&s" alt="" />
                                </div>
                                <div className="product-info">
                                    <h2>model: {title}</h2>
                                    <h3 className="">made by: <span>{company}</span></h3>
                                    <h4 className="blue-text">
                                        price: <span>$</span>{price}
                                    </h4>
                                    <p>{info}</p>
                                    <div className="flex-container details-footer">
                                        <Link to="/">back to products</Link>
                                        <button
                                            className="cart-btn"
                                            disabled={inCart ? true : false}
                                            onClick={() => { ctx.addToCart(id) }}
                                        >
                                            {inCart ? "in cart" : "add to cart"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
{/* 
                        <div className="card-footer">
                            <h2>{title}</h2>
                            <h3 className="blue text">
                                <span>$</span>
                                {price}
                            </h3>
                        </div> */}
                    </div>
                )
            }}
        </ProductConsumer>

    )
}