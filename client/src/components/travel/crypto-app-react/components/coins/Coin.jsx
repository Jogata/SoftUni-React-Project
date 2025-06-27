import { useRef } from "react";
import { Link } from "react-router-dom";

export function Coin({coin}) {
    const link = useRef();

    return (
        <div className="coin-row" onClick={() => link.current.click()}>
            <Link to={`/coins/${coin.id}`} ref={link}>open a detailed page about {coin.name}</Link>
            <p>{coin.market_cap_rank}</p>
            <div className="img-symbol">
                <img src={coin.image} alt="" />
                <p>{coin.symbol.toUpperCase()}</p>
            </div>
            <p>${coin.current_price.toLocaleString()}</p>
            <p>{coin.price_change_percentage_24h.toFixed(2)}%</p>
            <p className="hide-mobile">${coin.total_volume.toLocaleString()}</p>
            <p className="hide-mobile">${coin.market_cap.toLocaleString()}</p>
        </div>
    )
}