import { productsData } from "../../data";
import { Navigation } from "../navigation/Navigation";
import { useContext, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import { Link, useParams } from "react-router-dom";
import "./product.css";

export function Product() {
    const [activeTab, setActiveTab] = useState("description");

    // const { itemsAmount, addToCart } = useContext(ShopContext);
    const { itemsAmount } = useContext(ShopContext);
    const { id } = useParams();
    console.log(id);

    const product = productsData.find(product => {
        return product.id === parseInt(id);
    })

    // const desc = {__html: product.productDetail.description};

    return (
        <>
            <Navigation />
            <div className="product-details">
                <div className="details-left">
                    <img src={product.image} alt="" />
                </div>
                <div className="details-right">
                    <h3>{product.name} </h3>
                    <p className="product-price"> $ {product.price}</p>
                    <p className="desc">{product.productDetail.description} </p>
                    {/* <p className="desc" dangerouslySetInnerHTML={desc}></p> */}
                    <div className="product-qty-cart">
                        <div className="p-qty">
                            <p className="qty">Quantity</p>
                            <p className="qty-amt">{itemsAmount}</p>
                        </div>
                        {/* <button onClick={() => addToCart(product)}>
                            Add To Cart
                        </button> */}
                        <Button product={product} />
                    </div>
                </div>
            </div>
            <div className="tab-container">
                <div className="tab-header">
                    <button
                        className={activeTab === "description" ? "active" : ""}
                        onClick={() => setActiveTab("description")}
                    >
                        DESCRIPTION
                    </button>
                    <button
                        className={activeTab === "reviews" ? "active" : ""}
                        onClick={() => setActiveTab("reviews")}
                    >
                        REVIEWS
                    </button>
                </div>
                <div className="tab-content">
                    {activeTab === "description" && (
                        <div className="tab-pane">
                            <p>{product.productDetail.description} </p>
                            <p>{product.productDetail.description} </p>
                            <p>{product.productDetail.description} </p>
                            <p>{product.productDetail.description} </p>
                            <p>{product.productDetail.description} </p>
                            <p>{product.productDetail.description} </p>
                        </div>
                    )}
                    {activeTab === "reviews" && (
                        <div className="tab-pane">
                            <p>No reviews yet</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

function Button({product}) {
    const { addToCart } = useContext(ShopContext);
    console.log("button");

    return (
        <button 
            // className="add-to-cart" 
            onClick={() => addToCart(product)}
        >
            {/* <i className="fa fa-plus cart-icon"></i> */}
            Add To Cart
        </button>
    )
}