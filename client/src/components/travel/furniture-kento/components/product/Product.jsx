import { productsData } from "../../data";
import { Navigation } from "../navigation/Navigation";
import { useContext, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import { useParams } from "react-router-dom";
import "./product.css";

export function Product() {
    const { id } = useParams();

    const product = productsData.find(product => {
        return product.id === parseInt(id);
    })

    return (
        <>
            <Navigation />
            <div className="product-details">
                <div className="details-left">
                    <img src={product.image} alt="" />
                </div>
                <div className="details-right">
                    <h3>{product.name} </h3>
                    <p className="product-price">$ {product.price}</p>
                    <p className="desc">{product.productDetail.description} </p>
                    <div className="product-qty-cart">
                        <div className="p-qty">
                            <p className="qty">Quantity</p>
                            <ItemCartAmount id={id} />
                        </div>
                        <Button product={product} />
                    </div>
                </div>
            </div>
            <TabSwitcher product={product} />
        </>
    )
}

function Button({ product }) {
    const { addToCart } = useContext(ShopContext);

    return (
        <button onClick={() => addToCart(product)}>
            Add To Cart
        </button>
    )
}

function ItemCartAmount({id}) {
    const { cart } = useContext(ShopContext);

    const product = cart.find(product => {
        return product.id === parseInt(id);
    })

    const amount = product ? product.amount : 0;

    return (
        <p className="qty-amt">{amount}</p>
    )
}

function TabSwitcher({product}) {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = ["description", "reviews"];
    const classes = ["tab", "tab"];
    classes[activeTab] = "tab active";
    const content = [<Description product={product} />, <Reviews />];

    return (
        <div className="tab-container">
            <div className="tab-header">
            {tabs.map((tab, index) => (
                <button
                    key={tab}
                    className={classes[index]}
                    onClick={() => setActiveTab(index)}
                >
                    {tab}
                </button>
            ))}
            </div>
            <div className="tab-content" key={activeTab}>
                <div className="tab-pane">
                    {content[activeTab]}
                </div>
            </div>
        </div>
    );
}

function Reviews() {
    return (
        <p>No reviews yet</p>
    )
}

function Description({ product }) {
    return (
        <>
            <p>{product.productDetail.description}</p>
            <p>{product.productDetail.description}</p>
            <p>{product.productDetail.description}</p>
            <p>{product.productDetail.description}</p>
            <p>{product.productDetail.description}</p>
            <p>{product.productDetail.description}</p>
        </>
    )
}