import { useRef } from "react";
import "./recent.css";

export function Recent() {
    const features = [
        {
            title: "library stool",
            status: "New",
            price: "$250",
            image: "/src/components/travel/furniture-comforty/images/features/product_1.png",
            currentPrice: "$200",
        },
        {
            title: "library stool Chair",
            status: "Sales",
            price: "$250",
            image: "/src/components/travel/furniture-comforty/images/features/product_2.png",
        },
        {
            title: "library stool Chair",
            price: "$250",
            image: "/src/components/travel/furniture-comforty/images/features/product_3.png",
        },
        {
            title: "library stool Chair",
            status: "New",
            price: "$250",
            image: "/src/components/travel/furniture-comforty/images/features/product_4.png",
            currentPrice: "$200",
        },
        {
            title: "library stool",
            status: "New",
            price: "$250",
            image: "/src/components/travel/furniture-comforty/images/features/product_1.png",
            currentPrice: "$200",
        },
        {
            title: "library stool Chair",
            status: "Sales",
            price: "$250",
            image: "/src/components/travel/furniture-comforty/images/features/product_2.png",
        },
        {
            title: "library stool Chair",
            price: "$250",
            image: "/src/components/travel/furniture-comforty/images/features/product_3.png",
        },
        {
            title: "library stool Chair",
            status: "New",
            price: "$250",
            image: "/src/components/travel/furniture-comforty/images/features/product_4.png",
            currentPrice: "$200",
        },
    ];

    const track = useRef();

    function scrollLeft() {
        const width = Math.max(track.current.clientWidth, 300);
        const slides = Math.floor(width / 300);
        track.current.scrollLeft += slides * 300;
    }

    function scrollRight() {
        const width = Math.max(track.current.clientWidth, 300);
        const slides = Math.floor(width / 300);
        track.current.scrollLeft -= slides * 300;
    }

    return (
        <div className="recent max-width">
            <h3>Recently Added</h3>

            <div className="slider">
                <div className="slider-track" ref={track}>
                    {
                        features?.map((feature, index) => (
                            <div key={index} className="slide">
                                <div className="recent-image">
                                    <img src={feature?.image} alt={feature?.title} />
                                    {
                                        feature?.status && (
                                            <div className="status">
                                                <button>{feature?.status}</button>
                                            </div>
                                        )
                                    }
                                </div>
                                <div className="recent-content">
                                    <div className="header">
                                        <h4>{feature?.title}</h4>
                                        <span className="cart">
                                            <i className="fa fa-shopping-cart"></i>
                                        </span>
                                    </div>
                                    <p className="prices">
                                        {feature?.price}
                                        {
                                            feature?.currentPrice && (
                                                <span className="current">{feature?.currentPrice}</span>
                                            )
                                        }
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <button id="prev" className="arrow" onClick={scrollLeft}>
                    <i className="fa fa-angle-double-left"></i>
                </button>
                <button id="next" className="arrow" onClick={scrollRight}>
                    <i className="fa fa-angle-double-right"></i>
                </button>
            </div>

        </div>
    );
};