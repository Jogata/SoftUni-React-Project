import "./services.css";
import { services } from "../../data";

export function Services() {
    return (
        <section className="services">
            <h2 className="services-header">Our Services</h2>
            <p className="services-text">
                Improve sales, build long lasting relationships
                and grow your business with our services.
            </p>
            <div className="services">
                {
                    services.map((service, index) => (
                        <div className="service" key={index}>
                            <div className="icon">
                                <i className={service.icon}></i>
                            </div>
                            <h2>{service.head}</h2>
                            <p>{service.desc}</p>
                            <div className="action">
                                <a href="#">
                                    <span>{service.action}</span>
                                    <i className={service.link}></i>
                                </a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}