import { useImperativeHandle, useReducer, useRef, useState } from "react";

function tasksReducer(tasks, action) {
    switch (action.type) {
        case "added": {
            return [...tasks, {
                id: action.id,
                text: action.text,
                done: false
            }];
        }
        case "changed": {
            return tasks.map(t => {
                if (t.id === action.task.id) {
                    return action.task;
                } else {
                    return t;
                }
            });
        }
        case "deleted": {
            return tasks.filter(t => t.id !== action.id);
        }
        default: {
            throw Error("Unknown action: " + action.type);
        }
    }
}

let nextId = 3;

const initialTasks = [
    { id: 0, text: "Philosopher’s Path", done: true },
    { id: 1, text: "Visit the temple", done: false },
    { id: 2, text: "Drink matcha", done: false }
];

export function TaskApp() {
    const [tasks, dispatch] = useReducer(
        tasksReducer,
        initialTasks
    );

    function handleAddTask(text) {
        dispatch({
            type: "added",
            id: nextId++,
            text: text,
        });
    }

    function handleChangeTask(task) {
        dispatch({
            type: "changed",
            task: task
        });
    }

    function handleDeleteTask(taskId) {
        dispatch({
            type: "deleted",
            id: taskId
        });
    }

    return (
        <div className="test-section">
            <h1>Day off in Kyoto</h1>
            <AddTask
                onAddTask={handleAddTask}
            />
            <TaskList
                tasks={tasks}
                onChangeTask={handleChangeTask}
                onDeleteTask={handleDeleteTask}
            />
        </div>
    );
}

function TaskList({
    tasks,
    onChangeTask,
    onDeleteTask
}) {
    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    <Task
                        task={task}
                        onChange={onChangeTask}
                        onDelete={onDeleteTask}
                    />
                </li>
            ))}
        </ul>
    );
}

function Task({ task, onChange, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);

    let taskContent;

    if (isEditing) {
        taskContent = (
            <>
                <input
                    value={task.text}
                    onChange={e => {
                        onChange({
                            ...task,
                            text: e.target.value
                        });
                    }} />
                <button onClick={() => setIsEditing(false)}>
                    Save
                </button>
            </>
        );
    } else {
        taskContent = (
            <>
                {task.text}
                <button onClick={() => setIsEditing(true)}>
                    Edit
                </button>
            </>
        );
    }

    const styles = {
        padding: "1rem",
        display: "flex",
        gap: "1rem",
        alignItems: "center"
    };

    return (
        <label style={styles}>
            <input
                type="checkbox"
                checked={task.done}
                onChange={e => {
                    onChange({
                        ...task,
                        done: e.target.checked
                    });
                }}
            />
            {taskContent}
            <button onClick={() => onDelete(task.id)}>
                Delete
            </button>
        </label>
    );
}

function AddTask({ onAddTask }) {
    const [text, setText] = useState("");

    return (
        <>
            <input
                placeholder="Add task"
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button onClick={() => {
                setText("");
                onAddTask(text);
            }}>Add</button>
        </>
    )
}

// =============================================================================================

function AlertButton({ message, children }) {
    return (
        <button onClick={() => alert(message)}>
            {children}
        </button>
    );
}

export function Toolbar() {
    return (
        <div>
            <AlertButton message="Playing!">
                Play Movie
            </AlertButton>
            <AlertButton message="Uploading!">
                Upload Image
            </AlertButton>
        </div>
    );
}

// =============================================================================================

function Button({ onClick, children }) {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    );
}

function PlayButton({ movieName }) {
    function handlePlayClick() {
        alert(`Playing ${movieName}!`);
    }

    return (
        <Button onClick={handlePlayClick}>
            Play "{movieName}"
        </Button>
    );
}

function UploadButton() {
    return (
        <Button onClick={() => alert("Uploading!")}>
            Upload Image
        </Button>
    );
}

export function Toolbar2() {
    return (
        <div className="test-section">
            <PlayButton movieName="Kiki's Delivery Service" />
            <UploadButton />
        </div>
    );
}

// =============================================================================================

