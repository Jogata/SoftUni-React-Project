import "./about.css";

export function About() {
    return (
        <div className="about">
            <div className="container">
                <h2>A Growing Protocol Ecosystem</h2>
                <p>The Defi protocol system empowers developers,
                    liquidity providers, and traders to participate
                    in a financial marketplace that is open and
                    accessible to all.
                </p>
                <div className="card-container">
                    <div className="card">
                        <h1>card</h1>
                    </div>
                    <div className="card">
                        <h1>card</h1>
                    </div>
                    <div className="card">
                        <h1>card</h1>
                    </div>
                    <div className="card">
                        <h1>card</h1>
                    </div>
                </div>
                <a href="/" className="btn">Use Defi</a>
            </div>
        </div>
    )
}