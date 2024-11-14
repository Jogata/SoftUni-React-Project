import { Link } from "react-router-dom";
import { ProductConsumer } from "./Context";

export function Product(props) {
    const {id, title, img, price, inCart} = props.product;
    return (
        // <h2 className="blue-color">Product component</h2>
        <ProductConsumer>
            {(ctx) => {
                return (
                    <div className="card">
                        <div className="img-container" onClick={() => ctx.handleDetails(id)}>
                            <Link to="/details/1">
                                <img src={img} alt="" />
                            </Link>
                            <button 
                                className="cart-btn" 
                                disabled={inCart ? true : false} 
                                onClick={() => {console.log("added to cart")}}
                            >
                                {inCart ? "in cart" : <i className="fa fa-shopping-cart"></i>}
                            </button>
                        </div>
                        <div className="card-footer">
                            <h2>{title}</h2>
                            <h3 className="blue text">
                                <span>$</span>
                                {price}
                            </h3>
                        </div>
                    </div>
                )
            }}
        </ProductConsumer>
        
    )
}