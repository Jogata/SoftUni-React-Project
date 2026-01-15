import { useEffect, useRef, useState } from "react";

export function Home() {
    return (
        <main>
            <AnimatedBackground />
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
        </main>
    )
}

export function NotFound() {
    return (
        <h1>Not Found</h1>
    )
}

function AnimatedBackground() {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        generateStars();

        const handleResize = () => {
            console.log("resize");
            generateStars();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    const generateStars = () => {
        const numberOfStars = Math.floor(
            (window.innerWidth * window.innerHeight) / 10000
        );

        const newStars = new Array(numberOfStars);

        for (let i = 0; i < numberOfStars; i++) {
            newStars[i] = {
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            };
        }

        setStars(newStars);
    };

    return (
        <div className="animated-bg">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="star"
                    style={{
                        width: star.size + "px",
                        height: star.size + "px",
                        left: star.x + "%",
                        top: star.y + "%",
                        opacity: star.opacity,
                        animationDuration: star.animationDuration + "s",
                    }}
                />
            ))}

            <Meteor />
            <Meteor />
            <Meteor />
            <Meteor />

        </div>
    );
};

function Meteor() {
    const [meteor, setMeteor] = useState({
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        animationDuration: 10,
    });

    const id = useRef(0);

    useEffect(() => {
        const duration = Math.random() * 3 + 10;

        const timeoutID = setTimeout(() => {
            const newMeteor = {
                size: Math.random() * 2 + 1,
                x: Math.random() * 70,
                y: Math.random() * 20,
                animationDuration: duration,
            };
            setMeteor(newMeteor);
            id.current++;
        }, duration * 1000 + 3000);

        return () => clearInterval(timeoutID);
    }, [id.current])

    return (
        <MeteorElement meteor={meteor} key={id.current} />
    )
}

