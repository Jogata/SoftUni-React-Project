import './footer.css';

export function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-top">
                <h3 className="footer-title">Kento Furniture</h3>
                <p className="footer-address">
                    123, Steet Name, Close Axis, State, Country
                </p>
                <div className="social-icons">
                    <a href="#"><i className="fa fa-facebook-f"></i></a>
                    <a href="#"><i className="fa fa-instagram"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-google-plus"></i></a>
                    <a href="#"><i className="fa fa-linkedin"></i></a>
                </div>
            </div>
            <div className="footer-bottom">
                <ul className="footer-menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Testimonial</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <p className="copyright">
                    Copyright © Kento Furniture2020. All rights reserved.
                </p>
            </div>
        </footer>
    );
};