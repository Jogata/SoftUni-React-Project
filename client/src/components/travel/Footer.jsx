import john from "./images/john.jpg";
import work1 from "./images/drink.jpg";
import work2 from "./images/milk.jpg";
import work3 from "./images/wine.jpg";
import work4 from "./images/work4.jpeg";

const works = [
    {
        image: work1, 
        title: "SipSunny - Refreshing Summer Drinks", 
        text: "A vibrant, mobile-first website featuring colorful summer drink recipes, user-submitted photos, and a cocktail creator tool. Optimized for speed and designed with a fun, seasonal vibe to keep users engaged."
    }, 
    {
        image: work2, 
        title: "Milko - The Story of Fresh Dairy", 
        text: "A beautifully designed informational website that educates visitors about the journey of milk — from farm to table. Includes engaging animations, nutritional facts, and interactive infographics to promote transparency and health awareness."
    }, 
    {
        image: work3, 
        title: "VinoVault - Discover the World of Wine", 
        text: "An elegant, content-rich website dedicated to wine enthusiasts. Features include wine pairing guides, region-based browsing, and a blog for wine reviews and tips. Designed with a focus on visual storytelling and a refined aesthetic."
    }, 
    {
        image: work4, 
        title: "ShopSphere - Modern E-Commerce Platform", 
        text: "A full-featured e-commerce site built from the ground up. Includes product listings, shopping cart, secure checkout, admin dashboard, and user authentication. Fully responsive with Stripe payment integration."
    }, 
]

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

export function Work() {
    return (
        <div className="works" id="work">
            <h2 className="work-header">WORK</h2>
            <div className="works-container">
                {works.map((work, index) => {
                    return (
                        <div className="work" key={index}>
                            <div className="work-content">
                                <div className="work-links">
                                    <a href="#">
                                        <i className="fa fa-github"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-link"></i>
                                    </a>
                                </div>
                                <h2>{work.title}</h2>
                                <p>{work.text}</p>
                            </div>
                            <div className="work-image">
                                <img src={work.image} alt="" />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export function Contact() {
    return (
        <div className="contact-form" id="contact">
            <h2>Contact Me</h2>
            <p>Please fil the form to book my services</p>
            <form onClick={e => e.preventDefault()}>
                <div>
                    <label htmlFor="first">Full Name</label>
                    <div className="names">
                        <input type="text" name="first" id="first" placeholder="First Name" required />
                        <input type="text" name="last" id="last" placeholder="Last Name" />
                    </div>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="example@gmail.com" required />
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Your message..." required></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
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