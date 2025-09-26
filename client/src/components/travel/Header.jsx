import watch1 from "./images/watch1.jpg";
import watch2 from "./images/watch2.jpg";
import watch3 from "./images/watch3.jpg";
import watch4 from "./images/watch4.jpg";
import watch5 from "./images/watch5.jpg";
import watch6 from "./images/watch6.jpg";
import watch7 from "./images/watch7.jpg";
import watch8 from "./images/watch8.jpg";
import watch9 from "./images/watch9.jpg";
import watch10 from "./images/watch10.jpg";
import watch11 from "./images/watch11.jpg";
import watch12 from "./images/watch12.jpg";
import watch13 from "./images/watch13.jpg";
import watch14 from "./images/watch14.jpg";
import watch15 from "./images/watch15.jpg";
import hero from "./images/hero-w.png";
import { useContext, useEffect, useState } from "react";
import { CartContext, ProductsContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

export const productsData = [
    {
        id: 1,
        image: watch1,
        title: "Ladies Silver watch",
        price: 85,
        category: "men",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.",
    },
    {
        id: 2,
        image: watch2,
        title: "Non Tarnish Wristwatch",
        price: 85,
        category: "men",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.",
    },
    {
        id: 3,
        image: watch3,
        title: "Casio Silver Office Watch",
        price: 85,
        category: "men",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.",
    },
    {
        id: 4,
        image: watch4,
        title: "Men Gold Wristwatch",
        price: 85,
        category: "men",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.",
    },
    {
        id: 5,
        image: watch5,
        title: "Timezone Wristwatch Male",
        price: 85,
        category: "men",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.",
    },
    {
        id: 6,
        image: watch6,
        title: "Shinning Diamond Watch",
        price: 85,
        category: "men",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.",
    },
    {
        id: 7,
        image: watch7,
        title: "Non Tarnish Leather",
        price: 85,
        category: "men",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.",
    },
    {
        id: 8,
        image: watch8,
        title: "Unisex Black Smart Watch",
        price: 85,
        category: "men",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.",
    },
    {
        id: 9,
        image: watch9,
        title: "Black Portable Wristwatch",
        price: 85,
        category: "men",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.",
    },
    {
        id: 10,
        image: watch10,
        title: "Leather Green Wristwatch",
        price: 85,
        category: "men",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.",
    },
    {
        id: 11,
        image: watch11,
        title: "Gold Bracelet Wristwatch",
        price: 85,
        category: "men",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.",
    },
    {
        id: 12,
        image: watch12,
        title: "Two piece Gold Wristwatch",
        price: 85,
        category: "men",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.",
    },
    {
        id: 13,
        image: watch13,
        title: "Unisex Black Smart Watch",
        price: 85,
        category: "men",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.",
    },
    {
        id: 14,
        image: watch14,
        title: "Wristwatch and Necklace",
        price: 85,
        category: "men",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.",
    },
    {
        id: 15,
        image: watch15,
        title: "Complete Set Wristwatch",
        price: 85,
        category: "men",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.",
    },
]

export function Navigation({query, setQuery}) {
    // const [query, setQuery] = useState("");
    const { cartTotalItems } = useContext(CartContext);

    return (
        <nav className="navigation">
            <div className="logo">
                <Link to="/">Logo</Link>
            </div>
            <div className="search">
                <i className="ri-search-line search-icon"></i>
                <input 
                    type="search" 
                    name="search" 
                    id="search" 
                    value={query}
                    onChange={e => setQuery(e.target.value)} 
                    placeholder="Search for product" 
                />
                <button className="cancel-btn" onClick={() => setQuery("")}>
                    <i className="ri-close-line cancel-icon"></i>
                </button>
            </div>
            <div className="nav-icons">
                <div className="cart">
                    <Link to="/cart">
                        <i className="fa fa-shopping-cart nav-icon"></i>
                    </Link>
                    <span className="cart-amount">{cartTotalItems}</span>
                </div>
                <button>
                    <i className="fa fa-user-o nav-icon"></i>
                </button>
            </div>
        </nav>
    )
}

export function Home({query}) {
    return (
        <>
            <Hero query={query} />
            <Products query={query} />
        </>
    )
}

// function HomeContent({children}) {
//     return (
//         <>
//         {children}
//         </>
//     )
// }

function Hero({query}) {
    // useEffect(() => {
    //     console.log("hero");

    //     return () => {
    //         console.log("unmounted hero");
    //     }
    // }, [])

    // if (query.length > 0) {
    //     return null;
    // }

    const classes = query.length > 0 ? "hidden" : "hero";

    return (
        <div className={classes}>
        {/* <div className="hero"> */}
            <div className="hero-content">
                <div className="hero-header">
                    <h1>Our Elegant Collection Just For You</h1>
                    <p>Shop the latest trends and classic essentials just for you</p>
                </div>
                <div className="hero-image">
                    <img src={hero} alt="" />
                </div>
            </div>
        </div>
    )
}

function Products({query}) {
    const { products } = useContext(ProductsContext);
    const { addToCart } = useContext(CartContext);

    let filtered = products;

    if (query.length > 0) {
        filtered = products.filter(product => product.title.toLowerCase().includes(query.toLowerCase()));
    }

    return (
        <div className="products">
            <h2>Our Elegant Collection</h2>
            <div className="products-grid">
                {
                    filtered.map(product => {
                        // console.log(product.id);
                        return (
                            <div className="product" key={product.id}>
                                <img src={product.image} alt="" className="product-image" />
                                <div className="product-info">
                                    <h4>{product.title}</h4>
                                    <p>${product.price}</p>
                                </div>
                                <button 
                                    className="add-to-cart" 
                                    onClick={() => addToCart(product)} 
                                >
                                    Add to Cart
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export function Footer() {
    console.log("footer");
    return (
        <footer>
            <h1>Footer</h1>
        </footer>
    )
}

export function Cart() {
    const { cart, cartTotalItems, clearCart } = useContext(CartContext);

    const total = cart.reduce((acc, item) => acc + (item.price * item.amount), 0);

    return (
        <div className="cart-page">
            <div className="cart-container">
                <div className="cart-left">
                    <div className="cart-header">
                        <h1>Shopping Cart</h1>
                        <h1>{cartTotalItems} Items</h1>
                        <button className="clear-cart-btn" onClick={clearCart}>
                            <i className="ri-delete-bin-line"></i>
                            Clear Cart
                        </button>
                    </div>
                    {cart.length == 0 ? <EmptyCart /> : <CartItems cart={cart} />}
                </div>
                <div className="cart-right">
                    <h2>Cart Summary</h2>
                    <div className="summary-item">
                        <span>Items: </span>
                        <span>{cartTotalItems}</span>
                    </div>
                    <div className="cart-summary">
                        <div className="summary-item">
                            <span>Shipping: </span>
                            <span>Free</span>
                        </div>
                        <div className="summary-item total-cost">
                            <span>Total Cost: </span>
                            <span>$ {total.toFixed(2)}</span>
                        </div>
                        <button className="checkout-btn">
                            CHECKOUT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function EmptyCart() {
    return (
        <h1 className="empty-cart">The cart is empty</h1>
    )
}

export function CartItems({ cart }) {
    return (
        cart.map(item => {
            return (
                <div className="cart-item" key={item.id}>
                    <div className="product-details">
                        <img src={item.image} alt={item.title} />
                        <div className="cart-product-info">
                            <h3>{item.title}</h3>
                            <button className="remove-item-btn">
                                <i className="ri-delete-bin-line"></i>
                                Remove
                            </button>
                        </div>
                    </div>
                    <div className="quantity">
                        <button>
                            <i className="ri-subtract-line"></i>
                        </button>
                        <span>{item.amount}</span>
                        <button>
                            <i className="ri-add-line"></i>
                        </button>
                    </div>
                    <span className="price">
                        ${item.price}
                    </span>
                    <span className="total">
                        ${(item.price * item.amount).toFixed(2)}
                    </span>
                </div>
            )
        })
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