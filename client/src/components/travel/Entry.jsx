export function Entry(props) {
    console.log(props);

    return (
        <article className="journal">
            <div className="journal-image-box">
                <img
                    className="journal-image"
                    src={props.src}
                    alt="image" />
            </div>
            <div className="journal-info">
                <img src="https://raw.githubusercontent.com/scrimba/learn-react/refs/heads/main/02.%20Data-Driven%20React/04.%20Problem%20-%20Not%20reusable/images/marker.png" alt="marker icon" className="journal-icon" />
                <span className="country">{props.country}</span>
                <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">
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