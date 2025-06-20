import "./recommended.css";

export function Recommended() {
    return (
        <div className="recommended">
            <h2 className="recommended-title">Recommended</h2>
            <div className="recommended-flex">
                <button className="btn">All</button>
                <button className="btn">Nike</button>
                <button className="btn">Adidas</button>
                <button className="btn">Puma</button>
                <button className="btn">Vans</button>
            </div>
        </div>
    );
};