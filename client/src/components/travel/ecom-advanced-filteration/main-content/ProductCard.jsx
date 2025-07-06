import { Link } from "react-router-dom";

export function ProductCard({ product }) {
    return (
        <div className="product">
            <Link to={`/product/${product.id}`}>
                <img src={product.images[0]} alt={product.title} />
                <h2>{product.title}</h2>
                <p>${product.price}</p>
            </Link>
        </div>
    )
}