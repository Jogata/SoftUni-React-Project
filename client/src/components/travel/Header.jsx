import { useRef } from "react";
import { useState, useEffect } from "react";

// ====================================== Challenge 5: Implement a staggering movement ========================================

function usePointerPosition() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        function handleMove(e) {
            setPosition({ x: e.clientX, y: e.clientY });
        }

        window.addEventListener("pointermove", handleMove);

        return () => window.removeEventListener("pointermove", handleMove);
    }, []);

    return position;
}

function useDelayedValue(value, delay) {
    const [newvalue, setValue] = useState({x: 0, y: 0});

    useEffect(() => {
        const id = setTimeout(() => {
            setValue(value);
        }, delay);

        // return clearInterval(id);
    }, [value, delay]);

    return newvalue;
}

export function Canvas() {
    const pos1 = usePointerPosition();
    const pos2 = useDelayedValue(pos1, 100);
    const pos3 = useDelayedValue(pos2, 200);
    const pos4 = useDelayedValue(pos3, 100);
    const pos5 = useDelayedValue(pos3, 50);

    return (
        <>
            <h1>1960</h1>
            {/* <Dot position={pos1} opacity={1} /> */}
            {/* <Dot position={pos2} opacity={0.8} /> */}
            {/* <Dot position={pos3} opacity={0.6} /> */}
            {/* <Dot position={pos4} opacity={0.4} /> */}
            {/* <Dot position={pos5} opacity={0.2} /> */}
        </>
    );
}

function Dot({ position, opacity }) {
    return (
        <div style={{
            position: "absolute",
            left: -20,
            top: -20,
            width: 40,
            height: 40,
            borderRadius: "50%",
            backgroundColor: "pink",
            transform: `translate(${position.x}px, ${position.y}px)`,
            opacity: opacity,
            pointerEvents: "none"
        }} />
    );
}


// export function Header() {
//     return (
//         <header>
//             <img src="https://raw.githubusercontent.com/scrimba/learn-react/refs/heads/main/02.%20Data-Driven%20React/01.%20Section%202%20Intro/images/globe.png" alt="" />
//             <h1>my travel journal.</h1>
//         </header>
//     )
// }