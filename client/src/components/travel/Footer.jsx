// ================================ Challenge 4: Implement multiple selection ================================

import { useState } from "react";

const letters = [{
    id: 0,
    subject: "Ready for adventure?",
    isStarred: true,
}, {
    id: 1,
    subject: "Time to check in!",
    isStarred: false,
}, {
    id: 2,
    subject: "Festival Begins in Just SEVEN Days!",
    isStarred: false,
}];

export function MailClient() {
    const [selectedIds, setSelectedIds] = useState([]);

    const selectedCount = selectedIds.length;

    function handleToggle(toggledId) {
        if (selectedIds.includes(toggledId)) {
            setSelectedIds(selectedIds.filter(id =>
                id !== toggledId
            ));
        } else {
            setSelectedIds([
                ...selectedIds,
                toggledId
            ]);
        }
    }

    return (
        <>
            <h2>Inbox</h2>
            <ul>
                {letters.map(letter => (
                    <Letter
                        key={letter.id}
                        letter={letter}
                        isSelected={
                            // letter.id === selectedId
                            selectedIds.includes(letter.id)
                        }
                        onToggle={handleToggle}
                    />
                ))}
                <hr style={{ margin: "1rem 0" }} />
                <p>
                    <b>
                        You selected {selectedCount} letters
                    </b>
                </p>
            </ul>
        </>
    );
}

function Letter({
    letter,
    onToggle,
    isSelected,
}) {
    console.log(letter.id);
    return (
        <li className={
            isSelected ? "selected" : ""
        }>
            <label style={{
                display: "inline-flex",
                gap: "0.5rem",
                padding: "0.5rem 0"
            }}
            >
                <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => {
                        onToggle(letter.id);
                    }}
                />
                {letter.subject}
            </label>
        </li>
    )
}

// ========================================================================

export function MailClient2() {
    const [selectedCount, setSelectedCount] = useState(0);

    // const selectedCount = selectedIds.length;

    function handleToggle(isSelected) {
        if (isSelected) {
            setSelectedCount(selectedCount + 1);
        } else {
            setSelectedCount(selectedCount - 1);
        }
    }

    return (
        <>
            <h2>Inbox</h2>
            <ul>
                {letters.map(letter => (
                    <Letter2
                        key={letter.id}
                        letter={letter}
                        // isSelected={
                        //     selectedIds.includes(letter.id)
                        // }
                        onToggle={handleToggle}
                    />
                ))}
                <hr style={{ margin: "1rem 0" }} />
                <p>
                    <b>
                        You selected {selectedCount} letters
                    </b>
                </p>
            </ul>
        </>
    );
}

function Letter2({
    letter,
    onToggle,
    // isSelected,
}) {
    const [isSelected, setIsSelected] = useState(false);
    // console.log(letter.id);

    return (
        <li className={
            isSelected ? "selected" : ""
        }>
            <label style={{
                display: "inline-flex",
                gap: "0.5rem",
                padding: "0.5rem 0"
            }}
            >
                <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => {
                        setIsSelected(!isSelected)
                        onToggle(!isSelected);
                    }}
                />
                {letter.subject}
            </label>
        </li>
    )
}

export function MovingDot() {
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    });

    return (
        <div
            onPointerMove={e => {
                // position.x = e.clientX;
                // position.y = e.clientY;
                setPosition({
                    x: e.clientX,
                    y: e.clientY
                });
            }}
            style={{
                position: "relative",
                width: "100%",
                minHeight: "100vh",
            }}>
            <div style={{
                position: "absolute",
                top: -10,
                left: -10,
                width: 20,
                height: 20,
                borderRadius: "50%",
                backgroundColor: "red",
                transform: `translate(${position.x}px, ${position.y}px)`,
            }} />
        </div>
    );
}

