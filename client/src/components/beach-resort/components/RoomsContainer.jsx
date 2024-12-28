import { useContext } from "react";
import { RoomContext } from "./Context";
import { Rooms } from "./Rooms";
import { RoomsFilter } from "./RoomsFilter";

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
            <RoomsFilter rooms={rooms} />
            <Rooms rooms={sortedRooms} />
        </>
    )
}