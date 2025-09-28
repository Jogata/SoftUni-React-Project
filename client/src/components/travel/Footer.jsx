import derek from "./images/derek.jpg";

export function Navbar() { 
    return ( 
        <>
            <div className="navigation">
                <div className="logo">
                    <h2>Derek</h2>
                </div> 
                <div className="links">
                    <ul> 
                        <li>About</li>
                        <li>Projects</li>
                        <li>Services</li>
                        <li>Contact</li>
                    </ul> 
                </div> 
                <div className="button">
                    <button>Hire Me</button>
                </div> 
            </div> 
        </> 
    ) 
}

export function Hero() {
    return (
        <>
            <div className="hero">
                <div className="hero-top">
                    <div className="hero-left">
                        <h2>I'm Derek Einstein</h2>
                        <h1>Professional <span>FullStack</span> Developer </h1>
                        <p>I'm a senior fullstack engineer with over 15 years of industrial working experience.</p>
                        <div className="buttons">
                            <button>Hire Me</button>
                            <button>View My Projects</button>
                        </div>
                    </div>
                    <div className="hero-right">
                        <div className="hero-img">
                            <img src={derek} alt="" />
                        </div>
                    </div>
                </div>
                <div className="hero-bottom">
                    <div className="hero-info">
                        <h1>3+</h1>
                        <p>Years of Experience</p>
                    </div>
                    <div className="hero-info">
                        <h1>1000+</h1>
                        <p>Projects Completed</p>
                    </div>
                    <div className="hero-info">
                        <h1>800+</h1>
                        <p>Satisfied Clients</p>
                    </div>
                </div>
            </div>
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