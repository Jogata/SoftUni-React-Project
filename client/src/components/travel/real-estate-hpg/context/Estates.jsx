import { createContext } from "react";
import { properties } from "../data";

export const Estates = createContext();

export function EstatesProvider({children}) {
    return (
        <Estates.Provider value={properties}>
            {children}
        </Estates.Provider>
    )
}