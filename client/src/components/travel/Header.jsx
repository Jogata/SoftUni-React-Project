import { Link, useParams } from "react-router-dom";
import hero from "./images/bags/bag1.png";
import { useContext } from "react";
import { CartContext, ModalContext, ModalContextProvider } from "../../contexts/AuthContext";

export function Navigation() {
    return (
        <nav className="navigation">
            <div className="logo">
                <h2>YBL Bags</h2>
            </div>
            <div className="links">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li>Products</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="nav-icons">
                <Link to="/cart">
                    <span className="nav-cart">
                        <i className="fa fa-shopping-bag nav-icon"></i>
                        {/* <span className="cart-amount">0</span> */}
                        <CartAmount />
                    </span>
                </Link>
                <i className="fa fa-user-o nav-icon"></i>
            </div>
        </nav>
    )
}

function CartAmount() {
    const { itemsAmount } = useContext(CartContext);
    console.log("CartAmount");

    return (
        <span className="cart-amount">
            {itemsAmount}
        </span>
    )
}

export function HomePage() {
    return (
        <HomeContent>
            <Hero />
            <Features />
            <ModalContextProvider>
                <ProductList>
                    <Products />
                    <Modal />
                </ProductList>
            </ModalContextProvider>
        </HomeContent>
    )
}

function HomeContent({ children }) {
    return (
        <div className="page-container">
            {children}
        </div>
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

function Products() {
    const { products } = useContext(CartContext);
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
                        <Button product={product} />
                    </div>
                )
            })}
        </div>
    )
}

function Button({ product }) {
    const { addToCart } = useContext(CartContext);
    const { setProduct } = useContext(ModalContext);
    // console.log("Button");

    function handleClick(product) {
        setProduct(product);
        addToCart(product);
    }

    return (
        <button
            className="add-to-cart-btn"
            onClick={() => handleClick(product)}
        >
            Add to cart
        </button>
    )
}

function Modal() {
    const { product, setProduct } = useContext(ModalContext);
    console.log("Modal");

    return (
        <>
            {product ? (
                <div className="product-modal" onClick={() => setProduct(null)}>
                    <button className="modal-close-btn">
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
                    <li><Link to="/">Home</Link></li>
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

export function Cart() {
    const {
        cart,
        total,
        itemsAmount,
        removeFromCart,
        increaseAmount,
        decreaseAmount,
        clearCart
    } =
        useContext(CartContext);

    return (
        <div className="cart">

            <div className="cart-table-section">
                <div className="cart-header">
                    <h1>Shopping Cart</h1>
                    <h1>Items: ({itemsAmount})</h1>
                    <button onClick={clearCart} className="cart-clear-btn">
                        <i className="fa fa-trash"></i>
                    </button>
                </div>

                <div className="cart-table-head">
                    <span>Product</span>
                    <span>Quantity</span>
                    <span>Price</span>
                    <span>Total</span>
                </div>

                {cart.length > 0 ? (
                    cart.map((item) => {
                        const { id, title, image, price, amount } = item;
                        return (
                            <div key={id} className="cart-product">
                                <div className="cart-product-details">
                                    <img src={image} alt={title} className="" />
                                    <div className="cart-product-info">
                                        <h3>
                                            <Link to={`/product/${id}`}>
                                                {title}
                                            </Link>
                                        </h3>
                                        <button
                                            onClick={() => removeFromCart(id)}
                                            className=""
                                        >
                                            <i className="fa fa-trash"></i> Remove
                                        </button>
                                    </div>
                                </div>

                                <div className="quantity">
                                    <button onClick={() => decreaseAmount(id)}>
                                        <i className="ri-subtract-line"></i>
                                    </button>
                                    <span className="quantity">{amount}</span>
                                    <button onClick={() => increaseAmount(id)}>
                                        <i className="ri-add-line"></i>
                                    </button>
                                </div>

                                <p className="price">${price}</p>
                                <p className="total">${(price * amount).toFixed(2)}</p>
                            </div>
                        );
                    })
                ) : (
                    <p className="empty-cart">Your cart is empty</p>
                )}
            </div>

            <div className="cart-summary-section">
                <h2>Cart Summary</h2>

                <div className="summary-item">
                    <span>Items:</span>
                    <span>{itemsAmount}</span>
                </div>

                <div className="summary-item">
                    <span>Subtotal:</span>
                    <span>${isNaN(total) ? 0 : total}</span>
                </div>

                <div className="summary-item">
                    <span>Shipping:</span>
                    <span>Free</span>
                </div>

                <div className="summary-item">
                    <span>Promo Code</span>
                    <input
                        type="text"
                        placeholder="Enter your code"
                    />
                    <button className="apply-btn">
                        Apply
                    </button>
                </div>

                <div className="summary-item total-cost">
                    <span>Total Cost:</span>
                    <span>${isNaN(total) ? 0 : total}</span>
                </div>

                <button className="checkout-btn">
                    CHECKOUT
                </button>
            </div>
        </div>
    );
};

export function ProductDetails() {
  const { products, addToCart } = useContext(CartContext);
  const { id } = useParams();

  const product = products.find(product=> {
    return product.id === parseInt(id);
  })

  return (
    <div>
      <div className="product-details-info">
        <div className="detail-left">
          <img src={product.image} alt="" />
        </div>
        <div className="details-right">
            <h3>{product.title} </h3>
            <p className="product-price">$ {product.price}</p>
            <p className="desc">{product.description}</p>
            <button onClick={()=> addToCart(product)}>ADD TO CART</button>
        </div>
      </div>
    </div>
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