import { Component, createContext } from "react";
import rooms from "../data";

const RoomContext = createContext();

class RoomProvider extends Component {
    state = {
        rooms: rooms, 
    }

    render() {
        return <RoomContext.Provider value={this.state.rooms}>
            {this.props.children}
        </RoomContext.Provider>
    }
}

const RoomConsumer = RoomContext.Consumer;

export {
    RoomProvider, 
    RoomConsumer, 
    RoomContext
}