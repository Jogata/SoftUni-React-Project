import "./navbar.css";

export function Navbar() {
    return (
        <div className="nav">
            <div className="nav-logo">
                <span>Trevo</span>
            </div>

            <div className="links">
                <ul>
                    <li>
                        <a href="#home" className="link">
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            className="link"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#services"
                            className="link"
                        >
                            Services
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            className="link"
                        >
                            Projects
                        </a>
                    </li>
                </ul>
            </div>

            <div className="btn">
                <a href="#contact">
                    Contact Us
                </a>
            </div>
        </div>
    );
};
