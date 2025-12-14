import { useEffect, useState } from "react";

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

// ============================================================================

function DataFetcher({ url, render }) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        setError(null);
        fetch(url)
            .then((response) => response.json())
            .then(data => {
                for (let index = 0; index < 1000000000; index++) {
                    const element = index;
                }
                // setTimeout(() => {
                //     console.log("timeout");
                // }, 3000);
                return data;
            })
            .then((data) => {
                setData(data);
                // setIsLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                // setIsLoading(false);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, [url]);

    return render(data, isLoading, error);
}

function Users() {
    return (
        <DataFetcher
            url="https://jsonplaceholder.typicode.com/users"
            render={(data, isLoading, error) => {
                if (isLoading) return <div>Loading...</div>;
                if (error) return <div>Error: {error}</div>;

                return (
                    <ul className="bulled">
                        {data?.map((user) => (
                            <li key={user.id}>{user.name}</li>
                        ))}
                    </ul>
                );
            }}
        />
    );
}

export function TestUsersRenderProps() {
    return (
        <div className="test-section">
            <Users />
        </div>
    )
}

// export function Header() {
//     return (
//         <header>
//             <img src="https://raw.githubusercontent.com/scrimba/learn-react/refs/heads/main/02.%20Data-Driven%20React/01.%20Section%202%20Intro/images/globe.png" alt="" />
//             <h1>my travel journal.</h1>
//         </header>
//     )
// }