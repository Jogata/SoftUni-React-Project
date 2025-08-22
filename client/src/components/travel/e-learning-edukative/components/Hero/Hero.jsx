import "./hero.css";

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