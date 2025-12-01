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

export function Test() {
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
