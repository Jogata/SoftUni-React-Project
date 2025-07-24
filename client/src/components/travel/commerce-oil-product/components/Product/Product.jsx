import oil from "../../images/oil.png";
import "./product.css";

export function Product() {
    return (
        <section className="products">
            <div className="p-header">
                <h1>Our Products</h1>
                <p className="p-text">
                    Our product is the best product that can be 
                    used on your natural hair. Make use of our 
                    product and see for yourself after us.
                </p>
            </div>
            <div className="product-display">
                <div className="product">
                    <img src={oil} alt="" />
                    <div className="upp-semi-shape"></div>
                    <h4 className="product-text">Argan Oil Cream</h4>
                    <p className="product-text">
                        Our hair cream is one of the best hair 
                        cream and it works well on everyone
                    </p>
                    <button>Buy Now</button>
                </div>
                <div className="product">
                    <img src={oil} alt="" />
                    <div className="upp-semi-shape"></div>
                    <h4 className="product-text">Argan Oil Cream</h4>
                    <p className="product-text">
                        Our hair cream is one of the best hair 
                        cream and it works well on everyone
                    </p>
                    <button>Buy Now</button>
                </div>
                <div className="product">
                    <img src={oil} alt="" />
                    <div className="upp-semi-shape"></div>
                    <h4 className="product-text">Argan Oil Cream</h4>
                    <p className="product-text">
                        Our hair cream is one of the best hair 
                        cream and it works well on everyone
                    </p>
                    <button>Buy Now</button>
                </div>
                <div className="product">
                    <img src={oil} alt="" />
                    <div className="upp-semi-shape"></div>
                    <h4 className="product-text">Argan Oil Cream</h4>
                    <p className="product-text">
                        Our hair cream is one of the best hair 
                        cream and it works well on everyone
                    </p>
                    <button>Buy Now</button>
                </div>
            </div>
        </section>
    )
}