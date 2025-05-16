import "./footer.css";

export function Footer() {
    return (
        <div className="footer">
            <div className="social">
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
                    <i className="fa fa-pinterest icon"></i>
                </a>
            </div>
            <div className="container">
                <div className="col">
                    <h3>About</h3>
                    <p>Company</p>
                    <p>Details</p>
                    <p>Planning</p>
                    <p>About Us</p>
                </div>
                <div className="col">
                    <h3>Company</h3>
                    <p>Company</p>
                    <p>Details</p>
                    <p>Planning</p>
                    <p>About Us</p>
                </div>
                <div className="col">
                    <h3>Legal</h3>
                    <p>Company</p>
                    <p>Details</p>
                    <p>Planning</p>
                    <p>About Us</p>
                </div>
                <div className="col">
                    <h3>Information</h3>
                    <p>Company</p>
                    <p>Details</p>
                    <p>Planning</p>
                    <p>About Us</p>
                </div>
            </div>
        </div>
    )
}