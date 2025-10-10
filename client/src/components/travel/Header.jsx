import hero from "./images/derek.jpg";
import project1 from "./images/wine.jpg";
import project2 from "./images/milk.jpg";
import project3 from "./images/drink.jpg";
import project4 from "./images/work4.jpeg";
import { Link } from "react-router-dom";

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
                    <li>About</li>
                    <li><Link to="/projects"></Link></li>
                    <li>Services</li>
                    <li>Contact</li>
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
    <div>
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
    </div>
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