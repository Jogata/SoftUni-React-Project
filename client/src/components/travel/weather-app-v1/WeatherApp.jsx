import { useState } from "react";
import cloud from "./images/icons/cloud.png";
import clear from "./images/icons/clear.png";
import drizzle from "./images/icons/drizzle.png";
import rain from "./images/icons/rain.png";
import snow from "./images/icons/snow.png";
import "./styles.css";

export function WeatherApp() {
    const [data, setData] = useState([]);
    const [location, setLocation] = useState("");

    const searchLocation = (e) => {
        if (e.key === "Enter") {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=7b17a5afbdd511635fa5708bc0b31451`;
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    setData(data);
                });

            setLocation("");
        }

    }

    return (
        <div className="weather-app">
            <div className="search">
                <input 
                    type="text" 
                    value={location} 
                    onKeyDown={(e) => searchLocation(e)} 
                    onChange={event => setLocation(event.target.value)} 
                    // onSubmit={event => console.log(event)} 
                    placeholder="Enter Location" 
                />
            </div>

            {data.name ? <Location data={data} /> : null}

            {data.name ? <LocationInfo data={data} /> : null}
        </div>
    )
}

function Location({ data }) {
    // console.log(data);
    return (
        <div className="location">
            <h1>{data.name}</h1>
            <div className="temperature">
                {data.main ? <h2>{data.main.temp.toFixed()}&deg;F</h2> : null}
            </div>
            <div className="description">
                {data.weather ? <p>{data.weather[0].description}</p> : null}
            </div>
        </div>
    )
}

function LocationInfo({ data }) {
    // console.log(data);
    return (
        <div className="location-info">
            <div className="box">
                {data.sys ? <p>{data.sys.country}</p> : null}
                <p>Country</p>
            </div>
            <div className="box">
                {data.coord ? <p>{data.coord.lon}</p> : null}
                <p>Longitude</p>
            </div>
            <div className="box">
                {data.coord ? <p>{data.coord.lat}</p> : null}
                <p>Latitude</p>
            </div>
            <div className="box">
                {data.main ? <p>{data.main.feels_like.toFixed()}&deg;F</p> : null}
                <p>Feels</p>
            </div>
            <div className="box humidity">
                {data.main ? <p>{data.main.humidity}%</p> : null}
                <p>Humidity</p>
            </div>
            <div className="box wind">
                {data.wind ? <p>{data.wind.speed.toFixed()} mph</p> : null}
                <p>Wind Speed</p>
            </div>
        </div>
    )
}
