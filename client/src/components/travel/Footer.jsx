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

function TestRerender() {
    console.log("test rerender");
    return null;
}

export function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const spotContainer = useRef(null);
    const [activeTab, setActiveTab] = useState(0);

    const tabsClasses = new Array(codeExamples.length).fill("tab");
    tabsClasses[activeTab] = "tab active";

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

            <TestRerender />

            <div className="pulsing-circle" />
            <div className="pulsing-circle" />

            <div className="max-width-container">
                <div className="hero-header">
                    {/* <div> */}
                        <div className="subtitle">
                            <i className="ri-sparkling-line"></i>
                            <span className="">
                                Introducing CodeFlow AI
                            </span>
                        </div>

                        <h1>
                            <span>
                                Code Faster
                            </span>
                            <span className="blue">
                                 Build Better 
                            </span>
                            <span>
                                With CodeFlow AI
                            </span>
                        </h1>

                        {/* <h1>
                            <span>Code Faster</span><span className="blue"> Build Better </span><span>With CodeFlow AI</span>
                        </h1> */}

                        <p>
                            Accelerate your development workflow with intelligent code
                            completion, automated testing, and smart debugging. Ship
                            production-ready code 10x faster.
                        </p>

                        <div className="hero-btns">
                            <button>
                                <span>Start Coding Free</span>
                                {/* <i className="ri-arrow-right-s-line"></i> */}
                                <i className="fa fa-angle-double-right"></i>
                            </button>

                            <button>
                                <i className="ri-play-fill"></i>
                                <span>Watch Demo</span>
                            </button>
                        </div>
                    {/* </div> */}
                </div>

                <div className="ide-section">
                    <div className="ide-border-container outer">
                        <div className="ide-border-container inner">
                            <div className="ide-header">
                                <div className="header">
                                    <div className="dot-btns">
                                        <span className="dot"></span>
                                        <span className="dot"></span>
                                        <span className="dot"></span>
                                    </div>
                                    <span>
                                        CodeFlow AI
                                    </span>
                                </div>
                                <i className="fa fa-chevron-down"></i>
                            </div>

                            <div className="code-examples-section">
                                <div className="tabs">
                                    <button
                                        className={tabsClasses[0]}
                                        onClick={() => setActiveTab(0)}
                                    >
                                        App.jsx
                                    </button>
                                    <button
                                        className={tabsClasses[1]}
                                        onClick={() => setActiveTab(1)}
                                    >
                                        Hero.jsx
                                    </button>
                                    <button
                                        className={tabsClasses[2]}
                                        onClick={() => setActiveTab(2)}
                                    >
                                        Navbar.jsx
                                    </button>
                                </div>

                                <div className="code-content">
                                    <pre>
                                        <code>
                                        {codeExamples[activeTab].code}
                                        </code>
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>

                        <div 
                            className="floating-card" 
                            style={{
                                backgroundColor: floatingCards[activeTab].bgColor
                            }}
                        >
                            <div className="header">
                                <div 
                                    className="icon" 
                                    style={{
                                        color: floatingCards[activeTab].iconColor,
                                    }}
                                >
                                    {floatingCards[activeTab].icon}
                                </div>
                                <span 
                                    className="title"
                                    style={{
                                        color: floatingCards[activeTab].textColor,
                                    }}
                                >
                                    {floatingCards[activeTab].title}
                                </span>
                            </div>

                            <div 
                                className="card-content"
                                style={{
                                    color: floatingCards[activeTab].contentColor,
                                }}
                            >
                                {floatingCards[activeTab].content}
                            </div>
                        </div>
                </div>
            </div>
        </section>
    )
}

const appCode = `import { useState } from "react";
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
}`;

const heroCode = `import { useState, useEffect } from "react";
import { CodeFlow } from "@codeflow/ai";

export default function Hero() {
  const [isTyping, setIsTyping] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleAISuggestion = async () => {
    const suggestion = await CodeFlow.suggest("hero component");
    return suggestion;
  };

  return (
    <section className="hero">
      <h1 className="text-4xl font-bold">
        {isTyping ? "AI-Powered Development" : "Loading..."}
      </h1>
      <button onClick={handleAISuggestion}>
        Get AI Suggestion
      </button>
    </section>
  );
}`;

const navbarCode = `import { useState } from "react";
import { CodeFlow } from "@codeflow/ai";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async () => {
    const results = await CodeFlow.search(searchQuery);
    return results;
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <h2>CodeFlow AI</h2>
      </div>
      
      <div className="nav-search">
        <input 
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search code..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      
      <button 
        className="menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
    </nav>
  );
}`;


const codeExamples = [
    {
        name: "App.jsx", 
        code: appCode
    }, 
    {
        name: "Hero.jsx", 
        code: heroCode
    }, 
    {
        name: "Navbar.jsx", 
        code: navbarCode
    }
];

const floatingCards = [
    {
        bgColor: "rgb(59 130 246 / 0.2)",
        iconColor: "rgb(96 165 250)",
        textColor: "rgb(191 219 254)",
        contentColor: "rgb(147 197 253)",
        icon: "AI",
        title: "Smart Completion",
        content: "AI-powered code suggestions in real-time",
    },
    {
        bgColor: "rgb(168 85 247 / 0.2)",
        iconColor: "rgb(192 132 252)",
        textColor: "rgb(233 213 255)",
        contentColor: "rgb(216 180 254)",
        icon: "⚡",
        title: "Auto Animation",
        content: "Dynamic typing effects generated automatically",
    },
    {
        bgColor: "rgb(16 185 129 / 0.2)",
        iconColor: "rgb(52 211 153)",
        textColor: "rgb(167 243 208)",
        contentColor: "rgb(110 231 183)",
        icon: "🔍",
        title: "Smart Search",
        content: "Intelligent code search across your project",
    },
];

  
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
