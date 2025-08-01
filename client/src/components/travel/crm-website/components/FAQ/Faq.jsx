import "./faq.css";
import { questions } from "../../data";
import { useState } from "react";

// function setIndex(ind, set) {
//     set(ind);
// }

export function Faq() {
    const [ accordion, setAccordion ] = useState(null);

    console.log("FAQ");

    return (
        <section className="faq">
            {
                questions.map((data, index) => (
                    // <Accordion data={data} key={index} />
                    <Accordion 
                        key={index} 
                        data={data} 
                        isOpen={accordion === index} 
                        ind={index} 
                        // setAccordion={index => setAccordion(index)} 
                        setAccordion={setAccordion} 
                    />
                ))
            }
        </section>
    )
}

function Accordion({ data, isOpen, ind, setAccordion }) {
    // const [isOpen, setIsOpen] = useState(isOpen);
    console.log("acordion", ind);

    return (
        <div className="accordion">
            {/* <div className="question" onClick={() => setIsOpen(!isOpen)}> */}
            <div className="question" onClick={() => setAccordion(ind)}>
                {isOpen ? <i className="ri-subtract-line"></i>
                        : <i className="ri-add-line"></i>
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