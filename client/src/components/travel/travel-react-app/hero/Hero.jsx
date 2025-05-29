import "./hero.css";
import video from "../assets/maldives.mp4";

export function Hero() {
    return (
        <div className="hero">
            <video autoPlay loop muted id="video">
                <source src={video} type="video/mp4" />
            </video>
            <div className="content">
                <h1>First Class Travel</h1>
                <h2>Top 1% Locations Worldwide</h2>
                <form className="form">
                    <div>
                        <input type="text" placeholder="Search Destinations" />
                    </div>
                    <div>
                        <button><i className="fa fa-search icon"></i></button>
                    </div>
                </form>
            </div>
        </div>
    )
}