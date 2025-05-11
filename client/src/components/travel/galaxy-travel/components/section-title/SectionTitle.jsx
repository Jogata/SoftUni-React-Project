import "./section-title.css";

export function SectionTitle(props) {
    return (
        <div className="hero-img">
            <div className="heading">
                <h1>{props.heading}</h1>
                <p>{props.text}</p>
            </div>
        </div>
    )
}