// ======================================================================

import { useState, useEffect, useMemo } from "react";

// let nextId = 0;

// function createTodo(text, completed = false) {
//     return {
//         id: nextId++,
//         text,
//         completed
//     };
// }

// const initialTodos = [
//     createTodo("Get apples", true),
//     createTodo("Get oranges", true),
//     createTodo("Get carrots"),
// ];

export function TodoList() {
    const [todos, setTodos] = useState(initialTodos);
    const [showActive, setShowActive] = useState(false);
    // const [activeTodos, setActiveTodos] = useState([]);
    // const [visibleTodos, setVisibleTodos] = useState([]);
    // const [footer, setFooter] = useState(null);

    let visibleTodos = todos;
    const activeTodos = todos.filter(todo => !todo.completed);

    if (showActive) {
        visibleTodos = activeTodos;
    }

    // useEffect(() => {
    //     setActiveTodos(todos.filter(todo => !todo.completed));
    // }, [todos]);

    // useEffect(() => {
    //     setVisibleTodos(showActive ? activeTodos : todos);
    // }, [showActive, todos, activeTodos]);

    // useEffect(() => {
    //     setFooter(
    //         <footer>
    //             {activeTodos.length} todos left
    //         </footer>
    //     );
    // }, [activeTodos]);

    return (
        <div className="test-section">
            <label>
                <input
                    type="checkbox"
                    checked={showActive}
                    onChange={e => setShowActive(e.target.checked)}
                />
                Show only active todos
            </label>
            <NewTodo onAdd={newTodo => setTodos([...todos, newTodo])} />
            <ul>
                {visibleTodos.map(todo => (
                    <li key={todo.id}>
                        {todo.completed ? <s>{todo.text}</s> : todo.text}
                    </li>
                ))}
            </ul>
            {/* {footer} */}
            <footer>
                {activeTodos.length} todos left
            </footer>
        </div>
    );
}

function NewTodo({ onAdd }) {
    const [text, setText] = useState("");

    function handleAddClick() {
        setText("");
        onAdd(createTodo(text));
    }

    return ( 
        <>
            <input
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button onClick={handleAddClick}>
                Add
            </button>
        </>
    );
}

// ==================================== Challenge 2: Cache a calculation without Effects  ================================================

let nextId = 0;
let calls = 0;

function getVisibleTodos(todos, showActive) {
    console.log(`getVisibleTodos() was called ${++calls} times`);
    const activeTodos = todos.filter(todo => !todo.completed);
    const visibleTodos = showActive ? activeTodos : todos;
    return visibleTodos;
}

function createTodo(text, completed = false) {
    return {
        id: nextId++,
        text,
        completed
    };
}

const initialTodos = [
    createTodo("Get apples", true),
    createTodo("Get oranges", true),
    createTodo("Get carrots"),
];

export function TodoListWithCache() {
    const [todos, setTodos] = useState(initialTodos);
    const [showActive, setShowActive] = useState(false);
    const [text, setText] = useState("");
    // const [visibleTodos, setVisibleTodos] = useState([]);
    const visibleTodos = useMemo(() => (
        getVisibleTodos(todos, showActive)
    ), [todos, showActive]);

    // useEffect(() => {
    //     setVisibleTodos(getVisibleTodos(todos, showActive));
    // }, [todos, showActive]);

    function handleAddClick() {
        setText("");
        setTodos([...todos, createTodo(text)]);
    }

    return (
        <div className="test-section">
            <h1>(2048-1294)/2=1671</h1>
            <label>
                <input
                    type="checkbox"
                    checked={showActive}
                    onChange={e => setShowActive(e.target.checked)}
                />
                Show only active todos
            </label>
            <input value={text} onChange={e => setText(e.target.value)} />
            <button onClick={handleAddClick}>
                Add
            </button>
            <ul>
                {visibleTodos.map(todo => (
                    <li key={todo.id}>
                        {todo.completed ? <s>{todo.text}</s> : todo.text}
                    </li>
                ))}
            </ul>
        </div>
    );
}

