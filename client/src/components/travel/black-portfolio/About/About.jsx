import "./about.css";
import img from "../images/headshot.jpg";

export function About() {
    return (
        <div className="about" id="about">
            <div className="about-left">
                <div className="about-img">
                    <img src={img} alt="" />
                </div>
            </div>
            <div className="about-right">
                <h2>About Me</h2>
                <p>
                    I'm a senior frontend engineer with over 15
                    years of successful working experience
                </p>
                <div className="about-btns">
                    <button>Download CV</button>
                    <button>Hire Me</button>
                </div>
            </div>
        </div>
    )
}