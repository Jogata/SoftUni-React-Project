import "./recommended.css";

export function Recommended({ filterByBrand }) {
    return (
        <div className="recommended">
            <h2 className="recommended-title">Recommended</h2>
            <div className="recommended-flex">
                <button
                    className="btn"
                    value="all"
                    onClick={e => filterByBrand(e.target.value)}
                >All
                </button>
                <button
                    className="btn"
                    value="Nike"
                    onClick={e => filterByBrand(e.target.value)}
                >Nike
                </button>
                <button
                    className="btn"
                    value="Adidas"
                    onClick={e => filterByBrand(e.target.value)}
                >Adidas
                </button>
                <button
                    className="btn"
                    value="Puma"
                    onClick={e => filterByBrand(e.target.value)}
                >Puma
                </button>
                <button
                    className="btn"
                    value="Vans"
                    onClick={e => filterByBrand(e.target.value)}
                >Vans
                </button>
            </div>
        </div>
    );
};