import { useState } from "react";
import pix1 from "./images/about.jpg";
import pix2 from "./images/lady3.jpg";
import pix3 from "./images/hero1.jpg";
import pix4 from "./images/man3.jpg";
import pix5 from "./images/lady2.jpg";

import brand from "./images/brand.png";
import content from "./images/content.png";
import digital from "./images/digital.png";
import external from "./images/external.png";
import sm from "./images/sm.png";
import branding from "./images/branding.png";
import analytics from "./images/analytics.png";
import awareness from "./images/brand-awareness.png";
import milk from "./images/milk.jpg";
import car from "./images/car.jpg";
import cloth from "./images/cloth-launch.jpg";
import drink from "./images/drink.jpg";
import wine from "./images/wine.jpg";

const services = [
    {
        image: brand,
        content: 'BRAND COMMUNICATION'
    },
    {
        image: content,
        content: 'CONTENT CREATION'
    },
    {
        image: digital,
        content: 'DIGITAL MARKETING'
    },
    {
        image: awareness,
        content: 'BRAND AWARENESS'
    },
    {
        image: branding,
        content: 'BRAND STRATEGY'
    },
    {
        image: external,
        content: 'PUBLIC RELATION'
    },
    {
        image: sm,
        content: 'SOCIAL MEDIA MNAGEMENT'
    },
    {
        image: analytics,
        content: 'BUSINESS ANALYTICS'
    },
]

const projects = [
    {
        image: car,
        title: 'Bens Motor Campaign',
        content: 'Bens Motor, one of the worlds biggest car manufacturers, launched its T300 series of trucks in Lagos, Nigeria. To publicise the new fleet in Nigeria, Orange Media invited an extended network of celebrities, social media influencers, and media partners for the launch event.  Video content filmed from the event was promoted via social media and it generated over 200 million views. '
    },
    {
        image: milk,
        title: 'Jaguar Milk',
        content: 'Jaguar Milk, one of the worlds biggest milk manufacturers, launched its T300 series of trucks in Lagos, Nigeria. To publicise the new fleet in Nigeria, Orange Media invited an extended network of celebrities, social media influencers, and media partners for the launch event.  Video content filmed from the event was promoted via social media and it generated over 200 million views.'
    },
    {
        image: cloth,
        title: 'Sedens Clothing',
        content: 'Sedens Clothing, one of the worlds biggest clothing manufacturers, launched its T300 series of trucks in Lagos, Nigeria. To publicise the new fleet in Nigeria, Orange Media invited an extended network of celebrities, social media influencers, and media partners for the launch event.  Video content filmed from the event was promoted via social media and it generated over 200 million views'
    },
    {
        image: drink,
        title: 'Quins Drink',
        content: 'Quins Drink, one of the worlds biggest beverage manufacturers, launched its T300 series of trucks in Lagos, Nigeria. To publicise the new fleet in Nigeria, Orange Media invited an extended network of celebrities, social media influencers, and media partners for the launch event.  Video content filmed from the event was promoted via social media and it generated over 200 million views'
    },
    {
        image: wine,
        title: 'Taquilla Winery',
        content: 'Taquilla Winery, one of the worlds biggest wine manufacturers, launched its T300 series of trucks in Lagos, Nigeria. To publicise the new fleet in Nigeria, Orange Media invited an extended network of celebrities, social media influencers, and media partners for the launch event.  Video content filmed from the event was promoted via social media and it generated over 200 million views'
    },
]

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const linksClass = isMenuOpen ? "nav-links" : "links";
    const toggleButtonIcon = isMenuOpen ? "ri-close-fill close-icon" : "ri-menu-fill open-icon";

    return (
        <>
            <div className="navigation">
                <div className="nav-logo">
                    <h2>Orange Media</h2>
                </div>
                <div className={linksClass} onClick={() => setIsMenuOpen(false)}>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Service</li>
                        <li>Projects</li>
                    </ul>
                </div>
                <div className="btn-box">
                    <a href="#">Contact Us</a>
                </div>
                <button className="toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <i className={toggleButtonIcon}></i>
                </button>
            </div>
            <hr className="line" />
        </>
    )
}

