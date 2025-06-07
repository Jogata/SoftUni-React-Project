// import { Armchair, Check, Heart, Info, Menu, Search, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";
import "./navigation.css";

export function Navigation() {
    return (
        <header>

            <div className="header">

                <div className="top">
                    <div className="max-width">

                        <p className="left">
                            <i className="fa fa-check"></i>
                            Free on all orders over $50
                        </p>

                        <div className="right">
                            <select defaultValue="location">
                                <option>eng</option>
                                <option>bg</option>
                            </select>

                            <Link>Faqs</Link>
                            <Link>
                                <i className="fa fa-info"></i>
                                need help
                            </Link>
                        </div>
                        
                    </div>
                </div>

                <div className="middle">
                    <div className="max-width">

                        <div className="logo">
                            <Link to='/'>
                                <i className="fa fa-globe"></i>
                                comforty
                            </Link>
                        </div>

                        <div className="search-box">
                            <form action="#">
                                <input type="text" placeholder="Search here..." />
                                <button>
                                    <i className="ri-search-2-line"></i>
                                </button>
                            </form>
                        </div>

                        <div className="right">
                            <button className="btn">
                                <i className="ri-shopping-cart-line"></i>
                                cart <span className="badge">2</span>
                            </button>
                            <button className="btn">
                                <i className="ri-heart-line"></i>
                            </button>

                            <div className="dropdown">
                                <button tabIndex={0} role="button" className="dropdown-btn">
                                    <i className="fa fa-user-o"></i>
                                </button>
                                <ul tabIndex={0} className="menu">
                                    <li><button>Account</button></li>
                                    <li><button>Logout</button></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="bottom">
                    <div className="max-width">
                        <div className="left">
                            <span className="dropdown">
                                <button tabIndex={0} role="button" className="btn">
                                    <i className="ri-menu-3-line"></i>
                                    all categories
                                </button>
                                <ul tabIndex={0} className="menu">
                                    <li><a>Chair</a></li>
                                    <li><a>Pant</a></li>
                                    <li><a>Shirt</a></li>
                                    <li><a>T-Shirt</a></li>
                                    <li><a>T-Shirt</a></li>
                                </ul>
                            </span>

                            <nav className="navigation">
                                <Link to='/' className="active">Home</Link>
                                <Link className="">shop</Link>
                                <Link className="">product</Link>
                                <Link className="">pages</Link>
                                <Link className="">about</Link>
                            </nav>
                        </div>


                        <div className="contact">
                            <p>
                                contact: <span>(808)555-0111</span>
                            </p>
                        </div>

                    </div>
                </div>

            </div>

        </header>
    );
};