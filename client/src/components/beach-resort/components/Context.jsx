import { Component, createContext } from "react";
import items from "../data";

const RoomContext = createContext();

class RoomProvider extends Component {
    state = {
        rooms: [], 
        sortedRooms: [], 
        featuredRooms: [], 
        loading: true, 
        type: "all",
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    }

    componentDidMount() {
        // console.log("did mount");
        const rooms = this.formatData(items);
        // console.log(rooms);
        const featuredRooms = rooms.filter(room => room.featured === true);
        // console.log(featuredRooms);
        let maxPrice = Math.max(...rooms.map(item => item.price));
        let maxSize = Math.max(...rooms.map(item => item.size));
        this.setState({
            rooms, 
            featuredRooms, 
            sortedRooms: rooms, 
            loading: false, 
            price: maxPrice, 
            maxPrice, 
            maxSize
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

    filterRooms = () => {
        let {
          rooms,
          type,
          capacity,
          price,
          minSize,
          maxSize,
          breakfast,
          pets
        } = this.state;

        let tempRooms = [...rooms];
        capacity = parseInt(capacity);
        price = parseInt(price);

        // filter by type
        if (type !== "all") {
            // console.log("by type");
            console.log(type);
            tempRooms = tempRooms.filter(room => room.type === type);
        }
        
        // filter by capacity
        if (capacity !== 1) {
            tempRooms = tempRooms.filter(room => room.capacity >= capacity);
        }
        
        // filter by price
        tempRooms = tempRooms.filter(room => room.price <= price);
        console.log(tempRooms);
        
        //filter by size
        tempRooms = tempRooms.filter(
            room => room.size >= minSize && room.size <= maxSize
        );
        console.log(tempRooms);

        //filter by breakfast
        if (breakfast) {
            tempRooms = tempRooms.filter(room => room.breakfast === true);
        }

        //filter by pets
        if (pets) {
            tempRooms = tempRooms.filter(room => room.pets === true);
        }

        console.log(tempRooms);

        this.setState({
            sortedRooms: tempRooms
        });
    };
        
    handleChange = event => {
        // console.log(event);
        const target = event.target;
        const name = target.name;
        // const value = event.target.value;
        const value = target.type === "checkbox" ? target.checked : target.value;
        // console.log(event.target.type);
        // console.log(name, value);
        this.setState(
            {
                [name]: value
            }, 
            this.filterRooms
        );
        // console.log(this.state.maxSize);
    };

    render() {
        // console.log(this.state);
        return <RoomContext.Provider
            value={{
                ...this.state, 
                getSingleRoom: this.getSingleRoom, 
                handleChange: this.handleChange
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