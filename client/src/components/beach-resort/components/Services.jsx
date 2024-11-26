import { Component } from "react";
import { Title } from "./Title";

export class Services extends Component {
    state = {
        services: [
            {
                icon: <i className="ri-goblet-fill"></i>, 
                title: "free coctails", 
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, animi."
            }, 
            {
                icon: <i className="ri-walk-line"></i>, 
                title: "endless hiking", 
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, animi."
            }, 
            {
                icon: <i className="ri-truck-line"></i>, 
                title: "free shuttle", 
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, animi."
            }, 
            {
                icon: <i className="fa fa-beer"></i>, 
                title: "strongest beer", 
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, animi."
            }
        ]
    }

    render() {
        return (
            <section className="section services-section">
                <Title title="services" />
                <div className="inner-services-container">
                    {this.state.services.map((item, index) => {
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}
                </div>
            </section>
        )
    }
}