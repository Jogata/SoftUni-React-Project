import "./footer.css";

export function Footer() {
    return (
        <div>
            <div className="footer borders">
                <div className="footer-bottom">
                    <div className="footer-left">
                        <h2>Softify</h2>
                        <div className="socials">
                            <i className="fa fa-facebook social-icon"></i>
                            <i className="fa fa-instagram social-icon"></i>
                            <i className="fa fa-youtube-play social-icon"></i>
                        </div>
                    </div>
                    <div className="footer-right">
                        <ul>
                            <li>Home</li>
                            <li>Services</li>
                            <li>About Me</li>
                            <li>Hire Me</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <p className="copy">© 2024 Softify. All rights reserved.</p>
            </div>
        </div>
    )
}