import "./footer.css";

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <i className="fa fa-thumb-tack"></i>
                        <div>
                            <p>123 Acme St.</p>
                            <h4>Houston, Tx</h4>
                        </div>
                    </div>
                    <div className="phone">
                        <h4><i className="fa fa-phone"></i> 1-800-123-1234</h4>
                    </div>
                    <div className="email">
                        <h4><i className="fa fa-envelope-o"></i> trips@galaxy.com</h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About the company</h4>
                    <p>"Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam"</p>
                    <div className="social">
                        <ul>
                            <li>
                                <a href="#">
                                    facebook
                                    <i className="fa fa-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    twitter
                                    <i className="fa fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    linkedin
                                    <i className="fa fa-linkedin"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}