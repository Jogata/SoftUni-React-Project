import { useReducer } from "react";

function tasksReducer(tasks, action) {
    switch (action.type) {
        case "added": {
            return [
                ...tasks,
                {
                    id: action.id,
                    text: action.text,
                    done: false,
                },
            ];
        }
        case "changed": {
            return tasks.map((t) => {
                if (t.id === action.task.id) {
                    return action.task;
                } else {
                    return t;
                }
            });
        }
        case "deleted": {
            return tasks.filter((t) => t.id !== action.id);
        }
        default: {
            throw Error("Unknown action: " + action.type);
        }
    }
}

let initialState = [];

let actions = [
    { type: "added", id: 1, text: "Visit Kafka Museum" },
    { type: "added", id: 2, text: "Watch a puppet show" },
    { type: "deleted", id: 1 },
    { type: "added", id: 3, text: "Lennon Wall pic" },
];

let finalState = actions.reduce(tasksReducer, initialState);

export function Output() {
    return (
        <pre>{JSON.stringify(finalState, null, 2)}</pre>
    )
}

// ============================================== Challenge 1: Dispatch actions from event handlers ==============================================

const contacts = [
    { id: 0, name: "Taylor", email: "taylor@mail.com" },
    { id: 1, name: "Alice", email: "alice@mail.com" },
    { id: 2, name: "Bob", email: "bob@mail.com" },
];

function messengerReducer(state, action) {
    switch (action.type) {
        case "changed_selection": {
            return {
                ...state,
                selectedId: action.contactId,
                message: "",
            };
        }
        case "edited_message": {
            return {
                ...state,
                message: action.message,
            };
        }
        default: {
            throw Error("Unknown action: " + action.type);
        }
    }
}

const initialMessengerState = {
    selectedId: 0,
    message: "Hello",
};

export function Messenger() {
    const [state, dispatch] =
        useReducer(messengerReducer, initialMessengerState);
    const message = state.message;
    const contact = contacts.find((c) => c.id === state.selectedId);

    return (
        <div style={{ display: "flex", gap: "2rem" }}>
            <ContactList
                contacts={contacts}
                selectedId={state.selectedId}
                dispatch={dispatch}
            />
            <Chat
                key={contact.id}
                message={message}
                contact={contact}
                dispatch={dispatch}
            />
        </div>
    );
}

function ContactList({ contacts, selectedId, dispatch }) {
    return (
        <section>
            <ul>
                {contacts.map((contact) => (
                    <li key={contact.id}>
                        <button
                            style={{ width: "100%" }}
                            onClick={() => {
                                dispatch({
                                    type: "changed_selection",
                                    contactId: contact.id
                                })
                            }}>
                            {selectedId === contact.id ?
                                <b>{contact.name}</b> :
                                contact.name
                            }
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    );
}

function Chat({ contact, message, dispatch }) {
    return (
        <section style={{ minWidth: "320px" }}>
            <textarea
                rows={10}
                value={message}
                placeholder={"Chat to " + contact.name}
                onChange={(e) => {
                    dispatch({
                        type: "edited_message",
                        message: e.target.value
                    })
                }}
                style={{
                    width: "100%",
                    padding: "0.5rem",
                    color: "#ccc",
                    backgroundColor: 'transparent'
                }}
            />
            <br />
            <button>Send to {contact.email}</button>
        </section>
    );
}

// ============================================ Challenge 2: Clear the input on sending a message =================================================

const initialStateClearInput = {
    selectedId: 0,
    message: "Hello",
};

function messengerReducerClearInput(state, action) {
    switch (action.type) {
        case "changed_selection": {
            return {
                ...state,
                selectedId: action.contactId,
                message: "",
            };
        }
        case "edited_message": {
            return {
                ...state,
                message: action.message,
            };
        }
        case "sent_message": {
            return {
              ...state,
              message: "",
            };
        }
        default: {
            throw Error("Unknown action: " + action.type);
        }
    }
}

const contactsClearInput = [
    { id: 0, name: "Taylor", email: "taylor@mail.com" },
    { id: 1, name: "Alice", email: "alice@mail.com" },
    { id: 2, name: "Bob", email: "bob@mail.com" },
];

export function ClearInputMessenger() {
    const [state, dispatch] =
        useReducer(messengerReducerClearInput, initialStateClearInput);
    const message = state.message;
    const contact = contactsClearInput.find((c) => c.id === state.selectedId);

    return (
        <div style={{ display: "flex", gap: "2rem" }}>
            <ContactListClearInput
                contacts={contactsClearInput}
                selectedId={state.selectedId}
                dispatch={dispatch}
            />
            <ChatClearInput
                key={contact.id}
                message={message}
                contact={contact}
                dispatch={dispatch}
            />
        </div>
    );
}

function ContactListClearInput({ contacts, selectedId, dispatch }) {
    return (
        <section>
            <ul>
                {contacts.map((contact) => (
                    <li key={contact.id}>
                        <button
                            style={{ width: "100%" }}
                            onClick={() => {
                                dispatch({
                                    type: "changed_selection",
                                    contactId: contact.id,
                                });
                            }}>
                            {selectedId === contact.id 
                                ? <b>{contact.name}</b> 
                                : contact.name}
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    );
}

function ChatClearInput({ contact, message, dispatch }) {
    return (
        <section style={{ minWidth: "320px" }}>
            <textarea
                value={message}
                rows={10}
                placeholder={"Chat to " + contact.name}
                onChange={(e) => {
                    dispatch({
                        type: "edited_message",
                        message: e.target.value,
                    });
                }}
                style={{
                    width: "100%",
                    padding: "0.5rem",
                    color: "#ccc",
                    backgroundColor: 'transparent'
                }}
            />
            <br />
            <button onClick={() => {
                alert(`${contact.email}, ${message}`);
                // dispatch({
                //     type: "changed_selection", 
                //     contactId: contact.id,
                // })
                // dispatch({
                //     type: "edited_message", 
                //     message: ""
                // })
                dispatch({
                    type: "sent_message", 
                    message: ""
                })
            }}>Send to {contact.email}</button>
        </section>
    );
}

// =============================================================================================

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