export function Navbar() {
    return (
        <div>
            <div className="prudento-navbar">
                <div className="prudento-nav-logo">
                    <h2>Prudento</h2>
                </div>
                <div className="prudento-links">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#projects">Projects</a></li>
                    </ul>
                </div>
                <div className="prudento-nav-btn">
                    <a href="#contact">
                        <button>Contact Us</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

// export function Header() {
//     return (
//         <header>
//             <img src="https://raw.githubusercontent.com/scrimba/learn-react/refs/heads/main/02.%20Data-Driven%20React/01.%20Section%202%20Intro/images/globe.png" alt="" />
//             <h1>my travel journal.</h1>
//         </header>
//     )
// }