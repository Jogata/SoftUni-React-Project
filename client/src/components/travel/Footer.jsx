import { useEffect, useState } from "react";

function createConnection(serverUrl, roomId) {
    return {
        connect() {
            console.warn('Connecting to "' + roomId + '" room at ' + serverUrl + '...');
        },
        disconnect() {
            console.error('Disconnected from "' + roomId + '" room at ' + serverUrl);
        }
    };
}

function useChatRoom({ serverUrl, roomId }) {
    useEffect(() => {
        const connection = createConnection(serverUrl, roomId);
        connection.connect();
        return () => {
            connection.disconnect();
        };
    }, [roomId, serverUrl]);
}

function ChatRoom({ roomId }) {
    const [serverUrl, setServerUrl] = useState("https://localhost:1234");

    useChatRoom({
        roomId: roomId,
        serverUrl: serverUrl
    });

    return (
        <>
            <label>
                Server URL:{" "}
                <input
                    value={serverUrl}
                    onChange={e => setServerUrl(e.target.value)}
                />
            </label>
            <h1>Welcome to the {roomId} room!</h1>
        </>
    );
}

export function TestChatRoom() {
    const [roomId, setRoomId] = useState("general");
    const [show, setShow] = useState(false);

    return (
        <div className="test-section">
            <label>
                Choose the chat room:{" "}
                <select
                    value={roomId}
                    onChange={e => setRoomId(e.target.value)}
                >
                    <option value="general">general</option>
                    <option value="travel">travel</option>
                    <option value="music">music</option>
                </select>
            </label>
            <button onClick={() => setShow(!show)}>
                {show ? "Close chat" : "Open chat"}
            </button>
            {show && <hr />}
            {show && <ChatRoom roomId={roomId} />}
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
 