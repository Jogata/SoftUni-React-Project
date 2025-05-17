import "./best.css";
import Apt1 from "../../images/apt1.jpeg";
import Apt2 from "../../images/apt2.jpeg";
import Apt3 from "../../images/apt3.jpeg";

export function Best() {
    return (
        <div className="best">
            <h1>Find Best Rated Properties</h1>
            <div>
                <p><span className="bold">All</span></p>
                <p>Commercial</p>
                <p>Residential</p>
                <p>Agricultural</p>
            </div>
            <div className="container">
                <img src={Apt1} alt="" />
                <img src={Apt2} alt="" />
                <img src={Apt3} alt="" />
            </div>
            <button className="btn">View All</button>
        </div>
    )
}