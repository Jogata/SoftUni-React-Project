import { useState } from "react";

export function Main() {
    const [state, setState] = useState({
        top: "One does not simply", 
        bottom: "Walk into Mordor", 
        src: "http://i.imgflip.com/1bij.jpg"
    });

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
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