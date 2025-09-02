// import { Entry, data } from "./Entry";

import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import agent1 from "./images/agent1.jpg";
import agent2 from "./images/agent2.jpg";
import agent3 from "./images/agent3.jpg";
import glass1 from "./images/glass1.jpg";
import glass2 from "./images/glass2.jpg";
import glass3 from "./images/glass3.jpg";
import smart3 from "./images/smart3.jpg";
import smart2 from "./images/smart2.jpg";
import smart1 from "./images/smart1.jpg";
import apartment1 from "./images/apartment1.jpg";
import apartment2 from "./images/apartment2.jpg";
import apartment3 from "./images/apartment3.jpg";
import bungalow1 from "./images/bungalow1.jpg";
import bungalow2 from "./images/bungalow2.jpg";
import bungalow3 from "./images/bungalow3.jpg";
import office1 from "./images/office1.jpg";
import office2 from "./images/office2.jpg";
import office3 from "./images/office3.jpg";
import villa1 from "./images/villa1.jpg";
import villa2 from "./images/villa2.jpg";
import villa3 from "./images/villa3.jpg";
// import "./hero.css";

const categories = [
    {
        title: "Smart Home",
    },
    {
        title: "Apartment",
    },
    {
        title: "Villa",
    },
    {
        title: "Bungalow",
    },
    {
        title: "Office",
    },
    {
        title: "Glass House",
    },
]

