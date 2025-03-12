import './integrate.css';
import glovo from "../../images/glovo-logo.svg";
import oracle from "../../images/oracle-logo.svg";
import segment from "../../images/segment-logo.svg";
import ionic from "../../images/ionic-logo.svg";
import paypal from "../../images/paypal-logo.svg";
import stripe from "../../images/stripe-logo.svg";
import payoneer from "../../images/payoneer-logo.svg";
import verge from "../../images/verge-logo.svg";

export function Integrate() {
    const content = [
        { id: 1, name: "Glovo", icon: glovo }, 
        { id: 2, name: "Oracle", icon: oracle }, 
        { id: 3, name: "Paypal", icon: paypal }, 
        { id: 4, name: "Segment", icon: segment }, 
        { id: 5, name: "Payoneer", icon: payoneer }, 
        { id: 6, name: "Stripe", icon: stripe }, 
        { id: 7, name: "Ionic", icon: ionic }, 
        { id: 8, name: "Verge", icon: verge }
    ];

    return (
        <>
            <div className="integrate">
                <div className="integrate-header">
                    <h2>Seamlessly Integrates with Your Favorite Tools</h2>
                    <p>Trevo works effortlessly with the tools you already
                        use. Connect with CRM systems, email platforms,
                        social media networks, and more to create a
                        cohesive marketing ecosystem.</p>
                </div>
                <div className="circular-menu">
                    <div className="center-item">
                        <div className="phone-icon">
                            <i className="fa fa-mobile"></i>
                        </div>
                    </div>
                    <div className="circle">
                        {content.map((item, index) => {
                            return (
                                <div key={item.id} className='test' style={{"--i": index, "--length": content.length}}>
                                    <div className="menu-item">
                                        <img src={item.icon} alt="" className="icon" />
                                        <div className="label">
                                            {item.name}
                                        </div>
                                    </div>
                                </div>
                                // <div key={item.id} className="menu-item">
                                //     <img src={item.icon} alt="" className="icon" />
                                //     <div className="label">
                                //         {item.name}
                                //     </div>
                                // </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
};