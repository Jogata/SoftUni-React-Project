import "./how.css";

export function How() {
    return (
        <section className="how">
            <h2>How It Works</h2>
            <div className="steps">
                <div className="step">
                    <div className="bg">
                        <span className="num">1</span>
                    </div>
                    {/* <img src={arrow} alt="" /> */}
                    <h2>Sign Up</h2>
                    <p>
                        Create your account and set up your
                        profile in just a few minutes.
                    </p>
                </div>
                <div className="step">
                    <div className="bg">
                        <span className="num">2</span>
                    </div>
                    {/* <img src={arrow} alt="" /> */}
                    <h2>Add Contacts</h2>
                    <p>
                        Import your contacts or add them manually
                        to start managing your relationships.
                    </p>
                </div>
                <div className="step">
                    <div className="bg">
                        <span className="num">3</span>
                    </div>
                    {/* <img src={arrow} alt="" /> */}
                    <h2>Track Interactions</h2>
                    <p>
                        Keep track of customer interactions,
                        notes, and follow-ups in one place.
                    </p>
                </div>
            </div>
        </section>
    )
}