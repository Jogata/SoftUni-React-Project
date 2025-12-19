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
            }}
        >
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

export function Accordion2() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div
            className="test-section"
            style={{
                maxWidth: "900px",
                margin: "auto",
                textAlign: "center"
            }}
        >
            <h2>Almaty, Kazakhstan</h2>
            <Panel2
                title="About"
                isActive={activeIndex === 0}
                onShow={() => setActiveIndex(0)}
            >
                With a population of about 2 million, Almaty is Kazakhstan's
                largest city. From 1929 to 1997, it was its capital city.
            </Panel2>
            <Panel2
                title="Etymology"
                isActive={activeIndex === 1}
                onShow={() => setActiveIndex(1)}
            >
                The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for
                "apple" and is often translated as "full of apples". In fact, the region
                surrounding Almaty is thought to be the ancestral home of the apple, and
                the wild <i lang="la">Malus sieversii</i> is considered a likely candidate
                for the ancestor of the modern domestic apple.
            </Panel2>
        </div>
    );
}

function Panel2({
    title,
    children,
    isActive,
    onShow
}) {
    return (
        <section className="test-section">
            <h3>{title}</h3>
            {isActive ? (
                <p>{children}</p>
            ) : (
                <button onClick={onShow}>
                    Show
                </button>
            )}
        </section>
    );
}

// ====================================== Challenge 1: Synced inputs ======================================

export function SyncedInputs() {
    const [text, setText] = useState("");

    function handleChange(e) {
        setText(e.target.value);
    }

    return (
        <div className="test-section">
            <Input
                label="First input"
                text={text}
                onChange={handleChange}
            />
            <Input
                label="Second input"
                text={text}
                onChange={handleChange}
            />
        </div>
    );
}

function Input({ label, text, onChange }) {
    // const [text, setText] = useState("");

    // function handleChange(e) {
    //     setText(e.target.value);
    // }

    return (
        <label>
            {label}
            {" "}
            <input
                value={text}
                onChange={onChange}
            />
        </label>
    );
}

// ================================== Challenge 2: Filtering a list ==================================

function filterItems(items, query) {
    query = query.toLowerCase();
    return items.filter(item =>
        item.name.split(" ").some(word =>
            word.toLowerCase().startsWith(query)
        )
    );
}

const foods = [{
    id: 0,
    name: "Sushi",
    description: "Sushi is a traditional Japanese dish of prepared vinegared rice"
},
{
    id: 1,
    name: "Dal",
    description: "The most common way of preparing dal is in the form of a soup to which onions, tomatoes and various spices may be added"
},
{
    id: 2,
    name: "Pierogi",
    description: "Pierogi are filled dumplings made by wrapping unleavened dough around a savoury or sweet filling and cooking in boiling water"
},
{
    id: 3,
    name: "Shish kebab",
    description: "Shish kebab is a popular meal of skewered and grilled cubes of meat."
},
{
    id: 4,
    name: "Dim sum",
    description: "Dim sum is a large range of small dishes that Cantonese people traditionally enjoy in restaurants for breakfast and lunch"
}];

export function FilterableList() {
    const [query, setQuery] = useState("");

    function handleChange(e) {
        setQuery(e.target.value);
    }

    let filtered = foods;

    if (query.trim().length > 0) {
        filtered = filterItems(foods, query);
    }

    return (
        <div className="test-section">
            <SearchBar query={query} handleChange={handleChange} />
            <hr />
            <List items={filtered} />
        </div>
    );
}

function SearchBar({ query, handleChange }) {
    //   const [query, setQuery] = useState("");

    //   function handleChange(e) {
    //     setQuery(e.target.value);
    //   }

    return (
        <label>
            Search:{" "}
            <input
                value={query}
                onChange={handleChange}
            />
        </label>
    );
}

