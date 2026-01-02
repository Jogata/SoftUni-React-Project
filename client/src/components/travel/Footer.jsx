import { useEffect, useRef, useState } from "react";

import logo from "./images/modern/logo.png";

export function Navigation() {
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

    return (
        <nav className="navigation">
            <div className="navigation-max-width">
                <div className="flex">
                    <div className="logo flex">
                        <div className="logo-img">
                            <img src={logo} alt="CodeFlow" />
                        </div>
                        <span>
                            <span>Code</span>
                            <span className="blue">Flow</span>
                        </span>
                    </div>

                    <div className="nav-links">
                        <a 
                            href="#features"
                            onClick={() => setMobileMenuIsOpen(false)}
                        >
                            Features
                        </a>
                        <a 
                            href="#pricing"
                            onClick={() => setMobileMenuIsOpen(false)}
                        >
                            Pricing
                        </a>
                        <a 
                            href="#testimonials"
                            onClick={() => setMobileMenuIsOpen(false)}
                        >
                            Testimonials
                        </a>
                    </div>

                    <button
                        className="menu-button"
                        onClick={() => setMobileMenuIsOpen(prev => !prev)}
                    >
                        {mobileMenuIsOpen ? (
                            <i className="ri-close-line"></i>
                        ) : (
                            <i className="ri-menu-line"></i>
                        )}
                    </button>
                </div>
            </div>

            {mobileMenuIsOpen && (
                <div className="mobile-navigation">
                    <div className="nav-links mobile">
                        <a
                            href="#features"
                            onClick={() => setMobileMenuIsOpen(false)}
                        >
                            Features
                        </a>
                        <a
                            href="#pricing"
                            onClick={() => setMobileMenuIsOpen(false)}
                        >
                            Pricing
                        </a>
                        <a
                            href="#testimonials"
                            onClick={() => setMobileMenuIsOpen(false)}
                        >
                            Testimonials
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}

export function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const spotContainer = useRef(null);

    useEffect(() => {
        function handleMouseMove(e) {
            setMousePosition({ x: e.offsetX, y: e.offsetY });
        }

        spotContainer.current.addEventListener("mousemove", handleMouseMove);

        return () => spotContainer.current.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section className="hero-section" ref={spotContainer}>
            <div className="mouse-tracker"
                style={{ "--x": `${mousePosition.x}px`, "--y": `${mousePosition.y}px` }}
            />

            <div className="pulsing-circle" />
            <div className="pulsing-circle" />

            <div className="container-1">
                <div className="container-2">
                    <div>
                        <div className="subheader">
                            <i className="ri-sparkling-line"></i>
                            <span className="">
                                Introducing CodeFlow AI
                            </span>
                        </div>

                        {/* <h1 className="text-5xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700 delay-100 leading-tight"> */}
                        <h1>
                            {/* <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2"> */}
                            <span>
                                Code Faster
                            </span>
                            {/* <span className="bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent block mb-1 sm:mb-2"> */}
                            <span className="blue">
                                Build Better
                            </span>
                            {/* <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2"> */}
                            <span>
                                With CodeFlow AI
                            </span>
                        </h1>
                    </div>
                </div>
            </div>

            <h1>hero</h1>
            <pre>
                <code>
                    {`import { useState } from "react";
import { CodeFlow } from "@codeflow/ai";

function App() {
  const [code, setCode] = useState("");

  const handleAICompletion = async () => {
    const suggestion = await CodeFlow.complete(code);
    setCode(suggestion);
  };

  return (
    <div className="app">
      <CodeEditor 
        onChange={setCode} 
        onAI={handleAICompletion} 
      />
    </div>
  );
}`}
                </code>
            </pre>
        </section>
    )
}

// export function Footer() {
//     return (
//         <div className="footer">
//             <div className="footer-content">
//                 <div className="footer-name">
//                     <h2>Nika Shoes</h2>
//                 </div>
//                 <div className="footer-socials">
//                     <i className="fa fa-facebook footer-icon"></i>
//                     <i className="fa fa-instagram footer-icon"></i>
//                     <i className="fa fa-twitter footer-icon"></i>
//                 </div>
//             </div>
//             <div className="copy">
//                 <p>Copyright © Nika Shoes 2024. All rights reserved</p>
//             </div>
//         </div>
//     )
// }
