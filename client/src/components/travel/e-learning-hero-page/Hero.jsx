import student from './images/s2.jpg'
import student1 from "./images/s1.jpg";
import student2 from "./images/s3.jpg";
import student3 from "./images/s4.jpg";

export function Hero() {
    return (
        <div className="page">
            <section className="hero-section">
                <div className="hero-title">
                    <h1>
                        <span>Empower</span> Your Future with
                        Cutting-Edge <span>Skills</span>
                    </h1>
                    <p>
                        Unlock your potential with courses designed to help you thrive in
                        the digital age. From coding to creative arts, we provide the tools
                        you need to succeed.
                    </p>
                    <div>
                        <a
                            href="#" 
                            className="enroll-btn"
                        >
                            Enroll Now
                        </a>
                        <a
                            href="#" 
                            className="explore-btn"
                        >
                            Explore Courses
                        </a>
                    </div>

                </div>

                <div className="hero-images">
                    <div className="images-row">
                        <img
                            src={student}
                            alt="Student"
                            className="hero-image top-left"
                        />
                        <img
                            src={student1}
                            alt="Student"
                            className="hero-image top-right"
                        />
                    </div>

                    <div className="images-row">
                        <img
                            src={student2}
                            alt="Student"
                            className="hero-image bottom-left"
                        />
                        <img
                            src={student3}
                            alt="Student"
                            className="hero-image bottom-right"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};