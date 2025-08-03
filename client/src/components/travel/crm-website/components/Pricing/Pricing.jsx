import { useState } from "react";
import "./pricing.css";

export function Pricing() {
    const [prices, setPrices] = useState("month");
    const [selectedCard, setSelectedCard] = useState(2);

    const sectionClass = prices === "month" ? "pricing" : "pricing annualy";

    const cardWrapClasses = [
        "card-3d-wrap",
        "card-3d-wrap",
        "card-3d-wrap",
        "card-3d-wrap"
    ];
    cardWrapClasses[selectedCard] = "card-3d-wrap selected";

    function myFunction(input) {
        if (input.checked) {
            setPrices("year");
        }
        else {
            setPrices("month");
        }
    }

    return (
        <div className="main pricing">
            <section className={sectionClass} id="pricing">
                <div className="container">

                    <h2 className="title">The Right Plan for Your Business</h2>
                    <p className="description">
                        We have several powerful plans to showcase your business and get
                        discovered as a creative entrepreneurs. Everything you need.
                    </p>

                    <div className="switch">
                        <span className="chech-text-month">Bill Monthly</span>
                        <input type="checkbox" id="switch" onChange={(e) => myFunction(e.target)} />
                        <label htmlFor="switch">Toggle</label>
                        <span className="chech-text-year">Bill Annualy</span>
                    </div>

                    <div className="pricing-cards grid">

                        <div className="card-3d-part">
                            <div className={cardWrapClasses[0]}>
                                <div className="card-3d-wrapper">
                                    <div className="card-front">
                                        <div className="pricing-wrap">
                                            <h4 className="card-title">Intro</h4>
                                            <ul className="card-list">
                                                <li>
                                                    <i className="ri-check-fill"></i>
                                                    Upload Video up to 720p Resolution
                                                </li>
                                                <li className="op-hidden">
                                                    <i className="ri-check-fill"></i>
                                                    Attachment & Post Scheduling
                                                </li>
                                                <li className="op-hidden">
                                                    <i className="ri-check-fill"></i>
                                                    Set your rates
                                                </li>
                                                <li className="op-hidden">
                                                    <i className="ri-check-fill"></i>
                                                    Exclusive Deals
                                                </li>
                                                <li className="op-hidden">
                                                    <i className="ri-check-fill"></i>
                                                    Advanced Statistics
                                                </li>
                                            </ul>
                                            <div className="price">
                                                $<span>123</span><span className="time">/month</span>
                                            </div>
                                            <button
                                                className="btn"
                                                onClick={() => setSelectedCard(0)}
                                            >
                                                Choose
                                            </button>
                                        </div>
                                    </div>
                                    <div className="card-back">
                                        <div className="pricing-wrap">
                                            <h4 className="card-title">Intro</h4>
                                            <ul className="card-list">
                                                <li>
                                                    <i className="ri-check-fill"></i>
                                                    Upload Video up to 720p Resolution
                                                </li>
                                                <li className="op-hidden">
                                                    <i className="ri-check-fill"></i>
                                                    Attachment & Post Scheduling
                                                </li>
                                                <li className="op-hidden">
                                                    <i className="ri-check-fill"></i>
                                                    Set your rates
                                                </li>
                                                <li>
                                                    <i className="ri-check-fill"></i>
                                                    Exclusive Deals
                                                </li>
                                                <li className="op-hidden">
                                                    <i className="ri-check-fill"></i>
                                                    Advanced Statistics
                                                </li>
                                            </ul>
                                            <div className="price">
                                                $<span>123</span><span className="time">/year</span>
                                            </div>
                                            <button
                                                className="btn"
                                                onClick={() => setSelectedCard(0)}
                                            >
                                                Choose
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card-3d-part">
                            <div className={cardWrapClasses[1]}>
                                <div className="card-3d-wrapper">
                                    <div className="card-front">
                                        <div className="pricing-wrap">
                                            <h4 className="card-title">Base</h4>
                                            <ul className="card-list">
                                                <li>
                                                    <i className="ri-check-fill"></i>
                                                    Upload Video up to 720p Resolution
                                                </li>
                                                <li>
                                                    <i className="ri-check-fill"></i>
                                                    Attachment & Post Scheduling
                                                </li>
                                                <li className="op-hidden">
                                                    <i className="ri-check-fill"></i>
                                                    Set your rates
                                                </li>
                                                <li className="op-hidden">
                                                    <i className="ri-check-fill"></i>
                                                    Exclusive Deals
                                                </li>
                                                <li className="op-hidden">
                                                    <i className="ri-close-fill"></i>
                                                    Advanced Statistics
                                                </li>
                                            </ul>
                                            <div className="price">
                                                $<span>123</span><span className="time">/month</span>
                                            </div>
                                            <button
                                                className="btn"
                                                onClick={() => setSelectedCard(1)}
                                            >
                                                Choose
                                            </button>
                                        </div>
                                    </div>
                                    <div className="card-back">
                                        <div className="pricing-wrap">
                                            <h4 className="card-title">Base</h4>
                                            <ul className="card-list">
                                                <li>
                                                    <i className="ri-check-fill"></i>
                                                    Upload Video up to 720p Resolution
                                                </li>
                                                <li>
                                                    <i className="ri-check-fill"></i>
                                                    Attachment & Post Scheduling
                                                </li>
                                                <li className="op-hidden">
                                                    <i className="ri-check-fill"></i>
                                                    Set your rates
                                                </li>
                                                <li className="op-hidden">
                                                    <i className="ri-check-fill"></i>
                                                    Exclusive Deals
                                                </li>
                                                <li className="op-hidden">
                                                    <i className="ri-close-fill"></i>
                                                    Advanced Statistics
                                                </li>
                                            </ul>
                                            <div className="price">
                                                $<span>123</span><span className="time">/year</span>
                                            </div>
                                            <button
                                                className="btn"
                                                onClick={() => setSelectedCard(1)}
                                            >
                                                Choose
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card-3d-part">
                            <div className={cardWrapClasses[2]}>
                                <div className="card-3d-wrapper">
                                    <div className="card-front">
                                        <div className="pricing-wrap">
                                            <h4 className="card-title">Pro <span className="sale">Save $40</span></h4>
                                            <ul className="card-list">
                                                <li>
                                                    <i className="ri-check-fill"></i>
                                                    Upload Video up to 720p Resolution
                                                </li>
                                                <li>
                                                    <i className="ri-check-fill"></i>
                                                    Attachment & Post Scheduling
                                                </li>
                                                <li>
                                                    <i className="ri-check-fill"></i>
                                                    Set your rates
                                                </li>
                                                <li>
                                                    <i className="ri-check-fill"></i>
                                                    Exclusive Deals
                                                </li>
                                                <li className="op-hidden">
                                                    <i className="ri-close-fill"></i>
                                                    Advanced Statistics
                                                </li>
                                            </ul>
                                            <div className="price">
                                                $<span>123</span><span className="time">/month</span>
                                            </div>
                                            <button
                                                className="btn"
                                                onClick={() => setSelectedCard(2)}
                                            >
                                                Try 1 month
                                            </button>
                                        </div>
                                    </div>
                                    <div className="card-back">
                                        <div className="pricing-wrap">
                                            <h4 className="card-title">Pro</h4>
                                            <ul className="card-list">
                                                <li>
                                                    <i className="ri-check-fill"></i>
                                                    Upload Video up to 720p Resolution
                                                </li>
                                                <li>
                                                    <i className="ri-check-fill"></i>
                                                    Attachment & Post Scheduling
                                                </li>
                                                <li>
                                                    <i className="ri-check-fill"></i>
                                                    Set your rates
                                                </li>
                                                <li>
                                                    <i className="ri-check-fill"></i>
                                                    Exclusive Deals
                                                </li>
                                                <li className="op-hidden">
                                                    <i className="ri-close-fill"></i>
                                                    Advanced Statistics
                                                </li>
                                            </ul>
                                            <div className="price">
                                                $<span>123</span><span className="time">/year</span>
                                            </div>
                                            <button
                                                className="btn"
                                                onClick={() => setSelectedCard(2)}
                                            >
                                                Try 1 year
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card-3d-part">
                            <div className={cardWrapClasses[3]}>
                                <div className="card-3d-wrapper">
                                    <div className="card-front">
                                        <div className="pricing-wrap">
                                            <h4 className="card-title">Enterprise</h4>
                                            <ul className="card-list">
                                                <li>
                                                    <i className="ri-check-fill"></i>
                                                    Upload Video up to 720p Resolution
                                                </li>
                                                <li>
                                                    <i className="ri-check-fill"></i>
                                                    Attachment & Post Scheduling
                                                </li>
                                                <li>
                                                    <i className="ri-check-fill"></i>
                                                    Set your rates
                                                </li>
                                                <li>
                                                    <i className="ri-check-fill"></i>
                                                    Exclusive Deals
                                                </li>
                                                <li>
                                                    <i className="ri-check-fill"></i>
                                                    Advanced Statistics
                                                </li>
                                            </ul>
                                            <div className="price">
                                                $<span>123</span><span className="time">/month</span>
                                            </div>
                                            <button
                                                className="btn"
                                                onClick={() => setSelectedCard(3)}
                                            >
                                                Choose
                                            </button>
                                        </div>
                                    </div>
                                    <div className="card-back">
                                        <div className="pricing-wrap">
                                            <h4 className="card-title">Enterprise</h4>
                                            <ul className="card-list">
                                                <li>
                                                    <i className="ri-check-fill"></i>
                                                    Upload Video up to 720p Resolution
                                                </li>
                                                <li>
                                                    <i className="ri-check-fill"></i>
                                                    Attachment & Post Scheduling
                                                </li>
                                                <li>
                                                    <i className="ri-check-fill"></i>
                                                    Set your rates
                                                </li>
                                                <li>
                                                    <i className="ri-check-fill"></i>
                                                    Exclusive Deals
                                                </li>
                                                <li>
                                                    <i className="ri-check-fill"></i>
                                                    Advanced Statistics
                                                </li>
                                            </ul>
                                            <div className="price">
                                                $<span>123</span><span className="time">/year</span>
                                            </div>
                                            <button
                                                className="btn"
                                                onClick={() => setSelectedCard(3)}
                                            >
                                                Choose
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}