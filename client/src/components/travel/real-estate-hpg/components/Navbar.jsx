import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <header>
            <a className="logo" href="/">HPG Properties</a>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/properties">Properties</Link></li>
                    <li><Link to="/mission">Mission</Link></li>
                </ul>
            </nav>
            <button>Contact Us</button>
        </header>
    )
}