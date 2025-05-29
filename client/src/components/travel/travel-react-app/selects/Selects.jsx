import "./selects.css";

import BoraBora1 from "../assets/borabora1.jpg";
import BoraBora2 from "../assets/borabora2.jpg";
import Maldives1 from "../assets/maldives1.jpg";
import Maldives2 from "../assets/maldives2.jpg";
import Maldives3 from "../assets/maldives3.jpg";
import KeyWest from "../assets/keywest.jpg";

import { Image } from "./Images";

export function Selects() {
    return (
        <div id="views" className="selects">
            <div className="container">
                <Image bgImg={BoraBora1} text='Bora Bora' />
                <Image bgImg={BoraBora2} text='Emerald Bay' />
                <Image bgImg={Maldives1} text='Maldives' />
                <Image bgImg={Maldives2} text='Grenada' />
                <Image bgImg={Maldives3} text='Barbados' />
                <Image bgImg={KeyWest} text='Key West' />
            </div>
        </div>
    )
}