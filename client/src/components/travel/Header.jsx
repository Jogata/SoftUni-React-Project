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

// ============================================================================

export const WithoutTanstackQuery = () => {
    const [id, setId] = useState(1);
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const handleFetch = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const res = await fetch(
                    `https://jsonplaceholder.typicode.com/todos/${id}`
                );

                if (!res.ok) throw new Error(`Error fetching data: ${res.statusText}`);

                const result = await res.json();
                // console.log(result);
                setData(result);
            } catch (e) {
                setError(e.message);
            } finally {
                setIsLoading(false);
            }
        };

        handleFetch();
    }, [id]);

    return (
        <div className="test-section">
            {error && <h1>{error}</h1>}
            {/* {isLoading && <h1>Loading...</h1>} */}
            {/* {data && <pre>{JSON.stringify(data, null, 2)}</pre>} */}
            {isLoading ? (
                <h1>Loading next todo...</h1>
            ) : (
                <pre>{JSON.stringify(data, null, 2)}</pre>
            )}
            <button
                // style={{ padding: "20rem" }}
                onClick={() => setId((prevId) => prevId + 1)}
            >
                Next
            </button>
        </div>
    );
};


const fetchTodos = async (page = 1, limit = 10) => {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}`
    );
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json();
};

export const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const pageSize = 10;
    console.log(data);

    useEffect(() => {
        const handleFetch = async () => {
            // setIsLoading(true);
            console.log(isLoading);
            // setError(null);

            try {
                const result = await fetchTodos(currentPage, pageSize);
                // console.log(result);
                setData(result);
            } catch (e) {
                setError(e.message);
            } finally {
                setIsLoading(false);
            }
        };

        handleFetch();
    }, [currentPage])

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>An error occurred: {error.message}</div>;

    function handleNextPage() {
        setCurrentPage((prevPage) => prevPage + 1);
        setIsLoading(true);
        setError(null);
    };

    function handlePreviousPage() {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
        setIsLoading(true);
        setError(null);
    };

    return (
        <div className="test-section">
            <h1>Todos</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
            <div>
                <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                    Previous Page
                </button>
                <button onClick={handleNextPage}>Next Page</button>
            </div>
        </div>
    );
};

// ====================================== Challenge 3: Fix a crash ======================================

export function FeedbackForm() {
    const [isSent, setIsSent] = useState(false);
    const [message, setMessage] = useState("");

    if (isSent) {
        return <h1>Thank you!</h1>;
    } else {
        // const [message, setMessage] = useState("");

        return (
            <form onSubmit={e => {
                e.preventDefault();
                alert(`Sending: "${message}"`);
                setIsSent(true);
            }}>
                <textarea
                    placeholder="Message"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                />
                <br />
                <button type="submit">Send</button>
            </form>
        );
    }
}

// ================================== Challenge 4: Remove unnecessary state ==========================================

// export function GreetForm() {
//     const [name, setName] = useState("");

//     function handleClick() {
//         setName(prompt("What is your name?"));
//         alert(`Hello, ${name}!`);
//     }

//     return (
//         <button onClick={handleClick}>
//             Greet
//         </button>
//     );
// }

export function GreetForm() {
    function handleClick() {
        const name = prompt("What is your name?");
        alert(`Hello, ${name}!`);
    }

    return (
        <button onClick={handleClick}>
            Greet
        </button>
    );
}

// ============================================================================

function Panel({ title, children }) {
    const [isActive, setIsActive] = useState(false);

    return (
        <section className="test-section">
            <h3>{title}</h3>
            {isActive ? (
                <p>{children}</p>
            ) : (
                <button onClick={() => setIsActive(true)}>
                    Show
                </button>
            )}
        </section>
    );
}

export function Accordion() {
    return (
        <div 
            className="test-section" 
            style={{
                maxWidth: "900px", 
                margin: "auto", 
                textAlign: "center"
            }}>
            <h2>Almaty, Kazakhstan</h2>
            <Panel title="About">
                With a population of about 2 million, Almaty is Kazakhstan's
                largest city. From 1929 to 1997, it was its capital city.
            </Panel>
            <Panel title="Etymology">
                The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for
                "apple" and is often translated as "full of apples". In fact, the region
                surrounding Almaty is thought to be the ancestral home of the apple, and
                the wild <i lang="la">Malus sieversii</i> is considered a likely candidate
                for the ancestor of the modern domestic apple.
            </Panel>
        </div>
    );
}

// ============================================================================


// export function Header() {
//     return (
//         <header>
//             <img src="https://raw.githubusercontent.com/scrimba/learn-react/refs/heads/main/02.%20Data-Driven%20React/01.%20Section%202%20Intro/images/globe.png" alt="" />
//             <h1>my travel journal.</h1>
//         </header>
//     )
// }