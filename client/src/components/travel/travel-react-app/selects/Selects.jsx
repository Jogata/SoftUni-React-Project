import "./selects.css";

import BoraBora1 from "../assets/borabora1.jpg";
import BoraBora2 from "../assets/borabora2.jpg";
import Maldives1 from "../assets/maldives1.jpg";
import Maldives2 from "../assets/maldives2.jpg";
import Maldives3 from "../assets/maldives3.jpg";
import KeyWest from "../assets/keywest.jpg";

export function Selects() {
    return (
        <div id="views" className="selects">
            <div className="container">
                <img src={BoraBora1} alt="Bora Bora" />
                <img src={BoraBora2} alt="Emerald Bay" />
                <img src={Maldives1} alt="Maldives" />
                <img src={Maldives2} alt="Grenada" />
                <img src={Maldives3} alt="Barbados" />
                <img src={KeyWest} alt="Key West" />
            </div>

        </div>
    )
}