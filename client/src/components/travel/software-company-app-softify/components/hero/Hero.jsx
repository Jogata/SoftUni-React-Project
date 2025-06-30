import "./hero.css";

export function Hero() {
    return (
        <div className="hero">
            <h1 className="hero-header">Empowering Your Workforce,
                <span> Transforming Your Business</span>
            </h1>
            <p> Trnasfrom your ideas into powerful software solution. <br />
                Stay ahead of the curve with out advanced software development services.</p>
            <button className="cta-button">Get Started</button>
            <section className="how-it-works" id="how-it-works">
                <h2>How We Work</h2>
                <div className="steps">
                    <div className="step">
                        <i className="ri-group-fill hero-icon"></i>
                        <h3>Consultation</h3>
                        <p>We collect detailed requirement, resources and develop a detailed project plan</p>
                    </div>
                    <div className="step">
                        <i className="fa fa-laptop hero-icon"></i>
                        <h3>Design and Development</h3>
                        <p>We create architecture & design, build prototype to visualize then write actual code following design specification</p>
                    </div>
                    <div className="step">
                        <i className="fa fa-codepen hero-icon"></i>
                        <h3>Testing and Deployment</h3>
                        <p>We conduct various test phases, then deploy software to production environment</p>
                    </div>
                </div>
            </section>
        </div>
    )
}