import { Link } from "react-router-dom";
import "./footer.css";

export function Footer() {
    return (
        <footer className="edukative footer">
            <div className="container">
                <div className="footer-details">
                    <h1>EDUKATIVE</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Soluta nobis aperiam sunt unde odit enim, nesciunt
                        consectetur doloremque quia commodi suscipit aspernatur
                        adipisci optio, libero numquam, accusamus totam assumenda.
                    </p>
                </div>
                <div className="footer-links">
                    <h2>LINKS</h2>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/courses">Courses</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-socials">
                    <h2>Follow Us On</h2>
                    <div className="icons">
                        <a href="#">
                            <i className="fa fa-facebook footer-icon"></i>
                        </a>
                        <a href="#">
                            <i className="fa fa-instagram footer-icon"></i>
                        </a>
                        <a href="#">
                            <i className="fa fa-twitter footer-icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}