export function MutatingForm() {
    const [person, setPerson] = useState({
        firstName: "Barbara",
        lastName: "Hepworth",
        email: "bhepworth@sculpture.com"
    });

    function handleFirstNameChange(e) {
        person.firstName = e.target.value;
    }

    function handleLastNameChange(e) {
        person.lastName = e.target.value;
    }

    function handleEmailChange(e) {
        person.email = e.target.value;
    }

    return (
        <form className="test-section">
            <label>
                First name:
                <input
                    value={person.firstName}
                    onChange={handleFirstNameChange}
                />
            </label>
            <label>
                Last name:
                <input
                    value={person.lastName}
                    onChange={handleLastNameChange}
                />
            </label>
            <label>
                Email:
                <input
                    value={person.email}
                    onChange={handleEmailChange}
                />
            </label>
            <p>
                {person.firstName}{" "}
                {person.lastName}{" "}
                ({person.email})
            </p>
        </form>
    );
}

export function FormWithSpreadSyntax() {
    const [person, setPerson] = useState({
        firstName: "Barbara",
        lastName: "Hepworth",
        email: "bhepworth@sculpture.com"
    });

    function handleFirstNameChange(e) {
        setPerson({
            ...person,
            firstName: e.target.value
        });
    }

    function handleLastNameChange(e) {
        setPerson({
            ...person,
            lastName: e.target.value
        });
    }

    function handleEmailChange(e) {
        setPerson({
            ...person,
            email: e.target.value
        });
    }

    return (
        <form className="test-section">
            <label>
                First name:
                <input
                    value={person.firstName}
                    onChange={handleFirstNameChange}
                />
            </label>
            <label>
                Last name:
                <input
                    value={person.lastName}
                    onChange={handleLastNameChange}
                />
            </label>
            <label>
                Email:
                <input
                    value={person.email}
                    onChange={handleEmailChange}
                />
            </label>
            <p>
                {person.firstName}{" "}
                {person.lastName}{" "}
                ({person.email})
            </p>
        </form>
    );
}

export function FormWithSpreadSyntax2() {
    const [person, setPerson] = useState({
        firstName: "Barbara",
        lastName: "Hepworth",
        email: "bhepworth@sculpture.com"
    });

    function handleChange(e) {
        setPerson({
            ...person,
            [e.target.name]: e.target.value
        });
    }

    return (
        <form className="test-section">
            <label>
                First name:
                <input
                    name="firstName"
                    value={person.firstName}
                    onChange={handleChange}
                />
            </label>
            <label>
                Last name:
                <input
                    name="lastName"
                    value={person.lastName}
                    onChange={handleChange}
                />
            </label>
            <label>
                Email:
                <input
                    name="email"
                    value={person.email}
                    onChange={handleChange}
                />
            </label>
            <p>
                {person.firstName}{" "}
                {person.lastName}{" "}
                ({person.email})
            </p>
        </form>
    );
}

export function FormWithNestedObject() {
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
        <>
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
                src={person.artwork.image}
                alt={person.artwork.title}
                style={{
                    maxWidth: "320px"
                }}
            />
        </>
    );
}

// ======================================== Challenge 1: Fix incorrect state updates ========================================

export function Scoreboard() {
    const [player, setPlayer] = useState({
        firstName: "Ranjani",
        lastName: "Shettar",
        score: 10,
    });

    console.log(player);

    function handlePlusClick() {
        // player.score++;
        setPlayer({
            ...player,
            score: player.score + 1,
        });
    }

    function handleFirstNameChange(e) {
        setPlayer({
            ...player,
            firstName: e.target.value,
        });
    }

    function handleLastNameChange(e) {
        setPlayer({
            // lastName: e.target.value
            ...player,
            lastName: e.target.value,
        });
    }

    return (
        <form
            className="test-section"
            onSubmit={e => e.preventDefault()}
        >
            <label>
                Score: <b>{player.score}</b>
                {" "}
                <button onClick={handlePlusClick}>
                    +1
                </button>
            </label>
            <label>
                First name:
                <input
                    value={player.firstName}
                    onChange={handleFirstNameChange}
                />
            </label>
            <label>
                Last name:
                <input
                    value={player.lastName}
                    onChange={handleLastNameChange}
                />
            </label>
        </form>
    );
}

