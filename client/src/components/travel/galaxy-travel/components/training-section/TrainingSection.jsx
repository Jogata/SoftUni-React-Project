import { Link } from "react-router-dom"
import "./training-section.css"
import pod from "../../assets/pod.jpg";
import moon from "../../assets/moon.jpg";

export function TrainingSection() {
    return (
        <div className="training">
            <div className="left">
                <h1>Training</h1>
                <p>Thorough training is a necessity when traveling
                    to space. We offer all inclusive training for
                    pre-flight and in-flight scenarios.
                </p>
                <Link to="/contact" className="btn">Contact</Link>
            </div>
            <div className="right">
                <div className="img-container">
                    <div className="image-stack top">
                        <img src={moon} className="img" alt="" />
                    </div>
                    <div className="image-stack bottom">
                        <img src={pod} className="img" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}