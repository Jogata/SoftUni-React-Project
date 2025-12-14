import { useState } from "react";

function Counter({ render }) {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    return ( 
        <div className="test-section">
            {render(count)}
            <button onClick={increment}>Increment</button>
        </div>
    );
}

export function TestCounterRenderProp() {
    return (
        <Counter render={(count) => <p>The current count is: {count}</p>} />
    );
};

function MouseTracker({ render }) {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    function handleMouseMove(event) {
        setPosition({
            x: event.clientX,
            y: event.clientY,
        });
    };

    return ( 
        <div onMouseMove={handleMouseMove} style={{ minHeight: "100vh" }}>
            {render(position)}
        </div>
    );
} 

export function TestMouseTrackerRenderProp() {
    return (
        <MouseTracker
            render={(position) => (
                <p>
                    Mouse is at ({position.x}, {position.y})
                </p>
            )}
        />
    );
};

// export function Header() {
//     return (
//         <header>
//             <img src="https://raw.githubusercontent.com/scrimba/learn-react/refs/heads/main/02.%20Data-Driven%20React/01.%20Section%202%20Intro/images/globe.png" alt="" />
//             <h1>my travel journal.</h1>
//         </header>
//     )
// }