const ads = [
    {
        id: 1,
        name: 'Ocean Breeze Villa',
        price: '€900,000.00',
        location: '125 Ocean Street, Brighton',
        beds: 4,
        baths: 3,
        image: smart1,
        category: 'Smart Home',
        propertyDetails: {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            landsize: '500sqft',
            agentImage: agent1,
            agentName: 'Oliver Jonah',
            agentPhone: '+123-456-789',
            agentEmail: 'oliverjonah@gmail.com',
        }
    },
    {
        id: 2,
        name: 'Jackson glass',
        price: '€750,000.00',
        location: '97 Avenue Road, New York',
        beds: 5,
        baths: 4,
        image: apartment1,
        category: 'Apartment',
        propertyDetails: {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            landsize: '500sqft',
            agentImage: agent2,
            agentName: 'Angela Jonah',
            agentPhone: '+123-456-789',
            agentEmail: 'agenlajonah@gmail.com',
        }
    },
    {
        id: 3,
        name: 'Lakeside Cottage',
        price: '€540,000.00',
        location: '50 Lakeside Ave, Los Angeles',
        beds: 3,
        baths: 2,
        image: villa1,
        category: 'Villa',
        propertyDetails: {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            landsize: '500sqft',
            agentImage: agent3,
            agentName: 'Samuel Clark',
            agentPhone: '+123-456-789',
            agentEmail: 'samuelclark.com',
        }
    },
    {
        id: 4,
        name: 'Ocean Breeze Villa',
        price: '€900,000.00',
        location: '125 Ocean Street, Brighton',
        beds: 4,
        baths: 3,
        image: bungalow1,
        category: 'Bungalow',
        propertyDetails: {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            landsize: '500sqft',
            agentImage: agent1,
            agentName: 'Oliver Jonah',
            agentPhone: '+123-456-789',
            agentEmail: 'oliverjonah@gmail.com',
        }
    },
    {
        id: 5,
        name: 'Jackson glass',
        price: '€750,000.00',
        location: '97 Avenue Road, New York',
        beds: 5,
        baths: 4,
        image: office1,
        category: 'Office',
        propertyDetails: {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            landsize: '500sqft',
            agentImage: agent2,
            agentName: 'Angela Jonah',
            agentPhone: '+123-456-789',
            agentEmail: 'agenlajonah@gmail.com',
        }
    },
    {
        id: 6,
        name: 'Lakeside Cottage',
        price: '€540,000.00',
        location: '50 Lakeside Ave, Los Angeles',
        beds: 3,
        baths: 2,
        image: glass1,
        category: 'Glass House',
        propertyDetails: {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            landsize: '500sqft',
            agentImage: agent3,
            agentName: 'Samuel Clark',
            agentPhone: '+123-456-789',
            agentEmail: 'samuelclark.com',
        }
    },
    {
        id: 7,
        name: 'Ocean Breeze Home',
        price: '€900,000.00',
        location: '125 Ocean Street, Brighton',
        beds: 4,
        baths: 3,
        image: smart2,
        category: 'Smart Home',
        propertyDetails: {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            landsize: '500sqft',
            agentImage: agent1,
            agentName: 'Oliver Jonah',
            agentPhone: '+123-456-789',
            agentEmail: 'oliverjonah@gmail.com',
        }
    },
    {
        id: 8,
        name: 'Jackson glass',
        price: '€750,000.00',
        location: '97 Avenue Road, New York',
        beds: 5,
        baths: 4,
        image: apartment2,
        category: 'Apartment',
        propertyDetails: {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            landsize: '500sqft',
            agentImage: agent2,
            agentName: 'Angela Jonah',
            agentPhone: '+123-456-789',
            agentEmail: 'agenlajonah@gmail.com',
        }
    },
    {
        id: 9,
        name: 'Lakeside Cottage',
        price: '€540,000.00',
        location: '50 Lakeside Ave, Los Angeles',
        beds: 3,
        baths: 2,
        image: villa2,
        category: 'Villa',
        propertyDetails: {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            landsize: '500sqft',
            agentImage: agent3,
            agentName: 'Samuel Clark',
            agentPhone: '+123-456-789',
            agentEmail: 'samuelclark.com',
        }
    },
    {
        id: 10,
        name: 'Ocean Breeze Villa',
        price: '€900,000.00',
        location: '125 Ocean Street, Brighton',
        beds: 4,
        baths: 3,
        image: bungalow2,
        category: 'Bungalow',
        propertyDetails: {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            landsize: '500sqft',
            agentImage: agent1,
            agentName: 'Oliver Jonah',
            agentPhone: '+123-456-789',
            agentEmail: 'oliverjonah@gmail.com',
        }
    },
    {
        id: 11,
        name: 'Jackson glass',
        price: '€750,000.00',
        location: '97 Avenue Road, New York',
        beds: 5,
        baths: 4,
        image: office2,
        category: 'Office',
        propertyDetails: {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            landsize: '500sqft',
            agentImage: agent2,
            agentName: 'Angela Jonah',
            agentPhone: '+123-456-789',
            agentEmail: 'agenlajonah@gmail.com',
        }
    },
    {
        id: 12,
        name: 'Lakeside Cottage',
        price: '€540,000.00',
        location: '50 Lakeside Ave, Los Angeles',
        beds: 3,
        baths: 2,
        image: glass2,
        category: 'Glass House',
        propertyDetails: {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            landsize: '500sqft',
            agentImage: agent3,
            agentName: 'Samuel Clark',
            agentPhone: '+123-456-789',
            agentEmail: 'samuelclark.com',
        }
    },
    {
        id: 13,
        name: 'Ocean Breeze Villa',
        price: '€900,000.00',
        location: '125 Ocean Street, Brighton',
        beds: 4,
        baths: 3,
        image: smart3,
        category: 'Smart Home',
        propertyDetails: {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            landsize: '500sqft',
            agentImage: agent1,
            agentName: 'Oliver Jonah',
            agentPhone: '+123-456-789',
            agentEmail: 'oliverjonah@gmail.com',
        }
    },
    {
        id: 14,
        name: 'Jackson glass',
        price: '€750,000.00',
        location: '97 Avenue Road, New York',
        beds: 5,
        baths: 4,
        image: apartment3,
        category: 'Apartment',
        propertyDetails: {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            landsize: '500sqft',
            agentImage: agent2,
            agentName: 'Angela Jonah',
            agentPhone: '+123-456-789',
            agentEmail: 'agenlajonah@gmail.com',
        }
    },
    {
        id: 15,
        name: 'Lakeside Cottage',
        price: '€540,000.00',
        location: '50 Lakeside Ave, Los Angeles',
        beds: 3,
        baths: 2,
        image: villa3,
        category: 'Villa',
        propertyDetails: {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            landsize: '500sqft',
            agentImage: agent3,
            agentName: 'Samuel Clark',
            agentPhone: '+123-456-789',
            agentEmail: 'samuelclark.com',
        }
    },
    {
        id: 16,
        name: 'Ocean Breeze Villa',
        price: '€900,000.00',
        location: '125 Ocean Street, Brighton',
        beds: 4,
        baths: 3,
        image: bungalow3,
        category: 'Bungalow',
        propertyDetails: {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            landsize: '500sqft',
            agentImage: agent3,
            agentName: 'Samuel Clark',
            agentPhone: '+123-456-789',
            agentEmail: 'samuelclark.com',
        }
    },
    {
        id: 17,
        name: 'Jackson glass',
        price: '€750,000.00',
        location: '97 Avenue Road, New York',
        beds: 5,
        baths: 4,
        image: office3,
        category: 'Office',
        propertyDetails: {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            landsize: '500sqft',
            agentImage: agent3,
            agentName: 'Samuel Clark',
            agentPhone: '+123-456-789',
            agentEmail: 'samuelclark.com',
        }
    },
    {
        id: 18,
        name: 'Lakeside Cottage',
        price: '€540,000.00',
        location: '50 Lakeside Ave, Los Angeles',
        beds: 3,
        baths: 2,
        image: glass3,
        category: 'Glass House',
        propertyDetails: {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            landsize: '500sqft',
            agentImage: agent3,
            agentName: 'Samuel Clark',
            agentPhone: '+123-456-789',
            agentEmail: 'samuelclark.com',
        }
    },
];