// ==================================== Challenge 3: Reset state without Effects  ================================================

const users = [
    { id: 1, name: "Taylor", email: "taylor@mail.com" }, 
    { id: 2, name: "Alice", email: "alice@mail.com" }, 
    { id: 3, name: "Bob", email: "bob@mail.com" }
];

// function EditContact({ savedContact, onSave }) {
//     const [name, setName] = useState(savedContact.name);
//     const [email, setEmail] = useState(savedContact.email);
//     console.log(savedContact.name, name);

//     useEffect(() => {
//         setName(savedContact.name);
//         setEmail(savedContact.email);
//     }, [savedContact]);

//     return (
//         <section className="test-section">
//             <label>
//                 Name:{" "}
//                 <input
//                     type="text"
//                     value={name}
//                     onChange={e => setName(e.target.value)}
//                 />
//             </label>
//             <label>
//                 Email:{" "}
//                 <input
//                     type="email"
//                     value={email}
//                     onChange={e => setEmail(e.target.value)}
//                 />
//             </label>
//             <button onClick={() => {
//                 const updatedData = {
//                     id: savedContact.id,
//                     name: name,
//                     email: email
//                 };
//                 onSave(updatedData);
//             }}>
//                 Save
//             </button>
//             <button onClick={() => {
//                 setName(savedContact.name);
//                 setEmail(savedContact.email);
//             }}>
//                 Reset
//             </button>
//         </section>
//     );
// }

function EditContact(props) {
    return (
        <EditForm
            {...props}
            key={props.savedContact.id}
        />
    );
}

function EditForm({ savedContact, onSave }) {
    const [name, setName] = useState(savedContact.name);
    const [email, setEmail] = useState(savedContact.email);
    console.log(savedContact.name, name);

    return (
        <section className="test-section">
            <label>
                Name:{" "}
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </label>
            <label>
                Email:{" "}
                <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </label>
            <button onClick={() => {
                const updatedData = {
                    id: savedContact.id,
                    name: name,
                    email: email
                };
                onSave(updatedData);
            }}>
                Save
            </button>
            <button onClick={() => {
                setName(savedContact.name);
                setEmail(savedContact.email);
            }}>
                Reset
            </button>
        </section>
    );
}

function Button({ user, setSavedContact }) {
    // console.log(user);
    return (
        <button onClick={() => setSavedContact(user)}>
            {user.name}
        </button>
    )
}

export function TestEditForm() {
    const [profiles, setProfiles] = useState([...users]);
    const [savedContact, setSavedContact] = useState(profiles[0]);
    // console.log(savedContact.name);

    function updateProfiles(newData) {
        setProfiles(old => {
            const oldProfileIndex = old.findIndex(p => p.id == newData.id);
            // console.log(old[oldProfileIndex]);
            // console.log(newData);
            old[oldProfileIndex] = newData;
            return [...old];
        })
    }

    return (
        <div className="test-section">
            <div className="section">
                {profiles.map(user => (
                    <Button 
                        key={user.id} 
                        user={user} 
                        setSavedContact={setSavedContact} 
                    />
                ))}
            </div>
            <EditContact savedContact={savedContact} onSave={updateProfiles} />
        </div>
    )
}

function Form() {
    const [showForm, setShowForm] = useState(false);
    const [message, setMessage] = useState("");

    // useEffect(() => {
    //     if (!showForm) {
    //         sendMessage(message);
    //     }
    // }, [showForm, message]);

    function handleSubmit(e) {
        e.preventDefault();
        setShowForm(false);
        sendMessage(message);
    }

    if (!showForm) {
        return (
            <>
                <h1>Thanks for using our services!</h1>
                <button onClick={() => {
                    setMessage("");
                    setShowForm(true);
                }}>
                    Open chat
                </button>
            </>
        );
    }

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                placeholder="Message"
                value={message}
                onChange={e => setMessage(e.target.value)}
            />
            <button type="submit" disabled={message === ""}>
                Send
            </button>
        </form>
    );
}

