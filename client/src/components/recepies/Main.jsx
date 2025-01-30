import { useEffect, useState } from "react";

export function Main() {
    const [state, setState] = useState({
        top: "One does not simply", 
        bottom: "Walk into Mordor", 
        src: "http://i.imgflip.com/1bij.jpg"
    });

    const [allMemes, setAllMemes] = useState([]);

    useEffect(() => {
        console.log("first fetch");
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        // .then(obj => console.log(obj.data.memes));
        .then(obj => setAllMemes(obj.data.memes));
            // return {
            //     ...prev, 
            //     src: obj.data.memes[1].url
            // }
        // }));
    }, []);

    console.log(allMemes);

    function updateState(e) {
        const property = e.currentTarget.name;
        const value = e.currentTarget.value;
        setState({
            ...state, 
            [property]: value
        });
        // console.log(state);
    }

    function getRandomImage() {
        const index = Math.floor(Math.random() * 100);
        // console.log(index);
        const imgUrl = allMemes[index].url;
        setState(prev => {
            return {
                ...prev, 
                src: imgUrl
            }
        });
    }

    const [show, setShow] = useState(false);

    function toggle() {
        setShow(prev => !prev);
    }

    function WindowTracker() {
        console.log("tracker");
        return (
            <h1>Window width: {window.innerWidth}</h1>
        )
    }

    return (
        <main>
            <button id="test" onClick={toggle}>
                Toggle WindowTracker
            </button>
            {show && <WindowTracker />}
            <div className="form">
                <label>Top Text
                    <input
                        type="text" 
                        placeholder="One does not simply" 
                        name="top" 
                        value={state.top} 
                        onChange={(e) => updateState(e)}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text" 
                        placeholder="Walk into Mordor" 
                        name="bottom" 
                        value={state.bottom} 
                        onChange={(e) => updateState(e)}
                    />
                </label>
                <button onClick={getRandomImage}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={state.src} />
                <span className="top">{state.top}</span>
                <span className="bottom">{state.bottom}</span>
            </div>
        </main>
    )
}