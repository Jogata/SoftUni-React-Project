// import { Entry, data } from "./Entry";

import { useState } from "react";
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