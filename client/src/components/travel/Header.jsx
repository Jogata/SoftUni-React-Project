import { useEffect, useLayoutEffect, useRef, useState } from "react";

function useForm(initialValues) {
    const [values, setValues] = useState(initialValues);

    function handleChange(e) {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    function handleSubmit(e) {
        e.preventDefault();
        console.log(values);
    };

    return { values, handleChange, handleSubmit };
};

export function TestForm() {
    const { values, handleChange, handleSubmit } = useForm({
        username: "",
        email: "",
    });

    return ( 
        <div className="test-section">
            <h2>Form Handling Example</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    placeholder="Username"
                />
                <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
                <button type="submit" style={{color: "#fff"}}>
                    Submit
                </button>
            </form>
        </div>
    ) 
} 

export function Test({init}) {
    console.log(init);
    const value = useRef(init);

    return ( 
        <h1>{value.current}</h1>
    ) 
} 

export function Test1({rer}) {
    // const value = init;
    const [num, setNum] = useState(0);
    const old = useRef(null);
    console.log(old.current);

    useEffect(() => {
        console.log("ref effect");
        old.current = num;
    }, [num])

    document.addEventListener("DOMContentLoaded", () => {
        console.log("DOMContentLoaded");
    })

    useLayoutEffect(() => {
        console.log("use lay effect");
    })

    return ( 
        <>
            <h1>{num}</h1>
            <button onClick={() => {
                // old.current = num;
                setNum(num + 1);
            }
            }>
                rer test1
            </button>
            <button onClick={() => rer(old => old + 1)}>rer app</button>
            <Inner />
        </>
    ) 
} 

function Inner(props) {
    console.log(props);
    useEffect(() => {
        console.log("inner effect");
    }, [props])

    useLayoutEffect(() => {
        console.log("use lay inner effect");
    })

    return <h1>Inner</h1>
}


function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        console.log("debounce effect");
        const id = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(id);
        };
    }, [value, delay]);

    return debouncedValue;
};

function usePrevious(value) {
    console.log("previous effect");

    const ref = useRef();

    useEffect(() => {
        ref.current = value;
    }, [value]);

    return ref.current;
};

export function TestDebounce() {
    const [inputValue, setInputValue] = useState("");
    const debouncedInput = useDebounce(inputValue, 5000);
  
    const previousValue = usePrevious(inputValue);
  
    function handleInputChange(e) {
      setInputValue(e.target.value);
    };

    return (
        <div className="test-section">
            <div>
                <h2>Debounced Input Example</h2>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Type to debounce"
                />
                <p>Debounced Value: {debouncedInput}</p>
                <p>Previous Value: {previousValue}</p>
            </div>
        </div>
    )
}

let localStorage = "";

function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            //   const item = window.localStorage.getItem(key);
            //   return item ? JSON.parse(item) : initialValue;
            const item = localStorage;
            return item ? item : initialValue;
        } catch (error) {
            console.error(error);
            return initialValue;
        }
    });

    function setValue(value) {
        try {
            setStoredValue(value);
            //   window.localStorage.setItem(key, JSON.stringify(value));
            localStorage = value;
        } catch (error) {
            console.error(error);
        }
    };

    return [storedValue, setValue];
};

export function TestLocalStorage() {
    const [storedValue, setStoredValue] = useLocalStorage("username", "");

    return (
        <div className="test-section">
            <h2>Local Storage Example</h2>
            <h2>{storedValue}</h2>
            <input
                type="text"
                value={storedValue}
                onChange={(e) => setStoredValue(e.target.value)}
                placeholder="Set Local Storage"
            />
        </div>
    )
}

export function Clock({ time }) {
    const hours = time.getHours();
    let classes = "day";

    if (hours >= 0 && hours <= 6) {
        // document.getElementById('time').className = 'night';
        classes = "night";
    }
    // } else {
    //     document.getElementById('time').className = 'day';
    // }

    return (
        <h1 id="time" className={classes}>
            {time.toLocaleTimeString()}
        </h1>
    );
}

export function Profiles() {
    return (
      <>
        <Profile person={{
          imageId: 'lrWQx8l',
          name: 'Subrahmanyan Chandrasekhar',
        }} />
        <Profile person={{
          imageId: 'MK3eW3A',
          name: 'Creola Katherine Johnson',
        }} />
      </>
    )
  }

// let currentPerson;

export function Profile({ person }) {
//   currentPerson = person;
  return (
    <Panel>
      <Header person={person} />
      <Avatar person={person} />
    </Panel>
  )
}

function Header({person}) {
//   return <h1>{currentPerson.name}</h1>;
  return <h1>{person.name}</h1>;
}

function Avatar({person}) {
  return (
    <img
      className="avatar"
    //   src={getImageUrl(currentPerson)}
      src={getImageUrl(person)}
    //   alt={currentPerson.name}
      alt={person.name}
      width={50}
      height={50}
    />
  );
}

const data = [];

export function Button() {
    const [num, setNum] = useState(0);

    return (
        <>
        <h2>{num}</h2>
        <button onClick={() => setNum(num + 1)}>add</button>
        <StoryTray stories={data} />
        </>
    )
}

export function StoryTray({ stories }) {
    const newStories = [...stories];
    newStories.push({
        id: "create",
        label: "Create Story"
    });

    // stories.push({
    //     id: "create",
    //     label: "Create Story"
    // });

    return (
        <ul>
            {newStories.map(story => (
                <li key={story.id}>
                    {story.label}
                </li>
            ))}
        </ul>
    );
}

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
};

export function TestFetch() {
    const { data, loading, error } = useFetch(
        "https://jsonplaceholder.typicode.com/posts"
    );

    return (
        <div className="test-section">
            <h2>Fetch Data Example</h2>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
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