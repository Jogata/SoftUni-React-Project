import { useContext, useState } from "react";
import { Estates } from "../context/Estates";

export function Search() {
    // const {homes, country, setCountry, property, setProperty, price, setPrice, filteredHouses, handleSearch} = useContext(Estates);
    const {handleSearch} = useContext(Estates);
    const [country, setCountry] = useState("default");
    const [property, setProperty] = useState("default");
    const [price, setPrice] = useState("default");

    return (
        <div className="search-bar">
            <div className="form">
                <div className="field">
                    <i className="ri-map-pin-2-fill"></i>
                    <div className="options">
                        <p>Location (any)</p>
                        <select 
                            value={country} 
                            onChange={(e) => setCountry(e.target.value)} 
                            name="country" 
                            id="country"
                        >
                            <option value="default">Select your place</option>
                            <option value="USA">USA</option>
                            <option value="Canada">Canada</option>
                            <option value="UK">UK</option>
                        </select>
                    </div>
                </div>
                <div className="field">
                    <i className="fa fa-home"></i>
                    <div className="options">
                        <p>Property type (any)</p>
                        <select 
                            value={property} 
                            onChange={(e) => setProperty(e.target.value)} 
                            name="property" 
                            id="property"
                        >
                            <option value="default">Select your place</option>
                            <option value="Apartment">Apartment</option>
                            <option value="Villa">Villa</option>
                            <option value="House">House</option>
                        </select>
                    </div>
                </div>
                <div className="field">
                    <i className="fa fa-usd"></i>
                    <div className="options">
                        <p>Price range (any)</p>
                        <select 
                            value={price} 
                            onChange={(e) => setPrice(e.target.value)} 
                            name="price" 
                            id="price"
                        >
                            <option value="default">Select price range</option>
                            <option value="0-200000">0-200000</option>
                            <option value="200001-300000">200001-300000</option>
                            <option value="300001-400000">300001-400000</option>
                        </select>
                    </div>
                </div>
                <button onClick={() => handleSearch(country, property, price)}>
                    search
                    <i className="ri-search-line"></i>
                </button>
            </div>
        </div>
    )
}