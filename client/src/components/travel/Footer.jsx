import { useState } from "react";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const linksClass = isMenuOpen ? "nav-links" : "links";
    const toggleButtonIcon = isMenuOpen ? "ri-close-fill close-icon" : "ri-menu-fill open-icon";

    return (
        <>
            <div className="navbar">
                <div className="nav-logo">
                    <h2>Orange Media</h2>
                </div>
                <div className={linksClass} onClick={() => setIsMenuOpen(false)}>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Service</li>
                        <li>Projects</li>
                    </ul>
                </div>
                <div className="btn">
                    <a href="#"> <button>Contact Us</button></a>
                </div>
                <button className="toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <i className={toggleButtonIcon}></i>
                </button>
            </div>
            <hr className="line" />
        </>
    )
}

// export function Footer() {
//     return (
//         <footer>
//             <h1>footer component</h1>
//         </footer>
//     )
// }