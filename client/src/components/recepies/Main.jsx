import { useState } from "react";

export function Main() {
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

    function Messages() {
        const [messages, setMessages] = useState(["a", "b"]);

        return (
            <ol className="messages">
                {messages.map((m, i) => {
                    return (
                        <li key={i}>{m}</li>
                    )
                })}
            </ol>
        )
    }

    function handleChange(e) {
        setValue(e.currentTarget.value);
        // console.log(value);
    }

    return (
        <main>
            <Messages />
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