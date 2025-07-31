import "./feedback.css";
import { feedbacks } from "../../data";
import { useState } from "react";

export function Feedback() {
    const [ current, setCurrent] = useState(0);

    function nextSlide() {
        let next = current + 1;
        next = next % feedbacks.length;
        setCurrent(next);
    }

    function prevSlide() {
        let prev = current - 1;
        prev = prev + feedbacks.length;
        prev = prev % feedbacks.length;
        setCurrent(prev);
    }

    return (
        <section className="slider feedbacks">
            <h2>What Our Clients Are Saying</h2>
            <div className="feedback">
                <img src={feedbacks[current].image} alt="" />
                <h3>{feedbacks[current].name}</h3>
                <p>{feedbacks[current].comment}</p>
            </div>
            <div className="control">
                <button id="next" onClick={() => nextSlide()}>
                    next <i className="ri-arrow-left-double-line"></i>
                </button>
                <button id="prev" onClick={() => prevSlide()}>
                    prev <i className="ri-arrow-right-double-line"></i>
                </button>
            </div>
        </section>
    )
}