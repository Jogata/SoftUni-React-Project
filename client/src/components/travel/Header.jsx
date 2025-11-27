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

// export function Header() {
//     return (
//         <header>
//             <img src="https://raw.githubusercontent.com/scrimba/learn-react/refs/heads/main/02.%20Data-Driven%20React/01.%20Section%202%20Intro/images/globe.png" alt="" />
//             <h1>my travel journal.</h1>
//         </header>
//     )
// }