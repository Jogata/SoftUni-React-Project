import "./faq.css";
import { questions } from "../../data";
import { useState } from "react";

export function Faq() {
    return (
        <section className="faq">
            {
                questions.map((data, index) => (
                    <Accordion data={data} key={index} />
                ))
            }
        </section>
    )
}

function Accordion({ data }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="accordion">
            <div className="question" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <i className="ri-subtract-line"></i>
                        : <i class="ri-add-line"></i>
                }
                <h2>{data.question}</h2>
            </div>
            {isOpen ?
                <div className="answer">
                    <p>{data.answer}</p>
                </div> :
                null
            }
        </div>
    )
}