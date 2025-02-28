import { useContext } from "react"
import { ShopContext } from "../ShopContext/ShopContext"
import './products-list.css'

export function ProductList() {
    const products = useContext(ShopContext);
    console.log(products);
    // const products = [];

    return (
        <>
            <div className="products">
                <h2>Our Elegant Collections</h2>
                <div className="products-grid">
                    {products.map(p => {
                        const {id, image, title, price} = p;
                        return (
                            <div className="product" key={id}>
                                <img src={image} alt="" />
                                <div className="product-info">
                                    <h4>{title}</h4>
                                    <p>$ {price}</p>
                                </div>
                                <button className="add-to-cart">Add To Cart</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}