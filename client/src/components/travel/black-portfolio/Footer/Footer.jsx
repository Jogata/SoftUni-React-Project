import './footer.css';

export function Footer() {
    return (
        <div className="footer">
            <div className="footer-bottom">
                <div className="footer-left">
                    <h2>Alvin Jonathan</h2>
                    <div className="socials">
                        <i className="fa fa-facebook"></i>
                        <i className="fa fa-instagram"></i>
                        <i className="fa fa-youtube-play"></i>
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
            <p className="copy">
                © 2024 Alvin Jonathan. All rights reserved.
            </p>
        </div>
    )
}