export function Navigation() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const buttonIconClass = isNavOpen ? "fa fa-times close" : "fa fa-bars open";

    return (
        <header className="navigation">
            <div className="nav-logo">
                <h2>ASH PROPERTY</h2>
            </div>
            <nav className={isNavOpen ? "nav-links" : "links"} onClick={() => setIsNavOpen(false)}>
                <ul>
                    <li>Home</li>
                    <li>Properties</li>
                    <li>About Us</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <div className="btn1">
                <button>Register</button>
            </div>
            <button className="toggle" onClick={() => setIsNavOpen(!isNavOpen)}>
                <i className={buttonIconClass}></i>
            </button>
        </header>
    )
}

export function Homepage() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    return (
        <>
            <Hero />
            <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            <Ads selectedCategory={selectedCategory} />
        </>
    )
}

function Hero() {
    return (
        <div className="hero-container">
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h1>
                    Welcome to Ash-Estate, where your dream home becomes a reality.
                </h1>
                <p>
                    From cozy starter homes to luxurious estates, we offer a diverse
                    range of properties to suit your unique lifestyle. Discover your
                    dream home with Ash-Estate today.
                </p>
                <div className="hero-button">
                    <button>Buy Property</button>
                </div>
            </div>
        </div>
    )
}

function Categories({ selectedCategory, setSelectedCategory }) {
    return (
        <div className="categories-section">
            <h1>Explore Our Properties</h1>
            <div className="categories">
                {categories.map((category, index) => {
                    return (
                        <div onClick={() => setSelectedCategory((prev) => (prev === category.title ? "All" : category.title))} key={index} className="category">
                            <div className={selectedCategory === category.title ? "selected" : ""}>
                                <div className="name">
                                    <p>{category.title}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

function Ads({ selectedCategory }) {
    return (
        <div className="ads">
            {ads.map((ad) => {
                if (selectedCategory === "All" || selectedCategory === ad.category) {
                    return (
                        <Link to={`/ad/${ad.id}`} key={ad.id} >
                            <Ad ad={ad} />
                        </Link>
                    )
                }
            })}
        </div>
    )
}

function Ad({ ad }) {
    return (
        <div className="ad">
            <img src={ad.image} alt="" className="ad-img" />
            <div className="ad-details">
                <h3>{ad.name} </h3>
                <p>{ad.price} </p>
                <p>{ad.location} </p>
                <div className="ad-info">
                    <span>{ad.beds} Beds </span>
                    <span>{ad.baths} Bath </span>
                </div>
            </div>
        </div>
    )
}


export const AdDetails = () => {
    const { id } = useParams();

    const ad = ads.find(ad => {
        return ad.id === Number(id);
    })

    return (
        <div>
            <div className="ad-details">
                <div className="ad-name-price">
                    <h2>{ad.name} </h2>
                    <p>{ad.price} </p>
                </div>
                <h3 className="location">{ad.location} </h3>
                <hr />
                <div className="service">
                    <p>
                        <i className="fa fa-bed"></i>
                        {ad.beds} Bedrooms
                    </p>
                    <p>
                        <i className="fa fa-bath"></i>
                        {ad.baths} Bathrooms
                    </p>
                    <p>
                        <i className="fa fa-location"></i>
                        {ad.propertyDetails.landsize}
                    </p>
                </div>
                <hr />
                <img src={ad.image} alt="" className='ad-img' />
                <h2 className="desc-header">Property Description</h2>
                <div className="features">
                    <div className="feature">
                        <p>PROPERTY TYPE</p>
                        <h4>Condominiums</h4>
                    </div>
                    <div className="feature">
                        <p>STATUS</p>
                        <h4>Available</h4>
                    </div>
                    <div className="feature">
                        <p>YEAR BUILT</p>
                        <h4>2022</h4>
                    </div>
                    <div className="feature">
                        <p>PROPERTY ID</p>
                        <h4>CRFT8Y16R</h4>
                    </div>
                </div>
                <hr />
                <p className="desc">{ad.propertyDetails.description} </p>
                <p className="desc">{ad.propertyDetails.description} </p>
                <p className="desc">{ad.propertyDetails.description} </p>
                <p className="desc">{ad.propertyDetails.description} </p>
            </div>
            <div className="agent">
                <h2>Contact Agent</h2>
                <div className="agent-details">
                    <div className="left">
                        <img src={ad.propertyDetails.agentImage} alt="" />
                        <h3>{ad.propertyDetails.agentName} </h3>
                        <h3>{ad.propertyDetails.agentPhone} </h3>
                        <h3>{ad.propertyDetails.agentEmail} </h3>
                    </div>
                    <div className="right">
                        <div className="contact-form">
                            <p>Please fill this form properly</p>
                            <form onSubmit={e => e.preventDefault()}>
                                <h2>Contact Us</h2>
                                <div>
                                    <label htmlFor="first"> Full Name *</label>
                                    <div className="names">
                                        <input type="text" id="first" placeholder='First Name' />
                                        <input type="text" id="last" placeholder='Last Name' />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email">E-mail *</label>
                                    <input type="email" id="email" placeholder='example@example.com' />
                                </div>
                                <div>
                                    <label htmlFor="message"> Message *</label>
                                    <textarea name="message" id="message"></textarea>
                                </div>
                                <button type='submit'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


// export function Main() {

    // const entries = data.map(entry => {
    //     return (
    //         <Entry 
    //             key={entry.id}
    //             img={entry.img} 
    //             title={entry.title} 
    //             country={entry.country} 
    //             googleMapsLink={entry.googleMapsLink}
    //             dates={entry.dates} 
    //             text={entry.text}
    //         />
    //     )
    // });

    // return (
    //     <main>
    //         {entries}
    //     </main>
    // )
// }