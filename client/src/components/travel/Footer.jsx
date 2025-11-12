import { useContext, useEffect, useState } from "react";
import hero from "./images/estates/skyscraper-2.jpg";
import { PropertiesContext } from "../../contexts/AuthContext";
import { Link, useLocation, useParams } from "react-router-dom";

export function Navigation() {
    const [Mobile, setMobile] = useState(false);

    const iconClasses = Mobile ? "fa fa-times close" : "fa fa-bars open";
    const navClasses = Mobile ? "nav-links" : "links";

    return (
        <div className="navigation">
            <div className="nav-logo">
                <h2>CREVA</h2>
            </div>
            <nav className={navClasses} onClick={() => setMobile(false)}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <div className="button">
                <button>Booking</button>
            </div>
            <button className="toggle" onClick={() => setMobile(!Mobile)}>
                <i className={iconClasses}></i>
            </button>
        </div>
    )
}

export function Home() {
    return (
        <>
            <Hero />
            <Filters />
            <Properties />
        </>
    )
}

// function HomeContent({ children }) {
//     const { filtered } = useContext(PropertiesContext);
//     return (
//         <>
//             <Hero />
//             {children}
//             <Properties />
//         </>
//     )
// }

function Hero() {
    console.log("Hero");
    return (
        <div className="hero-container">
            <img src={hero} alt="" />
            <div className="hero-content">
                <h1>Find The Perfect Dream Property For Your Future</h1>
                <p>
                    From cozy starter homes to luxurious estates, we offer
                    a diverse range of properties to suit your unique lifestyle.
                    Discover your dream home with CREVA today.
                </p>
                <div className="hero-button">
                    <button>Buy Property</button>
                </div>
            </div>
        </div>
    )
}

function Filters() {
    const { filter } = useContext(PropertiesContext);
    const [country, setCountry] = useState("default");
    const [property, setProperty] = useState("default");
    const [price, setPrice] = useState("default");
    console.log("Filters");

    return (
        <div className="filters">
            <div className="filter">
                <i className="ri-map-pin-2-line"></i>
                <div>
                    <p className="filter-name">Location (any) </p>
                    <select
                        className=""
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    >
                        <option value="default">Select your place</option>
                        <option value="United State">United State</option>
                        <option value="Canada">Canada</option>
                        <option value="United Kingdom">United Kingdom</option>
                    </select>
                </div>
            </div>

            <div className="filter">
                <i className="fa fa-home"></i>
                <div>
                    <p className="filter-name">Property type (any)</p>
                    <select
                        className=""
                        value={property}
                        onChange={(e) => setProperty(e.target.value)}
                    >
                        <option value="default">Select your place</option>
                        <option value="Apartment">Apartment</option>
                        <option value="Villa">Villa</option>
                        <option value="House">House</option>
                    </select>
                </div>
            </div>

            <div className="filter">
                <i className="normal">$</i>
                <div>
                    <p className="filter-name">Price range (any)</p>
                    <select
                        className=""
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    >
                        <option value="default">Select price range</option>
                        <option value="0-200000">0-200000</option>
                        <option value="200001-300000">200001-300000</option>
                        <option value="300001-400000">300001-400000</option>
                    </select>
                </div>
            </div>

            <button
                className="search-btn"
                onClick={() => filter(country, property, price)}
            >
                <i className="ri-search-line"></i>
            </button>
        </div>
    )
}

