import { useContext, useState } from "react";
import hero from "./images/estates/skyscraper-2.jpg";
import { PropertiesContext } from "../../contexts/AuthContext";
import { Link, useParams } from "react-router-dom";

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

function HomeContent({ children }) {
    // const { filtered } = useContext(PropertiesContext);
    return (
        <>
            <Hero />
            {children}
            <Properties />
        </>
    )
}

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

function Properties({ filtered1 }) {
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

function Test() {
    const { filtered } = useContext(PropertiesContext);
    console.log(filtered);

    return (
        filtered.map(p => {
            return (
                <h1>{p.name}</h1>
            )
        })
    )
}


export function PropertyPage() {
    const { properties } = useContext(PropertiesContext);
    const { id } = useParams();

    const house = properties.find(
        house => house.id === parseInt(id)
    );

    return (
        <div className="property-page">
            <div className="header">
                <h2>{house.name}</h2>
                <p>${house.price}</p>
            </div>
            <h3 className="country">{house.country}</h3>
            <hr />

            <div className="">
                <p className="">
                    <i className="fa fa-bed"></i>
                    {house.beds}{" "}Beds
                </p>
                <p className="">
                    <i className="fa fa-bath"></i>
                    {house.baths}{" "}Baths
                </p>
                <p className="">
                    <i className="ri-map-pin-2-line"></i>
                    {house.property}{" "}
                </p>
            </div>
            <hr />

            <img src={house.image} alt="" />

            <h2 className="">Property Description</h2>

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

            {/* <div className="">
        <p className="">Please fill the form for property inspection</p>
        <form >
          <h2 className="">Book An Inspection</h2>
          <div className="">
            <label className="">Full Name *</label>
            <div className="">
              <input type="text" className="" placeholder="First Name" required />
              <input type="text" className="" placeholder="Last Name" required />
            </div>
          </div>

          <div className="">
            <label className=""> E-mail *</label>
            <input type="email" className="" placeholder="example@gmail.com"/>
          </div>

          <div className="">
            <label className="">Messages</label>
            <textarea name="message" placeholder="Hi, I'm intrested in this property" className=""></textarea>
          </div>

          <button className=""> Submit</button>
        </form>
      </div> */}
        </div>
    );
};

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