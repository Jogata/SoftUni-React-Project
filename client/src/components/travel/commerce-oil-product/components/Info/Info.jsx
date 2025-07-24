import oil from "../../images/oil.png";
import "./info.css";

export function Info() {
    return (
        <div>
            <section className="info-section">
                <div className="info-header">
                    <h1>Why Choose Healing Bird?</h1>
                    <p>Our product is the best product that can be used on your natural hair. <br />
                        Make use of our product and see for yourself after use
                    </p>
                </div>
                <div className="main-info">
                    <div className="col info-text">
                        <div className="initial">
                            <i className="ri-fire-line icon"></i>
                            <h3>Best Hair Cream</h3>
                            <p>Our hair cream is one of the best <br /> hair cream and it works well on everyone</p>
                        </div>
                        <div className="final">
                            <i className="ri-fire-line icon"></i>
                            <h3>Sustainable Practices</h3>
                            <p>Our hair cream is one of the best <br /> hair cream and it works well on everyone</p>
                        </div>
                    </div>
                    <div className="col info-image">
                        <img src={oil} alt="" />
                        <div className="semi-shape"></div>
                    </div>
                    <div className="col info-text">
                        <div className="initial">
                            <i className="ri-fire-line icon"></i>
                            <h3>Best Hair Cream</h3>
                            <p>Our hair cream is one of the best <br /> hair cream and it works well on everyone</p>
                        </div>
                        <div className="final">
                            <i className="ri-fire-line icon"></i>
                            <h3>Best Hair Cream</h3>
                            <p>Our hair cream is one of the best <br /> hair cream and it works well on everyone</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}