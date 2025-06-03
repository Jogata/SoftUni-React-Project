import { Link } from "react-router-dom";
import "./footer.css";

export function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="top">
                    <div className="logo-footer">
                        <i className="fa fa-th-large icon"></i>
                        <h2>Secured.</h2>
                    </div>
                    <Link to="#top">
                        <i className="fa fa-double-arrow-up icon"></i>
                    </Link>
                </div>
                <div className="col-container">
                    <div className="col">
                        <h3>Navigation</h3>
                        <p>Home</p>
                        <p>Data</p>
                        <p>Cloud</p>
                        <p>Contact</p>
                    </div>
                    <div className="col">
                        <h3>My Account</h3>
                        <p>Home</p>
                        <p>Data</p>
                        <p>Cloud</p>
                        <p>Contact</p>
                    </div>
                    <div className="col">
                        <h3>Information</h3>
                        <p>Home</p>
                        <p>Data</p>
                        <p>Cloud</p>
                        <p>Contact</p>
                    </div>
                    <div className="col">
                        <h3>Legal</h3>
                        <p>Home</p>
                        <p>Data</p>
                        <p>Cloud</p>
                        <p>Contact</p>
                    </div>
                    <form>
                        <h3>Join Our Team</h3>
                        <input type="email" placeholder="Enter your email" />
                        <i  className="fa fa-envelope-o mail-icon"></i>
                        <div className="social-group">
                            <i className="fa fa-instagram social-icon"></i>
                            <i className="fa fa-facebook social-icon"></i>
                            <i className="fa fa-linkedin social-icon"></i>
                            <i className="fa fa-dribbble social-icon"></i>
                            <i className="fa fa-github social-icon"></i>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}