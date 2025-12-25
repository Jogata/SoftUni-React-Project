import { createContext, useCallback, useContext, useEffect, useMemo, useReducer, useRef, useState } from "react";

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
                    backgroundColor: "transparent"
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

// =========================================== Challenge 3: Restore input values when switching between tabs ===========================================

function messengerReducerRestoreInput(state, action) {
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
                // message: action.message,
                messages: {
                    ...state.messages,
                    [state.selectedId]: action.message,
                },
            };
        }
        case "sent_message": {
            return {
                ...state,
                // message: "",
                messages: {
                    ...state.messages,
                    [state.selectedId]: "",
                },
            };
        }
        default: {
            throw Error("Unknown action: " + action.type);
        }
    }
}

const contactsRestoreInput = [
    { id: 0, name: "Taylor", email: "taylor@mail.com" },
    { id: 1, name: "Alice", email: "alice@mail.com" },
    { id: 2, name: "Bob", email: "bob@mail.com" },
];

const initialStateRestoreInput = {
    selectedId: 0,
    // message: "Hello",
    messages: {
        0: 'Hello, Taylor',
        1: 'Hello, Alice',
        2: 'Hello, Bob',
    },
};

export function MessengerRestoreInput() {
    const [state, dispatch] =
        useReducer(messengerReducerRestoreInput, initialStateRestoreInput);
    // const message = state.message;
    const message = state.messages[state.selectedId];
    const contact = contacts.find((c) => c.id === state.selectedId);

    return (
        <div style={{ display: "flex", gap: "2rem" }}>
            <ContactListRestoreInput
                contacts={contactsRestoreInput}
                selectedId={state.selectedId}
                dispatch={dispatch}
            />
            <ChatRestoreInput
                key={contact.id}
                message={message}
                contact={contact}
                dispatch={dispatch}
            />
        </div>
    );
}

function ContactListRestoreInput({ contacts, selectedId, dispatch }) {
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
                                : contact.name
                            }
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    );
}

function ChatRestoreInput({ contact, message, dispatch }) {
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
            <button
                onClick={() => {
                    alert(`Sending "${message}" to ${contact.email}`);
                    dispatch({
                        type: "sent_message",
                    });
                }}>
                Send to {contact.email}
            </button>
        </section>
    );
}

// ============================================================================================

export function Page() {
    return (
        <Section>
            <Heading level={1}>Page Title</Heading>
            <Heading level={2}>Heading</Heading>
            <Heading level={3}>Sub-heading</Heading>
            <Heading level={4}>Sub-sub-heading</Heading>
            <Heading level={5}>Sub-sub-sub-heading</Heading>
            <Heading level={6}>Sub-sub-sub-sub-heading</Heading>
        </Section>
    );
}

export function PageWithoutContext() {
    return (
        <Section>
            <Heading level={1}>PageWithoutContext Title</Heading>
            <Section>
                <Heading level={2}>Heading</Heading>
                <Heading level={2}>Heading</Heading>
                <Heading level={2}>Heading</Heading>
                <Section>
                    <Heading level={3}>Sub-heading</Heading>
                    <Heading level={3}>Sub-heading</Heading>
                    <Heading level={3}>Sub-heading</Heading>
                    <Section>
                        <Heading level={4}>Sub-sub-heading</Heading>
                        <Heading level={4}>Sub-sub-heading</Heading>
                        <Heading level={4}>Sub-sub-heading</Heading>
                    </Section>
                </Section>
            </Section>
        </Section>
    );
}

const LevelContext = createContext(1);

export function PageWithContext() {
    return (
        // <SectionWithContext level={1}>
        <SectionWithContext>
            <HeadingWithContext>PageWithContext Title</HeadingWithContext>
            {/* <SectionWithContext level={2}> */}
            <SectionWithContext>
                <HeadingWithContext>Heading</HeadingWithContext>
                <HeadingWithContext>Heading</HeadingWithContext>
                <HeadingWithContext>Heading</HeadingWithContext>
                {/* <SectionWithContext level={3}> */}
                <SectionWithContext>
                    <HeadingWithContext>Sub-heading</HeadingWithContext>
                    <HeadingWithContext>Sub-heading</HeadingWithContext>
                    <HeadingWithContext>Sub-heading</HeadingWithContext>
                    {/* <SectionWithContext level={4}> */}
                    <SectionWithContext>
                        <HeadingWithContext>Sub-sub-heading</HeadingWithContext>
                        <HeadingWithContext>Sub-sub-heading</HeadingWithContext>
                        <HeadingWithContext>Sub-sub-heading</HeadingWithContext>
                    </SectionWithContext>
                </SectionWithContext>
            </SectionWithContext>
        </SectionWithContext>
    )
}

