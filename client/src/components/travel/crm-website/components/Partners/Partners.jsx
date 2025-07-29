import "./partners.css";
import facebook from "../../images/fb-logo.png";
// import google from "../../images/google-logo.png";
// import krisp from "../../images/krisp-logo.png";
import netflix from "../../images/netflix-logo.png";
// import spotify from "../../images/spotify-logo.png";
import stripe from "../../images/stripe.png";
// import walmart from "../../images/walmart-logo.png";
import yahoo from "../../images/yahoo-logo.png";
import zapier from "../../images/zapier-logo.png";

export function Partners() {
    return (
        <div className="partners">
            <h2 className="partners-header">
                Trusted Partners
            </h2>
            <div className="logos">
                <img src={netflix} alt="" className="partner-logo" />
                <img src={stripe} alt="" className="partner-logo" />
                <img src={yahoo} alt="" className="partner-logo" />
                <img src={facebook} alt="" className="partner-logo" />
                <img src={zapier} alt="" className="partner-logo" />
            </div>
        </div>
    )
}