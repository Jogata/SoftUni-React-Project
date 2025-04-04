import { createContext, useEffect, useState } from "react";
import { properties } from "../data";

export const Estates = createContext();

export function EstatesProvider({children}) {
    const [homes, setHomes] = useState(properties);

    const isDefault = (value) => value === "default";

    const [country, setCountry] = useState("default");
    const [property, setProperty] = useState("default");
    const [price, setPrice] = useState("default");
    const [filteredHouses, setFilteredHouses] = useState([]);

    function handleSearch() {
        const [minPrice, maxPrice] = price !== "default" ? price.split("-").map(Number) : [0, Infinity];

        const newHouses = homes.filter(house => {
            const housePrice = parseInt(house.price);

            if (
                house.country === country && 
                house.property === property && 
                house.price >= minPrice && 
                house.price <= maxPrice
            ) {
                return house;
            }
            
            if (
                isDefault(country) && 
                isDefault(property) && 
                isDefault(price)
            ) {
                return house;
            }

            if (
                !isDefault(country) && 
                isDefault(property) && 
                isDefault(price)
            ) {
                return house.country === country;
            }

            if (
                isDefault(country) && 
                !isDefault(property) && 
                isDefault(price)
            ) {
                return house.property === property;
            }

            if (
                isDefault(country) && 
                isDefault(property) && 
                !isDefault(price)
            ) {
                return house.price >= minPrice && house.price <= maxPrice;
            }

            if (
                !isDefault(country) && 
                !isDefault(property) && 
                isDefault(price)
            ) {
                return house.country === country && house.property === property;
            }

            if (
                !isDefault(country) && 
                isDefault(property) && 
                !isDefault(price)
            ) {
                return house.country === country && house.price >= minPrice && house.price <= maxPrice;
            }

            if (
                isDefault(country) && 
                !isDefault(property) && 
                !isDefault(price)
            ) {
                return house.property === property && house.price >= minPrice && house.price <= maxPrice;
            }

            return false;
        })

        setFilteredHouses(newHouses);
    }

    useEffect(() => {
        if (filteredHouses.length === 0) {
            setFilteredHouses(homes.slice(0, 6));
        }
    }, [homes, filteredHouses]);

    return (
        <Estates.Provider value={{homes, country, setCountry, property, setProperty, price, setPrice, handleSearch, filteredHouses}}>
            {children}
        </Estates.Provider>
    )
}