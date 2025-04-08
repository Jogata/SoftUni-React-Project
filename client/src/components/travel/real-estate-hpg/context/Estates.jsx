import { createContext, useEffect, useState } from "react";
import { properties } from "../data";

export const Estates = createContext();

export function EstatesProvider({children}) {
    const [homes, setHomes] = useState(properties);

    // const isDefault = (value) => value === "default";

    const [country, setCountry] = useState("default");
    const [property, setProperty] = useState("default");
    const [price, setPrice] = useState("default");
    const [filteredHouses, setFilteredHouses] = useState(properties);

    function handleSearch(country, property, prices) {
        // const [minPrice, maxPrice] = price !== "default" ? price.split("-").map(Number) : [0, Infinity];
        let allEstates = [...properties];

        // const newHouses = homes.filter(house => {
        //     const housePrice = parseInt(house.price);

        //     if (
        //         house.country === country && 
        //         house.property === property && 
        //         house.price >= minPrice && 
        //         house.price <= maxPrice
        //     ) {
        //         return house;
        //     }
            
        //     if (
        //         isDefault(country) && 
        //         isDefault(property) && 
        //         isDefault(price)
        //     ) {
        //         return house;
        //     }

        //     if (
        //         !isDefault(country) && 
        //         isDefault(property) && 
        //         isDefault(price)
        //     ) {
        //         return house.country === country;
        //     }

        //     if (
        //         isDefault(country) && 
        //         !isDefault(property) && 
        //         isDefault(price)
        //     ) {
        //         return house.property === property;
        //     }

        //     if (
        //         isDefault(country) && 
        //         isDefault(property) && 
        //         !isDefault(price)
        //     ) {
        //         return house.price >= minPrice && house.price <= maxPrice;
        //     }

        //     if (
        //         !isDefault(country) && 
        //         !isDefault(property) && 
        //         isDefault(price)
        //     ) {
        //         return house.country === country && house.property === property;
        //     }

        //     if (
        //         !isDefault(country) && 
        //         isDefault(property) && 
        //         !isDefault(price)
        //     ) {
        //         return house.country === country && house.price >= minPrice && house.price <= maxPrice;
        //     }

        //     if (
        //         isDefault(country) && 
        //         !isDefault(property) && 
        //         !isDefault(price)
        //     ) {
        //         return house.property === property && house.price >= minPrice && house.price <= maxPrice;
        //     }

        //     return false;
        // })

        if (country !== "default") {
            console.log(country);
            allEstates = allEstates.filter(estate => estate.country === country);
            // console.log(allEstates);
        }

        if (property !== "default") {
            console.log(property);
            allEstates = allEstates.filter(estate => estate.property === property);
            console.log(allEstates);
        }

        if (prices !== "default") {
            // console.log(prices);
            const [minPrice, maxPrice] = prices.split("-").map(Number);
            console.log(minPrice, maxPrice);
            // console.log(allEstates);
            allEstates = allEstates.filter(estate => Number(estate.price) >= minPrice && Number(estate.price) <= maxPrice);
            // console.log(allEstates);
        }

        // setFilteredHouses(newHouses);
        if (filteredHouses.length > 0) {
            setFilteredHouses(allEstates);
        } else {
            setFilteredHouses(homes.slice(0, 6));
        }
    }

    // useEffect(() => {
    //     if (filteredHouses.length === 0) {
    //         setFilteredHouses(homes.slice(0, 6));
    //     }
    // }, [homes, filteredHouses]);

    return (
        <Estates.Provider value={{handleSearch, filteredHouses}}>
            {children}
        </Estates.Provider>
    )
}