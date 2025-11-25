import { useEffect, useRef, useState } from "react";

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

function useWindowListener(eventType, listener) {
    useEffect(() => {
        window.addEventListener(eventType, listener);
        return () => {
            window.removeEventListener(eventType, listener);
        };
    }, [eventType, listener]);
}

export function TestWindowListener () {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useWindowListener("pointermove", (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    });

    return (
        <div style={{
            position: "absolute",
            top: -20,
            left: -20,
            width: 40,
            height: 40,
            borderRadius: "50%",
            backgroundColor: "brown",
            transform: `translate(${position.x}px, ${position.y}px)`,
            pointerEvents: "none",
            opacity: 0.6,
        }} />
    );
}

function useIntersectionObserver(ref) {
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const div = ref.current;
        const observer = new IntersectionObserver(entries => {
            const entry = entries[0];
            setIsIntersecting(entry.isIntersecting);
        }, {
            threshold: 1.0
        });
        observer.observe(div);
        return () => {
            observer.disconnect();
        }
    }, [ref]);

    return isIntersecting;
}

export function Box() {
    const ref = useRef(null);
    const isIntersecting = useIntersectionObserver(ref);

    useEffect(() => {
        if (isIntersecting) {
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
        } else {
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
        }
    }, [isIntersecting]);

    return (
        <div ref={ref} style={{
            margin: 20,
            height: 100,
            width: 100,
            border: "2px solid black",
            backgroundColor: "blue"
        }} />
    );
}

function LongSection() {
    const items = [];
    for (let i = 0; i < 50; i++) {
        items.push(<li key={i}>Item #{i} (keep scrolling)</li>);
    }
    return <ul>{items}</ul>
}

export function TestIntersectionObserver() {
    return (
        <>
            <LongSection />
            <Box />
            <LongSection />
            <Box />
            <LongSection />
        </>
    );
}

export function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(count + 1);
        }, 1000);
        return () => clearInterval(intervalId);
    }, [count]);

    return <h1>{count}</h1>;
}

export function Counter2() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("effect");
        let a = 0;
        const counter = () => a = a + 1;
        // counter()
        // counter()
        // console.log(a);
        const intervalId = setInterval(() => {
            const newc = counter();
            // let a = 0;
            console.log(newc);
            setCount(newc);
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return <h1>{count}</h1>;
}

function Welcome({ duration }) {
    console.log("welcome");
    const ref = useRef(null);

    useEffect(() => {
        const animation = new FadeInAnimation(ref.current);
        animation.start(duration);
        return () => {
            animation.stop();
        };
    }, [duration]);

    return (
        <h1
            ref={ref}
            style={{
                opacity: 0,
                color: "white",
                padding: 50,
                textAlign: "center",
                fontSize: 50,
                backgroundImage: "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)"
            }}
        >
            Welcome
        </h1>
    );
}

class FadeInAnimation {
    constructor(node) {
        this.node = node;
    }

    start(duration) {
        this.duration = duration;
        if (this.duration === 0) {
            this.onProgress(1);
        } else {
            this.onProgress(0);
            this.startTime = performance.now();
            this.frameId = requestAnimationFrame(() => this.onFrame());
        }
    }

    onFrame() {
        const timePassed = performance.now() - this.startTime;
        const progress = Math.min(timePassed / this.duration, 1);
        this.onProgress(progress);
        if (progress < 1) {
            this.frameId = requestAnimationFrame(() => this.onFrame());
        }
    }

    onProgress(progress) {
        this.node.style.opacity = progress;
    }

    stop() {
        cancelAnimationFrame(this.frameId);
        this.startTime = null;
        this.frameId = null;
        this.duration = 0;
    }
}

export function TestFixRetriggeringAnimation() {
    const [duration, setDuration] = useState(10000);
    const [currDuration, setCurrDuration] = useState(10000);
    const [show, setShow] = useState(false);

    function change(e) {
        setCurrDuration(Number(e.target.value));
    }

    function click() {
        setShow(!show);
        setDuration(currDuration);
    }

    return (
        <>
            <label>
                <input
                    type="range"
                    min="100"
                    max="10000"
                    value={currDuration}
                    onChange={e => change(e)}
                />
                <br />
                Fade in duration: {duration} ms
            </label>
            <button onClick={click}>
                {show ? "Remove" : "Show"}
            </button>
            <hr />
            {show && <Welcome duration={duration} />}
        </>
    );
}

function Welcome2({ duration }) {
    console.log("welcome2", duration);
    // const ref = useRef(null);

    // useEffect(() => {
    //     const animation = new FadeInAnimation(ref.current);
    //     animation.start(duration);
    //     return () => {
    //         animation.stop();
    //     };
    // }, [duration]);

    return (
        <h1
            // ref={ref}
            className="fade-in"
            style={{
                color: "brown", 
                animationDuration: `${duration}ms`
                // opacity: 0,
                // color: "white",
                // padding: 50,
                // textAlign: "center",
                // fontSize: 50,
                // backgroundImage: "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)"
            }}
        >
            Welcome
        </h1>
    );
}

export function TestFixRetriggeringAnimation2() {
    const [duration, setDuration] = useState(10000);
    const [currDuration, setCurrDuration] = useState(10000);
    const [show, setShow] = useState(false);

    function change(e) {
        setCurrDuration(Number(e.target.value));
    }

    function click() {
        setShow(!show);
        setDuration(currDuration);
    }

    return (
        <>
            <label>
                <input
                    type="range"
                    min="100"
                    max="10000"
                    value={currDuration}
                    onChange={e => change(e)}
                />
                <br />
                Fade in duration: {duration} ms
            </label>
            <button onClick={click}>
                {show ? "Remove" : "Show"}
            </button>
            <hr />
            {show && <Welcome2 duration={duration} />}
        </>
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
 