function List({ items }) {
    return (
        <table>
            <tbody>
                {items.map(food => (
                    <tr key={food.id}>
                        <td>{food.name}</td>
                        <td>{food.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

// ============================================================================

export const RaceCondition = () => {
    const [id, setId] = useState(1);
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    console.log("race");

    useEffect(() => {
        let rc = false;

        const handleFetch = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const res = await fetch(
                    `https://jsonplaceholder.typicode.com/todos/${id}`
                );

                if (rc) return;

                if (!res.ok) {
                    throw new Error(`Error fetching data: ${res.statusText}`);
                }

                const result = await res.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        handleFetch();

        return () => {
            console.log("clean-up");
            rc = true;
        };
    }, [id]);

    return (
        <div className="test-section">
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}
            {data && !isLoading && <h1>{JSON.stringify(data)}</h1>}
            <button
                style={{ padding: "1rem 2rem" }}
                onClick={() => setId((prevId) => prevId + 1)}
            >
                Next
            </button>
        </div>
    );
};

// ============================================================================

export function Counters() {
    const [showB, setShowB] = useState(true);

    return (
        <div className="test-section">
            <Counter1 />
            {showB && <Counter1 />}
            <label>
                <input
                    type="checkbox"
                    checked={showB}
                    onChange={e => {
                        setShowB(e.target.checked)
                    }}
                />
                Render the second counter
            </label>
        </div>
    );
}

function Counter1() {
    const [score, setScore] = useState(0);
    const [hover, setHover] = useState(false);

    let className = "counter";

    if (hover) {
        className = "counter hover";
    }

    return (
        <div
            className={className}
            onPointerEnter={() => setHover(true)}
            onPointerLeave={() => setHover(false)}
        >
            <h1>{score}</h1>
            <button onClick={() => setScore(score + 1)}>
                Add one
            </button>
        </div>
    );
}

// ============================================================================

export function FancyCounter() {
    const [isFancy, setIsFancy] = useState(false);

    return (
        <div className="test-section">
            {isFancy ? (
                <Counter2 isFancy={true} />
            ) : (
                <Counter2 isFancy={false} />
            )}
            <label>
                <input
                    type="checkbox"
                    checked={isFancy}
                    onChange={e => {
                        setIsFancy(e.target.checked)
                    }}
                />
                Use fancy styling
            </label>
        </div>
    );
}

function Counter2({ isFancy }) {
    const [score, setScore] = useState(0);
    const [hover, setHover] = useState(false);

    let className = "counter";
    if (hover) {
        className += " hover";
    }
    if (isFancy) {
        className += " fancy";
    }

    return (
        <div
            className={className}
            onPointerEnter={() => setHover(true)}
            onPointerLeave={() => setHover(false)}
        >
            <h1>{score}</h1>
            <button onClick={() => setScore(score + 1)}>
                Add one
            </button>
        </div>
    );
}

// ============================================================================

export function FancyCounter2() {
    const [isFancy, setIsFancy] = useState(false);

    if (isFancy) {
        return (
            <div className="test-section">
                <Counter3 isFancy={true} />
                <label>
                    <input
                        type="checkbox"
                        checked={isFancy}
                        onChange={e => {
                            setIsFancy(e.target.checked)
                        }}
                    />
                    Use fancy styling
                </label>
            </div>
        );
    }

    return (
        <div className="test-section">
            <Counter3 isFancy={false} />
            <label>
                <input
                    type="checkbox"
                    checked={isFancy}
                    onChange={e => {
                        setIsFancy(e.target.checked)
                    }}
                />
                Use fancy styling
            </label>
        </div>
    );
}

function Counter3({ isFancy }) {
    const [score, setScore] = useState(0);
    const [hover, setHover] = useState(false);

    let className = "counter";
    if (hover) {
        className += " hover";
    }
    if (isFancy) {
        className += " fancy";
    }

    return (
        <div
            className={className}
            onPointerEnter={() => setHover(true)}
            onPointerLeave={() => setHover(false)}
        >
            <h1>{score}</h1>
            <button onClick={() => setScore(score + 1)}>
                Add one
            </button>
        </div>
    );
}

// ============================================================================

export function FancyCounter3() {
    const [isFancy, setIsFancy] = useState(false);

    return (
        <div className="test-section">
            {isFancy && <Counter5 isFancy={false} />}
            <Counter5 isFancy={false} />
            <label>
                <input
                    type="checkbox"
                    checked={isFancy}
                    onChange={e => {
                        setIsFancy(e.target.checked)
                    }}
                />
                Use fancy styling
            </label>
        </div>
    );
}

function Counter5({ isFancy }) {
    const [score, setScore] = useState(0);
    const [hover, setHover] = useState(false);

    let className = "counter";

    if (hover) {
        className += " hover";
    }

    if (isFancy) {
        className += " fancy";
    }

    return (
        <div
            className={className}
            onPointerEnter={() => setHover(true)}
            onPointerLeave={() => setHover(false)}
        >
            <h1>{score}</h1>
            <button onClick={() => setScore(score + 1)}>
                Add one
            </button>
        </div>
    );
}

// ============================================================================

export function ResetingCounter() {
    const [isPaused, setIsPaused] = useState(false);

    return (
        <div className="test-section">
            {isPaused ? (
                <p>See you later!</p>
            ) : (
                <Counter4 />
            )}
            <label>
                <input
                    type="checkbox"
                    checked={isPaused}
                    onChange={e => {
                        setIsPaused(e.target.checked)
                    }}
                />
                Take a break
            </label>
        </div>
    );
}

function Counter4() {
    const [score, setScore] = useState(0);
    const [hover, setHover] = useState(false);

    let className = "counter";

    if (hover) {
        className += " hover";
    }

    return (
        <div
            className={className}
            onPointerEnter={() => setHover(true)}
            onPointerLeave={() => setHover(false)}
        >
            <h1>{score}</h1>
            <button onClick={() => setScore(score + 1)}>
                Add one
            </button>
        </div>
    );
}

// ============================================================================

export function ResetingCounter2() {
    const [isFancy, setIsFancy] = useState(false);

    return (
        <div className="test-section">
            {isFancy ? (
                <div>
                    <Counter6 isFancy={true} />
                </div>
            ) : (
                <section>
                    <Counter6 isFancy={false} />
                </section>
            )}
            <label>
                <input
                    type="checkbox"
                    checked={isFancy}
                    onChange={e => {
                        setIsFancy(e.target.checked)
                    }}
                />
                Use fancy styling
            </label>
        </div>
    );
}

function Counter6({ isFancy }) {
    const [score, setScore] = useState(0);
    const [hover, setHover] = useState(false);

    let className = "counter";

    if (hover) {
        className += " hover";
    }

    if (isFancy) {
        className += " fancy";
    }

    return (
        <div
            className={className}
            onPointerEnter={() => setHover(true)}
            onPointerLeave={() => setHover(false)}
        >
            <h1>{score}</h1>
            <button onClick={() => setScore(score + 1)}>
                Add one
            </button>
        </div>
    );
}

// ============================================================================

export function ResetingCounter3() {
    const [isFancy, setIsFancy] = useState(false);

    return (
        <div className="test-section">
            {isFancy && <p>See you later!</p>}
                {/* <div> */}
                    {/* <Counter6 isFancy={true} /> */}
                {/* </div> */}
            {/* ) : ( */}
                {/* <section> */}
                    <Counter7 isFancy={false} />
                {/* </section> */}
            {/* )} */}
            <label>
                <input
                    type="checkbox"
                    checked={isFancy}
                    onChange={e => {
                        setIsFancy(e.target.checked)
                    }}
                />
                Use fancy styling
            </label>
        </div>
    );
}

function Counter7({ isFancy }) {
    const [score, setScore] = useState(0);
    const [hover, setHover] = useState(false);

    let className = "counter";

    if (hover) {
        className += " hover";
    }

    if (isFancy) {
        className += " fancy";
    }

    return (
        <div
            className={className}
            onPointerEnter={() => setHover(true)}
            onPointerLeave={() => setHover(false)}
        >
            <h1>{score}</h1>
            <button onClick={() => setScore(score + 1)}>
                Add one
            </button>
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