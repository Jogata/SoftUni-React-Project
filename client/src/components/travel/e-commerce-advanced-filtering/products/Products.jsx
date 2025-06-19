import "./products.css";

export function Products() {
    const test = {
        img: "https://m.media-amazon.com/images/I/71h5+MbEK7L._AC_UY625_.jpg",
        title: "Amore Fashion Stilettos",
        reviews: "(123 reviews)",
        prevPrice: "$140,00",
        newPrice: "$150,00",
        company: "Adidas",
        color: "white",
        category: "heels",
      }
    
    return (
        <section className="card-container">
            <article className="card">
                <img src={test.img} alt={test.title} className="card-img" />
                <div className="card-details">
                    <h3 className="card-title">{test.title}</h3>
                    <div className="card-reviews">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <span className="total-reviews">{test.reviews}</span>
                    </div>
                    <div className="card-price">
                        <div className="price">
                            <del>{test.prevPrice}</del> {test.newPrice}
                        </div>
                        <div className="bag">
                            <i className="fa fa-shopping-bag bag-icon"></i>
                        </div>
                    </div>
                </div>
            </article>
            <article className="card">
                <img src={test.img} alt={test.title} className="card-img" />
                <div className="card-details">
                    <h3 className="card-title">{test.title}</h3>
                    <div className="card-reviews">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <span className="total-reviews">{test.reviews}</span>
                    </div>
                    <div className="card-price">
                        <div className="price">
                            <del>{test.prevPrice}</del> {test.newPrice}
                        </div>
                        <div className="bag">
                            <i className="fa fa-shopping-bag bag-icon"></i>
                        </div>
                    </div>
                </div>
            </article>
            <article className="card">
                <img src={test.img} alt={test.title} className="card-img" />
                <div className="card-details">
                    <h3 className="card-title">{test.title}</h3>
                    <div className="card-reviews">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <span className="total-reviews">{test.reviews}</span>
                    </div>
                    <div className="card-price">
                        <div className="price">
                            <del>{test.prevPrice}</del> {test.newPrice}
                        </div>
                        <div className="bag">
                            <i className="fa fa-shopping-bag bag-icon"></i>
                        </div>
                    </div>
                </div>
            </article>
            <article className="card">
                <img src={test.img} alt={test.title} className="card-img" />
                <div className="card-details">
                    <h3 className="card-title">{test.title}</h3>
                    <div className="card-reviews">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <span className="total-reviews">{test.reviews}</span>
                    </div>
                    <div className="card-price">
                        <div className="price">
                            <del>{test.prevPrice}</del> {test.newPrice}
                        </div>
                        <div className="bag">
                            <i className="fa fa-shopping-bag bag-icon"></i>
                        </div>
                    </div>
                </div>
            </article>
            <article className="card">
                <img src={test.img} alt={test.title} className="card-img" />
                <div className="card-details">
                    <h3 className="card-title">{test.title}</h3>
                    <div className="card-reviews">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <span className="total-reviews">{test.reviews}</span>
                    </div>
                    <div className="card-price">
                        <div className="price">
                            <del>{test.prevPrice}</del> {test.newPrice}
                        </div>
                        <div className="bag">
                            <i className="fa fa-shopping-bag bag-icon"></i>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
};