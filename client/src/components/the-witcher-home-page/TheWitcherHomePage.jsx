import "./the-witcher-home-page.css"

import { Link } from 'react-router-dom'

export default function TheWitcherHomePage() {
    return (
        <>
            <div className="page witcher">

                <header className="header">
                    <nav className="navbar">
                        <a href="#" className="logo">
                            <img src="/the-witcher/witcher-logo.png" />
                        </a>
                        <div className="burger" id="burger">
                            <span className="burger-line"></span>
                            <span className="burger-line"></span>
                            <span className="burger-line"></span>
                        </div>
                        <div className="menu" id="menu">
                            <ul className="menu-inner">
                                <li className="menu-item"><Link to='/' className="menu-link">main</Link></li>
                                <li className="menu-item"><a href="#" className="menu-link">Home</a></li>
                                <li className="menu-item"><a href="#" className="menu-link">Feature</a></li>
                                <li className="menu-item"><a href="#" className="menu-link">Product</a></li>
                                <li className="menu-item"><a href="#" className="menu-link">Support</a></li>
                            </ul>
                        </div>
                        <a href="#" className="menu-block">
                            <span>Discover</span>
                        </a>
                    </nav>
                </header>

                <main className="main">
                    <section className="banner banner-section">
                        <div className="banner-column">
                            <div className="banner-links">
                                <a href="#" title=""><i className="fa fa-facebook-f"></i></a>
                                <a href="#" title=""><i className="fa fa-twitter"></i></a>
                                <a href="#" title=""><i className="fa fa-instagram"></i></a>
                                <a href="#" title=""><i className="fa fa-youtube-play"></i></a>
                            </div>
                        </div>
                    </section>
                </main>

            </div>
        </>
    )
}