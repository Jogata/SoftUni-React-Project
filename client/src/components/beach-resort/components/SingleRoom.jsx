import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { RoomContext } from "./Context";

import { Hero } from "./Hero";
import { Banner } from "./Banneer";

export function SingleRoom() {
    const { slug } = useParams();
    // console.log(slug);
    const { getSingleRoom } = useContext(RoomContext);

    const [ room, setRoom ] = useState({name: "test", images: ["none"]});
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
        </div>
    )
}