// import { Entry, data } from "./Entry";

import { useState } from "react";

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

export function Main() {

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
}