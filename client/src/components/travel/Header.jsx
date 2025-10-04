import { useContext, useState } from "react";
import { CoinContext } from "../../contexts/AuthContext";

export function Navigation() {
    return (
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
    )
}

export function CoinTable() {
    return (
        <div>
            <div className="coin-table">
                <Hero />
                <Table />
            </div>
        </div>
    )
}

function Hero() {
    return (
        <div className="hero-container">
            <div className="hero">
                <h1>Your Gateway to the Latest Crypto Price Trends</h1>
                <p>
                    Get real-time insights on Bitcoin, Ethereum and
                    altcoins. Analyze trends, make informed decisions
                    and take control of your investments with ease.
                </p>
                <SearchForm />
            </div>
        </div>
    )
}

function SearchForm() {
    const { setQuery } = useContext(CoinContext);

    function handleSubmit(e) {
        e.preventDefault();
        const q = new FormData(e.target).get("search");
        setQuery(q);
    }

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <Input />
            <button type="submit">Search</button>
        </form>
    )
}

function Input() {
    const [ value, setValue ] = useState("");

    return (
        <input 
            type="search" 
            name="search" 
            id="search" 
            value={value} 
            onChange={e => setValue(e.target.value)} 
            placeholder="Search crypto" 
        />
    )
}

function Table() {
    const { coins, query } = useContext(CoinContext);

    let filtered = coins;

    if (query.length > 0) {
        filtered = coins.filter(
            coin => (
                coin.name
                    .toLowerCase()
                    .includes(query.toLowerCase())
            )
        );
    }

    if (coins.length == 0) {
        return (
            <div style={{paddingBottom: "10rem"}}>
                <Loader />
            </div>
        )
    }

    return (
        <div className="crypto-table">
            <div className="table-layout">
                <p>Rank</p>
                <p>Coin</p>
                <p>Symbol</p>
                <p>Current Price</p>
                <p>Price Change</p>
                <p className="market-cap">Market Cap</p>
            </div>
            {
                filtered.map(coin => {
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
                            <p className="market-cap">${coin.market_cap.toLocaleString()}USD</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export function Footer() {
    return (
        <div className="footer">
            <p>Copyright &copy; 2025 CryptoCheck. All Righs Reserved</p>
        </div>
    )
}

function Loader() {
    return (
        <div className="loader">
            <span className="logo-ring"></span>
            <span className="logo-ring"></span>
            <span className="logo-ring"></span>
            <span className="logo-ring"></span>
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