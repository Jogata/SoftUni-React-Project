import "./images.css";

export function Image({bgImg, text}) {
    return (
        <div className="selects-location">
            <img src={bgImg} alt="/" />
            <div className="overlay">
                <p>{text}</p>
            </div>
        </div>
    )
}