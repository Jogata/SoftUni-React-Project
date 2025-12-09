import { useEffect, useState } from "react";

export function TestForm() {
    const [answer, setAnswer] = useState("");
    const [error, setError] = useState(null);
    const [status, setStatus] = useState("typing");

    if (status === "success") {
        return <h1>That"s right!</h1>
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus("submitting");
        try {
            await submitForm(answer);
            setStatus("success");
        } catch (err) {
            setStatus("typing");
            setError(err);
        }
    }

    function handleTextareaChange(e) {
        setAnswer(e.target.value);
    }

    return (
        <>
            <h2>City quiz</h2>
            <p>
                In which city is there a billboard
                that turns air into drinkable water?
            </p>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={answer}
                    onChange={handleTextareaChange}
                    disabled={status === "submitting"}
                />
                <br />
                <button disabled={
                    answer.length === 0 ||
                    status === "submitting"
                }>
                    Submit
                </button>
                {error !== null &&
                    <p className="Error">
                        {error.message}
                    </p>
                }
            </form>
        </>
    );
}

function submitForm(answer) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let shouldError = answer.toLowerCase() !== "lima";
            if (shouldError) {
                reject(new Error("Wrong answer. Try again!"));
            } else {
                resolve();
            }
        }, 1500);
    });
}

// =====================================================================================

function StorybookForm({ status }) {
    if (status === "success") {
        return <h1>That"s right!</h1>
    }

    return (
        <form>
            <textarea disabled={
                status === "submitting"
            } />
            <br />
            <button disabled={
                status === "empty" ||
                status === "submitting"
            }>
                Submit
            </button>
            {status === "error" &&
                <p className="Error">
                    Wrong answer. Try again!
                </p>
            }
        </form>
    );
}

export function Storybooks() {
    let statuses = [
        "empty",
        "typing",
        "submitting",
        "success",
        "error",
    ];

    return ( 
        <>
            {statuses.map(status => (
                <section key={status}>
                    <h4>Form ({status}):</h4>
                    <StorybookForm status={status} />
                </section>
            ))}
        </>
    );
} 

// ==================================== Challenge 1: Add and remove a CSS class ====================================

export function Picture() {
    const [activeElement, setActiveElement] = useState("background");

    let bgClasses = "background test-section";
    let picClasses = "picture";

    if (activeElement.includes("background")) {
        bgClasses += " active";
    } else {
        picClasses += " active";
    }

    function activate(e, element) {
        console.log(e);
        e.stopPropagation();
        setActiveElement(element);
    }

    return (
        <div className={bgClasses} onClick={(e) => activate(e, "background")}>
            <img
                className={picClasses}
                style={{maxWidth: "320px"}}
                alt="Rainbow houses in Kampung Pelangi, Indonesia"
                src="https://i.imgur.com/5qwVYb1.jpeg"
                onClick={(e) => activate(e, "picture")}
            />
        </div>
    );
}

export function Picture2() {
    const [isActive, setIsActive] = useState(false);

    if (isActive) {
        return (
            <div
                className="test-section background"
                onClick={() => setIsActive(false)}
            >
                <img
                    className="picture active"
                    style={{maxWidth: "320px"}}
                    alt="Rainbow houses in Kampung Pelangi, Indonesia"
                    src="https://i.imgur.com/5qwVYb1.jpeg"
                    onClick={e => e.stopPropagation()}
                />
            </div>
        );
    }

    return (
        <div className="test-section background active">
            <img
                className="picture"
                style={{maxWidth: "320px"}}
                alt="Rainbow houses in Kampung Pelangi, Indonesia"
                src="https://i.imgur.com/5qwVYb1.jpeg"
                onClick={() => setIsActive(true)}
            />
        </div>
    );
}

// ======================================================================================

