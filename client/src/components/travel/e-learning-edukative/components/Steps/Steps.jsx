import "./steps.css";

export function Steps() {
    return (
        <section className="edukative-steps-section">
            <div className="edukative-steps">
                <div className="edukative-step">
                    <i className="fa fa-book edukative-icon"></i>
                    <div className="edukative-content">
                        <h3>Interactive Learning</h3>
                        <p>
                            Engage with hands-on projects and real-world scenarios and
                            learn from industry leaders and seasoned proffesionals
                        </p>
                    </div>
                </div>
                <div className="edukative-step">
                    <i className="ri-award-line edukative-icon"></i>
                    <div className="edukative-content">
                        <h3>Accredited Programs</h3>
                        <p>
                            Gain skills that make you stand out in the job market and earn
                            certifications that are recognized by employers worldwide
                        </p>
                    </div>
                </div>
                <div className="edukative-step">
                    <i className="fa fa-users edukative-icon"></i>
                    <div className="edukative-content">
                        <h3>Supportive Community</h3>
                        <p>
                            Connect with fellow students and mentors across the globe to stay
                            updated with the latest trends and technologies
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}