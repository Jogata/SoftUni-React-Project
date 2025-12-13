// ================================ Challenge 4: Implement multiple selection ================================

import { useRef, useState } from "react";
import { useMyContext } from "../../contexts/AuthContext";

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

// ==================================================== Challenge 2: Find and fix the mutation ====================================================

const initialPosition = {
    x: 0,
    y: 0
};

export function Canvas() {
    const [shape, setShape] = useState({
        color: "orange",
        position: initialPosition
    });

    function handleMove(dx, dy) {
        const x = shape.position.x + dx;
        const y = shape.position.y + dy;
        const newPosition = { x, y };

        setShape({
            ...shape,
            position: newPosition
        });
    }

    function handleColorChange(e) {
        setShape({
            ...shape,
            color: e.target.value
        });
    }

    return (
        <>
            <select
                value={shape.color}
                onChange={handleColorChange}
            >
                <option value="orange">orange</option>
                <option value="lightpink">lightpink</option>
                <option value="aliceblue">aliceblue</option>
            </select>
            <Background
                position={initialPosition}
            />
            <Box
                color={shape.color}
                position={shape.position}
                onMove={handleMove}
            >
                Drag me!
            </Box>
        </>
    );
}

function Box({
    children,
    color,
    position,
    onMove
}) {
    const [
        lastCoordinates,
        setLastCoordinates
    ] = useState(null);

    function handlePointerDown(e) {
        e.target.setPointerCapture(e.pointerId);
        setLastCoordinates({
            x: e.clientX,
            y: e.clientY,
        });
    }

    function handlePointerMove(e) {
        if (lastCoordinates) {
            setLastCoordinates({
                x: e.clientX,
                y: e.clientY,
            });
            const dx = e.clientX - lastCoordinates.x;
            const dy = e.clientY - lastCoordinates.y;
            onMove(dx, dy);
        }
    }

    function handlePointerUp(e) {
        setLastCoordinates(null);
    }

    return (
        <div
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            style={{
                width: 100,
                height: 100,
                cursor: "grab",
                backgroundColor: color,
                position: "absolute",
                border: "1px solid black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transform: `translate(
          ${position.x}px,
          ${position.y}px
        )`,
            }}
        >{children}</div>
    );
}

function Background({ position }) {
    return (
        <div style={{
            position: "absolute",
            transform: `translate(
          ${position.x}px,
          ${position.y}px
        )`,
            width: 250,
            height: 250,
            backgroundColor: "rgba(200, 200, 0, 0.2)",
        }} />
    );
};

// =========================================== Challenge 1: Fix a request counter ===========================================

export function RequestTracker() {
    const [pending, setPending] = useState(0);
    const [completed, setCompleted] = useState(0);
    // const pen = useRef(pending);
    // const com = useRef(completed);

    async function handleClick() {
        // let n = pending;
        // pen.current += 1;
        // setPending(pen.current);
        setPending(old => old + 1);
        await delay(3000);
        // pen.current -= 1;
        // setPending(pen.current);
        setPending(old => old - 1);
        // com.current += 1;
        // setCompleted(com.current);
        setCompleted(old => old + 1);
    }

    return (
        <>
            <h3>
                Pending: {pending}
            </h3>
            <h3>
                Completed: {completed}
            </h3>
            <button onClick={handleClick}>
                Buy
            </button>
        </>
    );
}

function delay(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}


function Card({ title, content, footer }) {
    return (
        <div style={
            {
                border: "1px solid #444",
                borderRadius: "12px",
                width: "20rem",
                padding: "1rem",
                backgroundColor: "#fff",
                boxShadow: "1px 1px 1px #0005"
            }
        }>
            <div>
                <h2 style={
                    {
                        color: "#555",
                        fontSize: "2rem"
                    }
                }>{title}</h2>
            </div>
            <div style={{ marginTop: "1rem" }}>
                <p style={{ color: "#333" }}>{content}</p>
            </div>
            <div style={{ marginTop: "1rem" }}>
                <p style={{ color: "#666" }}>{footer}</p>
            </div>
        </div>
    );
};

function CompoundCard({ children }) {
    return (
        <div style={{
            border: "1px solid #444",
            borderRadius: "12px",
            width: "20rem",
            padding: "1rem",
            backgroundColor: "#fff",
            boxShadow: "1px 1px 1px #0005"
        }}>
            {children}
        </div>
    );
};

function CardTitle({ children }) {
    return (
        <div>
            <h2 style={{
                fontSize: "2rem",
                color: "#555",
            }}>
                {children}
            </h2>
        </div>
    );
};

function CardContent({ children }) {
    return (
        <div style={{ marginTop: "1rem" }}>
            <p style={{ color: "#444" }}>
                {children}
            </p>
        </div>
    );
};

function CardFooter({ children }) {
    return (
        <div style={{ marginTop: "1rem" }}>
            <p style={{ color: "#333" }}>
                {children}
            </p>
        </div>
    );
};

Card.Title = CardTitle;
Card.Content = CardContent;
Card.Footer = CardFooter;

function ImageCard({ imageSrc, altText }) {
    return (
        <div style={{
            margin: "1rem",
            padding: "1rem",
            border: "1px solid #444",
            borderRadius: "12px"
        }}>
            <img
                src={imageSrc}
                alt={altText}
                style={
                    {
                        width: "5rem",
                        height: "5rem"
                    }
                }
            />
        </div>
    )
};

function ProfileCard({ name, bio, avatar }) {
    return (
        <div style={{
            margin: "1rem",
            padding: "1rem",
            border: "1px solid #444",
            borderRadius: "12px"
        }}>
            <img src={avatar} alt={name} style={{ width: "10rem" }} />
            <h3>{name}</h3>
            <p>{bio}</p>
        </div>
    );
}

function TextCard({ text }) {
    return (
        <div style={{
            margin: "1rem",
            padding: "1rem",
            border: "1px solid #444",
            borderRadius: "12px"
        }}>
            <p>{text}</p>
        </div>
    )
}

function CardFactory({ type, data }) {
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

function Modal({ children }) {
    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                display: "flex",
                backgroundColor: "#0005",
                zIndex: 50
            }}
        >
            <div
                style={{
                    width: "20rem",
                    margin: "auto",
                    padding: "1rem",
                    borderRadius: "12px",
                    backgroundColor: "white"
                }}
            >{children}</div>
        </div>
    );
};

function ModalTitle({ children }) {
    return (
        <div>
            <h2 className="text-xl font-semibold text-gray-800">{children}</h2>
        </div>
    );
};

function ModalBody({ children }) {
    return (
        <div className="mt-2">
            <p className="text-gray-600 text-sm">{children}</p>
        </div>
    );
};

function ModalFooter({ children }) {
    return (
        <div className="mt-4 flex justify-end space-x-2">
            <div>{children}</div>
        </div>
    );
};

Modal.Title = ModalTitle;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export function Test() {
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

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        // <h1>test</h1>
        <div className="test-section">
            <button
                onClick={openModal}
                style={{
                    padding: "1rem 2rem",
                    color: "white",
                    borderRadius: "12px",
                    backgroundColor: "green",
                }}
            >
                Open Modal
            </button>

            {isModalOpen && (
                <Modal>
                    <Modal.Title>Modal Title</Modal.Title>
                    <Modal.Body>This is the body of the modal.</Modal.Body>
                    <Modal.Footer>
                        <button
                            onClick={closeModal}
                            style={{
                                padding: "1rem 2rem",
                                color: "white",
                                borderRadius: "12px",
                                backgroundColor: "gray"
                            }}
                        >
                            Cancel
                        </button>
                        <button
                            onClick={closeModal}
                            style={{
                                marginLeft: "0.3rem",
                                padding: "1rem 2rem",
                                color: "white",
                                borderRadius: "12px",
                                backgroundColor: "teal"
                            }}
                        >
                            Confirm
                        </button>
                    </Modal.Footer>
                </Modal>
            )}
        </div>
        // <CompoundCard>
        //     <Card.Title>Something Cool</Card.Title>
        //     <Card.Content>Amazing Stuff</Card.Content>
        //     <Card.Footer>And the end</Card.Footer>
        // </CompoundCard>
        // <Card
        //     title="Card Title"
        //     content="This is the content of the card."
        //     footer="This is the footer."
        // />
        // <div className="test-section">
        //     <h1>Factory Design Pattern in React</h1>
        //     <div className="test-section">
        //         <CardFactory type="image" data={imageCardData} />
        //         <CardFactory type="text" data={textCardData} />
        //         <CardFactory type="profile" data={profileCardData} />
        //     </div>
        // </div>
    );
};

function CardDefaultSlots({ children }) {
    return (
        <div className="test-section">
            {children}
        </div>
    );
};

export function TestCardDefaultSlots() {
    return (
        <div className="test-section">
            <CardDefaultSlots>
                <h1>This is my Card with Default Slots</h1>
                <p>This is my card content</p>
                <button>Learn More</button>
            </CardDefaultSlots>
        </div>
    );
};

function CardNamedSlots({ cardTitle, cardContent, cardButton }) {
    return (
        <div className="test-section">
            {cardTitle}
            {cardContent}
            {cardButton}
        </div>
    );
};

export function TestCardNamedSlots() {
    return (
        <div className="test-section">
            <CardNamedSlots
                cardTitle={<h1>This is my Card with Named Slots</h1>}
                cardContent={<p>This is my card content</p>}
                cardButton={<button>Learn More</button>}
            />
        </div>
    );
};

function CardTitleCompoundSlot({ children }) {
    return <div>{children}</div>;
};

function CardContentCompoundSlot({ children }) {
    return <div>{children}</div>;
};

function CardButtonCompoundSlot({ children }) {
    return <div>{children}</div>;
};

function CardCompoundSlots({ children }) {
    return (
        <div className="test-section">
            <CardTitleCompoundSlot>
                <h1>This is my Card with Compound Slots</h1>
            </CardTitleCompoundSlot>
            <CardContentCompoundSlot>
                <h2>This is my card content</h2>
            </CardContentCompoundSlot>
            <CardButtonCompoundSlot>
                <button>This is my random card button</button>
            </CardButtonCompoundSlot>
        </div>
    );
};

CardCompoundSlots.Title = CardTitleCompoundSlot;
CardCompoundSlots.Content = CardContentCompoundSlot;
CardCompoundSlots.Button = CardButtonCompoundSlot;

export function TestCardCompoundSlots() {
    return <CardCompoundSlots />
}

const SlotContent = () => {
    const { setValue } = useMyContext();

    return (
        <button onClick={() => setValue("New Value from SlotContent")}>
            Update Context Value
        </button>
    );
};

function SlotComponent({ children }) {
    const { value } = useMyContext();

    return (
        <div className="test-section">
            <h3>Context Value: {value}</h3>
            <div>{children}</div>
        </div>
    );
};

export function TestSlotComponents() {
    return (
        <div className="test-section">
            <SlotComponent>
                <SlotContent />
            </SlotComponent>
        </div>
    )
}

// ================================== Challenge 1: Complete the gallery ==================================

const sculptureList = [{
    name: 'Homenaje a la Neurocirugía',
    artist: 'Marta Colvin Andrade',
    description: 'Although Colvin is predominantly known for abstract themes that allude to pre-Hispanic symbols, this gigantic sculpture, an homage to neurosurgery, is one of her most recognizable public art pieces.',
    url: 'https://i.imgur.com/Mx7dA2Y.jpg',
    alt: 'A bronze statue of two crossed hands delicately holding a human brain in their fingertips.'
}, {
    name: 'Floralis Genérica',
    artist: 'Eduardo Catalano',
    description: 'This enormous (75 ft. or 23m) silver flower is located in Buenos Aires. It is designed to move, closing its petals in the evening or when strong winds blow and opening them in the morning.',
    url: 'https://i.imgur.com/ZF6s192m.jpg',
    alt: 'A gigantic metallic flower sculpture with reflective mirror-like petals and strong stamens.'
}, {
    name: 'Eternal Presence',
    artist: 'John Woodrow Wilson',
    description: 'Wilson was known for his preoccupation with equality, social justice, as well as the essential and spiritual qualities of humankind. This massive (7ft. or 2,13m) bronze represents what he described as "a symbolic Black presence infused with a sense of universal humanity."',
    url: 'https://i.imgur.com/aTtVpES.jpg',
    alt: 'The sculpture depicting a human head seems ever-present and solemn. It radiates calm and serenity.'
}, {
    name: 'Moai',
    artist: 'Unknown Artist',
    description: 'Located on the Easter Island, there are 1,000 moai, or extant monumental statues, created by the early Rapa Nui people, which some believe represented deified ancestors.',
    url: 'https://i.imgur.com/RCwLEoQm.jpg',
    alt: 'Three monumental stone busts with the heads that are disproportionately large with somber faces.'
}, {
    name: 'Blue Nana',
    artist: 'Niki de Saint Phalle',
    description: 'The Nanas are triumphant creatures, symbols of femininity and maternity. Initially, Saint Phalle used fabric and found objects for the Nanas, and later on introduced polyester to achieve a more vibrant effect.',
    url: 'https://i.imgur.com/Sd1AgUOm.jpg',
    alt: 'A large mosaic sculpture of a whimsical dancing female figure in a colorful costume emanating joy.'
}, {
    name: 'Ultimate Form',
    artist: 'Barbara Hepworth',
    description: 'This abstract bronze sculpture is a part of The Family of Man series located at Yorkshire Sculpture Park. Hepworth chose not to create literal representations of the world but developed abstract forms inspired by people and landscapes.',
    url: 'https://i.imgur.com/2heNQDcm.jpg',
    alt: 'A tall sculpture made of three elements stacked on each other reminding of a human figure.'
}, {
    name: 'Cavaliere',
    artist: 'Lamidi Olonade Fakeye',
    description: "Descended from four generations of woodcarvers, Fakeye's work blended traditional and contemporary Yoruba themes.",
    url: 'https://i.imgur.com/wIdGuZwm.png',
    alt: 'An intricate wood sculpture of a warrior with a focused face on a horse adorned with patterns.'
}, {
    name: 'Big Bellies',
    artist: 'Alina Szapocznikow',
    description: "Szapocznikow is known for her sculptures of the fragmented body as a metaphor for the fragility and impermanence of youth and beauty. This sculpture depicts two very realistic large bellies stacked on top of each other, each around five feet (1,5m) tall.",
    url: 'https://i.imgur.com/AlHTAdDm.jpg',
    alt: 'The sculpture reminds a cascade of folds, quite different from bellies in classical sculptures.'
}, {
    name: 'Terracotta Army',
    artist: 'Unknown Artist',
    description: 'The Terracotta Army is a collection of terracotta sculptures depicting the armies of Qin Shi Huang, the first Emperor of China. The army consisted of more than 8,000 soldiers, 130 chariots with 520 horses, and 150 cavalry horses.',
    url: 'https://i.imgur.com/HMFmH6m.jpg',
    alt: '12 terracotta sculptures of solemn warriors, each with a unique facial expression and armor.'
}, {
    name: 'Lunar Landscape',
    artist: 'Louise Nevelson',
    description: 'Nevelson was known for scavenging objects from New York City debris, which she would later assemble into monumental constructions. In this one, she used disparate parts like a bedpost, juggling pin, and seat fragment, nailing and gluing them into boxes that reflect the influence of Cubism’s geometric abstraction of space and form.',
    url: 'https://i.imgur.com/rN7hY6om.jpg',
    alt: 'A black matte sculpture where the individual elements are initially indistinguishable.'
}, {
    name: 'Aureole',
    artist: 'Ranjani Shettar',
    description: 'Shettar merges the traditional and the modern, the natural and the industrial. Her art focuses on the relationship between man and nature. Her work was described as compelling both abstractly and figuratively, gravity defying, and a "fine synthesis of unlikely materials."',
    url: 'https://i.imgur.com/okTpbHhm.jpg',
    alt: 'A pale wire-like sculpture mounted on concrete wall and descending on the floor. It appears light.'
}, {
    name: 'Hippos',
    artist: 'Taipei Zoo',
    description: 'The Taipei Zoo commissioned a Hippo Square featuring submerged hippos at play.',
    url: 'https://i.imgur.com/6o5Vuyu.jpg',
    alt: 'A group of bronze hippo sculptures emerging from the sett sidewalk as if they were swimming.'
}];


export function Gallery() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    function handleNextClick() {
        let newIndex = index + 1;
        newIndex = newIndex % sculptureList.length;
        // setIndex(index + 1);
        setIndex(newIndex);
    }

    function handlePreviousClick() {
        let newIndex = index - 1;
        newIndex = newIndex + sculptureList.length;
        newIndex = newIndex % sculptureList.length;
        // setIndex(index + 1);
        setIndex(newIndex);
    }

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];

    return (
        <div className="test-section">
            <div>
                <button
                    onClick={handlePreviousClick}
                    // disabled={index == 0}
                    style={{
                        marginRight: "1rem"
                    }}
                >
                    Previous
                </button>
                <button
                    onClick={handleNextClick}
                // disabled={index == sculptureList.length - 1}
                >
                    Next
                </button>
            </div>
            <h2>
                <i>{sculpture.name} </i>
                by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>
            <button onClick={handleMoreClick}>
                {showMore ? "Hide" : "Show"} details
            </button>
            {showMore && <p>{sculpture.description}</p>}
            <img
                src={sculpture.url}
                alt={sculpture.alt}
                style={{
                    maxWidth: "320px"
                }}
            />
        </div>
    );
}

// ================================== Challenge 2: Fix stuck form inputs ==================================

export function Form() {
    const [firstName, setFirstName] = useState("");
    // let firstName = "";
    const [lastName, setLastName] = useState("");
    // let lastName = "";

    function handleFirstNameChange(e) {
        //   firstName = e.target.value;
        setFirstName(e.target.value);
    }

    function handleLastNameChange(e) {
        //   lastName = e.target.value;
        setLastName(e.target.value);
    }

    function handleReset() {
        //   firstName = "";
        setFirstName("");
        //   lastName = "";
        setLastName("");
    }

    return (
        <form
            className="test-section"
            onSubmit={e => e.preventDefault()}
        >
            <input
                placeholder="First name"
                value={firstName}
                onChange={handleFirstNameChange}
            />
            <input
                placeholder="Last name"
                value={lastName}
                onChange={handleLastNameChange}
            />
            <h1>Hi, {firstName} {lastName}</h1>
            <button onClick={handleReset}>Reset</button>
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