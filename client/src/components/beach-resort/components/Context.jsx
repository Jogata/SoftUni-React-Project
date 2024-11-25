import { Component, createContext } from "react";
import items from "../data";

const RoomContext = createContext();

class RoomProvider extends Component {
    state = {
        rooms: [], 
        sortedRooms: [], 
        featuredRooms: [], 
        loading: true
    }

    componentDidMount() {
        const rooms = this.formatData(items);
        // console.log(rooms);
        const featuredRooms = rooms.filter(room => room.featured === true);
        // console.log(featuredRooms);
        this.setState({
            rooms, 
            featuredRooms, 
            sortedRooms: rooms, 
            loading: false
        })
    }

    formatData(items) {
        const tempItems = items.map(item => {
            const id = item.sys.id;
            // console.log(id);
            const images = item.fields.images.map(image => image.fields.file.url);
            // console.log(images);
            const room = {...item.fields, id, images};
            // console.log(room);
            return room;
        });
        return tempItems;
    }

    render() {
        return <RoomContext.Provider value={this.state}>
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