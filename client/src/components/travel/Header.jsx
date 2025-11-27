import { useState, useEffect } from "react";

function createConnection({ serverUrl, roomId }) {
    if (typeof serverUrl !== "string") {
        throw Error("Expected serverUrl to be a string. Received: " + serverUrl);
    }

    if (typeof roomId !== "string") {
        throw Error("Expected roomId to be a string. Received: " + roomId);
    }

    let intervalId;
    let messageCallback;
    
    return {
        connect() {
            console.log('Connecting to "' + roomId + '" room at ' + serverUrl + '...');
            clearInterval(intervalId);
            intervalId = setInterval(() => {
                console.log(intervalId);
                if (messageCallback) {
                    if (Math.random() > 0.5) {
                        messageCallback("hey");
                    } else {
                        messageCallback("lol");
                    }
                }
            }, 3000);
        },
        disconnect() {
            clearInterval(intervalId);
            messageCallback = null;
            console.log('Disconnected from "' + roomId + '" room at ' + serverUrl + '');
        },
        on(event, callback) {
            if (messageCallback) {
                throw Error("Cannot add the handler twice.");
            }
            if (event !== "message") {
                throw Error('Only "message" event is supported.');
            }
            messageCallback = callback;
        },
    };
}
  
export function ChatRoom({ roomId }) {
    const [serverUrl, setServerUrl] = useState("https://localhost:1234");

    useEffect(() => {
        const options = {
            serverUrl: serverUrl,
            roomId: roomId
        };

        const connection = createConnection(options);

        connection.on("message", (msg) => {
            showNotification("New message: " + msg);
        });

        connection.connect();

        return () => connection.disconnect();
    }, [roomId, serverUrl]);

    return ( 
        <div className="test-section">
            <label>
                Server URL:
                <input value={serverUrl} onChange={e => setServerUrl(e.target.value)} />
            </label>
            <h1>Welcome to the {roomId} room!</h1>
        </div>
    );
} 

function showNotification(msg) {
    console.log(msg);
} 

function ButtonFactory(type, label) {
    switch (type) {
        case "primary":
            return <PrimaryButton label={label} />;
        case "secondary":
            return <SecondaryButton label={label} />;
        case "danger":
            return <DangerButton label={label} />;
        default:
            return <button>{label}</button>;
    }
}

function DangerButton({ label }) {
    const styles = {
        padding: "1rem 1.5rem",
        color: "#fff",
        border: "1px solid",
        backgroundColor: "green"
    };

    return <button style={styles}>{label}</button>;
}

function PrimaryButton({ label }) {
    const styles = {
        padding: "1rem 1.5rem",
        color: "#fff",
        border: "1px solid",
        backgroundColor: "teal"
    };

    return <button style={styles}>{label}</button>;
}

function SecondaryButton({ label }) {
    const styles = {
        padding: "1rem 1.5rem",
        color: "#fff",
        border: "1px solid",
        backgroundColor: "purple"
    };

    return <button style={styles}>{label}</button>;
}
  
export function TestButtonFactory() {
    const buttonType1 = "primary";
    const buttonType2 = "secondary";
    const buttonType3 = "danger";
    const buttonLabel = "Click Me";

    return (
        <div className="test-section">
            {ButtonFactory(buttonType1, buttonLabel)}
            {ButtonFactory(buttonType2, buttonLabel)}
            {ButtonFactory(buttonType3, buttonLabel)}
        </div>
    )
}

// export function Header() {
//     return (
//         <header>
//             <img src="https://raw.githubusercontent.com/scrimba/learn-react/refs/heads/main/02.%20Data-Driven%20React/01.%20Section%202%20Intro/images/globe.png" alt="" />
//             <h1>my travel journal.</h1>
//         </header>
//     )
// }