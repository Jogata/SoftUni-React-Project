import "./hero.css";

export function Hero() {
    return (
        <div className="hero">
            <div className="content">
                <h1>Find the perfect place</h1>
                <p className="search-text">
                    Search the largest selection of luxury high-rise 
                    apartments, multi-family homes, and luxury homes.
                    </p>
                <form className="search">
                    <div>
                        <input type="text" placeholder="Enter Keyword.." />
                    </div>
                    <div className="radio"> 
                        <input type="radio" defaultChecked />
                        <label>Buy</label>
                        <input type="radio"  />
                        <label>Rent</label>
                        <button type="submit">
                            <i className="fa fa-search icon"></i>
                            </button>
                    </div>
                </form>
            </div>
        </div>
    )
}