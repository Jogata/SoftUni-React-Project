// import { Entry, data } from "./Entry";

import { useState } from "react";
import { Link } from "react-router-dom";
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
                        <Link to={`/home/${ad.id}`} key={ad.id} >
                            {/* <Ad ad={ad} /> */}
                            to do AD
                        </Link>
                    )
                }
            })}
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