export function FeedbackForm() {
    const [text, setText] = useState("");
    const [status, setStatus] = useState("typing");

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus("sending");
        await sendMessage(text);
        setStatus("sent");
    }

    const isSending = status === "sending";
    const isSent = status === "sent";

    if (isSent) {
        return <h1>Thanks for feedback!</h1>
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>How was your stay at The Prancing Pony?</p>
            <textarea
                disabled={isSending}
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <br />
            <button
                disabled={isSending}
                type="submit"
            >
                Send
            </button>
            {isSending && <p>Sending...</p>}
        </form>
    );
}

function sendMessage(text) {
    return new Promise(resolve => {
        setTimeout(resolve, 2000);
    });
}

// ======================================================================================

export function FormWithRedundantState() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    //   const [fullName, setFullName] = useState("");
    const fullName = `${firstName} ${lastName}`;

    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
        // setFullName(e.target.value + " " + lastName);
    }

    function handleLastNameChange(e) {
        setLastName(e.target.value);
        // setFullName(firstName + " " + e.target.value);
    }

    return (
        <>
            <h2>Let"s check you in</h2>
            <label>
                First name:{" "}
                <input
                    value={firstName}
                    onChange={handleFirstNameChange}
                />
            </label>
            <label>
                Last name:{" "}
                <input
                    value={lastName}
                    onChange={handleLastNameChange}
                />
            </label>
            <p>
                Your ticket will be issued to: <b>{fullName}</b>
            </p>
        </>
    );
}

// ======================================================================================

const initialTravelPlan = {
    id: 0,
    title: "(Root)",
    childPlaces: [{
        id: 1,
        title: "Earth",
        childPlaces: [{
            id: 2,
            title: "Africa",
            childPlaces: [{
                id: 3,
                title: "Botswana",
                childPlaces: []
            }, {
                id: 4,
                title: "Egypt",
                childPlaces: []
            }, {
                id: 5,
                title: "Kenya",
                childPlaces: []
            }, {
                id: 6,
                title: "Madagascar",
                childPlaces: []
            }, {
                id: 7,
                title: "Morocco",
                childPlaces: []
            }, {
                id: 8,
                title: "Nigeria",
                childPlaces: []
            }, {
                id: 9,
                title: "South Africa",
                childPlaces: []
            }]
        }, {
            id: 10,
            title: "Americas",
            childPlaces: [{
                id: 11,
                title: "Argentina",
                childPlaces: []
            }, {
                id: 12,
                title: "Brazil",
                childPlaces: []
            }, {
                id: 13,
                title: "Barbados",
                childPlaces: []
            }, {
                id: 14,
                title: "Canada",
                childPlaces: []
            }, {
                id: 15,
                title: "Jamaica",
                childPlaces: []
            }, {
                id: 16,
                title: "Mexico",
                childPlaces: []
            }, {
                id: 17,
                title: "Trinidad and Tobago",
                childPlaces: []
            }, {
                id: 18,
                title: "Venezuela",
                childPlaces: []
            }]
        }, {
            id: 19,
            title: "Asia",
            childPlaces: [{
                id: 20,
                title: "China",
                childPlaces: []
            }, {
                id: 21,
                title: "India",
                childPlaces: []
            }, {
                id: 22,
                title: "Singapore",
                childPlaces: []
            }, {
                id: 23,
                title: "South Korea",
                childPlaces: []
            }, {
                id: 24,
                title: "Thailand",
                childPlaces: []
            }, {
                id: 25,
                title: "Vietnam",
                childPlaces: []
            }]
        }, {
            id: 26,
            title: "Europe",
            childPlaces: [{
                id: 27,
                title: "Croatia",
                childPlaces: [],
            }, {
                id: 28,
                title: "France",
                childPlaces: [],
            }, {
                id: 29,
                title: "Germany",
                childPlaces: [],
            }, {
                id: 30,
                title: "Italy",
                childPlaces: [],
            }, {
                id: 31,
                title: "Portugal",
                childPlaces: [],
            }, {
                id: 32,
                title: "Spain",
                childPlaces: [],
            }, {
                id: 33,
                title: "Turkey",
                childPlaces: [],
            }]
        }, {
            id: 34,
            title: "Oceania",
            childPlaces: [{
                id: 35,
                title: "Australia",
                childPlaces: [],
            }, {
                id: 36,
                title: "Bora Bora (French Polynesia)",
                childPlaces: [],
            }, {
                id: 37,
                title: "Easter Island (Chile)",
                childPlaces: [],
            }, {
                id: 38,
                title: "Fiji",
                childPlaces: [],
            }, {
                id: 39,
                title: "Hawaii (the USA)",
                childPlaces: [],
            }, {
                id: 40,
                title: "New Zealand",
                childPlaces: [],
            }, {
                id: 41,
                title: "Vanuatu",
                childPlaces: [],
            }]
        }]
    }, {
        id: 42,
        title: "Moon",
        childPlaces: [{
            id: 43,
            title: "Rheita",
            childPlaces: []
        }, {
            id: 44,
            title: "Piccolomini",
            childPlaces: []
        }, {
            id: 45,
            title: "Tycho",
            childPlaces: []
        }]
    }, {
        id: 46,
        title: "Mars",
        childPlaces: [{
            id: 47,
            title: "Corn Town",
            childPlaces: []
        }, {
            id: 48,
            title: "Green Hill",
            childPlaces: []
        }]
    }]
};

