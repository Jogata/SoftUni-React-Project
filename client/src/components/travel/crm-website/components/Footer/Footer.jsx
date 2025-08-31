import "./footer.css";
import facebook from "../../images/facebook_icon.png";
import twitter from "../../images/twitter_icon.png";
import linkedin from "../../images/linkedin_icon.png";
import { Link } from "react-router-dom";

export function Footer() {
    return (
        <footer className="crm-footer">
            <div className="footer-content">
                <div className="footer-col">
                    <h2>CANTAR</h2>
                    <p>
                        CRM Solutions is dedicated to helping businesses
                        manage their customer relationships and grow efficiently
                        with our comprehensive CRM software.
                    </p>
                    <ul className="footer-icons">
                        <li>
                            <img src={facebook} alt="" />
                        </li>
                        <li>
                            <img src={twitter} alt="" />
                        </li>
                        <li>
                            <img src={linkedin} alt="" />
                        </li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About us</Link>
                        </li>
                        <li>Service</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>Phone: (123) 456-7890</li>
                        <li>Email: support@crm-solutions.com</li>
                        <li>Address: 123 Business St, Suite 100, City, State</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="copyright">Copyright 2024 @Company. All right reserved</p>
        </footer>
    )
}