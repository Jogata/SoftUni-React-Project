import video from "../../assets/video.mp4";
import "./hero.css";

export function Hero() {
    return (
        <div className="hero">
            <video autoPlay loop muted id="video">
                <source src={video} type="video/mp4" />
            </video>
            <div className="hero-text">
                <h1>
                    <span className="block">Decentralized</span>
                    <span className="blue"> Trading </span>
                    Protocol
                </h1>
                <p>
                    Guaranteed liquidity trading for millions 
                    of users and top Ethereum applications.
                </p>
                <div className="btn-group">
                    <button className="btn">Use Defi</button>
                    <button className="btn btn-outline">FAQ</button>
                </div>
            </div>
            <div className="bottom-text">
                <h2>Total Volume Secured: 
                    <span className="block"> $42,104,783,662.47</span>
                </h2>
            </div>
        </div>
    )
}