function PlaceTree({ place }) {
    const childPlaces = place.childPlaces;

    return (
        <li>
            {place.title}
            {childPlaces.length > 0 && (
                <ol>
                    {childPlaces.map(place => (
                        <PlaceTree key={place.id} place={place} />
                    ))}
                </ol>
            )}
        </li>
    );
}

export function TravelPlan() {
    const [plan, setPlan] = useState(initialTravelPlan);
    const planets = plan.childPlaces;
    
    return (
        <div className="test-section">
            <h2>Places to visit</h2>
            <ol>
                {planets.map(place => (
                    <PlaceTree key={place.id} place={place} />
                ))}
            </ol>
        </div>
    );
}

// ======================================================================================

const flatInitialTravelPlan = {
    0: {
        id: 0,
        title: '(Root)',
        childIds: [1, 42, 46],
    },
    1: {
        id: 1,
        title: 'Earth',
        childIds: [2, 10, 19, 26, 34]
    },
    2: {
        id: 2,
        title: 'Africa',
        childIds: [3, 4, 5, 6, 7, 8, 9]
    },
    3: {
        id: 3,
        title: 'Botswana',
        childIds: []
    },
    4: {
        id: 4,
        title: 'Egypt',
        childIds: []
    },
    5: {
        id: 5,
        title: 'Kenya',
        childIds: []
    },
    6: {
        id: 6,
        title: 'Madagascar',
        childIds: []
    },
    7: {
        id: 7,
        title: 'Morocco',
        childIds: []
    },
    8: {
        id: 8,
        title: 'Nigeria',
        childIds: []
    },
    9: {
        id: 9,
        title: 'South Africa',
        childIds: []
    },
    10: {
        id: 10,
        title: 'Americas',
        childIds: [11, 12, 13, 14, 15, 16, 17, 18],
    },
    11: {
        id: 11,
        title: 'Argentina',
        childIds: []
    },
    12: {
        id: 12,
        title: 'Brazil',
        childIds: []
    },
    13: {
        id: 13,
        title: 'Barbados',
        childIds: []
    },
    14: {
        id: 14,
        title: 'Canada',
        childIds: []
    },
    15: {
        id: 15,
        title: 'Jamaica',
        childIds: []
    },
    16: {
        id: 16,
        title: 'Mexico',
        childIds: []
    },
    17: {
        id: 17,
        title: 'Trinidad and Tobago',
        childIds: []
    },
    18: {
        id: 18,
        title: 'Venezuela',
        childIds: []
    },
    19: {
        id: 19,
        title: 'Asia',
        childIds: [20, 21, 22, 23, 24, 25],
    },
    20: {
        id: 20,
        title: 'China',
        childIds: []
    },
    21: {
        id: 21,
        title: 'India',
        childIds: []
    },
    22: {
        id: 22,
        title: 'Singapore',
        childIds: []
    },
    23: {
        id: 23,
        title: 'South Korea',
        childIds: []
    },
    24: {
        id: 24,
        title: 'Thailand',
        childIds: []
    },
    25: {
        id: 25,
        title: 'Vietnam',
        childIds: []
    },
    26: {
        id: 26,
        title: 'Europe',
        childIds: [27, 28, 29, 30, 31, 32, 33],
    },
    27: {
        id: 27,
        title: 'Croatia',
        childIds: []
    },
    28: {
        id: 28,
        title: 'France',
        childIds: []
    },
    29: {
        id: 29,
        title: 'Germany',
        childIds: []
    },
    30: {
        id: 30,
        title: 'Italy',
        childIds: []
    },
    31: {
        id: 31,
        title: 'Portugal',
        childIds: []
    },
    32: {
        id: 32,
        title: 'Spain',
        childIds: []
    },
    33: {
        id: 33,
        title: 'Turkey',
        childIds: []
    },
    34: {
        id: 34,
        title: 'Oceania',
        childIds: [35, 36, 37, 38, 39, 40, 41],
    },
    35: {
        id: 35,
        title: 'Australia',
        childIds: []
    },
    36: {
        id: 36,
        title: 'Bora Bora (French Polynesia)',
        childIds: []
    },
    37: {
        id: 37,
        title: 'Easter Island (Chile)',
        childIds: []
    },
    38: {
        id: 38,
        title: 'Fiji',
        childIds: []
    },
    39: {
        id: 40,
        title: 'Hawaii (the USA)',
        childIds: []
    },
    40: {
        id: 40,
        title: 'New Zealand',
        childIds: []
    },
    41: {
        id: 41,
        title: 'Vanuatu',
        childIds: []
    },
    42: {
        id: 42,
        title: 'Moon',
        childIds: [43, 44, 45]
    },
    43: {
        id: 43,
        title: 'Rheita',
        childIds: []
    },
    44: {
        id: 44,
        title: 'Piccolomini',
        childIds: []
    },
    45: {
        id: 45,
        title: 'Tycho',
        childIds: []
    },
    46: {
        id: 46,
        title: 'Mars',
        childIds: [47, 48]
    },
    47: {
        id: 47,
        title: 'Corn Town',
        childIds: []
    },
    48: {
        id: 48,
        title: 'Green Hill',
        childIds: []
    }
};

