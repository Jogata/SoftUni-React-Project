import { useEffect, useState } from "react";
import "./coins.css";
import { Coin } from "./Coin";

export function Coins() {
    const [coins, setCoins] = useState([]);

    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false";

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
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
            {/* <div onClick={e => console.log(e.currentTarget)}> */}
            <div>
                <div className="heading">
                    <p>#</p>
                    <p className="coin-name">Coin</p>
                    <p>Price</p>
                    <p>24h</p>
                    <p className="hide-mobile">Volume</p>
                    <p className="hide-mobile">Mkt Cap</p>
                </div>

                {coins.map(coin => (
                    <Coin key={coin.id} coin={coin} />
                ))}

            </div>
        </div>
    )
}