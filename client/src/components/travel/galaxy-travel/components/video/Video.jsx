import { Link } from "react-router-dom";
import "./video.css";
import video from "../../assets/space.mp4"

export function Video() {
    return (
        <div className="hero">
            <video autoPlay loop muted id="video">
                <source src={video} type="video/mp4" />
            </video>
            <div className="content">
                <h1>Galaxy. Travel.</h1>
                <p>World's first civilian space travel.</p>
                <div>
                    <Link to="/training" className="btn">Training</Link>
                    <Link to="/contact" className="btn btn-light">Launch</Link>
                </div>
            </div>
        </div>
    )
}