import { useEffect, useState } from "react";

export function Main() {
    const [state, setState] = useState({
        top: "One does not simply", 
        bottom: "Walk into Mordor", 
        src: "http://i.imgflip.com/1bij.jpg"
    });

    function updateState(e) {
        const property = e.currentTarget.name;
        const value = e.currentTarget.value;
        setState({
            ...state, 
            [property]: value
        });
        // console.log(state);
    }

    useEffect(() => {
        console.log("effect");
        return () => {
            console.log(state);
        }
    }, [state]);

    return (
        <main>
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
                <button>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={state.src} />
                {/* <img src="http://i.imgflip.com/1bij.jpg" /> */}
                <span className="top">{state.top}</span>
                {/* <span className="top">One does not simply</span> */}
                <span className="bottom">{state.bottom}</span>
                {/* <span className="bottom">Walk into Mordor</span> */}
            </div>
        </main>
    )
}