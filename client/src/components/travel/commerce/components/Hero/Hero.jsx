import heroImg from "../../images/hero.png"
import "./hero.css";

export function Hero() {
    return (
        // <h1>hero</h1>
        <div className="hero">
            <div className="hero-top">
                <div className="left">
                    <h2>Elevate Your Wardrobe</h2>
                    <h1>Discover Timeless Style and Unmatched Comfort</h1>
                    <p>Shop the latest trends and classic essentials just for you</p>
                </div>
                <div className="right">
                    <img src={heroImg} alt="Woman model" />
                </div>
            </div>
            <div className="hero-bottom">
                <div className="hero-content">
                    <div className="info-icon">
                        <i className='ri-truck-fill hero-cc-icon'></i>
                    </div>
                    <div className="detail">
                        <h3>Free Shipping</h3>
                        <p>Free shipping on order</p>
                    </div>
                </div>
                <div className="hero-content">
                    <div className="info-icon">
                        <i class="ri-customer-service-2-fill hero-cc-icon"></i>
                    </div>
                    <div className="detail">
                        <h3>24/7 Suuport</h3>
                        <p>Full support on process</p>
                    </div>
                </div>
                <div className="hero-content">
                    <div className="info-icon">
                        <i className='fa fa-credit-card-alt hero-cc-icon'></i>
                    </div>
                    <div className="detail">
                        <h3>Secure Payment</h3>
                        <p>Ypur payment is secure</p>
                    </div>
                </div>
            </div>
        </div>
    )
}