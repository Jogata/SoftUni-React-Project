import { Children, useContext, useState } from "react";
import hero from "./images/estates/skyscraper-2.jpg";
import { PropertiesContext } from "../../contexts/AuthContext";

export function Navigation() {
    const [Mobile, setMobile] = useState(false);

    const iconClasses = Mobile ? "fa fa-times close" : "fa fa-bars open";
    const navClasses = Mobile ? "nav-links" : "links";

    return (
        <>
            <div className="navigation">
                <div className="nav-logo">
                    <h2>CREVA</h2>
                </div>
                <nav className={navClasses} onClick={() => setMobile(false)}>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact</li>
                    </ul>
                </nav>
                <div className="button">
                    <button>Booking</button>
                </div>
                <button className="toggle" onClick={() => setMobile(!Mobile)}>
                    <i className={iconClasses}></i>
                </button>
            </div>
        </>
    )
}

export function Home() {
    return (
        <HomeContent>
            <Hero />
            <Filters />
        </HomeContent>
    )
}

function HomeContent({children}) {
        const { filtered } = useContext(PropertiesContext);
    return (
        <>
        {children}
<Properties filtered={filtered} />
        </>
    )
}

function Hero() {
    console.log("Hero");
    return (
        <>
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
            {/* <Test /> */}
        </>
    )
}

function Filters() {
    const { 
        // country, 
        // setCountry, 
        // property, 
        // setProperty, 
        // price, 
        // setPrice, 
        filter 
    } = useContext(PropertiesContext);
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
                {/* <i className="fa fa-usd"></i> */}
                {/* <i className="ri-money-dollar-circle-line"></i> */}
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

function Properties({filtered}) {
    // const { filtered } = useContext(PropertiesContext);
    // const filtered = [];
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
                                <h3>{property.name}</h3>
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

function Test() {
    const {filtered} = useContext(PropertiesContext);
    console.log(filtered);

    return (
        filtered.map(p => {
            return (
                <h1>{p.name}</h1>
            )
        })
    )
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