// ==================================================== Challenge 2: Find and fix the mutation ====================================================

const initialPosition = {
    x: 0,
    y: 0
};

export function Canvas() {
    const [shape, setShape] = useState({
        color: "orange",
        position: initialPosition
    });

    function handleMove(dx, dy) {
        const x = shape.position.x + dx;
        const y = shape.position.y + dy;
        const newPosition = { x, y };

        setShape({
            ...shape,
            position: newPosition
        });
    }

    function handleColorChange(e) {
        setShape({
            ...shape,
            color: e.target.value
        });
    }

    return (
        <>
            <select
                value={shape.color}
                onChange={handleColorChange}
            >
                <option value="orange">orange</option>
                <option value="lightpink">lightpink</option>
                <option value="aliceblue">aliceblue</option>
            </select>
            <Background
                position={initialPosition}
            />
            <Box
                color={shape.color}
                position={shape.position}
                onMove={handleMove}
            >
                Drag me!
            </Box>
        </>
    );
}

function Box({
    children,
    color,
    position,
    onMove
}) {
    const [
        lastCoordinates,
        setLastCoordinates
    ] = useState(null);

    function handlePointerDown(e) {
        e.target.setPointerCapture(e.pointerId);
        setLastCoordinates({
            x: e.clientX,
            y: e.clientY,
        });
    }

    function handlePointerMove(e) {
        if (lastCoordinates) {
            setLastCoordinates({
                x: e.clientX,
                y: e.clientY,
            });
            const dx = e.clientX - lastCoordinates.x;
            const dy = e.clientY - lastCoordinates.y;
            onMove(dx, dy);
        }
    }

    function handlePointerUp(e) {
        setLastCoordinates(null);
    }

    return (
        <div
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            style={{
                width: 100,
                height: 100,
                cursor: "grab",
                backgroundColor: color,
                position: "absolute",
                border: "1px solid black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transform: `translate(
          ${position.x}px,
          ${position.y}px
        )`,
            }}
        >{children}</div>
    );
}

function Background({ position }) {
    return (
        <div style={{
            position: "absolute",
            transform: `translate(
          ${position.x}px,
          ${position.y}px
        )`,
            width: 250,
            height: 250,
            backgroundColor: "rgba(200, 200, 0, 0.2)",
        }} />
    );
};

// =========================================== Challenge 1: Fix a request counter ===========================================

export function RequestTracker() {
    const [pending, setPending] = useState(0);
    const [completed, setCompleted] = useState(0);

    async function handleClick() {
        let n = pending;
        n += 1;
        setPending(n);
        await delay(3000);
        n -= 1;
        setPending(n);
        setCompleted(completed + 1);
    }

    return (
        <>
            <h3>
                Pending: {pending}
            </h3>
            <h3>
                Completed: {completed}
            </h3>
            <button onClick={handleClick}>
                Buy
            </button>
        </>
    );
}

function delay(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}


function Card({ title, content, footer }) {
    return (
        <div style={
            {
                border: "1px solid #444",
                borderRadius: "12px",
                width: "20rem",
                padding: "1rem",
                backgroundColor: "#fff",
                boxShadow: "1px 1px 1px #0005"
            }
        }>
            <div>
                <h2 style={
                    {
                        color: "#555",
                        fontSize: "2rem"
                    }
                }>{title}</h2>
            </div>
            <div style={{ marginTop: "1rem" }}>
                <p style={{color: "#333"}}>{content}</p>
            </div>
            <div style={{ marginTop: "1rem" }}>
                <p style={{color: "#666"}}>{footer}</p>
            </div>
        </div>
    );
};

export function Test() {
    return (
        <Card
            title="Card Title"
            content="This is the content of the card."
            footer="This is the footer."
        />
    );
};

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