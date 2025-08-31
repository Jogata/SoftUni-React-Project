import "./feedback.css";
import { feedbacks } from "../../data";
import { useState } from "react";

export function Feedback() {
    const [ direction, setDirection ] = useState("to-left");
    const [ slideIndex, setSlideIndex ] = useState(0);

    const length = feedbacks.length;
    const slideClasses = new Array(feedbacks.length).fill("slide");
    const ids = new Array(feedbacks.length).fill(null);
    ids[0] = "relative";
    slideClasses[slideIndex] = "slide active";
    let next = slideIndex + 1;
    next = next % length;
    slideClasses[next] = "slide next";
    let prev = slideIndex - 1;
    prev = prev + length;
    prev = prev % length;
    slideClasses[prev] = "slide prev";

    function nextSlide() {
        let next = slideIndex + 1;
        next = next % feedbacks.length;
        setSlideIndex(next);
        setDirection("to-left");
    }

    function prevSlide() {
        let prev = slideIndex - 1;
        prev = prev + feedbacks.length;
        prev = prev % feedbacks.length;
        setSlideIndex(prev);
        setDirection("to-right");
    }

    return (
        <section className="feedbacks">
            <h2>What Our Clients Are Saying</h2>
            <div className={`slider ${direction}`}>
                <div className="slider-track">
                    {feedbacks?.map((feedback, index) => (
                        <div key={index} className={slideClasses[index]} id={ids[index]}>
                            <div className="feedback">
                            <img src={feedback.image} alt="" />
                            <h3>{feedback.name}</h3>
                            <p>{feedback.comment}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="control">
                    <button id="next" onClick={() => nextSlide()}>
                        next <i className="ri-arrow-left-double-line"></i>
                    </button>
                    <button id="prev" onClick={() => prevSlide()}>
                        prev <i className="ri-arrow-right-double-line"></i>
                    </button>
                </div>
            </div>
        </section>
    )
}