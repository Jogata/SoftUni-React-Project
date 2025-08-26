import { useEffect, useRef, useState } from "react";
import "./banner.css";

export function Hero() {
    const [num, setNum] = useState(0);
    const tnRef = useRef();
    // let outnum = 20;
    console.log(typeof tnRef.current);
    // console.log(outnum);
    function test() {
        // const num = 2 + 2;
        // console.log(num);
        // outnum += num;
        // console.log(2);
        console.log(tnRef);
        console.log(typeof tnRef.current);
    }
    test();
    return (
        <div className="hero">
            <input type="text" ref={tnRef} />
            <div className="hero-content">
                <h1>Welcome to BlogWise</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nobis fugit numquam aperiam eveniet dolore excepturi
                    veniam quod architecto modi, expedita eligendi sit neque 
                    perspiciatis recusandae.
                </p>
                <button className="cta-button" onClick={() => setNum(num + 1)}>Read Our Latest Blog Post</button>
                <button className="cta-button" onClick={test}>Read Our Latest Blog Post</button>
            </div>
        </div>
    )
}

export function Banner() {
    const products = [
        {
            id: 1,
            title: "Best Furniture collection for your interior",
            subTitle: "welcome to chairs 0",
            image: "/src/components/travel/furniture-comforty/images/banner/banner_image.png"
        },
        {
            id: 2,
            title: "Best Furniture collection for your interior",
            subTitle: "welcome to chairs 1",
            image: "/src/components/travel/furniture-comforty/images/banner/banner_image.png"
        },
        {
            id: 3,
            title: "Best Furniture collection for your interior",
            subTitle: "welcome to chairs 2",
            image: "/src/components/travel/furniture-comforty/images/banner/banner_image.png"
        },
        {
            id: 4,
            title: "Best Furniture collection for your interior",
            subTitle: "welcome to chairs 3",
            image: "/src/components/travel/furniture-comforty/images/banner/banner_image.png"
        },
    ];

    const [slideIndex, setSlideIndex] = useState(0);

    const length = products.length;
    const slideClasses = new Array(products.length).fill("slide");
    const ids = new Array(products.length).fill(null);
    const pageButtonsClasses = new Array(products.length).fill("page-btn");
    ids[0] = "relative";
    slideClasses[slideIndex] = "slide active";
    pageButtonsClasses[slideIndex] = "page-btn active";
    let next = slideIndex + 1;
    next = next % length;
    slideClasses[next] = "slide next";
    let prev = slideIndex - 1;
    prev = prev + length;
    prev = prev % length;
    slideClasses[prev] = "slide prev";

    function autoplay() {
        let current = slideIndex + 1;
        current = current % length;
        setSlideIndex(current);
    }

    useEffect(() => {
        const id = setTimeout(() => {
            autoplay();
        }, 5000);

        return () => {
            // clearInterval(id);
            console.log("clear");
            clearTimeout(id);
        }
    }, [slideIndex])

    function changeSlide(index) {
        setSlideIndex(index);
    }

    return (
        <div className="banner max-width">
            <div className="slider">
                <div className="slider-track">
                    {products?.map((product, index) => (
                        <div key={product?.id} className={slideClasses[index]} id={ids[index]}>

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
                <div className="pagination">
                    {products?.map((product, index) => (
                        <button 
                            key={product.id} 
                            className={pageButtonsClasses[index]} 
                            onClick={() => changeSlide(index)}>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};