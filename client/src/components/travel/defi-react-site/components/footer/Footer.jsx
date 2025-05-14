import "./footer.css";

export function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="col col-1">
                    <span className="logo">
                        De<span className="primary">Fi</span>
                    </span>
                </div>
                <div className="col">
                    <h5>Support</h5>
                    <span className="bar"></span>
                    <a href="/">Contact Us</a>
                    <a href="/">Chat</a>
                    <a href="/">Help Center</a>
                    <a href="/">FAQ</a>
                </div>
                <div className="col">
                    <h5>Developers</h5>
                    <span className="bar"> </span>
                    <a href="/">Cloud</a>
                    <a href="/">Commerce</a>
                    <a href="/">Pro</a>
                    <a href="/">API</a>
                </div>
                <div className="col">
                    <h5>Company</h5>
                    <span className="bar"> </span>
                    <a href="/">About</a>
                    <a href="/">Information</a>
                    <a href="/">Legal</a>
                    <a href="/">Privacy</a>
                </div>
                <div className="col">
                    <h5>Social</h5>
                    <span className="bar"> </span>
                    <a href="/">
                        <i className="fa fa-facebook icon"></i>
                    </a>
                    <a href="/">
                        <i className="fa fa-twitter icon"></i>
                    </a>
                    <a href="/">
                        <i className="fa fa-linkedin icon"></i>
                    </a>
                    <a href="/">
                        <i className="fa fa-github icon"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}