function SmashButton({ onSmash, children }) {
    return (
        <button onClick={onSmash}>
            {children}
        </button>
    );
}

export function SmashButtonApp() {
    return (
        <div className="test-section">
            <SmashButton onSmash={() => alert("Playing!")}>
                Play Movie
            </SmashButton>
            <SmashButton onSmash={() => alert("Uploading!")}>
                Upload Image
            </SmashButton>
        </div>
    );
}

// =============================================================================================

export function TestToolbar3() {
    return (
        <Toolbar3
            onPlayMovie={() => alert("Playing!")}
            onUploadImage={() => alert("Uploading!")}
        />
    );
}

function Toolbar3({ onPlayMovie, onUploadImage }) {
    return (
        <div className="test-section">
            <Button3 onClick={onPlayMovie}>
                Play Movie
            </Button3>
            <Button3 onClick={onUploadImage}>
                Upload Image
            </Button3>
        </div>
    );
}

function Button3({ onClick, children }) {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    );
}

// =============================================================================================

export function ToolbarWithPropagation() {
    return (
        <div className="test-section" onClick={() => {
            alert("You clicked on the toolbar!");
        }}>
            <button onClick={() => alert("Playing!")}>
                Play Movie
            </button>
            <button onClick={() => alert("Uploading!")}>
                Upload Image
            </button>
        </div>
    );
}

// =============================================================================================

function ButtonStopPropagation({ onClick, children }) {
    return (
        <button onClick={e => {
            e.stopPropagation();
            onClick();
        }}>
            {children}
        </button>
    );
}

export function ToolbarStopPropagation() {
    return (
        <div className="test-section" onClick={() => {
            alert("You clicked on the toolbar!");
        }}>
            <ButtonStopPropagation
                onClick={() => alert("Playing!")}>
                Play Movie
            </ButtonStopPropagation>
            <ButtonStopPropagation
                onClick={() => alert("Uploading!")}>
                Upload Image
            </ButtonStopPropagation>
        </div>
    );
}

export function Signup() {
    return (
        <form onSubmit={e => {
            e.preventDefault();
            alert("Submitting!");
        }}>
            <input />
            <button>Send</button>
        </form>
    );
}

// ============================================ Challenge 1: Fix an event handler ============================================

export function LightSwitch() {
    function handleClick() {
        let bodyStyle = document.body.style;

        if (bodyStyle.backgroundColor === "black") {
            bodyStyle.backgroundColor = "white";
        } else {
            bodyStyle.backgroundColor = "black";
        }
    }

    return (
        // <button onClick={handleClick()}>
        <button onClick={handleClick}>
            Toggle the lights
        </button>
    );
}

// =============================================================================================

function ColorSwitch({
    onChangeColor
}) {
    return (
        <button onClick={onChangeColor}>
            Change color
        </button>
    );
}

export function TestColorSwitch() {
    const [color, setColor] = useState("black");
    const counter = useRef(0);

    function onChangeColor(e) {
        e.stopPropagation();
        if (color === "black") {
            setColor("white");
        } else {
            setColor("black");
        }
    }

    function increment() {
        counter.current += 1;
        console.log(counter.current);
    }

    return (
        <div
            className="test-section"
            onClick={increment}
            style={{ backgroundColor: color }}
        >
            <ColorSwitch onChangeColor={onChangeColor} />
        </div>
    )

}

// =============================================================================================

export function FormWithRef() {
    const inputRef = useRef(null);

    function handleClick() {
        inputRef.current.focus();
    }

    return (
        <div className="test-section">
            <input ref={inputRef} />
            <button onClick={handleClick}>
                Focus the input
            </button>
        </div>
    );
}

