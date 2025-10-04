import { useState } from "react";
import { Link } from "react-router-dom";
import hero from "./images/sneakers2.jpg";

export function Navigation() {
    return (
        // <div>
            <div className="navigation">
                <div className="logo">
                    <h2>Nika Shoes</h2>
                </div>
                <div className="links">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="nav-icons">
                    <div className="nav-cart">
                        <i className="fa fa-shopping-cart nav-icon"></i>
                        <span className="nav-cart-amount">0</span>
                    </div>
                    <i className="fa fa-user-o nav-icon"></i>
                </div>
            </div>
        // </div>
    )
}

export function Home() {
    return (
        <>
            <Hero />
            <Products />
        </>
    )
}

function Hero() {
    return (
        <div>
            <div className="hero">
                <div className="hero-top">
                    <div className="hero-left">
                        <h2>Step Into The Future</h2>
                        <h1>Discover the latest collection of sneakers that gives comfort</h1>
                        <button>Shop Now</button>
                    </div>
                    <div className="hero-right">
                        <img src={hero} alt="" />
                    </div>
                </div>
                <div className="hero-bottom">
                    <div className="hero-content">
                        <div className="info-icon">
                            <i className="ri-truck-line hero-cc-icon" />
                        </div>
                        <div className="detail">
                            <h3>Free Shipping</h3>
                            <p>Free shipping on order</p>
                        </div>
                    </div>
                    <div className="hero-content">
                        <div className="info-icon">
                            <i className="ri-customer-service-2-line hero-cc-icon" />
                        </div>
                        <div className="detail">
                            <h3>24/7 Support</h3>
                            <p>Full support on process</p>
                        </div>
                    </div>
                    <div className="hero-content">
                        <div className="info-icon">
                            <i className="fa fa-credit-card-alt hero-cc-icon" />
                        </div>
                        <div className="detail">
                            <h3>Secure Payment</h3>
                            <p>Your payment is secure</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Products() {
    return (
        <div>
            <h1>Product</h1>
        </div>
    )
}