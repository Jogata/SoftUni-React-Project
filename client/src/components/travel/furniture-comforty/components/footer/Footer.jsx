import { Link } from "react-router-dom";
import "./footer.css";

export function Footer() {
    return (
        <footer className="max-width">

            <div className="header">

                <div className="col">
                    <div className="logo">
                        <Link to='/'>
                            <i className="fa fa-globe"></i>
                            comforty
                        </Link>
                    </div>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Temporibus repellat vero nulla! Quibusdam, reiciendis
                        maiores fugiat atque aliquam molestiae vero.
                    </p>

                    <div className="social-links">
                        <Link>
                            <i className="fa fa-facebook"></i>
                        </Link>
                        <Link>
                            <i className="fa fa-twitter"></i>
                        </Link>
                        <Link>
                            <i className="fa fa-instagram"></i>
                        </Link>
                        <Link>
                            <i className="fa fa-youtube-play"></i>
                        </Link>
                    </div>
                </div>

                <div className="col links">
                    <div className="list">
                        <h3>category</h3>
                        <ul>
                            <li><Link>sofa</Link></li>
                            <li><Link>armchair</Link></li>
                            <li><Link>wing chair</Link></li>
                            <li><Link>desk chair</Link></li>
                            <li><Link>wooden chair</Link></li>
                            <li><Link>park bench</Link></li>
                        </ul>
                    </div>

                    <div className="list">
                        <h3>support</h3>
                        <ul>
                            <li><Link>help & support</Link></li>
                            <li><Link>terms & condition</Link></li>
                            <li><Link>privacy policy</Link></li>
                            <li><Link>help</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="col newsletter">
                    <h3>newsletter</h3>
                    <form onSubmit={e => e.preventDefault()}>
                        <input type="email" placeholder="Your Email.." />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>

            </div>

            <div className="copyright">
                <div className="max-width">
                    <p className="company">
                        @ 2025 Blogy- Designed & Develop <span>Company</span>
                    </p>
                    <div className="icons">
                        <span>
                            Bank Note <i className="fa fa-money"></i>
                        </span>
                        <span>
                            Credit Card <i className="fa fa-credit-card"></i>
                        </span>
                    </div>
                </div>
            </div>

        </footer >
    );
};