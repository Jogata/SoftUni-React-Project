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
                <div className="crypto-table"></div>
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