import "./about.css";

export function About() {
    return (
        <div className="about-us-edukative-page">
            <header>
                <h1>About Us</h1>
                <h2>Welcome to Edukative - Your Gateway to Smarter Learning</h2>
                <p>
                    At Edukative, we believe education should be accessible, 
                    engaging, and effective for everyone. Whether you're a 
                    student aiming to excel in academics, a professional looking 
                    to upgrade your skills, or a lifelong learner pursuing new 
                    passions, Edukative is here to support your journey.
                </p>
            </header>

            <main>
                <section>
                    <h2>Who We Are</h2>
                    <p>
                        Edukative is an innovative e-learning platform dedicated to 
                        transforming the way people learn online. Founded by a team 
                        of educators, technologists, and learning designers, our 
                        mission is to make high-quality education available anytime, 
                        anywhere.
                    </p>
                    <p>
                        We bring together expert instructors, interactive content, 
                        and a personalized learning experience to help learners reach 
                        their full potential.
                    </p>
                </section>

                <section>
                    <h2>What We Offer</h2>
                    <ul className="bulled">
                        <li>Expert-Led Courses - Learn from top instructors and professionals.</li>
                        <li>Interactive Lessons - Engaging videos, quizzes, and real-world projects.</li>
                        <li>Flexible Learning - Study at your own pace, anytime.</li>
                        <li>Certificates of Completion - Showcase your achievements.</li>
                        <li>Learning Paths - Structured programs to guide your growth.</li>
                    </ul>
                </section>

                <section>
                    <h2>Our Vision</h2>
                    <p>
                        To create a world where learning never stops, and where 
                        everyone has the tools and support they need to thrive—personally 
                        and professionally.
                    </p>
                </section>

                <section>
                    <h2>Our Mission</h2>
                    <p>
                        To empower learners of all ages and backgrounds through high-quality, 
                        accessible, and affordable online education.
                    </p>
                </section>

                <section>
                    <h2>Why Choose Edukative?</h2>
                    <ul className="bulled">
                        <li>Trusted by thousands of learners worldwide</li>
                        <li>Regularly updated content</li>
                        <li>Community-driven support and mentorship</li>
                        <li>Seamless learning across all devices</li>
                    </ul>
                </section>

                <section>
                    <h2>Join the Edukative Community</h2>
                    <p>
                        Learn more. Grow more. Be Edukative.
                    </p>
                </section>
            </main>
        </div>
    )
}