import hero from "./images/hero-prudento.jpg";
import glovo from "./images/glovo-logo.svg";
import oracle from "./images/oracle-logo.svg";
import paypal from "./images/paypal-logo.svg";
import stripe from "./images/stripe-logo.svg";
import segment from "./images/segment-logo.svg";
import ionic from "./images/ionic-logo.svg";

const services = [
    {
        title: "Content Creation",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nesciunt explicabo quidem maiores praesentium deserunt tempora, corporis enim dolorem vero eaque libero voluptates.",
        icon: "fa fa-laptop", 
    },
    {
        title: "Social Media Management",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nesciunt explicabo quidem maiores praesentium deserunt tempora, corporis enim dolorem vero eaque libero voluptates.",
        icon: "fa fa-laptop", 
    },
    {
        title: "SEO Content Optimization",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nesciunt explicabo quidem maiores praesentium deserunt tempora, corporis enim dolorem vero eaque libero voluptates.",
        icon: "fa fa-laptop", 
    },
    {
        title: "Content Strategy Development",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nesciunt explicabo quidem maiores praesentium deserunt tempora, corporis enim dolorem vero eaque libero voluptates.",
        icon: "fa fa-wrench", 
    },
    {
        title: "Email Marketing",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nesciunt explicabo quidem maiores praesentium deserunt tempora, corporis enim dolorem vero eaque libero voluptates.",
        icon: "fa fa-laptop", 
    },
    {
        title: "Copywriting",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nesciunt explicabo quidem maiores praesentium deserunt tempora, corporis enim dolorem vero eaque libero voluptates.",
        icon: "fa fa-wrench", 
    }
];

export function Navigation() {
    return (
        <>
            <nav className="navigation">
                <div className="nav-logo">
                    <h2>Prudento</h2>
                </div>
                <div className="links">
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#services">Services</a>
                        </li>
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                    </ul>
                </div>
                <div className="nav-link">
                    <a href="#contact">Contact Us</a>
                </div>
            </nav>
        </>
    )
}

export function Hero() {
    return (
        <>
            <div className="hero">
                <div className="text-box">
                    <h1 className="hero-header">
                        Crafting Content That Connects, Converts and Reflect Your Brand Voice
                    </h1>
                    <p>
                        We bring your brand"s story to life with strategic, engaging content.
                        From blogs and social media posts to full content strategies, we"re
                        here to help you stand out.
                    </p>
                    <div className="btns">
                        <button className="cta-button">Get Started Free</button>
                    </div>
                </div>
                <div className="img-box">
                    <img src={hero} alt="hero-img" className="hero-img" />
                </div>
            </div>
            <div className="trusted">
                <h2>Over 2,000 Organizations use our platform</h2>
                <div className="trusted-imgs">
                    <img src={glovo} alt="" />
                    <img src={oracle} alt="" />
                    <img src={segment} alt="" />
                    <img src={ionic} alt="" />
                    <img src={paypal} alt="" />
                    <img src={stripe} alt="" />
                </div>
            </div>
        </>
    )
}

export function Features() {
    return (
        <div className="features">
            <h2 className="font">Our Working Process</h2>
            <p className="description">
                Our Process From Concept to Content Success
            </p>

            <div className="cards-container">
                <div className="hover-box">
                    <div className="card">
                        <i className="ri-lightbulb-line icon"></i>
                        <h3>Discovery & Strategy</h3>
                        <p>
                            We start by getting to know your brand, goals, and audience.
                            Through in-depth discussions and research, we build a tailored
                            content strategy that aligns with your vision and targets
                            measurable outcomes
                        </p>
                    </div>
                </div>

                <div className="hover-box">
                    <div className="card">
                        <i className="fa fa-file-text-o icon"></i>
                        <h3>Content Creation</h3>
                        <p>
                            Once we have a plan, our creative team goes to work. From drafting
                            engaging articles and social media posts to designing visuals, we
                            create quality content that resonates with your audience and your
                            brand"s voice
                        </p>
                    </div>
                </div>

                <div className="hover-box">
                    <div className="card">
                        <i className="fa fa-line-chart icon"></i>
                        <h3>Review & Optimization</h3>
                        <p>
                            Content performance matters. We continuously review, measure, and
                            refine your content to ensure it"s driving results. Through analytics
                            and feedback, we make adjustments to maximize engagement and conversion.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function Services() {
    return (
        <div className="services">
            <div className="services-header">
                <h2 className="f-size font">Our Services</h2>
            </div>
            <div className="services-container">
                {services.map((service, index) => (
                    <div className="service-card" key={index}>
                        <div className="service-icon">
                            <i className={service.icon}></i>
                        </div>
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-description">{service.description}</p>
                        <button className="expand-btn">
                            <i className="ri-expand-diagonal-line"></i>
                            <i className="fa fa-expand" aria-hidden="true"></i>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

// export function Footer() {
//     return (
//         <div className="footer">
//             <div className="footer-content">
//                 <div className="footer-name">
//                     <h2>Nika Shoes</h2>
//                 </div>
//                 <div className="footer-socials">
//                     <i className="fa fa-facebook footer-icon"></i>
//                     <i className="fa fa-instagram footer-icon"></i>
//                     <i className="fa fa-twitter footer-icon"></i>
//                 </div>
//             </div>
//             <div className="copy">
//                 <p>Copyright © Nika Shoes 2024. All rights reserved</p>
//             </div>
//         </div>
//     )
// }