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
        return <h1>That's right!</h1>
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

// export function Header() {
//     return (
//         <header>
//             <img src="https://raw.githubusercontent.com/scrimba/learn-react/refs/heads/main/02.%20Data-Driven%20React/01.%20Section%202%20Intro/images/globe.png" alt="" />
//             <h1>my travel journal.</h1>
//         </header>
//     )
// }