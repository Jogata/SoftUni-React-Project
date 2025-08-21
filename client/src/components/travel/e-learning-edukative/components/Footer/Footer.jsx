import { Link } from "react-router-dom";
import "./footer.css";

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="content-left">
                    <h2>Tabloor</h2>
                    <p>
                        We specialize in creating robust, scalable solutions 
                        that help business thrive in a digital world.
                    </p>
                    <ul className="socials">
                        <li><i className="fa fa-facebook-f"></i></li>
                        <li><i className="fa fa-linkedin"></i></li>
                        <li><i className="fa fa-twitter"></i></li>
                    </ul>
                </div>
                <div className="content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li>About Us</li>
                        <li><Link to="#contact">Contact</Link></li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>Phone: +123 456 789</li>
                        <li>Email: tabloor@info.com</li>
                        <li>Address: 
                            <address>
                                123 Business Str, Suit 100, 
                                City, State
                            </address>
                        </li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="footer-copyright">
                Copyright 2025 &copy; Company. All rights reserved.
            </div>
        </footer>
    )
}
// export function Footer() {
//     return (
//         <footer className="edukative footer">
//             <div className="container">
//                 <div className="footer-details">
//                     <h1>EDUKATIVE</h1>
//                     <p>
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                         Soluta nobis aperiam sunt unde odit enim, nesciunt
//                         consectetur doloremque quia commodi suscipit aspernatur
//                         adipisci optio, libero numquam, accusamus totam assumenda.
//                     </p>
//                 </div>
//                 <div className="footer-links">
//                     <h2>LINKS</h2>
//                     <ul>
//                         <li>
//                             <Link to="/">Home</Link>
//                         </li>
//                         <li>
//                             <Link to="/about">About</Link>
//                         </li>
//                         <li>
//                             <Link to="/courses">Courses</Link>
//                         </li>
//                         <li>
//                             <Link to="/contact">Contact</Link>
//                         </li>
//                     </ul>
//                 </div>
//                 <div className="footer-socials">
//                     <h2>Follow Us On</h2>
//                     <div className="icons">
//                         <a href="#">
//                             <i className="fa fa-facebook footer-icon"></i>
//                         </a>
//                         <a href="#">
//                             <i className="fa fa-instagram footer-icon"></i>
//                         </a>
//                         <a href="#">
//                             <i className="fa fa-twitter footer-icon"></i>
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     )
// }