import { Link } from "react-router-dom";

export function Room({room}) {
    console.log(room);
    const { name, slug, images, price } = room;
    return (
        <article style={{display: "block"}}>
            <div>
                <img src={images[0]} alt="single room" />
                <div>
                    <h6>${price}</h6>
                    <p>per night</p>
                </div>
                <Link to={`/rooms/${slug}`}>
                    features
                </Link>
            </div>
            <p>{name}</p>
        </article>
    )
}