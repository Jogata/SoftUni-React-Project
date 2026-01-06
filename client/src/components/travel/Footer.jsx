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

const features = [
    {
        title: "AI Code Completion",
        description:
            "Intelligent code suggestions powered by advanced AI that learns from your coding patterns. Get real-time assistance with syntax, logic, and best practices.",
        codeSnippet: `function handleSubmit() {
  // AI suggests next line
  const data = await fetch("/api/submit")
  // Auto-completed by AI
}`,
        // imagePosition: "left",
    },
    {
        title: "Automated Testing",
        description:
            "Generate comprehensive test suites automatically. Our AI analyzes your code and creates unit tests, integration tests, and edge case coverage.",
        codeSnippet: `describe("User Authentication", () => {
  // Auto-generated tests
  it("should login successfully", () => {
    // Test implementation
  })
})`,
        // imagePosition: "right",
    },
    {
        title: "Smart Debugging",
        description:
            "Identify and fix bugs before they reach production. AI-powered error detection and resolution suggestions help you debug faster.",
        codeSnippet: `// AI suggests fix:
const result = await processData(input)
// Fixed: Added await keyword`,
        // imagePosition: "left",
    },
];

export function Features() {
    return (
        <section id="features" className="features-section">
            <div className="max-width">
                <div className="section-header">
                    <h2>
                        <span className="gray-bg">
                            Your Complete Development
                        </span>
                        <br />
                        <span className="blue-bg">
                            Workflow
                        </span>
                    </h2>
                </div>

                <div className="features">
                    {features.map((feature, index) => (
                        <div key={index} className="feature">

                            <div className="code-section">
                                <div className="relative">
                                    <div className="gradient-bg"></div>
                                    <div className="feature-ide-section">
                                        <div className="ide">
                                            <div className="header">
                                                <div className="dot-btns">
                                                    <span className="dot"></span>
                                                    <span className="dot"></span>
                                                    <span className="dot"></span>
                                                </div>
                                                <span>
                                                    {feature.title}
                                                </span>
                                            </div>

                                            <div className="code-content">
                                                <pre>
                                                    <code>

                                                        {feature.codeSnippet}
                                                    </code>
                                                </pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="text-section">
                                <div className="max-width">
                                    <h3>
                                        {feature.title}
                                    </h3>
                                    <p>
                                        {feature.description}
                                    </p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const plans = [
    {
        name: "Starter",
        price: "29.99",
        description: "Perfect for individuals and small teams",
        features: [
            "Up to 5 team members",
            "10GB storage",
            "Basic analytics",
            "Email support",
            "API access",
            "Mobile app",
        ],
        mostPopular: false,
    },
    {
        name: "Professional",
        price: "79.99",
        description: "Best for growing businesses",
        features: [
            "Up to 25 team members",
            "100GB storage",
            "Advanced analytics",
            "Priority support",
            "API access",
            "Mobile app",
            "Custom integrations",
            "Advanced security",
        ],
        mostPopular: true,
    },
    {
        name: "Enterprise",
        price: "199.99",
        description: "For large organizations",
        features: [
            "Unlimited team members",
            "Unlimited storage",
            "Enterprise analytics",
            "24/7 phone support",
            "API access",
            "Mobile app",
            "Custom integrations",
            "Advanced security",
            "Dedicated account manager",
            "Custom SLA",
        ],
        mostPopular: false,
    },
];

export function Pricing() {
    return (
        <section id="pricing" className="pricing-section">
            <div className="max-width">

                <div className="section-header">
                    <h2>
                        <span className="gray-bg">
                            Simple, Transparent
                        </span>
                        <span className="blue-bg">
                            Pricing Plans
                        </span>
                    </h2>
                    <p>
                        Choose the perfect plan for your needs. All 
                        plans include a 14-day free trial.
                    </p>
                </div>

                <div className="pricing-cards">
                    {plans.map((plan, key) => {
                        let cardClasses = plan.mostPopular ?
                            "pricing-card most-popular" :
                            "pricing-card";

                        return (
                            <div key={key} className={cardClasses}>
                                <div className="gradient-bg"></div>

                                {plan.mostPopular && (
                                    <div className="most-popular-box">
                                        <div className="flex-box">
                                            <i className="fa fa-star"></i>
                                            <span>Most Popular</span>
                                        </div>
                                    </div>
                                )}

                                <div className="pricing-card-header">
                                    <h3>{plan.name}</h3>
                                    <p className="description">
                                        {plan.description}
                                    </p>
                                    <div className="price">
                                        <span className="price-value">
                                            ${plan.price}
                                        </span>
                                        <span className="plan-duration">
                                            /month
                                        </span>
                                    </div>
                                </div>

                                <ul className="plan-features">
                                    {plan.features.map((feature, featureKey) => (
                                        <li key={featureKey} className="plan-feature">
                                            <div className="icon">
                                                <i className="fa fa-check"></i>
                                            </div>
                                            <span className="feature-description">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <button>Get Started</button>

                            </div>
                        )
                    })}
                </div>

                <div className="contact-link">
                    <p>
                        Need a custom plan?{" "}
                        <a href="#">
                            Contact our sales team
                        </a>
                    </p>
                </div>
                
            </div>
        </section>
    );
}

const testimonials = [
    {
        name: "Sarah Chen",
        role: "Senior Developer",
        image:
            "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
        content:
            "This AI-powered development platform has revolutionized how we write code. The intelligent suggestions save us hours every day.",
    },
    {
        name: "Marcus Rodriguez",
        role: "Tech Lead",
        image:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
        content:
            "The automated testing and debugging features are game-changers. We ship code faster and with more confidence than ever before.",
    },
    {
        name: "Emily Watson",
        role: "CTO",
        image:
            "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200",
        content:
            "Our development velocity increased by 300% since adopting this platform. It's like having a senior developer pair programming with every team member.",
    },
];
  
export function Testimonials() {
    return (
        <section id="testimonials" className="testimonials-section">
            <div className="max-width-container">
                {/* <div className="flex-box"> */}
                <div className="grid-box">

                    <div className="testimonials-header">
                        <h2>
                            What developers are saying about us
                        </h2>
                        <p>
                            Everything you need to build, test, and deploy applications with
                            AI-powered development tools.
                        </p>
                    </div>

                    <div className="testimonials">
                        <div className="testimonials-inner">
                            {testimonials.map((testimonial, key) => (
                                <div key={key} className="testimonial">
                                    <div className="flex-box">
                                        <div className="quotes">
                                            <div className="quotes-icon">
                                                "
                                            </div>
                                        </div>

                                        <div className="flex-grow">
                                            <p className="testimonial-content">
                                                {testimonial.content}
                                            </p>
                                            <div className="person-info">
                                                <img
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                />
                                                <div>
                                                    <h4 className="name">
                                                        {testimonial.name}
                                                    </h4>
                                                    <p className="role">
                                                        {testimonial.role}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
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
