import { useState } from "react";

export function Navbar() {
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

    return (
        <nav>
            <div>
                <div>
                    <div>
                        <div>
                            <img src="/logo.png" alt="CodeFlow" />
                        </div>
                        <span>
                            <span>Code</span>
                            <span>Flow</span>
                        </span>
                    </div>

                    <div>
                        <a href="#features">
                            Features
                        </a>
                        <a href="#pricing">
                            Pricing
                        </a>
                        <a href="#testimonials">
                            Testimonials
                        </a>
                    </div>

                    <button
                        onClick={() => setMobileMenuIsOpen(prev => !prev)}
                    >
                        {mobileMenuIsOpen ? (
                            <i className="ri-close-line"></i>
                        ) : (
                            <i className="ri-menu-line"></i>
                        )}
                    </button>
                </div>
            </div>

            {mobileMenuIsOpen && (
                <div>
                    <div>
                        <a
                            href="#features"
                            onClick={() => setMobileMenuIsOpen(false)}
                        >
                            Features
                        </a>
                        <a
                            href="#pricing"
                            onClick={() => setMobileMenuIsOpen(false)}
                        >
                            Pricing
                        </a>
                        <a
                            href="#testimonials"
                            onClick={() => setMobileMenuIsOpen(false)}
                        >
                            Testimonials
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}

export function Footer() {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-name">
                    <h2>Nika Shoes</h2>
                </div>
                <div className="footer-socials">
                    <i className="fa fa-facebook footer-icon"></i>
                    <i className="fa fa-instagram footer-icon"></i>
                    <i className="fa fa-twitter footer-icon"></i>
                </div>
            </div>
            <div className="copy">
                <p>Copyright © Nika Shoes 2024. All rights reserved</p>
            </div>
        </div>
    )
}
