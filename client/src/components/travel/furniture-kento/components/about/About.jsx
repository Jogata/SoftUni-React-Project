import { Navigation } from "../navigation/Navigation";
import { Link } from "react-router-dom";
import "./about.css";

export function About() {
    return (
        <>
            <header>
                <Navigation />
            </header>

            <main className="about">
                <section className="hero">
                    <h2>About Kento Furniture</h2>
                    <p>Design-driven. Customer-focused. Planet-friendly.</p>
                </section>

                <section className="section">
                    <h3>Our Story</h3>
                    <p>
                        Kento Furniture was founded with a simple belief: that high-quality,
                        thoughtfully-designed furniture should be accessible and sustainable.
                        Since our beginning, we've aimed to bridge the gap between form and
                        function, creating pieces that are as stylish as they are practical.
                    </p>
                    <p>
                        What started as a small workshop has grown into a trusted name in
                        modern furniture, beloved by customers across the country. We remain
                        committed to craftsmanship, sustainability, and innovation in every
                        piece we design.
                    </p>
                </section>

                <section className="section">
                    <h3>Our Mission</h3>
                    <p>
                        We believe furniture should last, inspire, and make life better.
                        That's why we focus on:
                    </p>
                    <div className="values-list">
                        <div className="value-item">
                            <h4>Sustainability</h4>
                            <p>
                                We use responsibly sourced materials and eco-friendly
                                processes to reduce our footprint.
                            </p>
                        </div>
                        <div className="value-item">
                            <h4>Timeless Design</h4>
                            <p>
                                Our products combine modern aesthetics with timeless
                                appeal that fits any home.
                            </p>
                        </div>
                        <div className="value-item">
                            <h4>Craftsmanship</h4>
                            <p>
                                Each product is crafted with care, ensuring durability
                                and premium quality.
                            </p>
                        </div>
                        <div className="value-item">
                            <h4>Customer Experience</h4>
                            <p>
                                We're dedicated to delivering outstanding service -
                                from order to delivery and beyond.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="section cta">
                    <h3>Want to see what we make?</h3>
                    <p>
                        Explore our full product catalog and discover furniture you'll
                        love living with.
                    </p>
                    <Link to="/">Browse Products</Link>
                </section>
            </main>
        </>
    )
}