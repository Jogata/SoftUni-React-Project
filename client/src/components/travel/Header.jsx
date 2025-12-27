import { useReducer, useRef, useState } from "react";

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
            style={{backgroundColor: color}}
        >
            <ColorSwitch onChangeColor={onChangeColor} />
        </div>
    )
    
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