function FlatPlaceTree({ id, placesById }) {
    const place = placesById[id];
    const childIds = place.childIds;

    return (
        <li>
            {place.title}
            {childIds.length > 0 && (
                <ol>
                    {childIds.map(childId => (
                        <FlatPlaceTree
                            key={childId}
                            id={childId}
                            placesById={placesById}
                        />
                    ))}
                </ol>
            )}
        </li>
    );
}

export function FlatTravelPlan() {
    const [plan, setPlan] = useState(flatInitialTravelPlan);
    const root = plan[0];
    const planetIds = root.childIds;

    return (
        <div className="test-section">
            <h2>Places to visit</h2>
            <ol>
                {planetIds.map(id => (
                    <FlatPlaceTree
                        key={id}
                        id={id}
                        placesById={plan}
                    />
                ))}
            </ol>
        </div>
    );
}

// ======================================================================================

export function CompleteTravelPlan() {
    const [plan, setPlan] = useState(flatInitialTravelPlan);

    function handleComplete(parentId, childId) {
        const parent = plan[parentId];

        const nextParent = {
            ...parent,
            childIds: parent.childIds
                .filter(id => id !== childId)
        };

        setPlan({
            ...plan,
            [parentId]: nextParent
        });
    }

    const root = plan[0];
    const planetIds = root.childIds;

    return (
        <div className="test-section">
            <h2>Places to visit</h2>
            <ol>
                {planetIds.map(id => (
                    <CompletePlaceTree
                        key={id}
                        id={id}
                        parentId={0}
                        placesById={plan}
                        onComplete={handleComplete}
                    />
                ))}
            </ol>
        </div>
    );
}