function sendMessage(message) {
    console.log("Sending message: " + message);
}

export function TestForm() {
    return (
        <div className="test-section">
            <Form />
        </div>
    )
}

const quotes = [
    "Don't let yesterday take up too much of today.” — Will Rogers",
    "Ambition is putting a ladder against the sky.",
    "A joy that's shared is a joy made double.",
];

function FancyText({ title, text }) {
    return title
        ? <h1 className="cursive">{text}</h1>
        : <h3 className="cursive">{text}</h3>
}

function Color({ value }) {
    return <div style={{ backgroundColor: value }} />
}

function InspirationGenerator({ children }) {
    const [index, setIndex] = useState(0);
    const quote = quotes[index];
    const next = () => setIndex((index + 1) % quotes.length);

    return (
        <>
            <p>Your inspirational quote is:</p>
            <FancyText text={quote} />
            <button onClick={next}>Inspire me again</button>
            {children}
        </>
    );
}

function Copyright({ year }) {
    return <p>&copy; {year}</p>;
}

export function Test1() {
    return (
        <div className="test-section">
            <FancyText title text="Get Inspired App" />
            <InspirationGenerator>
                <Copyright year={2004} />
            </InspirationGenerator>
        </div>
    );
}

export function Test2() {
    return (
        <Toolbar
            onPlayMovie={() => alert("Playing!")}
            onUploadImage={() => alert("Uploading!")}
        />
    );
}

function Toolbar({ onPlayMovie, onUploadImage }) {
    return (
        <div className="test-section">
            <Button2 onClick={onPlayMovie}>
                Play Movie
            </Button2>
            <Button2 onClick={onUploadImage}>
                Upload Image
            </Button2>
        </div>
    );
}

function Button2({ onClick, children }) {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    );
}

