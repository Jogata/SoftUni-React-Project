import hero from "../images/hero2.png";

export function Hero() {
    return (
        <div className="hero">
            <h1>Find Your Dream Home <br /> with Ease</h1>
            <img src={hero} alt="" className="hero-img" />
        </div>
    )
}