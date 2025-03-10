import './home.css';
import hero from "../../images/hero.jpg";
import glovo from "../../images/glovo-logo.svg";
import oracle from "../../images/oracle-logo.svg";
import segment from "../../images/segment-logo.svg";
import ionic from "../../images/ionic-logo.svg";
import paypal from "../../images/paypal-logo.svg";
import stripe from "../../images/stripe-logo.svg";

export function Home() {
    return (
        // <h1>home component</h1>
        <>
            <div className="hero">
                <h1 className='hero-header'>
                    Supercharge Your Marketing with Trevo
                </h1>
                <p>Automate, analyze, and optimize your marketing campaigns from a single platform. <br />
                    Maximize your reach, convert more leads, and grow your business faster.
                </p>
                <div className="hero-btn">
                    <button className="cta-btn">
                        Get Started Free
                    </button>
                </div>
                <img
                    src={hero} 
                    alt="hero img"
                    className="hero-img"
                />
            </div>
            <div className="trusted">
                <h2>Over 2,000 Organizations use our platform</h2>
                <div className="logos">
                    <img src={glovo} alt="Glovo Logo" className="logo" />
                    <img src={oracle} alt="Oracle Logo" className="logo" />
                    <img src={segment} alt="Segment Logo" className="logo" />
                    <img src={ionic} alt="Ionic Logo" className="logo" />
                    <img src={paypal} alt="Paypal Logo" className="logo" />
                    <img src={stripe} alt="Stripe Logo" className="logo" />
                </div>
            </div>
        </>
    )
}