function CompletePlaceTree({
    id,
    parentId,
    placesById,
    onComplete 
}) {
    const place = placesById[id];
    const childIds = place.childIds;

    return (
        <li>
            {place.title}
            <button onClick={() => {
                onComplete(parentId, id);
            }}>
                Complete
            </button>
            {childIds.length > 0 &&
                <ol>
                    {childIds.map(childId => (
                        <CompletePlaceTree
                            key={childId}
                            id={childId}
                            parentId={id}
                            placesById={placesById}
                            onComplete={onComplete}
                        />
                    ))}
                </ol>
            }
        </li>
    );
}

// ========================================= Challenge 1: Fix a component that’s not updating ==========================================

function Clock(props) {
    const [color, setColor] = useState(props.color);
    // console.log("clock");

    return (
        <h1 style={{ color: color }}>
            {props.time}
        </h1>
    );
}

function ColorPicker({ color, setColor }) {
    // console.log("colorpicker");
    return (
        <>
            <label 
                htmlFor="color" 
                style={{
                    fontSize: "2rem", 
                    fontWeight: "bold"
                }}
            >Pick a color: </label>
            <select
                name="color"
                id="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                style={{
                    padding: "0.25em 0.5em", 
                    fontSize: "1.2rem", 
                    fontFamily: "inherit", 
                    fontWeight: "bold", 
                    textTransform: "capitalize"
                }}
            >
                <option value="lightcoral">lightcoral</option>
                <option value="midnightblue">midnightblue</option>
                <option value="rebeccapurple">rebeccapurple</option>
            </select>
        </>
    )
}

export function TestClock() {
    const [time, setTime] = useState("00:00:00");
    const [color, setColor] = useState("lightcoral");

    useEffect(() => {
        console.log("effect");
        const id = setInterval(() => {
            // console.count();
            // console.log(id);
            setTime(old => {
                const newTime = new Date();
                // console.log(newTime);
                const h = newTime.getHours();
                const m = newTime.getMinutes();
                const s = newTime.getSeconds();
                return `${h}:${m}:${s}`;
            })
        }, 1000);

        return () => clearInterval(id);
    }, [])

    return (
        <div className="test-section">
            <ColorPicker color={color} setColor={setColor} />
            <Clock time={time} color={color} key={color} />
        </div>
    )
}

// ====================================== Challenge 2: Fix a broken packing list ================================================

let nexPackingListtId = 3;

const initialItems = [
    { id: 0, title: 'Warm socks', packed: true },
    { id: 1, title: 'Travel journal', packed: false },
    { id: 2, title: 'Watercolors', packed: false },
];

export function PackingListSection() {
    const [items, setItems] = useState(initialItems);
    // const [total, setTotal] = useState(3);
    // const [packed, setPacked] = useState(1);

    const total = items.length;
    const packed = items
      .filter(item => item.packed)
      .length;

    function handleAddItem(title) {
        // setTotal(total + 1);
        setItems([
            ...items,
            {
                id: nexPackingListtId++,
                title: title,
                packed: false
            }
        ]);
    }

    function handleChangeItem(nextItem) {
        // if (nextItem.packed) {
        //     setPacked(packed + 1);
        // } else {
        //     setPacked(packed - 1);
        // }
        setItems(items.map(item => {
            if (item.id === nextItem.id) {
                return nextItem;
            } else {
                return item;
            }
        }));
    }

    function handleDeleteItem(itemId) {
        // setTotal(total - 1);
        setItems(
            items.filter(item => item.id !== itemId)
        );
    }

    return (
        <div className="test-section">
            <AddItem
                onAddItem={handleAddItem}
            />
            <PackingList
                items={items}
                onChangeItem={handleChangeItem}
                onDeleteItem={handleDeleteItem}
            />
            <hr />
            <b style={{fontSize: "2rem"}}>{packed} out of {total} packed!</b>
        </div>
    );
}

