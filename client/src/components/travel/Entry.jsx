export function Entry(props) {
    console.log(props);

    return (
        <article className="journal">
            <div className="journal-image-box">
                <img
                    className="journal-image"
                    src={props.img.src}
                    // alt="image" 
                    alt={props.img.alt}
                />
            </div>
            <div className="journal-info">
                <img src="https://raw.githubusercontent.com/scrimba/learn-react/refs/heads/main/02.%20Data-Driven%20React/04.%20Problem%20-%20Not%20reusable/images/marker.png" alt="marker icon" className="journal-icon" />
                <span className="country">{props.country}</span>
                <a href={props.googleMapsLink}>
                    View on the map
                </a>
                <h2 className="entry-title">
                    {props.title}
                </h2>
                <p className="trip-dates">
                    {props.dates}
                </p>
                <p className="entry-text">
                    {props.text}
                </p>
            </div>
        </article>
    )
}