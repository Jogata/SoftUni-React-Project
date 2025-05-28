import "./footer.css";

export function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="top">
                    <h3>BEACHES.</h3>
                    <div className="social">
                        <i className="fa fa-facebook icon"></i>
                        <i className="fa fa-instagram icon"></i>
                        <i className="fa fa-twitter icon"></i>
                        <i className="fa fa-pinterest icon"></i>
                        <i className="fa fa-youtube-play icon"></i>
                    </div>
                </div>
                <div className="bottom">
                    <div className="left">
                        <ul>
                            <li>About</li>
                            <li>Partnerships</li>
                            <li>Careers</li>
                            <li>Newsroom</li>
                            <li>Advertising</li>
                        </ul>
                    </div>
                    <div className="right">
                        <ul>
                            <li>Contact</li>
                            <li>Terms</li>
                            <li>Policy</li>
                            <li>Privacy</li>
                            <li>Pricing</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}