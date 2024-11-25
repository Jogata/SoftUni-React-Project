import { Component } from "react";
import { RoomContext } from "./Context";

export class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render() {
        const ctx = this.context;
        console.log(ctx.featuredRooms);
        return (
            <h1>rooms</h1>

        )
    }
}