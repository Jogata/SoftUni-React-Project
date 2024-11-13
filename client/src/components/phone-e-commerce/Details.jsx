import { Link } from "react-router-dom";
import { ProductConsumer } from "./Context";

export function Details() {
    return (
        // <h2 className="blue-color">Details component</h2>
        <ProductConsumer>
            {(ctx) => {
                console.log(ctx.detailProduct);
                const {id, company, info, title, img, price, inCart} = ctx.detailProduct;
                return (
                    <div className="details">
                        <h1 className="blue-text">{title}</h1>
                        <div className="details-container">
                            <div className="flex-container">
                                <div className="details-img-container">
                                    {/* <Link to="/details/1"> */}
                                    {/* <img src={img} alt="" /> */}
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGP6WeUbCjx-4cV8Z9CilpsGGOXNrcpFGPCg&s" alt="" />
                                    {/* </Link> */}
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
                                            onClick={() => { console.log("added to cart") }}
                                        >
                                            {inCart ? "in cart" : <i className="fa fa-shopping-cart"></i>}
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