import terminal from "../../assets/terminal.png";
import "./developer.css";

export function Developer() {
    return (
        <div className="developers">
            <div className="container">
                <div className="left">
                    <h2>Superpowers for DEFI developers.</h2>
                    <p>Checkout the <span className="blue">documentation</span>, the <span className="blue">quick start</span> or a guide below to integrate your project with thousands of tokens and billions of liquidity.</p>
                </div>
                <div className="right">
                    <div className="img-container">
                        <img src={terminal} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}