import { Link, useParams } from "react-router-dom";
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
                    <li><Link to="/about">About</Link></li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="nav-icons">
                <Link to="/cart" className="nav-cart">
                    <i className="fa fa-shopping-cart nav-icon"></i>
                    <Amount />
                </Link>
                <i className="fa fa-user-o nav-icon"></i>
            </div>
        </div>
    )
}

function Amount() {
    const {itemsAmount} = useContext(ShopContext);
    return (
        <span className="nav-cart-amount">
            {itemsAmount}
        </span>
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
    const { products, addToCart } = useContext(ShopContext);

    const { id } = useParams();
    console.log(id);
    const product = products.find(p => p.id == id);
    // console.log(product);

    return (
        <div className="product-details-page">
            <div className="detail-left">
                <img src={product.image} alt="" />
            </div>
            <div className="detail-right">
                <h3>{product.title}</h3>
                <p className="product-price">
                    $ {product.price}
                </p>
                <p className="desc">
                    {product.description}
                </p>
                <button onClick={() => addToCart(product)}>
                    ADD TO CART
                </button>
            </div>
        </div>
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
    const {id, title, image, price, amount} = item;
    // console.log(typeof price);
    // console.log(typeof amount);

    return (
        <div className="cart-item">
            <div className="product">
                <img src={image} alt="" />
                <div className="product-info">
                    <h3>{title}</h3>
                    <button className="remove" onClick={() => removeItemFromCart(id)}>
                        <i className="fa fa-trash"></i>
                    </button>
                </div>
            </div>
            <div className="quantity">
                <button onClick={() => decreaseItemInCart(id)}>
                    <i className="fa fa-minus"></i>
                </button>
                <span>{amount}</span>
                <button onClick={() => increaseItemInCart(id)}>
                    <i className="fa fa-plus"></i>
                </button>
            </div>
            <div className="price">
                $ {price}
            </div>
            <div className="total">
                $ {(amount * price).toFixed(2)}
            </div>
        </div>
    )
}

export function About() {
    return (
        <div className="about">
            <h2>About Us</h2>
            <p>
                Welcome to Nika Shoes, your ultimate destination for stylish,
                comfortable, and affordable footwear! We are passionate about helping you step confidently
                into every day with the perfect pair of shoes. Whether you're looking for casual kicks,
                athletic sneakers, elegant heels, or classic boots, we've got something for everyone.
            </p>
            <h3>Our Mission</h3>
            <p>
                At Nika Shoes, we believe shoes are more than just accessories -
                they are an expression of your personality and a key to your comfort.
                Our mission is simple: to offer a diverse range of high-quality shoes
                that cater to every style, occasion, and need, all while delivering
                an exceptional shopping experience.
            </p>
        </div>
    )
}