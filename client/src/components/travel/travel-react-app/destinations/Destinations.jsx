import "./destinations.css";

import BoraBora1 from "../assets/borabora1.jpg";
import BoraBora2 from "../assets/borabora2.jpg";
import Maldives1 from "../assets/maldives1.jpg";
import Maldives2 from "../assets/maldives2.jpg";
import KeyWest from "../assets/keywest.jpg";

export function Destinations() {
    return (
        <div name="destinations" className="destinations">
            <div className="container">
                <h1>All-Inclusive Resorts</h1>
                <p>On the Caribbean"s Best Beaches</p>
                <div className="img-container">
                    <img className="main-img" src={BoraBora1} alt="/" />
                    <img src={BoraBora2} alt="/" />
                    <img src={Maldives1} alt="/" />
                    <img src={Maldives2} alt="/" />
                    <img src={KeyWest} alt="/" />
                </div>
            </div>
        </div>
    )
}