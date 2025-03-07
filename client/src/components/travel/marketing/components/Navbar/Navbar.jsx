import { navlinks } from "../../data";
import "./navbar.css";

export function Navbar() {
    return (
        <nav>
            <div className="logo">
                <span>Infigio</span>
            </div>
            <div className="links">
                <ul>
                    {/* <li> */}
                        {/* <a href="#">Home</a> */}
                    {/* </li> */}
                    {/* <li> */}
                        {/* <a href="#">About</a> */}
                    {/* </li> */}
                    {/* <li> */}
                        {/* <a href="#">Services</a> */}
                    {/* </li> */}
                    {/* <li> */}
                        {/* <a href="#">Projects</a> */}
                    {/* </li> */}
                    {navlinks.map(item => (
                        <li key={item.id}>
                            <a href={item.link}>{item.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="btn">
                <a href="#">Contact Us</a>
            </div>
        </nav>
    )
}