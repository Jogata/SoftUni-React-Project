import "./carousel.css";
import { useEffect, useState } from "react";

import BoraBora1 from "../assets/borabora1.jpg";
import BoraBora2 from "../assets/borabora2.jpg";
import Maldives1 from "../assets/maldives1.jpg";

// export function Carousel() {
//     const [index, setIndex] = useState(0);
//     const classes = ["slide active", "slide next", "slide prev"];
//     classes[index] = "slide active";
//     let next = index + 1;
//     next = next % 3;
//     classes[next] = "slide next";
//     let prev = index - 1;
//     prev = prev + 3;
//     prev = prev % 3;
//     classes[prev] = "slide prev";

//     function autoplay() {
//         let current = index + 1;
//         current = current % 3;
//         setIndex(current);
//     }

//     useEffect(() => {
//         const id = setTimeout(() => {
//             autoplay();
//         }, 5000);

//         return () => {
//             clearInterval(id);
//         }
//     })

//     return (
//         <div id="carousel" className="carousel">
//             <div className="carousel">
//                 <div className={classes[0]} id="relative">
//                     <img src={BoraBora1} alt="/" />
//                 </div>
//                 <div className={classes[1]}>
//                     <img src={BoraBora2} alt="/" />
//                 </div>
//                 <div className={classes[2]}>
//                     <img src={Maldives1} alt="/" />
//                 </div>
//             </div>
//         </div>
//     )
// }

export function Carousel() {
    const [index, setIndex] = useState(0);
    const classes = ["slide", "slide", "slide"];
    classes[index] = "slide active";

    function autoplay() {
        let current = index + 1;
        current = current % 3;
        setIndex(current);
    }

    useEffect(() => {
        const id = setTimeout(() => {
            autoplay();
        }, 5000);

        return () => {
            clearInterval(id);
        }
    })

    return (
        <div id="carousel" className="carousel">
            <div className="carousel">
                <div className={classes[0]} id="relative">
                    <img src={BoraBora1} alt="/" />
                </div>
                <div className={classes[1]}>
                    <img src={BoraBora2} alt="/" />
                </div>
                <div className={classes[2]}>
                    <img src={Maldives1} alt="/" />
                </div>
            </div>
        </div>
    )
}