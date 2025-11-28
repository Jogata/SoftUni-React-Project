import { useEffectEvent } from "react";
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

const CardFactory = ({ type, data }) => {
    switch (type) {
        case "image":
            return <ImageCard imageSrc={data.src} altText={data.alt} />;
        case "text":
            return <TextCard text={data.text} />;
        case "profile":
            return (
                <ProfileCard name={data.name} bio={data.bio} avatar={data.avatar} />
            );
        default:
            return <div>Unknown card type</div>;
    }
};

function ImageCard({ imageSrc, altText }) {
    const styles = {
        maxWidth: "400px", 
        margin: "1rem",
        padding: "1rem",
        color: "#fff",
        border: "1px solid",
        borderRadius: "12px"
    };

    return (
        <div style={styles}>
            <img src={imageSrc} alt={altText} />
        </div>
    )
}

function ProfileCard({ name, bio, avatar }) {
    const styles = {
        maxWidth: "400px", 
        margin: "1rem",
        padding: "1rem",
        color: "#fff",
        border: "1px solid",
        borderRadius: "12px"
    };

    return (
        <div style={styles}>
            <img src={avatar} alt={name} />
            <h3>{name}</h3>
            <p>{bio}</p>
        </div>
    );
}

function TextCard({ text }) {
    const styles = {
        maxWidth: "400px", 
        margin: "1rem",
        padding: "1rem",
        color: "#fff",
        border: "1px solid",
        borderRadius: "12px"
    };

    return (
        <div style={styles}>
            <p>{text}</p>
        </div>
    );
}

export function TestCardFactory() {
    const imageCardData = {
        src: "https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=3903&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Placeholder Image",
    };

    const textCardData = {
        text: "This is a simple text card.",
    };

    const profileCardData = {
        name: "John Doe",
        bio: "A software engineer with a passion for React.",
        avatar:
            "https://images.unsplash.com/photo-1487349703519-90c8e4f426a7?q=80&w=3853&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    };

    return (
        <div className="test-section">
            <h1 style={{textAlign: "center"}}>
                Factory Design Pattern in React
            </h1>
            <div className="test-section">
                <CardFactory type="image" data={imageCardData} />
                <CardFactory type="text" data={textCardData} />
                <CardFactory type="profile" data={profileCardData} />
            </div>
        </div>
    )
}

function ComponentFactory(config) {
    switch (config.type) {
        case "button":
            return <Button {...config.props} />;
        case "card":
            return <Card {...config.props} />;
        case "modal":
            return <Modal {...config.props} />;
        default:
            throw new Error("Unknown component type");
    }
}

function Button({ label, onClick, disabled }) {
    return (
        <button onClick={onClick} disabled={disabled}>
            {label}
        </button>
    );
}

function Card({ title, content, footer }) {
    const styles = {
        maxWidth: "400px", 
        margin: "1rem",
        padding: "1rem",
        color: "#fff",
        textAlign: "center",
        border: "1px solid",
        borderRadius: "12px"
    };

    return (
        <div className="card" style={styles}>
            <h3>{title}</h3>
            <p>{content}</p>
            <footer>{footer}</footer>
        </div>
    );
}

function Modal({ header, content, footer }) {
    const styles = {
        maxWidth: "400px", 
        margin: "1rem",
        padding: "1rem",
        color: "#fff",
        textAlign: "center",
    };

    return (
        <div className="modal" style={styles}>
            <h2>{header}</h2>
            <p>{content}</p>
            <footer>{footer}</footer>
        </div>
    );
}

export function TestComponentFactory() {
    const buttonConfig = {
        type: "button",
        props: {
            label: "Click Me",
            onClick: () => alert("Clicked"),
            disabled: false,
        },
    };

    const cardConfig = {
        type: "card",
        props: {
            title: "Card Title",
            content: "Some content here.",
            footer: "Footer",
        },
    }

    const modalConfig = {
        type: "modal",
        props: {
            header: "Modal Header",
            content: "Some content here.",
            footer: "Footer",
        },
    }

    return (
        <div className="test-section">
            {ComponentFactory(buttonConfig)}
            {ComponentFactory(cardConfig)}
            {ComponentFactory(modalConfig)}
        </div>
    );
}

function useChatRoom({ serverUrl, roomId, onReceiveMessage }) {
    // const onMessage = useEffectEvent(onReceiveMessage);

    useEffect(() => {
        const options = {
            serverUrl: serverUrl,
            roomId: roomId
        };

        const connection = createConnection(options);
        connection.connect();
        connection.on("message", (msg) => {
            // onMessage(msg);
            onReceiveMessage(msg);
        });

        return () => connection.disconnect();
    }, [roomId, serverUrl]);
}

function ChatRoom2({ roomId }) {
    const [serverUrl, setServerUrl] = useState("https://localhost:1234");
    const [num, setNum] = useState(0);

    useChatRoom({
        roomId: roomId,
        serverUrl: serverUrl,
        onReceiveMessage(msg) {
            showNotification("New message: " + msg);
        }
    });

    return (
        <div className="test-section">
            <label>
                Server URL:
                <input value={serverUrl} onChange={e => setServerUrl(e.target.value)} />
            </label>
            <h1>Welcome to the {roomId} room!</h1>
            <h2>{num}</h2>
            <button onClick={() => setNum(num + 1)}>add</button>
        </div>
    )
}

export function TestChatRoom2() {
    return (
        <ChatRoom2 roomId={"main"} />
    )
}

function ShippingForm({ country }) {
    const [cities, setCities] = useState(null);

    useEffect(() => {
        let ignore = false;
        fetch(`/api/cities?country=${country}`)
            .then(response => response.json())
            .then(json => {
                if (!ignore) {
                    setCities(json);
                }
            });
        return () => {
            ignore = true;
        };
    }, [country]);

    const [city, setCity] = useState(null);
    const [areas, setAreas] = useState(null);

    useEffect(() => {
        if (city) {
            let ignore = false;
            fetch(`/api/areas?city=${city}`)
                .then(response => response.json())
                .then(json => {
                    if (!ignore) {
                        setAreas(json);
                    }
                });
            return () => {
                ignore = true;
            };
        }
    }, [city]);

    return (
        <div className="test-section">
            <h1>{cities}</h1>
            <h1>{city}</h1>
            <h1>{areas}</h1>
        </div>
    )
}

function useData(url) {
    const [data, setData] = useState([]);

    useEffect(() => {
        if (url) {
            console.log(url);
            let ignore = false;

            fetch(url)
                .then(response => response.json())
                .then(json => {
                    if (!ignore) {
                        setData(json);
                    }
                })
                .catch(err => {
                    console.log(err);
                })
                .finally(() => setData(["Yambol", "Sliven"]));

            return () => {
                ignore = true;
            };
        }
    }, [url]);

    return data;
}

function ShippingFormWithCustomHook({ country }) {
    const cities = useData(country ? `/api/cities?country=${country}` : []);

    const [city, setCity] = useState(cities[0]);

    useEffect(() => {
        setCity(cities[0]);
    }, [cities])

    const areas = useData(city ? `/api/areas?city=${city}` : null);

    return (
        <div className="test-section">
            <h1>{cities}</h1>
            <h1>{city}</h1>
            <h1>{areas}</h1>
        </div>
    )
}

export function TestShippingFormWithCustomHook() {
    return (
        <ShippingFormWithCustomHook country={"Bulgaria"} />
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