function Section({ children }) {
    return (
        <section className="test-section">
            {children}
        </section>
    );
}

function SectionWithContext({ children }) {
    const level = useContext(LevelContext);

    return (
        <section className="test-section">
            <LevelContext.Provider value={level + 1}>
                {children}
            </LevelContext.Provider>
        </section>
    );
}

function Heading({ level, children }) {
    switch (level) {
        case 1:
            return <h1>{children}</h1>;
        case 2:
            return <h2>{children}</h2>;
        case 3:
            return <h3>{children}</h3>;
        case 4:
            return <h4>{children}</h4>;
        case 5:
            return <h5>{children}</h5>;
        case 6:
            return <h6>{children}</h6>;
        default:
            throw Error("Unknown level: " + level);
    }
}

function HeadingWithContext({ children }) {
    const level = useContext(LevelContext);

    switch (level) {
        case 1:
            return <h1>{children}</h1>;
        case 2:
            return <h2>{children}</h2>;
        case 3:
            return <h3>{children}</h3>;
        case 4:
            return <h4>{children}</h4>;
        case 5:
            return <h5>{children}</h5>;
        case 6:
            return <h6>{children}</h6>;
        default:
            throw Error("Unknown level: " + level);
    }
}

// =============================================================================================

export function Test() {
    console.log("test comp start");
    const [numbers, setNumbers] = useState([]);

    useEffect(() => {
        const id = setTimeout(() => {
            setNumbers([1, 2, 3]);
        }, 1000);

        return () => clearTimeout(id);
    }, [])

    console.log("numbers: " + numbers);

    const sum = useMemo(
        () => numbers.reduce((a, v) => a + v, 0),
        [numbers]
    );

    console.log("test comp render");

    const add = useCallback(() => {
        console.log(numbers);
        setNumbers(old => [
            ...old,
            old.length + 1
        ])
    }, [])

    return (
        <div className="test-section">
            {JSON.stringify(numbers)}
            <h1>{sum}</h1>
            <button onClick={add}>add</button>
        </div>
    )
}

// =============================================================================================

function Timer() {
    const [count, setCount] = useState(0);
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);
    const hoverRef = useRef(null);

    useEffect(() => {
        // let innerCount = 0;
        // let isMounted = true;

        const id = setInterval(() => {
            // innerCount++;
            // console.log("innerCount: " + innerCount);
            // setCount(count + 1);
            // setCount(innerCount);
            // if (isMounted) {
            //     setCount(old => old + 1);
            // }
            setCount(old => old + 1);
            // console.count("count");
        }, 1000);

        console.log(`Timer ${id} starts ${count}`);

        return () => {
            // isMounted = false;
            // console.log(isMounted);
            console.log("clearInterval");
            clearInterval(id);
        }
    }, [])

    // const onMouseEnter = useCallback(
    //     () => setIsTooltipVisible(true), 
    //     []
    // )

    // const onMouseLeave = useCallback(
    //     () => setIsTooltipVisible(false), 
    //     []
    // )

    useEffect(() => {
        console.log("Add Event Listeners");

        const onMouseEnter = () => setIsTooltipVisible(true);
        const onMouseLeave = () => setIsTooltipVisible(false);

        if (hoverRef.current) {
            hoverRef.current.addEventListener("pointerenter", onMouseEnter);
            hoverRef.current.addEventListener("pointerleave", onMouseLeave);
        }

        return () => {
            console.log("Remove Event Listeners");
            if (hoverRef.current) {
                hoverRef.current.removeEventListener("pointerenter", onMouseEnter);
                hoverRef.current.removeEventListener("pointerleave", onMouseLeave);
            }
        }
    }, [hoverRef.current])

    return (
        <div className="test-section">
            <h1>Timer: {count}</h1>
            <h2 ref={hoverRef}>Hover</h2>
            {isTooltipVisible && <span>Tooltip timer: {count}</span>}
            {/* <button onClick={() => setIsTooltipVisible(!isTooltipVisible)}>
                {isTooltipVisible ? "Hide" : "Show"}
            </button> */}
        </div>
    )
}

