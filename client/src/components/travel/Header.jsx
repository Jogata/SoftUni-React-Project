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

// export function Header() {
//     return (
//         <header>
//             <img src="https://raw.githubusercontent.com/scrimba/learn-react/refs/heads/main/02.%20Data-Driven%20React/01.%20Section%202%20Intro/images/globe.png" alt="" />
//             <h1>my travel journal.</h1>
//         </header>
//     )
// }