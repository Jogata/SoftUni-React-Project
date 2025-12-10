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