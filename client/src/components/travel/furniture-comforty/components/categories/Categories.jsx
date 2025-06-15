import { useRef } from "react";
import "./categories.css";

export function Categories() {
    const categories = [
        {
            title: "Wing Chair",
            products: "3,584 Products",
            image: "/src/components/travel/furniture-comforty/images/categories/categories_1.png",
        },
        {
            title: "Wooden Chair",
            products: "157 Products",
            image: "/src/components/travel/furniture-comforty/images/categories/categories_2.png",
        },
        {
            title: "desk Chair",
            products: "154 Products",
            image: "/src/components/travel/furniture-comforty/images/categories/categories_3.png",
        },
        {
            title: "Park Bench",
            products: "154 Products",
            image: "/src/components/travel/furniture-comforty/images/categories/categories_4.png",
        },

    ];

    const track = useRef();

    function scrollLeft() {
        const width = track.current.clientWidth;
        const slides = Math.floor(width / 300);
        // console.log(slides);
        track.current.scrollLeft += slides * 300;
    }

    function scrollRight() {
        const width = track.current.clientWidth;
        const slides = Math.floor(width / 300);
        // console.log(width);
        track.current.scrollLeft -= slides * 300;
    }

    return (
        <div>
            <div className="categories max-width">
                <h3>Top Categories</h3>

                <div className="slider">
                    <div className="slider-track" ref={track}>
                        {
                            categories?.map((category, index) => (
                                <div key={index} className="slide">
                                    <div className="content">
                                        <img src={category?.image} alt={category?.title} />
                                        <div className="box">
                                            <h4>{category?.title}</h4>
                                            <p>{category?.products}</p>
                                        </div>
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
        </div>
    );
};