function AddItem({ onAddItem }) {
    const [value, setValue] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        onAddItem(value);
    }

    return (
        <>
            <form style={
                {
                    display: "flex", 
                    maxWidth: "500px"
                }
            }>
                <input 
                    type="text" 
                    onChange={e => setValue(e.target.value)} 
                    style={{
                        flex: 1, 
                        marginRight: "0.5rem", 
                        padding: "0.5rem", 
                        fontSize: "1.2rem"
                    }}
                />
                <button type="submit" onClick={handleSubmit}>Add</button>
            </form>
        </>
    )
}

function PackingList({ items, onDeleteItem, onChangeItem }) {
    // console.log(items);
    return (
        <ul>
            {/* <h1>list</h1> */}
            {items.map(item => {
                return (
                    <li
                        className="item"
                        key={item.id}
                        style={{
                            maxWidth: "500px", 
                            display: "flex",
                            gap: "1rem",
                            alignItems: "center"
                        }}
                    >
                        <label style={{
                            flex: 1,
                            display: "flex",
                            gap: "1rem",
                            alignItems: "center", 
                            fontSize: "2rem"
                        }}>
                            <input
                                type="checkbox"
                                checked={item.packed}
                                onChange={() => onChangeItem({ ...item, packed: !item.packed })}
                            />
                            {item.title}
                        </label>
                        <button
                            onClick={() => onDeleteItem(item.id)}
                        >Delete</button>
                    </li>
                )
            })}
        </ul>
    )
}

// ======================================================================================

const initialLetters = [{
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
    const [letters, setLetters] = useState(initialLetters);
    // const [highlightedLetter, setHighlightedLetter] = useState({});

    // function handleHover(letter) {
    //     setHighlightedLetter(letter);
    // }

    function handleStar(starred) {
        // console.log(highlightedLetter);
        setLetters(letters.map(letter => {
            if (letter.id === starred.id) {
                return {
                    ...letter,
                    isStarred: !letter.isStarred
                };
            } else {
                return letter;
            }
        }));
    }

    return (
        <div className="test-section">
            <h2>Inbox</h2>
            <ul>
                {letters.map(letter => (
                    <Letter
                        key={letter.id}
                        letter={letter}
                        // isHighlighted={
                        //     letter.id === highlightedLetter.id
                        // }
                        // onHover={handleHover}
                        onToggleStar={handleStar}
                    />
                ))}
            </ul>
        </div>
    );
}

function Letter({
    letter,
    // isHighlighted,
    // onHover,
    onToggleStar,
}) {
    const [isHighlighted, setIsHighlighted] = useState(false);
            console.log(isHighlighted, letter.id);

    function handleOnMouseEnter() {
        // console.log(isHighlighted, letter.id);
        setIsHighlighted(true);
    }

    function handleOnMouseLeave() {
        // console.log(isHighlighted, letter.id);
        setIsHighlighted(false);
    }

    // console.log(isHighlighted);
    return (
        <li
            className={
                isHighlighted ? "highlighted" : ""
            }
            onFocus={() => {
                // onHover(letter);
                // handleHover()
                // console.log("focused");
                handleOnMouseEnter();
            }}
            onBlur={() => {
                handleOnMouseLeave();
            }}
            onMouseEnter={() => {
                // onHover(letter);
                // handleHover();
                handleOnMouseEnter();
            }}
            onMouseLeave={() => {
                // handleHover();
                handleOnMouseLeave();
            }}
        >
            <button onClick={() => {
                onToggleStar(letter);
            }}>
                {letter.isStarred ? "Unstar" : "Star"}
            </button>
            {letter.subject}
        </li>
    )
}

// ======================================================================================

// export function Header() {
//     return (
//         <header>
//             <img src="https://raw.githubusercontent.com/scrimba/learn-react/refs/heads/main/02.%20Data-Driven%20React/01.%20Section%202%20Intro/images/globe.png" alt="" />
//             <h1>my travel journal.</h1>
//         </header>
//     )
// }