export function TestTimer() {
    const [index, setIndex] = useState(0);

    return (
        <div className="test-section">
            <Timer key={index} />
            <button
                onClick={() => setIndex(index + 1)}
            >reset timer</button>
        </div>
    )
}
// =============================================================================================

function IntermediateSection({ children, isFancy }) {
    const level = useContext(LevelContext);

    return (
        <section className={
            "test-section " +
            (isFancy ? "fancy" : "")
        }>
            <LevelContext.Provider value={level + 1}>
                {children}
            </LevelContext.Provider>
        </section>
    );
}

function IntermediateHeading({ children }) {
    const level = useContext(LevelContext);

    switch (level) {
        case 0:
            throw Error("Heading must be inside a Section!");
        case 1:
            return <h1>{children}</h1>;
        case 2:
            return <h2>{children}</h2>;
        case 3:
            return <h3>{children}</h3>;
        case 4:
            return <h4>{children}</h4>;
        case 5:
            return <h5>{children}</h5>;
        case 6:
            return <h6>{children}</h6>;
        default:
            throw Error("Unknown level: " + level);
    }
}

export function ProfilePage() {
    return (
        <IntermediateSection>
            <IntermediateHeading>
                My Profile
            </IntermediateHeading>
            <Post
                title="Hello traveller!"
                body="Read about my adventures."
            />
            <AllPosts />
        </IntermediateSection>
    );
}

function AllPosts() {
    return (
        <IntermediateSection>
            <IntermediateHeading>
                Posts
            </IntermediateHeading>
            <RecentPosts />
        </IntermediateSection>
    );
}

function RecentPosts() {
    return (
        <IntermediateSection>
            <IntermediateHeading>
                Recent Posts
            </IntermediateHeading>
            <Post
                title="Flavors of Lisbon"
                body="...those pastéis de nata!"
            />
            <Post
                title="Buenos Aires in the rhythm of tango"
                body="I loved it!"
            />
        </IntermediateSection>
    );
}

function Post({ title, body }) {
    return (
        <IntermediateSection isFancy={true}>
            <IntermediateHeading>
                {title}
            </IntermediateHeading>
            <p><i>{body}</i></p>
        </IntermediateSection>
    );
}

// =============================================================================================

function Signup() {
    const [formData, setFormData] = useState({
        username: "", 
        email: "", 
        password: "", 
    });

    function handleChange(e) {
        setFormData({
            ...formData, 
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("User registered: ", formData);
        alert("Signup successful");
    }

    return (
        <div className="test-section">
            <h2>Signup</h2>
            <form 
                onSubmit={handleSubmit}
                className="test-section"
                style={{border: "1px solid #555"}}
            >
                <input 
                    type="text" 
                    name="username" 
                    placeholder="Username" 
                    value={formData.username} 
                    onChange={handleChange} 
                    style={{marginBottom: "12px"}}
                    required
                />
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    style={{marginBottom: "12px"}}
                    required
                />
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    value={formData.password} 
                    onChange={handleChange} 
                    style={{marginBottom: "12px"}}
                    required
                />
                <button type="submit">
                    Signup
                </button>
            </form>
        </div>
    )
}

function Login() {
    const [credentials, setCredentials] = useState({
        email: "", 
        password: "", 
    });

    function handleChange(e) {
        setCredentials({
            ...credentials, 
            [e.target.name]: e.target.value
        })
    }

    function handleLogin(e) {
        e.preventDefault();

        if (credentials.email == "test") {
            if (credentials.password === "1234") {
                console.log("Login successful");
            } else {
                alert("Invalid credentials");
            }
        }
    }

    return (
        <div className="test-section">
            <h2>Login</h2>
            <form 
                onSubmit={handleLogin} 
                className="test-section"
                style={{border: "1px solid #555"}}
            >
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    value={credentials.email} 
                    onChange={handleChange} 
                    style={{marginBottom: "12px"}}
                    required
                />
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    value={credentials.password} 
                    onChange={handleChange} 
                    style={{marginBottom: "12px"}}
                    required
                />
                <button type="submit">
                    Login
                </button>
            </form>
        </div>
    )
}

export function TestAuth() {
    return (
        <div className="test-section">
            <h1 style={{textAlign: "center"}}>
                React Auth Demo
            </h1>
            <Signup />
            <hr />
            <Login />
        </div>
    )
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