export function Navigation() {
    return (
        <div className="page">
            <nav>

                <div className="logo">
                    <h2>Edukative</h2>
                </div>

                <div>
                    <ul>
                        <li>
                            <a 
                                href="#"
                                className="nav-link"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#about"
                                className="nav-link"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#services"
                                className="nav-link"
                            >
                                Services
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#projects"
                                className="nav-link"
                            >
                                Projects
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <a 
                        href="#contact"
                        className="nav-link"
                    >
                        Contact Us
                    </a>
                </div>
            </nav>
        </div>
    );
};