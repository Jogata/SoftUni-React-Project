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