const sculptureList = [{
    name: "Homenaje a la Neurocirugía",
    artist: "Marta Colvin Andrade",
    description: "Although Colvin is predominantly known for abstract themes that allude to pre-Hispanic symbols, this gigantic sculpture, an homage to neurosurgery, is one of her most recognizable public art pieces.",
    url: "https://i.imgur.com/Mx7dA2Y.jpg",
    alt: "A bronze statue of two crossed hands delicately holding a human brain in their fingertips."
}, {
    name: "Floralis Genérica",
    artist: "Eduardo Catalano",
    description: "This enormous (75 ft. or 23m) silver flower is located in Buenos Aires. It is designed to move, closing its petals in the evening or when strong winds blow and opening them in the morning.",
    url: "https://i.imgur.com/ZF6s192m.jpg",
    alt: "A gigantic metallic flower sculpture with reflective mirror-like petals and strong stamens."
}, {
    name: "Eternal Presence",
    artist: "John Woodrow Wilson",
    description: "Wilson was known for his preoccupation with equality, social justice, as well as the essential and spiritual qualities of humankind. This massive (7ft. or 2,13m) bronze represents what he described as 'a symbolic Black presence infused with a sense of universal humanity.'",
    url: "https://i.imgur.com/aTtVpES.jpg",
    alt: "The sculpture depicting a human head seems ever-present and solemn. It radiates calm and serenity."
}, {
    name: "Moai",
    artist: "Unknown Artist",
    description: "Located on the Easter Island, there are 1,000 moai, or extant monumental statues, created by the early Rapa Nui people, which some believe represented deified ancestors.",
    url: "https://i.imgur.com/RCwLEoQm.jpg",
    alt: "Three monumental stone busts with the heads that are disproportionately large with somber faces."
}, {
    name: "Blue Nana",
    artist: "Niki de Saint Phalle",
    description: "The Nanas are triumphant creatures, symbols of femininity and maternity. Initially, Saint Phalle used fabric and found objects for the Nanas, and later on introduced polyester to achieve a more vibrant effect.",
    url: "https://i.imgur.com/Sd1AgUOm.jpg",
    alt: "A large mosaic sculpture of a whimsical dancing female figure in a colorful costume emanating joy."
}, {
    name: "Ultimate Form",
    artist: "Barbara Hepworth",
    description: "This abstract bronze sculpture is a part of The Family of Man series located at Yorkshire Sculpture Park. Hepworth chose not to create literal representations of the world but developed abstract forms inspired by people and landscapes.",
    url: "https://i.imgur.com/2heNQDcm.jpg",
    alt: "A tall sculpture made of three elements stacked on each other reminding of a human figure."
}, {
    name: "Cavaliere",
    artist: "Lamidi Olonade Fakeye",
    description: "Descended from four generations of woodcarvers, Fakeye's work blended traditional and contemporary Yoruba themes.",
    url: "https://i.imgur.com/wIdGuZwm.png",
    alt: "An intricate wood sculpture of a warrior with a focused face on a horse adorned with patterns."
}, {
    name: "Big Bellies",
    artist: "Alina Szapocznikow",
    description: "Szapocznikow is known for her sculptures of the fragmented body as a metaphor for the fragility and impermanence of youth and beauty. This sculpture depicts two very realistic large bellies stacked on top of each other, each around five feet (1,5m) tall.",
    url: "https://i.imgur.com/AlHTAdDm.jpg",
    alt: "The sculpture reminds a cascade of folds, quite different from bellies in classical sculptures."
}, {
    name: "Terracotta Army",
    artist: "Unknown Artist",
    description: "The Terracotta Army is a collection of terracotta sculptures depicting the armies of Qin Shi Huang, the first Emperor of China. The army consisted of more than 8,000 soldiers, 130 chariots with 520 horses, and 150 cavalry horses.",
    url: "https://i.imgur.com/HMFmH6m.jpg",
    alt: "12 terracotta sculptures of solemn warriors, each with a unique facial expression and armor."
}, {
    name: "Lunar Landscape",
    artist: "Louise Nevelson",
    description: "Nevelson was known for scavenging objects from New York City debris, which she would later assemble into monumental constructions. In this one, she used disparate parts like a bedpost, juggling pin, and seat fragment, nailing and gluing them into boxes that reflect the influence of Cubism’s geometric abstraction of space and form.",
    url: "https://i.imgur.com/rN7hY6om.jpg",
    alt: "A black matte sculpture where the individual elements are initially indistinguishable."
}, {
    name: "Aureole",
    artist: "Ranjani Shettar",
    description: "Shettar merges the traditional and the modern, the natural and the industrial. Her art focuses on the relationship between man and nature. Her work was described as compelling both abstractly and figuratively, gravity defying, and a 'fine synthesis of unlikely materials.'",
    url: "https://i.imgur.com/okTpbHhm.jpg",
    alt: "A pale wire-like sculpture mounted on concrete wall and descending on the floor. It appears light."
}, {
    name: "Hippos",
    artist: "Taipei Zoo",
    description: "The Taipei Zoo commissioned a Hippo Square featuring submerged hippos at play.",
    url: "https://i.imgur.com/6o5Vuyu.jpg",
    alt: "A group of bronze hippo sculptures emerging from the sett sidewalk as if they were swimming."
}];

export function Gallery() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
    const hasNext = index < sculptureList.length - 1;

    function handleNextClick() {
        if (hasNext) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    // let sculpture = sculptureList[index];
    const classes = new Array(sculptureList.length).fill("slide");
    classes[index] = "slide fade-out";

    return (
        <>
            <button onClick={handleNextClick}>
                Next
            </button>
            {
                sculptureList.map((sculpture, index) => {
                    return (
                        <Slide 
                            key={index}
                            sculpture={sculpture}
                            classes={classes[index]}
                            index={index}
                            showMore={showMore}
                            handleMoreClick={handleMoreClick} />
                    )
                })
            }
            {/* <h2>
                <i>{sculpture.name} </i>
                by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>
            <button onClick={handleMoreClick}>
                {showMore ? "Hide" : "Show"} details
            </button>
            {showMore && <p>{sculpture.description}</p>}
            <img
                src={sculpture.url}
                alt={sculpture.alt}
            /> */}
        </>
    );
}

