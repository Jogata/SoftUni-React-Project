import { useEffect, useRef, useState } from "react";

export function Home() {
    return (
        <>
            <AnimatedBackground />
            <HeroSection />
        </>
    )
}

export function NotFound() {
    return (
        <h1>Not Found</h1>
    )
}

function AnimatedBackground() {
    const [stars, setStars] = useState([]);
    // const [meteors, setMeteors] = useState([]);
    // const meteors = new Array(4).fill(<Meteor />);
    // console.log(meteors.length);

    useEffect(() => {
        generateStars();
        // generateMeteors();

        const handleResize = () => {
            console.log("resize");
            generateStars();
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const generateStars = () => {
        const numberOfStars = Math.floor(
            (window.innerWidth * window.innerHeight) / 10000
        );

        const newStars = new Array(numberOfStars);

        for (let i = 0; i < numberOfStars; i++) {
            newStars[i] = {
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            };
        }

        // console.log(newStars);
        setStars(newStars);
    };

    // const generateMeteors = () => {
    //     const numberOfMeteors = 4;
    //     const newMeteors = new Array(numberOfMeteors);

    //     for (let i = 0; i < numberOfMeteors; i++) {
    //         newMeteors[i] = ({
    //             id: i,
    //             size: Math.random() * 2 + 1,
    //             x: Math.random() * 100,
    //             y: Math.random() * 20,
    //             delay: Math.random() * 15,
    //             animationDuration: Math.random() * 3 + 3,
    //         });
    //     }

    //     setMeteors(newMeteors);
    // };

    return (
        <div className="animated-bg">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="star"
                    style={{
                        width: star.size + "px",
                        height: star.size + "px",
                        left: star.x + "%",
                        top: star.y + "%",
                        opacity: star.opacity,
                        animationDuration: star.animationDuration + "s",
                    }}
                />
            ))}

            <Meteor />
            <Meteor />
            <Meteor />
            <Meteor />

            {/* {meteors.map((meteor, index) => <Meteor key={index} />)} */}
            {/* {meteors.map((meteor, index) => meteor)} */}

            {/* {meteors.map((meteor) => (
                <div
                    key={meteor.id}
                    className="meteor"
                    style={{
                        width: meteor.size * 50 + "px",
                        height: meteor.size * 2 + "px",
                        left: meteor.x + "%",
                        top: meteor.y + "%",
                        animationDelay: meteor.delay,
                        animationDuration: meteor.animationDuration + "s",
                    }}
                />
            ))} */}
        </div>
    );
};

function Meteor() {
    const [meteor, setMeteor] = useState({
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        animationDuration: 10,
    });

    const id = useRef(0);
    // console.log(meteor);

    useEffect(() => {
        // let id = 0;
        const duration = Math.random() * 3 + 10;

        const timeoutID = setTimeout(() => {
            // id.current++;
            // const newId = id.current;
            const newMeteor = {
                // id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 70,
                y: Math.random() * 20,
                // delay: Math.random() * 15,
                animationDuration: duration,
            };
            // console.log(id.current);
            console.log("effect");
            console.log(newMeteor);
            // if (newId == id.current) {
            setMeteor(newMeteor);
            id.current++;
            // } else {
                // console.log("no match");
            // }
        }, duration * 1000 + 3000);

        return () => clearInterval(timeoutID);
    }, [id.current])

    return (
        <MeteorElement meteor={meteor} key={id.current} />
    )
}

function MeteorElement({ meteor }) {
    useEffect(() => {
        return () => {
            console.log("clear");
        }
    })

    return (
        <div
            className="meteor"
            style={{
                width: meteor.size * 50 + "px",
                height: meteor.size * 2 + "px",
                left: meteor.x + "%",
                top: meteor.y + "%",
                animationDuration: meteor.animationDuration + "s",
            }}
        />
    )
}

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const mobileNavClass = isMenuOpen ? "mobile-nav open" : "mobile-nav";
    const navClass = isScrolled ? "navigation alt" : "navigation";

    return (
        <nav className={navClass}>
            <div className="container flex-box">
                <a href="#hero" className="logo">
                    <span>
                        <span className="text-glow">Person </span>Portfolio
                    </span>
                </a>

                {/* desktop nav */}
                <div className="desktop-nav">
                    {navItems.map((item, key) => (
                        <a
                            key={key}
                            href={item.href}
                            className="link-nav"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* mobile nav */}
                <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="menu-button"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    {isMenuOpen ? 
                        <i className="ri-close-line"></i> : 
                        <i className="ri-menu-3-line"></i>
                    }
                </button>

                <div className={mobileNavClass}>
                    <div className="links">
                        {navItems.map((item, key) => (
                            <a
                                key={key}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};


export function HeroSection() {
    return (
        <section
            id="hero"
            className="hero-section"
        >
            <div className="container">
                {/* <div> */}
                    <h1>
                        <span className="fade-in">Hi, I'm</span>
                        <span className="fade-in primary">
                            {" "}
                            Software
                        </span>
                        <span className="fade-in">
                            {" "}
                            Developer
                        </span>
                    </h1>

                    <p className="fade-in">
                        I create stellar web experiences with modern technologies.
                        Specializing in front-end development, I build interfaces 
                        that are both beautiful and functional.
                    </p>

                    <div className="button">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div>
                {/* </div> */}
            </div>

            <div className="scroll">
                <span className=""> Scroll </span>
                <i className="fa fa-angle-double-down"></i>
            </div>
        </section>
    );
}

// export function Header() {
//     return (
//         <header>
//             <img src="https://raw.githubusercontent.com/scrimba/learn-react/refs/heads/main/02.%20Data-Driven%20React/01.%20Section%202%20Intro/images/globe.png" alt="" />
//             <h1>my travel journal.</h1>
//         </header>
//     )
// }