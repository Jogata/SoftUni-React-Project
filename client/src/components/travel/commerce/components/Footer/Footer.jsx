import "./footer.css";

export function Footer() {
    return (
        <>
            <footer>
                <div className="footer-content">
                    <div className="footer-name">
                        <h2>ShopX</h2>
                    </div>
                    <div className="footer-socials">
                        <i className="ri-facebook-circle-fill footer-icon"></i>
                        <i className="ri-instagram-fill footer-icon"></i>
                        <i className="ri-twitter-line footer-icon"></i>
                    </div>
                </div>
                <div className="copy">
                    <p>Copyright © ShopX 2024. All rights reserved</p>
                </div>
            </footer>
        </>
    )
}