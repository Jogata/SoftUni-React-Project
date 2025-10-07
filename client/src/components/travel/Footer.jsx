import { Link } from "react-router-dom";
import hero from "./images/sneakers2.jpg";
import { ShopContext } from "../../contexts/AuthContext";
import { useContext } from "react";

export function Navigation() {
    return (
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
                <Link to="/cart" className="nav-cart">
                    <i className="fa fa-shopping-cart nav-icon"></i>
                    <span className="nav-cart-amount">0</span>
                </Link>
                <i className="fa fa-user-o nav-icon"></i>
            </div>
        </div>
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
        <>
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
        </>
    )
}

function Products() {
    const { products, addToCart } = useContext(ShopContext);

    return (
        <div className="products">
            {
                products.map(product => {
                    const { id, image, title, price } = product;

                    return (
                        <div className="product-card" key={id}>
                            <div className="product-image">
                                <img src={image} alt={title} />
                                <div className="hover-icons">
                                    <button className="icon-button" onClick={() => addToCart(product)}>
                                        <i className="fa fa-shopping-cart main-icon"></i>
                                    </button>
                                    <Link to={`product/${product.id}`} className="icon-button">
                                    {/* <button className="icon-button"> */}
                                        <i className="fa fa-eye main-icon"></i>
                                    {/* </button> */}
                                    </Link>
                                </div>
                            </div>
                            <div className="product-info">
                                <h3 className="product-name">{title}</h3>
                                <p className="product-price">${price}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export function ProductPage() {
    return (
        <h1>ProductPage</h1>
    )
}

export function Cart() {
    const {
        cart, 
        clearCart, 
        itemsAmount, 
        total
    } = useContext(ShopContext);

    return (
        <div className="cart-container">
            <div className="cart-left">
                <div className="cart-header">
                    <h1>Shopping Cart</h1>
                    <h2>Quantity: {itemsAmount}</h2>
                    <button onClick={clearCart}>
                        <i className="fa fa-trash clear-cart"></i>
                    </button>
                </div>
                <div className="cart-header">
                    <span>Product</span>
                    <span>Quantity</span>
                    <span>Price</span>
                    <span>Total</span>
                </div>
                <div className="product-details">
                    {cart.length > 0 ? <CartTable cart={cart} /> : <EmptyCart />}
                </div>
            </div>
            <div className="cart-right">
                <h2>Cart Summary</h2>
                <div className="summary-item">
                    <span>Quantity: </span>
                    <span>{itemsAmount}</span>
                </div>
                <div className="cart-summary">
                    <div className="summary-item">
                        <span>Subtotal</span>
                        <span>$ {isNaN(total) ? 0 : total}</span>
                    </div>
                    <div className="summary-item">
                        <span>Shipping</span>
                        <span>Free</span>
                    </div>
                    <div className="summary-item">
                        <span>Total Cost</span>
                        <span>$ {isNaN(total) ? 0 : total}</span>
                    </div>
                    <button className="checkout-btn">
                        CHECKOUT
                    </button>
                </div>
            </div>
        </div>
    )
}

function EmptyCart() {
    return (
        <h3>The cart is empty</h3>
    )
}

function CartTable({ cart }) {
    return (
        <>
            {
                cart.map(item => <CartItem item={item} key={item.id} />)
            }
        </>
    )
}

function CartItem({item}) {
    const {
        removeItemFromCart, 
        increaseItemInCart, 
        decreaseItemInCart
    } = useContext(ShopContext);

    return (
        <h1>{item.title}</h1>
    )
}