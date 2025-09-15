import { useEffect, useState } from "react";
import man from "./images/man2.png";
import crm from './images/crm.jpg';
import finance from "./images/finance.jpg";
import kitchen from "./images/kitchen.jpg";
import landing from "./images/landing.jpg";
import medical from "./images/medical.jpg";
import staff from "./images/staff.jpg";

const projects = [
    {
        image: medical,
        title: 'Martins Hospital Managemeny',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    },
    {
        image: crm,
        title: 'Oland CRM Software',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    },
    {
        image: staff,
        title: 'Roland Staff Management',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    },
    {
        image: landing,
        title: 'Eduka Landing Page website',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    },
    {
        image: kitchen,
        title: 'Glory & Jane Kitchen',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    },
    {
        image: finance,
        title: 'Charity Bank App',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    },
];

const services = [
    {
        icon: "fa fa-empire",
        head: 'UI/UX Design',
        desc: 'A short description of the service your company provides and how it helps your clients business increase revenue using the technology and strategy your company provides',
    },
    {
        icon: "fa fa-xing",
        head: 'Web Development',
        desc: 'A short description of the service your company provides and how it helps your clients business increase revenue using the technology and strategy your company provides',
    },
    {
        icon: "fa fa-eercast",
        head: 'Mobile App Design',
        desc: 'A short description of the service your company provides and how it helps your clients business increase revenue using the technology and strategy your company provides',
    },
    {
        icon: "fa fa-first-order",
        head: 'Content Creation',
        desc: 'A short description of the service your company provides and how it helps your clients business increase revenue using the technology and strategy your company provides',
    },
    {
        icon: "fa fa-envelope-o",
        head: 'Email Marketing',
        desc: 'A short description of the service your company provides and how it helps your clients business increase revenue using the technology and strategy your company provides',
    },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const linksClass = isOpen ? "nav-links" : "links";
    const toggleButtonIcon = isOpen ? "ri-close-fill close" : "ri-menu-fill open";

    useEffect(() => {
        const navbar = document.querySelector(".navigation");
        window.addEventListener("scroll", toggleNavbarOnScroll);

        function toggleNavbarOnScroll() {
            navbar.classList.toggle("active", window.scrollY > 100);
        }

        return window.removeEventListener("scroll", toggleNavbarOnScroll)
    }, [])

    return (
        <nav className="navigation">
            <div className="navbar-logo">
                <h2>JOHN DOE</h2>
            </div>
            <div className={linksClass} onClick={() => setIsOpen(false)}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#projects">Projects</a></li>
                </ul>
            </div>
            <div className="navbar-btn">
                <a href="#contact">Hit Me Up</a>
            </div>
            <button className="toggle" onClick={() => setIsOpen(!isOpen)}>
                <i className={toggleButtonIcon}></i>
            </button>
        </nav>
    );
};

export function Hero() {
    return (
        <>
            <div className="hero">
                <div className="hero-content">
                    <h1>I'm John Doe, </h1>
                    <h2>A Fullstack developer </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <button>Hit Me Up</button>
                    <div className="icons">
                        <i className='fa fa-star one'></i>
                        <i className='fa fa-star two'></i>
                        <i className='fa fa-star three'></i>
                        <i className='fa fa-star four'></i>
                        <i className='fa fa-star five'></i>
                        <i className='fa fa-star six'></i>
                    </div>
                </div>
                <div className="hero-img">
                    <img src={man} alt="" />
                </div>
            </div>
        </>
    )
}

export function About() {
    return (
        <>
            <div className="about" id='about'>
                <div className="about-left">
                    <img src={man} alt="" />
                </div>
                <div className="about-right">
                    <h2>About Me</h2>
                    <h3>I'm John Doe, A Fullstack developer</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, odit.
                        Et corrupti fugiat harum rerum! Sint beatae reprehenderit deleniti expedita
                        neque suscipit perferendis facilis reiciendis error. Amet aperiam eos ea.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio hic dolorem
                        esse accusamus atque, impedit, cum quibusdam commodi repellendus dicta earum
                        veritatis voluptate? Illo incidunt nostrum recusandae rem. Cumque, dolores.
                    </p>
                    <button>Hit Me Up</button>
                </div>
            </div>
        </>
    )
}

export function Projects() {
    return (
        <>
            <div className="projects" id="projects">
                <h2>My Portfolio</h2>
                <div className="project-items">
                    {projects.map(({ image, title, text }) => {
                        return (
                            <div className="item" key={title}>
                                <img src={image} alt='project-img' />
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
        </>
    )
}

export function Services() {
    return (
        <div>
            <section className="services" id="services">
                <h2 className="service-header">My Services</h2>
                <p className="text">
                    Our team of expert is dedicated to turning your vision
                    into reality with innovative and reliable technology.
                </p>
                <div className="service-container">
                    {services.map(({ icon, head, desc }) => {
                        return (
                            <div className="service" key={icon}>
                                <div className="service-icon">
                                    <h2 className="icon">
                                        <i className={icon}></i>
                                    </h2>
                                </div>
                                <h2>{head}</h2>
                                <p>{desc}</p>
                            </div>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

export function Contact() {
    return (
        <>
            <div className="contact-form" id='contact'>
                <form>
                    <h2>Contact Me</h2>
                    <p>Send a message, let's talk business</p>
                    <div>
                        <label htmlFor="firstName">Full Name *</label>
                        <div className='names'>
                            <input type="text" placeholder="First Name" id="first" required />
                            <input type="text" placeholder="Last Name" required />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email">E-mail *</label>
                        <input type="email" placeholder="example@example.com" required />
                    </div>
                    <div>
                        <label htmlFor="message">Message *</label>
                        <textarea id="message" name="message" required
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footer-name">
                    <h2>John Doe</h2>
                </div>
                <div className="footer-links">
                    <i className="fa fa-nstagram footer-icon"></i>
                    <i className="fa fa-facebook footer-icon"></i>
                    <i className="fa fa-twitter footer-icon"></i>
                    <i className="fa fa-linkedin footer-icon"></i>
                </div>
            </div>
            <hr />
            <p className="copy">Copyright John Doe 2025. All Rights Reserved</p>
        </>
    )
}

// export function Header() {
//     return (
//         <header>
//             <img src="https://raw.githubusercontent.com/scrimba/learn-react/refs/heads/main/02.%20Data-Driven%20React/01.%20Section%202%20Intro/images/globe.png" alt="" />
//             <h1>my travel journal.</h1>
//         </header>
//     )
// }