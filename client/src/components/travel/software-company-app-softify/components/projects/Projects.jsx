import "./projects.css";
import medical from "../../images/medical.jpg";
import crm from "../../images/crm.jpg";
import kitchen from "../../images/kitchen.jpg";
import landing from "../../images/landing.jpg";
import staff from "../../images/staff.jpg";
import finance from "../../images/finance.jpg";

export function Projects() {
    const projects = [
        {
            image: medical,
            title: "Martins Hospital Managemeny",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        },
        {
            image: crm,
            title: "Oland CRM Software",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        },
        {
            image: staff,
            title: "Roland Staff Management",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        },
        {
            image: landing,
            title: "Eduka Landing Page website",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        },
        {
            image: kitchen,
            title: "Glory & Jane Kitchen",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        },
        {
            image: finance,
            title: "Charity Bank App",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        },
    ];

    return (
        <div className="project borders" id="projects">
            <div className="header">
                <div className="info">
                    <h3>We Build Brands That Stand Out</h3>
                </div>
                <button>Get In Tourch</button>
            </div>
            <div className="project-items">
                {projects.map(({ image, title, text }, index) => {
                    return (
                        <div className="item" key={index}>
                            <img src={image} alt="project-img" />
                            <div className="info">
                                <h4>{title}</h4>
                                <p>{text}</p>
                                <a href="#">View Project</a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}