function Properties() {
    const { filtered } = useContext(PropertiesContext);
    console.log("Properties");

    return (
        <div className="properties">
            <div className="header">
                <h2>Featured Properties</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Molestias ad debitis quo explicabo a accusamus, vitae fugit
                    cum ea numquam aliquam mollitia maxime doloribus labore
                    voluptatibus atque consequatur perferendis qui quisquam.
                </p>
            </div>
            <div className="list">
                {filtered.length == 0 ? (
                    <p>No properties available</p>
                ) : (
                    filtered.map(property => (
                        <div className="property" key={property.id}>
                            <img src={property.image} alt="" />
                            <div className="details">
                                <p className="country">{property.country}</p>
                                <Link to={`property/${property.id}`}>
                                    <h3>{property.name}</h3>
                                </Link>
                                <p className="price">${property.price}</p>
                                <div className="info">
                                    <span>Beds: {property.beds}</span>
                                    <span>Baths: {property.baths}</span>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

// function Test() {
//     const { filtered } = useContext(PropertiesContext);
//     console.log(filtered);

//     return (
//         filtered.map(p => {
//             return (
//                 <h1>{p.name}</h1>
//             )
//         })
//     )
// }

export function PropertyPage() {
    const { properties } = useContext(PropertiesContext);
    const { id } = useParams();

    const house = properties.find(
        house => house.id === parseInt(id)
    );

    return (
        <div className="property-page">
            <div className="header">
                <h1 className="name">{house.name}</h1>
                <p className="price">${house.price}</p>
            </div>
            <p className="country">{house.country}</p>
            <hr />

            <div className="details">
                <p className="detail">
                    <i className="fa fa-bed"></i>
                    {house.beds} Beds
                </p>
                <p className="detail">
                    <i className="fa fa-bath"></i>
                    {house.baths} Baths
                </p>
                <p className="detail">
                    <i className="ri-map-pin-2-line"></i>
                    {house.property}
                </p>
            </div>
            <hr />

            <img src={house.image} alt="" />

            <h2 className="page-subtitle">Property Description</h2>

            <dl className="list">
                <div>
                    <dt>PROPERTY TYPE</dt>
                    <dd>{house.property} </dd>
                </div>

                <div>
                    <dt>STATUS</dt>
                    <dd>Available</dd>
                </div>

                <div>
                    <dt>YEAR BUILT</dt>
                    <dd>2022</dd>
                </div>

                <div>
                    <dt>PROPERTY ID</dt>
                    <dd>GJKHKGYKSGVJ467</dd>
                </div>
            </dl>
            <hr />

            <p className="desc">{house.description}</p>
            <p className="desc">{house.description}</p>
            <p className="desc">{house.description}</p>
            <p className="desc">{house.description}</p>

            <div className="form-section">
                <p className="header">Please fill the form for property inspection</p>
                <form >
                    <h2 className="form-title">Book An Inspection</h2>
                    <div className="group">
                        <label>Full Name *</label>
                        <div className="names">
                            <input type="text" className="" placeholder="First Name" required />
                            <input type="text" className="" placeholder="Last Name" required />
                        </div>
                    </div>

                    <div className="group">
                        <label>E-mail *</label>
                        <input type="email" className="" placeholder="example@gmail.com" />
                    </div>

                    <div className="group">
                        <label>Messages</label>
                        <textarea 
                            name="message" 
                            rows={10} 
                            placeholder="Hi, I'm intrested in this property" 
                        ></textarea>
                    </div>

                    <button className="submit-btn">Submit</button>
                </form>
            </div>
        </div>
    );
};

export function About() {
    return (
        <div className="about-page">
            <h1>
                About CREVA
                <span>Your Trusted Partner in Real Estate</span>
            </h1>
            <p className="header">
                At CREVA, we believe finding the perfect property isn't
                just about walls and roofs - it's about discovering a
                space that fits your life, your dreams, and your future.
            </p>
            <p className="header">
                Founded with a vision to redefine the real estate experience,
                CREVA combines innovation, transparency, and personalized service
                to help clients make confident property decisions. Whether you're
                buying your first home, expanding your investment portfolio, or
                selling a cherished property, we're here to guide you every step
                of the way.
            </p>
            <hr />
            <h2>Our Mission</h2>
            <p>
                To simplify real estate through technology, integrity, and
                expertise - empowering every client to make smarter, faster,
                and more informed decisions.
            </p>
            <hr />
            <h2>What We Do</h2>
            <ul>
                <li>
                    <p>
                        <strong>Property Sales &amp; Rentals:</strong> From
                        luxury homes to commercial spaces, we connect buyers,
                        sellers, and renters seamlessly.
                    </p>
                </li>
                <li >
                    <p>
                        <strong>Real Estate Consulting:</strong> Data-driven
                        insights and expert advice to help you invest with
                        confidence.
                    </p>
                </li>
                <li >
                    <p>
                        <strong>Property Management:</strong> Full-service
                        management solutions designed to protect and grow your
                        property's value.
                    </p>
                </li>
            </ul>
            <hr />
            <h2>Why Choose CREVA</h2>
            <ul>
                <li>Expert Guidance: Our experienced team knows the market inside and out.</li>
                <li>Smart Technology: Innovative tools to search, compare, and connect effortlessly.</li>
                <li>Personalized Approach: Every client is unique - and so is every property journey we design.</li>
                <li>Integrity First: We build relationships based on trust, not transactions.</li>
            </ul>
            <hr />
            <h2>Our Vision</h2>
            <p>
                To be the most trusted name in real estate by blending human expertise
                with cutting-edge technology - making property discovery and investment
                easier, smarter, and more rewarding for everyone.
            </p>
            <hr />
            <h2>Let's Build Your Future Together</h2>
            <p>
                Whether you're ready to buy, sell, or invest, CREVA is here to make it
                happen - with clarity, confidence, and care.
            </p>
            <p className="important">Discover. Decide. Dream. - With <Link to="/">CREVA</Link>.</p>

        </div>
    )
}

export function Contact() {
    return (
        <div className="contact-page">
            <header>
                <h1>Contact CREVA</h1>
                <p>Your trusted partner in real estate.</p>
            </header>

            <div className="container">
                <section className="contact-info">
                    <div>
                        <h3>Our Office</h3>
                        <p>CREVA Real Estate</p>
                        <p>123 Estate Avenue, Cityville, Country</p>
                    </div>
                    <div>
                        <h3>Contact Details</h3>
                        <p><strong>Phone:</strong> +1 (234) 567-890</p>
                        <p><strong>Email:</strong> info@creva.com</p>
                        <p><strong>Working Hours:</strong> Mon-Fri: 9:00 AM - 6:00 PM</p>
                    </div>
                </section>

                <section className="contact-form">
                    <h2>Send Us a Message</h2>
                    <form>
                        <label htmlFor="name">Full Name</label>
                        <input type="text" id="name" name="name" required />

                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" name="email" required />

                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" id="phone" name="phone" />

                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" required></textarea>

                        <button type="submit">Send Message</button>
                    </form>
                </section>

                <section className="map">
                    <h2>Find Us Here</h2>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345098294!2d144.95373531531594!3d-37.81627974202151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f2dfdfdf%3A0x5045675218ce840!2sMelbourne%2C%20Australia!5e0!3m2!1sen!2sau!4v0000000000000"
                        width="100%" height="350" allowFullScreen loading="lazy">
                    </iframe>
                </section>
            </div>
        </div>
    )
}

export function Footer() {
    return (
        <footer>
            <p>&copy; 2025 CREVA Real Estate. All rights reserved.</p>
        </footer>
    )
}

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// export function Footer() {
//     return (
//         <div className="footer">
//             <div className="footer-content">
//                 <div className="footer-name">
//                     <h2>Nika Shoes</h2>
//                 </div>
//                 <div className="footer-socials">
//                     <i className="fa fa-facebook footer-icon"></i>
//                     <i className="fa fa-instagram footer-icon"></i>
//                     <i className="fa fa-twitter footer-icon"></i>
//                 </div>
//             </div>
//             <div className="copy">
//                 <p>Copyright © Nika Shoes 2024. All rights reserved</p>
//             </div>
//         </div>
//     )
// }