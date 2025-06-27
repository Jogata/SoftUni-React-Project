import { useEffect, useState } from "react";
import "./coins.css";

export function Coins() {
    const [coins, setCoins] = useState([]);

    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false";

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            // .then(data => console.log(data))
            // .then(data => setCoins(data))
            .then(data => {
                setTimeout(() => {
                    setCoins(data);
                }, 10000);        
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    if (coins.length == 0) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="container">
            <div>
                <div className="heading">
                    <p>#</p>
                    <p className="coin-name">Coin</p>
                    <p>Price</p>
                    <p>24h</p>
                    <p className="hide-mobile">Volume</p>
                    <p className="hide-mobile">Mkt Cap</p>
                </div>

                <div className="coin-row">
                    <p>{coins[0].market_cap_rank}</p>
                    <div className="img-symbol">
                        <img src={coins[0].image} alt="" />
                        <p>{coins[0].symbol.toUpperCase()}</p>
                    </div>
                    <p>${coins[0].current_price.toLocaleString()}</p>
                    <p>{coins[0].price_change_percentage_24h.toFixed(2)}%</p>
                    <p className="hide-mobile">${coins[0].total_volume.toLocaleString()}</p>
                    <p className="hide-mobile">${coins[0].market_cap.toLocaleString()}</p>
                </div>

                <div className="coin-row">
                    <p>{coins[1].market_cap_rank}</p>
                    <div className="img-symbol">
                        <img src={coins[1].image} alt="" />
                        <p>{coins[1].symbol.toUpperCase()}</p>
                    </div>
                    <p>${coins[1].current_price.toLocaleString()}</p>
                    <p>{coins[1].price_change_percentage_24h.toFixed(2)}%</p>
                    <p className="hide-mobile">${coins[1].total_volume.toLocaleString()}</p>
                    <p className="hide-mobile">${coins[1].market_cap.toLocaleString()}</p>
                </div>

                <div className="coin-row">
                    <p>{coins[2].market_cap_rank}</p>
                    <div className="img-symbol">
                        <img src={coins[2].image} alt="" />
                        <p>{coins[2].symbol.toUpperCase()}</p>
                    </div>
                    <p>${coins[2].current_price.toLocaleString()}</p>
                    <p>{coins[2].price_change_percentage_24h.toFixed(2)}%</p>
                    <p className="hide-mobile">${coins[2].total_volume.toLocaleString()}</p>
                    <p className="hide-mobile">${coins[2].market_cap.toLocaleString()}</p>
                </div>

            </div>
        </div>
    )
}