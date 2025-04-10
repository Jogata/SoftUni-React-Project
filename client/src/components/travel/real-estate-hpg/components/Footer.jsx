import facebook from "../images/facebook_icon.png";
import twitter from "../images/twitter_icon.png";
import linkedin from "../images/linkedin_icon.png";

export function Footer() {
    return (
        <footer id="hpg-footer">
            <div className="footer-body">
                <div className="left">
                    <h2>HPG Properties</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore recusandae voluptatum iusto quaerat animi quas neque totam, non sunt vitae aspernatur eveniet.</p>
                    <div className="socials">
                        <a href="#">
                            <img src={facebook} alt="" />
                        </a>
                        <a href="#">
                            <img src={twitter} alt="" />
                        </a>
                        <a href="#">
                            <img src={linkedin} alt="" />
                        </a>
                    </div>
                </div>
                <div className="footer-center">
                    <h2>COMPANY</h2>
                    <ul className="links">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">Services</a>
                        </li>
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>
                    </ul>
                </div>
                <div className="right">
                    <h2>GET IN TOUCH</h2>
                    <ul className="links">
                        <li>Phone: (123) 456-7890</li>
                        <li>Email: support@hpgproperties.com</li>
                        <li>Address: 123 Business Str, Suite 100, City, State</li>
                    </ul>
                </div>
                <hr />
                <div className="copy">
                    <p>&copy; Copyright 2025, All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}