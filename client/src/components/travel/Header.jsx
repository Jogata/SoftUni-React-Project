import hero from "./images/derek.jpg";
import project1 from "./images/wine.jpg";
import project2 from "./images/milk.jpg";
import project3 from "./images/drink.jpg";
import project4 from "./images/work4.jpeg";
import figma from "./images/figma.svg";
import css from "./images/css.svg";
import html5 from "./images/html5.svg";
import php from "./images/php.svg";
import nodejs from "./images/nodejs.svg";
import mongodb from "./images/mongodb.svg";
import tailwindcss from "./images/tailwindcss.svg";
import visualstudio from "./images/visualstudio.svg";
import react from "./images/reactjs.svg";
import javascript from "./images/javascript.svg";
import { Link } from "react-router-dom";
import { createContext, useContext, useState } from "react";

const projects = [
    {
        image: project1,
        title: 'Responsive E-commerce Website',
        github: "#github",
        link: "#link",
    },
    {
        image: project2,
        title: 'SaaS Marketing Website',
        github: "#github",
        link: "#link",
    },
    {
        image: project3,
        title: 'Investement Website',
        github: "#github",
        link: "#link",
    },
    {
        image: project4,
        title: 'E-learning Website',
        github: "#github",
        link: "#link",
    },
]

export function Navigation() {
    return (
        <nav className="navigation">
            <div className="logo">
                <h2>Derek</h2>
            </div>
            <div className="links">
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contacts</a></li>
                </ul>
            </div>
            <div className="button">
                <button>Hire Me</button>
            </div>
        </nav>
    )
}

export function Hero() {
    return (
        <div className="hero">
            <div className="hero-top">
                <div className="hero-left">
                    <h2>I'm Derek Einstein</h2>
                    <h1>Professional <span>FullStack</span> Developer </h1>
                    <p>
                        I'm a senior fullstack engineer with over 15 years
                        of industrial working experience.
                    </p>
                    <div className="buttons">
                        <button>Hire Me</button>
                        <button>View My Projects</button>
                    </div>
                </div>
                <div className="hero-right">
                    <div className="hero-img">
                        <img src={hero} alt="" />
                    </div>
                </div>
            </div>
            <div className="hero-bottom">
                <div className="hero-info">
                    <h1>3+</h1>
                    <p>Years of Experience</p>
                </div>
                <div className="hero-info">
                    <h1>1000+</h1>
                    <p>Projects Completed</p>
                </div>
                <div className="hero-info">
                    <h1>800+</h1>
                    <p>Satisfied Clients</p>
                </div>
            </div>
        </div>
    )
}

export function Projects() {
    return (
        // <div>
        <div className="projects" id="projects">
            <h2 className="projects-header">Explore My Recent Projects</h2>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div key={index} className="project">
                        <div className="project-content">
                            <h2>{project.title} </h2>
                            <div className="project-links">
                                <a href={project.github}>
                                    <i className="fa fa-github"></i>
                                </a>
                                <a href={project.link}>
                                    <i className="fa fa-link"></i>
                                </a>
                            </div>
                        </div>
                        <div className="project-image">
                            <img src={project.image} alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
        // </div>
    )
}

export function Skills() {
    return (
        <div className="skills" id="services">
            <h2>My Work Tools</h2>
            <div className="skills-container">
                <div className="skills-img">
                    <img src={figma} alt="" />
                    <img src={tailwindcss} alt="" />
                    <img src={html5} alt="" />
                    <img src={css} alt="" />
                    <img src={php} alt="" />
                </div>
                <div className="skills-img">
                    <img src={nodejs} alt="" />
                    <img src={mongodb} alt="" />
                    <img src={javascript} alt="" />
                    <img src={react} alt="" />
                    <img src={visualstudio} alt="" />
                </div>
            </div>
        </div>
    )
}

export function About() {
    return (
        <section className="about" id="about">
            <div className="about-image">
                <img src={hero} alt="" />
            </div>
            <div className="about-info">
                <h1>About Me</h1>
                <p className="subheader">Professional Full Stack Developer</p>
                <h2>Hello, I'm Derek Einstain</h2>
                <p>
                    I'm a passionate Full Stack Developer with over 5 years
                    of experience building high-quality web applications.
                    I specialize in both frontend and backend development,
                    creating seamless user experiences and robust backend
                    systems.I enjoy solving complex problems, learning new
                    technologies, and collaborating with teams to bring
                    ideas to life.
                </p>
            </div>
        </section>
    )
}

export function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="inner-box">
                <h2>Contact Me</h2>
                <p>
                    Interested in working together or have a question? 
                    Fill out the form below or reach me directly via 
                    email or LinkedIn.
                </p>

                <form>
                    <input type="text" name="name" placeholder="Your Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" rows="5" placeholder="Your Message" required ></textarea>
                    <button type="submit">
                        Send Message
                    </button>
                </form>

                <div className="contacts">
                    <p>
                        <strong>Email:</strong>
                        <a href="mailto:youremail@example.com">
                            youremail@example.com
                            </a>
                            </p>
                    <p>
                        <strong>Phone:</strong>
                        <a href="tel:+1234567890">+1 (234) 567-890</a>
                        </p>
                    <div>
                        <a href="https://linkedin.com/in/yourprofile" target="_blank">LinkedIn</a>
                        <a href="https://github.com/yourusername" target="_blank">GitHub</a>
                    </div>
                </div>

            </div>
        </section>
    )
}

export function Footer() {
  return (
    <div>
        <footer className="footer">
            <div className="footer-bottom">
                <div className="footer-left">
                    <h2>Derek Einstein</h2>
                    <div className="socials">
                        <i className="fa fa-facebook social-icon" ></i>
                        <i className="fa fa-instagram social-icon" ></i>
                        <i className="fa fa-youtube-play social-icon" ></i>
                    </div>
                </div>
                <div className="footer-right">
                    <ul>
                        <li>Home</li>
                        <li>Services</li>
                        <li>About Me</li>
                        <li>Hire Me</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="copy">© 2024 Derek Einstein. All rights reserved.</p>
        </footer>
    </div>
  )
}

export const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];

  export const HighlightContext = createContext(false);

  export function Row({ title }) {
    const isHighlighted = useContext(HighlightContext);

    return (
      <div className={[
        'row',
        isHighlighted ? 'highlighted' : ''
      ].join(' ')}>
        {title}
      </div>
    );
  }

export function List({ items, renderItem }) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <div className="list">
            {items.map((item, index) => {
                const isHighlighted = index === selectedIndex;
                return (
                    <HighlightContext.Provider
                        key={item.id}
                        value={isHighlighted}
                    >
                        {renderItem(item)}
                    </HighlightContext.Provider>
                );
            })}
            <hr />
            <button onClick={() => {
                setSelectedIndex(i =>
                    (i + 1) % items.length
                );
            }}>
                Next
            </button>
        </div>
    );
}


// export function Header() {
//     return (
//         <header>
//             <img src="https://raw.githubusercontent.com/scrimba/learn-react/refs/heads/main/02.%20Data-Driven%20React/01.%20Section%202%20Intro/images/globe.png" alt="" />
//             <h1>my travel journal.</h1>
//         </header>
//     )
// }