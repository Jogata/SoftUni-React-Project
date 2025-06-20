export function Card({ product }) {
    return (
        <article className="card">
            <img src={product.img} alt={product.title} className="card-img" />
            <div className="card-details">
                <h3 className="card-title">{product.title}</h3>
                <div className="card-reviews">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <span className="total-reviews">{product.reviews}</span>
                </div>
                <div className="card-price">
                    <div className="price">
                        <del>{product.prevPrice}</del> {product.newPrice}
                    </div>
                    <div className="bag">
                        <i className="fa fa-shopping-bag bag-icon"></i>
                    </div>
                </div>
            </div>
        </article>
    )
}