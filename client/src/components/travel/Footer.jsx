import john from "./images/john.jpg";

export function Navigation() {
    return (
        <nav className="navigation">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#work">Work</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export function Hero() {
    return (
        <div className="hero" id="home">
            <div className="hero-content">
                <div className="hero-left">
                    <p>Hire Me</p>
                    <p>Collab</p>
                </div>
                <div className="hero-center">
                    <h1>JOHN</h1>
                    <h1 className="text-bottom">TRUMBLE</h1>
                    <img src={john} alt="" className="home-img" />
                    <p>I'm John Trumble, Frontend Developer at Xendex</p>
                </div>
                <div className="hero-right">
                    <ul className="social-icons">
                        <li>
                            <a href="#">
                                <i className="fa fa-facebook social-icon"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-instagram social-icon"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-linkedin social-icon"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export function About() {
    return (
        <div className="about" id="about">
            <div className="about-left">
                <div className="about-img">
                    <img src={john} alt="" />
                </div>
            </div>
            <div className="about-right">
                <h2>About Me</h2>
                <p>
                    Hi, I'm John Trumble - a passionate software developer who 
                    believes in building clean, efficient, and scalable 
                    solutions that solve real-world problems.
                </p>
                <p>
                    With a background in computer science and years of hands-on 
                    experience in both front-end and back-end development, I 
                    specialize in creating full-stack applications using modern 
                    technologies such as JavaScript, React, Node.js, and Python. 
                    Whether it's designing intuitive user interfaces or engineering 
                    robust backend architectures, I love turning complex challenges 
                    into elegant, functional code.
                </p>
                <div className="about-btns">
                    <button>Download CV</button>
                    <button>Hire Me</button>
                </div>
            </div>
        </div>
    )
}

// export function Footer() {
//     return (
//         <footer>
//             <h1>footer component</h1>
//         </footer>
//     )
// }