function Slide({sculpture, classes, showMore, handleMoreClick, index}) {
    return (
        <div className={classes}>
            <h2>
                <i>{sculpture.name} </i>
                by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>
            <button onClick={handleMoreClick}>
                {showMore ? "Hide" : "Show"} details
            </button>
            {showMore && <p>{sculpture.description}</p>}
            <img
                src={sculpture.url}
                alt={sculpture.alt}
            />

        </div>
    )
}

export function TestForm1() {
    const [to, setTo] = useState("Alice");
    const [message, setMessage] = useState("Hello");

    function handleSubmit(e) {
        e.preventDefault();
        setTimeout(() => {
            alert(`You said ${message} to ${to}`);
        }, 5000);
    }

    return (
        <form 
            className="test-section"
            onSubmit={handleSubmit}
        >
            <label>
                To:{" "}
                <select
                    value={to}
                    onChange={e => setTo(e.target.value)}>
                    <option value="Alice">Alice</option>
                    <option value="Bob">Bob</option>
                </select>
            </label>
            <textarea
                placeholder="Message"
                value={message}
                onChange={e => setMessage(e.target.value)}
            />
            <button type="submit">Send</button>
        </form>
    );
}

export function TestBugCounter() {
    const [score, setScore] = useState(0);

    function increment() {
        setScore(score + 1);
    }

    return (
        <div className="test-section">
            <button 
                onClick={() => increment()}
            >+1</button>
            <button 
                onClick={() => {
                    increment();
                    increment();
                    increment();
            }}>+3</button>
            <h1>Score: {score}</h1>
        </div>
    )
}

export function TestFixCounter() {
    const [score, setScore] = useState(0);

    function increment() {
        setScore(s => s + 1);
    }

    return (
        <div className="test-section">
            <button onClick={
                () => increment()
            }>+1</button>
            <button onClick={() => {
                increment();
                increment();
                increment();
            }}>+3</button>
            <h1>Score: {score}</h1>
        </div>
    )
}

export function TestForm2() {
    const [person, setPerson] = useState({
        name: "Niki de Saint Phalle",
        artwork: {
            title: "Blue Nana",
            city: "Hamburg",
            image: "https://i.imgur.com/Sd1AgUOm.jpg",
        }
    });

    function handleNameChange(e) {
        setPerson({
            ...person,
            name: e.target.value
        });
    }

    function handleTitleChange(e) {
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                title: e.target.value
            }
        });
    }

    function handleCityChange(e) {
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                city: e.target.value
            }
        });
    }

    function handleImageChange(e) {
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                image: e.target.value
            }
        });
    }

    return (
        <div className="test-section">
            <label>
                Name:
                <input
                    value={person.name}
                    onChange={handleNameChange}
                />
            </label>
            <label>
                Title:
                <input
                    value={person.artwork.title}
                    onChange={handleTitleChange}
                />
            </label>
            <label>
                City:
                <input
                    value={person.artwork.city}
                    onChange={handleCityChange}
                />
            </label>
            <label>
                Image:
                <input
                    value={person.artwork.image}
                    onChange={handleImageChange}
                />
            </label>
            <p>
                <i>{person.artwork.title}</i>
                {" by "}
                {person.name}
                <br />
                (located in {person.artwork.city})
            </p>
            <img 
                style={{maxWidth: "400px"}}
                src={person.artwork.image}
                alt={person.artwork.title}
            />
        </div>
    );
}


// export function Footer() {
//     return (
//         <div className="footer">
//             <div className="footer-content">
//                 <div className="footer-name">
//                     <h2>Nika Shoes</h2>
//                 </div>
//                 <div className="footer-socials">
//                     <i className="fa fa-facebook footer-icon"></i>
//                     <i className="fa fa-instagram footer-icon"></i>
//                     <i className="fa fa-twitter footer-icon"></i>
//                 </div>
//             </div>
//             <div className="copy">
//                 <p>Copyright © Nika Shoes 2024. All rights reserved</p>
//             </div>
//         </div>
//     )
// } 
