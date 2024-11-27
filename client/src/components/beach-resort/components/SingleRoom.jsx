import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { RoomContext } from "./Context";

import { Hero } from "./Hero";
import { Banner } from "./Banneer";

export function SingleRoom() {
    const { slug } = useParams();
    // console.log(slug);
    const { getSingleRoom } = useContext(RoomContext);

    const [ room, setRoom ] = useState({name: "test", images: ["none"], description: "", price: 0, size: 0, capacity: 0, pets: false, breakfast: false, extras: []});
    // console.log(room);
    useEffect(() => {
        // console.log("effect");
        const room = getSingleRoom(slug);
        console.log(room);
        setRoom(room);
    }, []);

    return (
        <div className="page full-screen">
            <Hero heroClass={"default-hero-section rooms-hero-section"} bcg={room.images[0]}>
                <Banner title={`${room.name} room`}>
                    <Link to="/rooms" className="btn-primary">back to rooms</Link>
                </Banner>
            </Hero>
            <section className="single-room">
                <div className="single-room-images">
                    {room.images.map((url, index) => {
                        return <img key={index} src={url} alt={room.name} />
                    })}
                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>details</h3>
                        <p>{room.description}</p>
                    </article>
                    <article className="info">
                        <h3>info</h3>
                        <h6>price: ${room.price}</h6>
                        <h6>size: {room.size} SQFT</h6>
                        <h6>max capacity: {room.capacity} {room.capacity > 1 ? "people" : "person"} </h6>
                        <h6>{room.pets ? "pets allowed" : "no pets allowed"}</h6>
                        <h6>{room.breakfast && "free breakfast included"}</h6>
                    </article>
                </div>
            </section>
            <section className="room-extras">
                <h6>extras</h6>
                <ul className="extras">
                    {room.extras.map((item, index) => {
                        return (
                            <li key={index}>{item}</li>
                        )
                    })}
                </ul>
            </section>
        </div>
    )
}