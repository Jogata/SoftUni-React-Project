import "./hero.css";
import hero from "../../images/hero.jpg"

export function Hero1() {
    return (
        <div className="hero">
            <div className="hero-left">
                <h2 className="hero-header">
                    Building Tomorrow's Solution Today!
                </h2>
                <p className="hero-desc">
                    Transform your ideas into powerful software solutions.
                    Stay ahead of the curve with our advanced software
                    development services.
                </p>
                <div className="hero-logos">
                    {/* <img src="https://raw.githubusercontent.com/Jogata/SoftUni-React-Project/4bc7a72b7765b599ee5411465aaba7ac2b9085f5/client/src/components/travel/saas-marketing/images/glovo-logo.svg" alt="" className="hero-logo" /> */}
                    {/* <img src="https://raw.githubusercontent.com/Jogata/SoftUni-React-Project/4bc7a72b7765b599ee5411465aaba7ac2b9085f5/client/src/components/travel/saas-marketing/images/oracle-logo.svg" alt="" className="hero-logo" /> */}
                    {/* <img src="https://raw.githubusercontent.com/Jogata/SoftUni-React-Project/4bc7a72b7765b599ee5411465aaba7ac2b9085f5/client/src/components/travel/saas-marketing/images/payoneer-logo.svg" alt="" className="hero-logo" /> */}
                    {/* <img src="https://raw.githubusercontent.com/Jogata/SoftUni-React-Project/4bc7a72b7765b599ee5411465aaba7ac2b9085f5/client/src/components/travel/saas-marketing/images/stripe-logo.svg" alt="" className="hero-logo" /> */}
                </div>
            </div>
            <div className="hero-right">
                <img src={hero} alt="" className="hero-image" />
            </div>
        </div>
    )
}

export function Hero() {
    return (
        <section className="edukative-hero">
            <div className="edukative-hero-content">
                <h1>
                    <span>Empower</span> Your Future with
                    Cutting-Edge <span>Skills</span>
                </h1>
                <p>
                    Unlock your potential with courses designed to 
                    help you thrive in the digital age. From coding 
                    to creative arts, we provide the tools you need 
                    to succeed.
                </p>
                <div className="edukative-buttons">
                    <a
                        href="#"
                        className="edukative-cta-button"
                    >
                        Enroll Now
                    </a>
                    <a
                        href="#"
                        className="edukative-courses-button"
                    >
                        Explore Our Courses
                    </a>
                </div>
                {/* <i className="fa fa-share edukative-hero-icon"></i> */}

            </div>

            <div className="edukative-hero-images">
                <div className="edukative-images-row">
                    <img
                        // src={student}
                        src="skyrim/equipment/armor/heavy/steel/mountain-knight-in-full-armor.jpg"
                        alt="Student"
                        className="edukative-hero-image edukative-top-left"
                    />
                    <img
                        // src={student1}
                        src="skyrim/equipment/armor/heavy/steel/mountain-knight-in-full-armor.jpg"
                        alt="Student"
                        className="edukative-hero-image edukative-top-right"
                    />
                </div>

                <div className="edukative-images-row">
                    <img
                        // src={student2}
                        src="skyrim/equipment/armor/heavy/steel/mountain-knight-in-full-armor.jpg"
                        alt="Student"
                        className="edukative-hero-image edukative-bottom-left"
                    />
                    <img
                        // src={student3}
                        src="skyrim/equipment/armor/heavy/steel/mountain-knight-in-full-armor.jpg"
                        alt="Student"
                        className="edukative-hero-image edukative-bottom-right"
                    />
                </div>
            </div>
        </section>
    )
}