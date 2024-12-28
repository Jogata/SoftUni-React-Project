import { useContext } from "react";
import { RoomContext } from "./Context";
import { Rooms } from "./Rooms";


export function RoomsContainer() {
    const { rooms, sortedRooms, loading } = useContext(RoomContext);

    if (loading) {
        return (
            <span className="loader">
                <div className="logo-ring"></div>
                <div className="logo-ring"></div>
                <div className="logo-ring"></div>
                <div className="logo-ring"></div>
            </span>
        )
    }

    return (
        <>
            {/* <h1>Rooms</h1> */}
            <Rooms />
        </>
    )
}