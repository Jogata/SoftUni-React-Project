import { Link } from "react-router-dom";
import hero from "./images/bags/bag1.png";
import { useContext, useState } from "react";
import { CartContext, ModalContext, ModalContextProvider } from "../../contexts/AuthContext";

export function Navigation() {
    return (
        <nav className="navigation">
            <div className="logo">
                <h2>YBL Bags</h2>
            </div>
            <div className="links">
                <ul>
                    <li>Home</li>
                    <li>Products</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="nav-icons">
                <Link to="/cart">
                    <span className="nav-cart">
                        <i className="fa fa-shopping-bag nav-icon"></i>
                        <span className="cart-amount">0</span>
                    </span>
                </Link>
                <i className="fa fa-user-o nav-icon"></i>
            </div>
        </nav>
    )
}

export function HomePage() {
    return (
        <>
            <Hero />
            <Features />
            <ModalContextProvider>
                <ProductList>
                    <Products />
                    <Test Child={Test1} child2={<Test2 />} />
                    <Modal />
                </ProductList>
            </ModalContextProvider>
        </>
    )
}

function Hero() {
    console.log("Hero");
    return (
        <div className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <h1>YBL Leather Quality Bag</h1>
                    <p className="text">
                        Elevate your bag collection with a stylish
                        leather handbag from YBL. This ladies handbag
                        is the perfect handbag to add to your series
                        of collection of stylish bag.
                    </p>
                    <p className="price">$ 75.99</p>
                    <button className="cta">BUY NOW</button>
                </div>
                <div className="hero-image">
                    <img src={hero} alt="" />
                </div>
            </div>
        </div>
    )
}

function Features() {
    console.log("Features");
    return (
        <div className="features">
            <h2>Why Choose Our Brand</h2>
            <p className="description">
                Yourself required no at thoughts delicate landlord it be.
                Branched dashwood do is whatever it. Further be chapter at
                visited married in it pressed.
            </p>

            <div className="cards-container">
                <div className="card">
                    <i className="ri-award-line icon"></i>
                    <h3>Best Quality</h3>
                    <p>100% Genuine Product</p>
                </div>

                <div className="card">
                    <i className="ri-truck-fill icon"></i>
                    <h3>Free Shipping</h3>
                    <p>100% Free Shipping Product</p>
                </div>

                <div className="card">
                    <i className="ri-shield-check-line icon"></i>
                    <h3>Warranty</h3>
                    <p>100% Return Guarantee</p>
                </div> 
            </div>
        </div>
    )
}

function ProductList({children}) {
    console.log("ProductList");

    return (
        <>
            <div className="products">
                <h2>Our Bags Collection</h2>
                {children}
            </div>
        </>
    )
}

function Test({Child, child2}) {
    const { setProduct } = useContext(ModalContext);
    console.log("Test");
    return (
        <>
            <h1>TEST</h1>
            <Child func={(str) => console.log(str)} str="test1" />
            {/* <Test2 /> */}
            {child2}
        </>
    )
}

function Test1({func, str}) {
    func(str);
    return (
        <h2>Test1</h2>
    )
}

function Test2() {
    console.log("Test2");
    return (
        <h3>Test2</h3>
    )
}

// function Products({toggleModal}) {
function Products() {
    const { products } = useContext(CartContext);
    const { setProduct } = useContext(ModalContext);
    console.log("Products");

    return (
        <div className="grid">
            {products.map(product => {
                const { id, image, title, price } = product;

                return (
                    <div className="product-card" key={id}>
                        <img src={image} alt="" className="product-image" />
                        <div className="product-info">
                            <h3>{title}</h3>
                            <p>$ {price}</p>
                        </div>
                        <button
                            className="add-to-cart-btn"
                            onClick={() => setProduct(product)}
                        >
                            Add to cart
                        </button>
                    </div>
                )
            })}
        </div>

    )
}

// function Modal({ product, toggleModal }) {
function Modal() {
    const { product, setProduct } = useContext(ModalContext);
    console.log("Modal");
    return (
        <>
        {product ? (
            <div className="product-modal" onClick={() => setProduct(null)}>
            <button 
                className="modal-close-btn" 
                // onClick={() => toggleModal(null)}
            >
                <i className="ri-close-line"></i>
            </button>
        <div className="product-modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-content">
                <img src={product.image} alt="" className="modal-img" />
                <h3 className="modal-title">
                    {product.title}
                </h3>
                <p className="modal-price">
                    $ {product.price}
                </p>
                <button className="buy-now">
                    Buy Now
                </button>
            </div>
        </div>
    </div>
        ) : (
            null
        )}
        </>
    )
}

export function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-top">
                <h3 className="footer-title">YBL Elegant Bag</h3>
                <address className="footer-address">
                    123, Steet Name, Close Axis, State, Country
                </address>
                <div className="social-icons">
                    <a href="#">
                        <i className="fa fa-facebook-f"></i>
                    </a>
                    <a href="#">
                        <i className="fa fa-instagram"></i>
                    </a>
                    <a href="#">
                        <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                        <i className="fa fa-google-plus"></i>
                    </a>
                    <a href="#">
                        <i className="fa fa-linkedin"></i>
                    </a>
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
                    Copyright © YBL Bags 2025. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

// export function Header() {
//     return (
//         <header>
//             <img src="https://raw.githubusercontent.com/scrimba/learn-react/refs/heads/main/02.%20Data-Driven%20React/01.%20Section%202%20Intro/images/globe.png" alt="" />
//             <h1>my travel journal.</h1>
//         </header>
//     )
// }