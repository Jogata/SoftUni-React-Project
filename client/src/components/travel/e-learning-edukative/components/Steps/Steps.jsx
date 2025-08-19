import "./steps.css";

export function Steps1() {
    return (
        <div className="how-it-works">
            <h2>How We Work</h2>
            <div className="steps">
                <div className="step">
                    <div className="bg">
                        <h2 className="num">1</h2>
                    </div>
                    {/* <img src="" alt="" /> */}
                    <h3>Planning and Analysis</h3>
                    <p>
                        We collect detailed requirement, resources and develop 
                        a detailed project plan
                    </p>
                </div>
                <div className="step">
                    <div className="bg">
                        <h2 className="num">2</h2>
                    </div>
                    {/* <img src="" alt="" /> */}
                    <h3>Design and Developement</h3>
                    <p>
                        We create architecture & design, build prototype to visualize 
                        then write actual code following design specifications
                    </p>
                </div>
                <div className="step">
                    <div className="bg">
                        <h2 className="num">3</h2>
                    </div>
                    {/* <img src="" alt="" /> */}
                    <h3>Testing and Deployment</h3>
                    <p>
                        We conduct various test phases, then deploy software 
                        to production environment
                    </p>
                </div>
            </div>
        </div>
    )
}

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