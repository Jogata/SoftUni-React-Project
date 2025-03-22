import "./footer.css"

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top">
                <h2>Ready To Get Started?</h2>
                <p>Join Our Community of Marketers</p>
                <div className="input">
                    <input type="email" name="email" placeholder="Enter your email" />
                    <button>Join Now</button>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <div className="footer-left">
                    <h2>Trevo</h2>
                    <div className="socials">
                        <a href="#">
                            <i className="fa fa-facebook"></i>
                        </a>
                        <a href="#">
                            <i className="fa fa-instagram"></i>
                        </a>
                        <a href="#">
                            <i className="fa fa-youtube-play"></i>
                        </a>
                    </div>
                </div>
                <div className="footer-right">
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Services</a>
                        </li>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="copyrights">
                Copyright © 2023. All rights reserved.
            </div>
        </footer>
    )
}