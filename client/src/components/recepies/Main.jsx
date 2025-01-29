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

    const [data, setData] = useState(null);
    const [id, setId] = useState(1);

    useEffect(() => {
        console.log("Effect ran");
        fetch(`https://swapi.dev/api/people/${id}`)
            .then(res => res.json())
            // .then(data => console.log(data));
            .then(data => setData(data));
    }, [id]);

    console.log("Rendered!");

    function Next() {
        setId(prev => prev + 1);
    }

    function Prev() {
        setId(prev => prev - 1);
    }

    // const temp1 = document.createElement("div");
    // const temp0 = document.createElement("button");
    // temp1.addEventListener("click", function () {
    //     setTimeout(() => temp0.style.transform("scale(0)"), 0);
    // })

    return (
        <main>
            <div>
                <pre>
                    {JSON.stringify(data, null, 2)}
                </pre>
            </div>
            <button className="btn" onClick={Next}>Next</button>
            <button className="btn" onClick={Prev}>Prev</button>
            <span id="count">{id}</span>
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
                <span className="top">{state.top}</span>
                <span className="bottom">{state.bottom}</span>
            </div>
        </main>
    )
}