export function Hero() {
    return (
        <>
            <section className="hero">
                <div className="hero-content">
                    <h1>Transforming <span>Brands</span>, One Story at a Time</h1>
                    <p>Unlock the power of strategic storytelling and dynamic communication. Let"s build a brand narrative that resonates and lasts</p>
                    <div className="buttons">
                        <a href="#" className="cta-button">Contact Us</a>
                        <a href="#" className="services-button">View All Services</a>
                    </div>
                </div>
                <div className="images">
                    <div className="image-container-small-one">
                        <img src={pix1} alt="Professional Teams" className="small-clean-img" />
                        <img src={pix2} alt="Professional Teams" className="small-clean-img" />
                    </div>
                    <div className="image-container-small">
                        <img src={pix3} alt="Affordable Pricing" className="small-clean-img" />
                    </div>
                    <div className="image-container-small-one">
                        <img src={pix4} alt="Affordable Pricing" className="small-clean-img" />
                        <img src={pix5} alt="Affordable Pricing" className="small-clean-img" />
                    </div>
                </div>
            </section>
            <div className="hero-trusted">
                <div className="trusted-content">
                    <i className="fa fa-empire hero-icon"></i>
                    <p>Dedicated </p>
                </div>
                <div className="trusted-content">
                    <i className="fa fa-empire hero-icon"></i>
                    <p>Innovative</p>
                </div>
                <div className="trusted-content">
                    <i className="fa fa-empire hero-icon"></i>
                    <p>Strategics</p>
                </div>
                <div className="trusted-content">
                    <i className="fa fa-empire hero-icon"></i>
                    <p>Observant</p>
                </div>
                <div className="trusted-content">
                    <i className="fa fa-empire hero-icon"></i>
                    <p>Deliver</p>
                </div>
                <div className="trusted-content">
                    <i className='fa fa-empire hero-icon'></i>
                    <p>Dedicated </p>
                </div>
            </div>
        </>
    )
}

export function Services() {
    return (
        <>
            <div className="services">
                <h1>Our Services</h1>
                <div className="service-container">
                    {services.map(({ image, content }, index) => {
                        return (
                            <div className="service-content" key={index}>
                                <img src={image} alt="" className="service-icon" />
                                <h2>{content} </h2>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export function Projects() {
    return (
        <div className="projects">
            <div className="project-header">
                <h2>Projects</h2>
                <p>
                    We are proud to have worked with a diverse range of clients across various industries. 
                    <br />
                    Here are some of the brands we have helped elevate.
                </p>
            </div>
            <div className="project-wrapper">
                {projects.map(({ image, title, content }, index) => {
                    return (
                        <div className="project-container" key={index}>
                            <div className="project-img-detail">
                                <img src={image} alt="" />
                            </div>
                            <div className="project-text-detail">
                                <h1>{title} </h1>
                                <p>{content} </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export function Impact() {
    return (
        <>
            <div className="impact">
                <div className="impact-txt">
                    <h1>Elevate Your Brand with Orange Media</h1>
                    <p>
                        Here's what our company statistics looks like and here
                        is what our ongoing statistics looks like with our numbers
                        telling our outstanding performance
                    </p>
                </div>
                <div className="impact-container">
                    <div className="left">
                        <img src={pix1} alt="" />
                    </div>
                    <div className="right">
                        <div className="right-num">
                            <h1>80k</h1>
                            <p>Satisfied Customers</p>
                        </div>
                        <div className="right-num">
                            <h1>50k</h1>
                            <p>Product Launch</p>
                        </div>
                        <div className="right-num">
                            <h1>96%</h1>
                            <p>Trending Campaign</p>
                        </div>
                        <div className="right-num">
                            <h1>10K</h1>
                            <p>Successful Events</p>
                        </div>
                        <div className="right-num">
                            <h1>96%</h1>
                            <p>Target Audience</p>
                        </div>
                        <div className="right-num">
                            <h1>10K</h1>
                            <p>Meetups</p>
                        </div>
                    </div>
                </div>
                <button>Get Started</button>
            </div>
        </>
    )
}

export function Contact() {
    return (
        <>
            <div className="contact">
                <div className="c-left">
                    <h2>Ready to elevate your brand?</h2>
                    <p>
                        Get in touch with us today to discuss your PR needs
                        and discover how we can help you achieve your goals.
                    </p>
                </div>
                <div className="c-right">
                    <form onSubmit={e => e.preventDefault()}>
                        <div>
                            <label htmlFor="last">First Name *</label>
                            <input type="text" name="firstName" placeholder="First Name" />
                        </div>
                        <div>
                            <label htmlFor="last">Last Name *</label>
                            <input type="text" name="secondName" placeholder="Last Name" />
                        </div>
                        <div>
                            <label htmlFor="message">Message *</label>
                            <textarea name="Message"></textarea>
                        </div>
                    </form>
                    <button>Send Message</button>
                </div>
            </div>
        </>
    )
}

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-left">
                <h1 className="footer-logo">Orange Media</h1>
                <p className="footer-contact">
                    <i className="ri-phone-fill p-icon"></i> +1 929-367-8993
                </p>
                <p className="footer-location">
                    New York, NY. Los Angeles, CA. Worldwide.
                </p>
            </div>
            <div className="footer-right">
                <div className="footer-social">
                    <p>Follow us on :</p>
                    <div className="footer-social-icons">
                        <i className="fa fa-instagram icon"></i>
                        <i className="fa fa-linkedin icon"></i>
                        <i className="fa fa-facebook icon"></i>
                        <i className="fa fa-twitter icon"></i>
                    </div>
                </div>
            </div>
        </footer>
    );
};

// export function Footer() {
//     return (
//         <footer>
//             <h1>footer component</h1>
//         </footer>
//     )
// }