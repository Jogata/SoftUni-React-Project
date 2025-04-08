import { createContext, useEffect, useState } from "react";
import { properties } from "../data";

export const Estates = createContext();

export function EstatesProvider({children}) {
    const [homes, setHomes] = useState(properties);

    const [country, setCountry] = useState("default");
    const [property, setProperty] = useState("default");
    const [price, setPrice] = useState("default");
    const [filteredHouses, setFilteredHouses] = useState(properties);

    function handleSearch(country, property, prices) {
        let allEstates = [...properties];

        if (country !== "default") {
            allEstates = allEstates.filter(estate => estate.country === country);
        }

        if (property !== "default") {
            allEstates = allEstates.filter(estate => estate.property === property);
        }

        if (prices !== "default") {
            const [minPrice, maxPrice] = prices.split("-").map(Number);
            allEstates = allEstates.filter(estate => Number(estate.price) >= minPrice && Number(estate.price) <= maxPrice);
        }

        if (filteredHouses.length > 0) {
            setFilteredHouses(allEstates);
        } else {
            setFilteredHouses(homes.slice(0, 6));
        }
    }

    return (
        <Estates.Provider value={{handleSearch, filteredHouses}}>
            {children}
        </Estates.Provider>
    )
}