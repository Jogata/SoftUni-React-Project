import { useState } from "react";

export function Main() {
    // const ingridients = ["Chicken", "Tomatoes", "Oregano"];
    const [ingridients, setIngridients] = useState([]);
    const [value, setValue] = useState("");

    const ingridientsList = ingridients.map(ingridient => (
        <li key={ingridient}>{ingridient}</li>
    ))

    function handleSubmit(event) {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        // const data = Object.fromEntries(formData);
        // console.log(data);
        // setIngridients(prevIngridients => [...prevIngridients, newIngridient]);
        form.reset();
    }

    function Joke(props) {
        const [isShown, setIsShown] = useState(false);
        console.log(isShown);

        function toggle() {
            console.log("toggle");
            setIsShown(!isShown);
        }

        return (
            <div>
                {props.setup && <h3>{props.setup}</h3>}
                {isShown && <p>{props.punchline}</p>}
                <button onClick={toggle}>
                    {isShown ? "Hide" : "Show"}
                </button>
                <hr />
            </div>
        )
    }

    function Jokes(props) {
        const jokes = props.jokes;
        console.log(jokes);
        
        return (
            <ul className="jokes">
                {jokes.map(joke => {
                    return (
                        <li key={joke.id}>
                            <Joke setup={joke.setup} punchline={joke.punchline} />
                        </li>
                    )
                })}
            </ul>
        )
    }

    function handleChange(e) {
        setValue(e.currentTarget.value);
        // console.log(value);
    }

    const jokes = [
        {
            id: 1,
            setup: "I got my daughter a fridge for her birthday.",
            punchline: "I can't wait to see her face light up when she opens it."
        },
        {
            id: 2,
            setup: "How did the hacker escape the police?",
            punchline: "He just ransomware!"
        },
        {
            id: 3,
            setup: "Why don't pirates travel on mountain roads?",
            punchline: "Scurvy."
        },
        {
            id: 4,
            setup: "Why do bees stay in the hive in the winter?",
            punchline: "Swarm."
        },
        {
            id: 5,
            setup: "What's the best thing about Switzerland?",
            punchline: "I don't know, but the flag is a big plus!"
        }
    ]

    return (
        <main>
            <Jokes jokes={jokes} />
            <form className="recipe-form" onSubmit={handleSubmit} style={{display: "none"}}>
                <input 
                    className="value"
                    type="text" 
                    name="ingridient" 
                    placeholder="e.g. oregano" 
                    aria-label="add ingridient" 
                    onChange={e => handleChange(e)} 
                    value={value}
                />

                <button type="submit">Add ingridient</button>

            </form>
            <ul>
                {ingridientsList}
            </ul>
        </main>
    )
}