import { Component } from "react";
import { RoomContext } from "./Context";
import { Title } from "./Title";
import { Room } from "./Room";

export class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render() {
        const ctx = this.context;
        console.log(ctx.featuredRooms);
        return (
            <div className="section featured-section">
                {/* <h1>rooms</h1> */}
                <Title title="Featured Rooms" />
                {/* {ctx.featuredRooms.length > 0 ? <Room room={ctx.featuredRooms[0]} /> : null} */}
                <div className="inner-featured-container">
                    {ctx.featuredRooms.map(room => <Room key={room.id} room={room} />)}
                </div>
            </div>
        )
    }
}