export function CatFriends() {
    const firstCatRef = useRef(null);
    const secondCatRef = useRef(null);
    const thirdCatRef = useRef(null);

    function handleScrollToFirstCat() {
        firstCatRef.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center"
        });
    }

    function handleScrollToSecondCat() {
        secondCatRef.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center"
        });
    }

    function handleScrollToThirdCat() {
        thirdCatRef.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center"
        });
    }

    return (
        <div className="test-section">
            <nav style={{ marginBottom: "50vh" }}>
                <button onClick={handleScrollToFirstCat}>
                    Neo
                </button>
                <button onClick={handleScrollToSecondCat}>
                    Millie
                </button>
                <button onClick={handleScrollToThirdCat}>
                    Bella
                </button>
            </nav>
            <div>
                <ul>
                    <li>
                        <img
                            src="https://placecats.com/neo/300/200"
                            alt="Neo"
                            ref={firstCatRef}
                        />
                    </li>
                    <li>
                        <img
                            src="https://placecats.com/millie/200/200"
                            alt="Millie"
                            ref={secondCatRef}
                        />
                    </li>
                    <li>
                        <img
                            src="https://placecats.com/bella/199/200"
                            alt="Bella"
                            ref={thirdCatRef}
                        />
                    </li>
                </ul>
            </div>
        </div>
    );
}

// =============================================================================================

function MyInput({ ref }) {
    console.log(ref);
    return <input ref={ref} />;
}

export function MyFormWithRefProp() {
    const inputRef = useRef(null);

    function handleClick() {
        inputRef.current.focus();
    }

    return (
        <div className="test-section">
            <MyInput ref={inputRef} />
            <button onClick={handleClick}>
                Focus the input
            </button>
        </div>
    );
}

function MyImperativeInput({ ref }) {
    const realInputRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus() {
            realInputRef.current.focus();
        },
    }));

    return <input ref={realInputRef} />;
};

export function ImperativeForm() {
    const inputRef = useRef(null);

    function handleClick() {
        inputRef.current.focus();
    }

    return (
        <div className="test-section">
            <MyImperativeInput ref={inputRef} />
            <button onClick={handleClick}>Focus the input</button>
        </div>
    );
}

// =============================================================================================

let nextTodoId = 0;

let initialTodos = [];

for (let i = 0; i < 20; i++) {
    initialTodos.push({
        id: nextTodoId++,
        text: "Todo #" + (i + 1)
    });
}

export default function TodoList() {
    const listRef = useRef(null);
    const [text, setText] = useState("");
    const [todos, setTodos] = useState(
        initialTodos
    );

    function handleAdd() {
        const newTodo = { id: nextId++, text: text };
        setText("");
        setTodos([...todos, newTodo]);
        listRef.current.lastChild.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });
    }

    return (
        <div className="test-section">
            <button onClick={handleAdd}>
                Add
            </button>
            <input
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <ul ref={listRef}>
                {todos.map(todo => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
        </div>
    );
}

// ========================================== Challenge 1: Play and pause the video ==========================================

export function VideoPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    function handleClick() {
        const nextIsPlaying = !isPlaying;
        setIsPlaying(nextIsPlaying);

        if (isPlaying) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    }

    return (
        <div className="test-section">
            <button onClick={handleClick}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <video width="250" ref={videoRef}>
                <source
                    src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                    type="video/mp4"
                />
            </video>
        </div>
    )
}

// ========================================== Challenge 2: Focus the search field ==========================================

export function FocusSearch() {
    const inputRef = useRef(null);

    function focus() {
        inputRef.current.focus();
    }

    return (
        <div className="test-section">
            <nav>
                <button onClick={focus}>Search</button>
            </nav>
            <input
                ref={inputRef}
                placeholder="Looking for something?"
            />
        </div>
    );
}

export function FocusSearchWithAttribute() {
    const [isFocused, setIsFocused] = useState(false);
    console.log(isFocused);

    function focus() {
        setIsFocused(!isFocused);
    }

    return (
        <div className="test-section">
            <nav>
                <button onClick={focus}>Search</button>
            </nav>
            <input
                autoFocus={isFocused}
                placeholder="Looking for something?"
            />
        </div>
    );
}

// =============================================================================================

// export function Header() {
//     return (
//         <header>
//             <img src="https://raw.githubusercontent.com/scrimba/learn-react/refs/heads/main/02.%20Data-Driven%20React/01.%20Section%202%20Intro/images/globe.png" alt="" />
//             <h1>my travel journal.</h1>
//         </header>
//     )
// }