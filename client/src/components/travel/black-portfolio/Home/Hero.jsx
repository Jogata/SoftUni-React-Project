import "./hero.css";
import img from "../images/headshot.jpg";

export function Hero() {
    const professions = [
        "Senior Frontend Developer", 
        "Senior Frontend Engineer"
    ];

    return (
        <div className="hero">
            <div className="hero-content">
                <div className="hero-left">
                    <h2>I'm Alvin Jonathan</h2>
                    <h1>{professions[0]}</h1>
                    <p>
                        I'm a senior frontend engineer with over 15 
                        years of successful working experience
                    </p>
                </div>
                <div className="hero-right">
                    <div className="hero-img">
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}