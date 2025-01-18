import { useState } from "react";

export function Main() {
    // const ingridients = ["Chicken", "Tomatoes", "Oregano"];
    const [ingridients, setIngridients] = useState([]);

    const ingridientsList = ingridients.map(ingridient => (
        <li key={ingridient}>{ingridient}</li>
    ))

    function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const newIngridient = data.get("ingridient");
        console.log(newIngridient);
        setIngridients(prevIngridients => [...prevIngridients, newIngridient]);
    }

    return (
        <main>
            {/* <h1>main component</h1> */}
            <form className="recipe-form" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="ingridient" 
                    placeholder="e.g. oregano" 
                    aria-label="add ingridient"
                />
                <button type="submit">Add ingridient</button>
            </form>
            <ul>
                {ingridientsList}
            </ul>
        </main>
    )
}