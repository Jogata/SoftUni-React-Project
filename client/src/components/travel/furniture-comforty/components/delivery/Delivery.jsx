import "./delivery.css";

export function Delivery() {
    return (
        <div className="delivery max-width">
            <div className="grid">
                <div className="delivery-card">
                    <i className="ri-percent-line"></i>
                    <div className="content">
                        <h4>Discount</h4>
                        <p>every week new sales</p>
                    </div>
                </div>

                <div className="delivery-card">
                    <i className="ri-truck-line"></i>
                    <div className="content">
                        <h4>Free Delivery</h4>
                        <p>100% Free for all orders</p>
                    </div>
                </div>

                <div className="delivery-card">
                    <i className="ri-time-line"></i>
                    <div className="content">
                        <h4>Great Support 24/7</h4>
                        <p>We care your experiences</p>
                    </div>
                </div>

                <div className="delivery-card">
                    <i className="ri-shield-check-line"></i>
                    <div className="content">
                        <h4>Secure Payment</h4>
                        <p>100% Secure Payment Method</p>
                    </div>
                </div>
            </div>
        </div>
    );
};