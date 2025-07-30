import "./details.css";
import { details } from "../../data";
import image from "../../images/details.jpg";

export function Details() {
    return (
        <section className="details">
            <div className="details-image">
                <img src={image} alt="" />
            </div>
            <div className="details-text">
                <h2>Menage your customers relationship effortlessly with our tool</h2>
                <div className="details">
                    {
                        details.map((detail, index) => (
                            <div className="detail" key={index}>
                                <div className="icon">
                                    <i className={detail.icon}></i>
                                </div>
                                <h3>{detail.head}</h3>
                                <p>{detail.desc}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}