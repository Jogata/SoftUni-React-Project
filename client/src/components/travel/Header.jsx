import { useContext } from "react"
import { CoinContext } from "../../contexts/AuthContext"

export function Navigation() {
  return (
    <>
        <div className="navigation">
            <div className="nav-logo">
                <h2 className="logo">Crypto Check</h2>
            </div>
            <div className="nav-list">
                <ul>
                    <li>Home</li>
                    <li>Feature</li>
                    <li>Pricing</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className="nav-button">
                <button>Sign Up</button>
            </div>
        </div>
    </>
  )
}

export function CoinTable() {
    const { coins } = useContext(CoinContext);

    return (
        <div>
            <div className="coin-table">
                <div className="hero-container">
                    <div className="hero">
                        <h1>Your Gateway to the Latest Crypto Price Trends</h1>
                        <p>
                            Get real-time insights on Bitcoin, Ethereum and
                            altcoins. Analyze trends, make informed decisions
                            and take control of your investments with ease.
                        </p>
                        <form>
                            <input type="search" name="search" id="search" placeholder="Search crypto" required />
                            <button type="submit">Search</button>
                        </form>
                    </div>
                </div>
                <div className="crypto-table">
                    <div className="table-layout">
                        <p>Rank</p>
                        <p>Coin</p>
                        <p>Symbol</p>
                        <p>Current Price</p>
                        <p>Price Change</p>
                        <p>Market Cap</p>
                    </div>
                    {
                        coins.map(coin => {
                            const classes = coin.price_change_percentage_24h >= 0 ? "green" : "red";
                            return (
                                <div className="table-layout" key={coin.id}>
                                    <p>{coin.market_cap_rank}</p>
                                    <div>
                                        <img src={coin.image} alt="" />
                                        <p>{coin.name}</p>
                                    </div>
                                    <p className="symbol">{coin.symbol}</p>
                                    <p>{coin.current_price}</p>
                                    <p className={classes}>{coin.price_change_percentage_24h}</p>
                                    <p>{coin.market_cap}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

// export function Header() {
//     return (
//         <header>
//             <img src="https://raw.githubusercontent.com/scrimba/learn-react/refs/heads/main/02.%20Data-Driven%20React/01.%20Section%202%20Intro/images/globe.png" alt="" />
//             <h1>my travel journal.</h1>
//         </header>
//     )
// }