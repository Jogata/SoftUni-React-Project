import { Component } from "react";
import { RoomContext } from "./Context";
import { Room } from "./Room";

export class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render() {
        const ctx = this.context;
        console.log(ctx.featuredRooms);
        return (
            <div>
                <h1>rooms</h1>
                {ctx.featuredRooms.length > 0 ? <Room room={ctx.featuredRooms[0]} /> : null}
            </div>
        )
    }
}