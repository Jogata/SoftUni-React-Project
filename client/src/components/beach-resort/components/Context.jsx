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
        // console.log("did mount");
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

    getSingleRoom = (slug) => {
        // console.log("get single room", slug);
        // console.log(this.state.rooms);
        const tempRooms = this.formatData([...items]);
        // const tempRooms = [...this.state.rooms];
        // console.log(items);
        // console.log(this.state.rooms);
        // console.log(tempRooms);
        const room = tempRooms.find(room => room.slug === slug);
        // console.log(room);
        return room;
    }

    render() {
        // console.log(this.state);
        return <RoomContext.Provider
            value={{
                ...this.state, 
                getSingleRoom: this.getSingleRoom
            }}
        >
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