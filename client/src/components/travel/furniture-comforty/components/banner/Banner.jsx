import "./banner.css";

export function Banner() {
    const products = [
        {
            id: 1,
            title: "Best Furniture collection for your interior",
            subTitle: "welcome to chairs",
            image: "/src/components/travel/furniture-comforty/images/banner/banner_image.png"
        },
        {
            id: 2,
            title: "Best Furniture collection for your interior",
            subTitle: "welcome to chairs",
            image: "/src/components/travel/furniture-comforty/images/banner/banner_image.png"
        },
        {
            id: 3,
            title: "Best Furniture collection for your interior",
            subTitle: "welcome to chairs",
            image: "/src/components/travel/furniture-comforty/images/banner/banner_image.png"
        },
        {
            id: 4,
            title: "Best Furniture collection for your interior",
            subTitle: "welcome to chairs",
            image: "/src/components/travel/furniture-comforty/images/banner/banner_image.png"
        },
    ]

    return (
        <div className="banner">
            <div className="slider">
                <div className="slider-track">
                    {products?.map(product => (
                        <div key={product?.id} className="slide">

                            <div className="slide-text">
                                <p>{product?.subTitle}</p>
                                <h3>{product?.title}</h3>
                                <button>
                                    shop now
                                    <span>
                                        <i className="fa fa-location-arrow"></i>
                                    </span>
                                </button>
                            </div>

                            <div className="slide-image">
                                <img src={product?.image} alt={product?.title} />
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};