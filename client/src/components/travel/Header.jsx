import { useState } from "react";

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

// export function Header() {
//     return (
//         <header>
//             <img src="https://raw.githubusercontent.com/scrimba/learn-react/refs/heads/main/02.%20Data-Driven%20React/01.%20Section%202%20Intro/images/globe.png" alt="" />
//             <h1>my travel journal.</h1>
//         </header>
//     )
// }