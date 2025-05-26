import "./about.css";

export function AboutCard(props) {
    return (
        <>
            <div className="icon-container">
                <i className={`${props.icon} icon`}></i>
            </div>
            <h3>{props.heading}</h3>
            <p>{props.text}</p>
        </>
    )
}