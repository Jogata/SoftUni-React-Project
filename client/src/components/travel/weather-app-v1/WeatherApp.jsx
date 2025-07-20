import { useState } from "react";
import "./styles.css";

export function WeatherApp() {
    const [data, setData] = useState([]);
    const [location, setLocation] = useState("");

    const searchLocation = (e) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=7b17a5afbdd511635fa5708bc0b31451`;

        if (e.key === 'Enter') {
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