function MeteorElement({ meteor }) {
    return (
        <div
            className="meteor"
            style={{
                width: meteor.size * 50 + "px",
                height: meteor.size * 2 + "px",
                left: meteor.x + "%",
                top: meteor.y + "%",
                animationDuration: meteor.animationDuration + "s",
            }}
        />
    )
}

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        let count = 0;

        const handleScroll = () => {
            count++;
            const current = count;

            setTimeout(() => {
                if (current == count) {
                    if (window.scrollY > 50) {
                        setIsScrolled(true);
                    } else {
                        setIsScrolled(false);
                    }
                }
            }, 500);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    const mobileNavClass = isMenuOpen ? "mobile-nav open" : "mobile-nav";
    const navClass = isScrolled ? "navigation alt" : "navigation";

    return (
        <nav className={navClass}>
            <div className="container flex-box">
                <a href="#hero" className="logo">
                    <span>
                        <span className="text-glow">Person </span>Portfolio
                    </span>
                </a>

                {/* desktop nav */}
                <div className="desktop-nav">
                    {navItems.map((item, key) => (
                        <a
                            key={key}
                            href={item.href}
                            className="link-nav"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* mobile nav */}
                <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="menu-button"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    {isMenuOpen ? 
                        <i className="ri-close-line"></i> : 
                        <i className="ri-menu-3-line"></i>
                    }
                </button>

                <div className={mobileNavClass}>
                    <div className="links">
                        {navItems.map((item, key) => (
                            <a
                                key={key}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};


function HeroSection() {
    return (
        <section id="hero" className="hero-section">
            <div className="container">
                    <h1>
                        <span className="fade-in">Hi, I'm</span>
                        <span> </span>
                        <span className="fade-in primary">Software</span>
                        <span> </span>
                        <span className="fade-in"> Developer</span>
                    </h1>

                    <p className="fade-in">
                        I create stellar web experiences with modern technologies.
                        Specializing in front-end development, I build interfaces 
                        that are both beautiful and functional.
                    </p>

                    <div className="button">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div>
            </div>

            <div className="scroll">
                <span className=""> Scroll </span>
                <i className="fa fa-angle-double-down"></i>
            </div>
        </section>
    );
}

function AboutSection() {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <h2>
                    About <span> Me</span>
                </h2>

                <div className="section-content">
                    <div className="about-description">
                        <h3>
                            Passionate Web Developer & Tech Creator
                        </h3>

                        <p>
                            With over 5 years of experience in web development, I
                            specialize in creating responsive, accessible, and
                            performant web applications using modern technologies.
                        </p>

                        <p>
                            I'm passionate about creating elegant solutions to complex
                            problems, and I'm constantly learning new technologies and
                            techniques to stay at the forefront of the ever-evolving
                            web landscape.
                        </p>

                        <div className="about-buttons">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>
                            <a href="#" className="alt-btn">
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="about-cards">
                        <div className="about-card gradient-border card-hover">
                            <div className="flex-box">
                                <div className="icon">
                                    <i className="fa fa-code"></i>
                                </div>
                                <div className="description">
                                    <h4>Web Development</h4>
                                    <p>
                                        Creating responsive websites and web applications 
                                        with modern frameworks.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="about-card gradient-border card-hover">
                            <div className="flex-box">
                                <div className="icon">
                                    <i className="fa fa-user"></i>
                                </div>
                                <div className="description">
                                    <h4>UI/UX Design</h4>
                                    <p>
                                        Designing intuitive user interfaces and seamless 
                                        user experiences.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="about-card gradient-border card-hover">
                            <div className="flex-box">
                                <div className="icon">
                                    <i className="fa fa-briefcase"></i>
                                </div>

                                <div className="description">
                                    <h4>Project Management</h4>
                                    <p>
                                        Leading projects from conception to completion 
                                        with agile methodologies.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


const skills = [
    // Frontend
    { name: "HTML/CSS", level: 95, category: "frontend" },
    { name: "JavaScript", level: 90, category: "frontend" },
    { name: "React", level: 90, category: "frontend" },
    { name: "TypeScript", level: 85, category: "frontend" },
    { name: "Tailwind CSS", level: 90, category: "frontend" },
    { name: "Next.js", level: 80, category: "frontend" },

    // Backend
    { name: "Node.js", level: 80, category: "backend" },
    { name: "Express", level: 75, category: "backend" },
    { name: "MongoDB", level: 70, category: "backend" },
    { name: "PostgreSQL", level: 65, category: "backend" },
    { name: "GraphQL", level: 60, category: "backend" },

    // Tools
    { name: "Git/GitHub", level: 90, category: "tools" },
    { name: "Docker", level: 70, category: "tools" },
    { name: "Figma", level: 85, category: "tools" },
    { name: "VS Code", level: 95, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

const SkillsSection = () => {
    const [index, setIndex] = useState(0);

    const activeCategory = categories[index];

    const categoriesClasses = ["category", "category", "category", "category"];
    categoriesClasses[index] = "category active";

    let filteredSkills = skills;

    if (activeCategory !== "all") {
        filteredSkills = skills.filter(
            skill => skill.category === activeCategory
        );
    }

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2>
                    My <span>Skills</span>
                </h2>

                <div className="categories">
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            className={categoriesClasses[index]}
                            onClick={() => setIndex(index)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="skills">
                    {filteredSkills.map((skill, key) => (
                        <div
                            key={key}
                            className="skill-card card-hover"
                        >
                            <div className="card-header">
                                <h3>{skill.name}</h3>
                            </div>
                            <div className="skill-level">
                                <div
                                    className="bar"
                                    style={{ width: skill.level + "%" }}
                                />
                            </div>

                            <div className="percentage">
                                <span>
                                    {skill.level}%
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}


import project1 from "./images/drink.jpg";
import project2 from "./images/hero2.jpg";
import project3 from "./images/work4.jpeg";

const projects = [
    {
        id: 1,
        title: "SaaS Landing Page",
        description: "A beautiful landing page app using React and Tailwind.",
        image: project1,
        tags: ["React", "TailwindCSS", "Supabase"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 2,
        title: "Orbit Analytics Dashboard",
        description:
            "Interactive analytics dashboard with data visualization and filtering capabilities.",
        image: project2,
        tags: ["TypeScript", "D3.js", "Next.js"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 3,
        title: "E-commerce Platform",
        description:
            "Full-featured e-commerce platform with user authentication and payment processing.",
        image: project3,
        tags: ["React", "Node.js", "Stripe"],
        demoUrl: "#",
        githubUrl: "#",
    },
];

function ProjectsSection() {
    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2>
                    Featured <span> Projects </span>
                </h2>

                <p className="section-description">
                    Here are some of my recent projects. Each project was carefully
                    crafted with attention to detail, performance, and user experience.
                </p>

                <div className="projects">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="project card-hover"
                        >
                            <div className="project-image">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className=""
                                />
                            </div>

                            <div className="project-data">
                                <div className="tags">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="tag">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3>{project.title}</h3>
                                <p>
                                    {project.description}
                                </p>

                                <div className="links">
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        className=""
                                    >
                                        <i className="fa fa-chain"></i>
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        className=""
                                    >
                                        <i className="fa fa-github"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="github-link">
                    <a
                        href="#"
                        target="_blank"
                        className="cosmic-button"
                    >
                        Check My Github
                        <i className="fa fa-angle-double-right"></i>
                    </a>
                </div>
            </div>
        </section>
    );
}


function ContactSection() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();

        if (isSubmitting) {
            console.log("form is submitting");
            return;
        }

        setIsSubmitting(true);
        
        setTimeout(() => {
            setIsSubmitting(false);
            console.log("form was submitted");
        }, 1500);
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2>Get In <span> Touch</span></h2>

                <p className="section-description">
                    Have a project in mind or want to collaborate? Feel free 
                    to reach out. I'm always open to discussing new opportunities.
                </p>

                <div className="contact-section-body">
                    <div className="contacts">
                        <h3>Contact Information</h3>

                        <div className="inline-block">
                            <div className="contact">
                                <div className="icon">
                                    <i className="fa fa-envelope"></i>
                                </div>
                                <div>
                                    <h4>Email</h4>
                                    <a
                                        href="mailto:hello@gmail.com"
                                        className="contact-link"
                                    >
                                        hello@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="contact">
                                <div className="icon">
                                    <i className="fa fa-phone"></i>
                                </div>
                                <div>
                                    <h4>Phone</h4>
                                    <a
                                        href="tel:+11234567890"
                                        className="contact-link"
                                    >
                                        +1 (123) 456-7890
                                    </a>
                                </div>
                            </div>
                            <div className="contact">
                                <div className="icon">
                                    <i className="ri-map-pin-2-fill"></i>
                                </div>
                                <div>
                                    <h4>Location</h4>
                                    <span>
                                        Vancouver, BC, Canada
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="connect">
                            <h4>Connect With Me</h4>
                            <div className="social-links">
                                <a href="#" target="_blank">
                                    <i className="fa fa-linkedin"></i>
                                </a>
                                <a href="#" target="_blank">
                                    <i className="fa fa-twitter"></i>
                                </a>
                                <a href="#" target="_blank">
                                    <i className="fa fa-instagram"></i>
                                </a>
                                <a href="#" target="_blank">
                                    <i className="fa fa-twitch"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form">
                        <h3>Send a Message</h3>

                        <form onSubmit={handleSubmit}>
                            <div className="form-row">
                                <label htmlFor="name">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="John Doe..."
                                    // required
                                />
                            </div>

                            <div className="form-row">
                                <label htmlFor="email">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="john@gmail.com"
                                    // required
                                />
                            </div>

                            <div className="form-row">
                                <label htmlFor="message">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Hello, I'd like to talk about..."
                                    rows={6}
                                    // required
                                />
                            </div>

                            <button
                                type="submit"
                                // disabled={isSubmitting}
                                className="cosmic-button"
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <i className="ri-send-plane-2-fill"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function Footer() {
  return (
    <footer className="footer">
      {" "}
      <p>
        {" "}
        &copy; {new Date().getFullYear()} Company. All rights reserved.
      </p>
      <a
        href="#hero"
        className=""
      >
        <i className="fa fa-angle-double-up"></i>
      </a>
    </footer>
  );
};

// export function Header() {
//     return (
//         <header>
//             <img src="https://raw.githubusercontent.com/scrimba/learn-react/refs/heads/main/02.%20Data-Driven%20React/01.%20Section%202%20Intro/images/globe.png" alt="" />
//             <h1>my travel journal.</h1>
//         </header>
//     )
// }