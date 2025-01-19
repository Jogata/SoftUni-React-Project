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
        const data = new FormData(form);
        const newIngridient = data.get("ingridient");
        const employmentStatus = data.get("employmentStatus");
        console.log(employmentStatus);
        // console.log(newIngridient);
        setIngridients(prevIngridients => [...prevIngridients, newIngridient]);
        form.reset();
    }

    function handleChange(e) {
        setValue(e.currentTarget.value);
        console.log(value);
    }

    return (
        <main>
            <form className="recipe-form" onSubmit={handleSubmit}>
                <input 
                    className="value"
                    type="text" 
                    name="ingridient" 
                    placeholder="e.g. oregano" 
                    aria-label="add ingridient" 
                    onChange={e => handleChange(e)} 
                    value={value}
                />
                <label htmlFor="email">Email:</label>
                <input 
                    id="email" 
                    defaultValue="joe@schmoe.com" 
                    type="email" 
                    name="email" 
                    placeholder="joe@schmoe.com" 
                />
                <label htmlFor="password">Password:</label>
                <input 
                    id="password" 
                    defaultValue="password123" 
                    type="password" 
                    name="password" 
                />
                
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    name="description"
                    defaultValue="This is a description"
                ></textarea>

                <fieldset id="test">
                    <legend>Employment Status:</legend>
                    <label>
                        <input type="radio" name="employmentStatus" />
                        Unemployed
                    </label>
                    <label>
                        <input type="radio" name="employmentStatus" />
                        Part-time
                    </label>
                    <label>
                        <input type="radio" name="employmentStatus" />
                        Full-time
                    </label>
                </fieldset>
                <button type="submit">Add ingridient</button>
            </form>
            <ul>
                {ingridientsList}
            </ul>
        </main>
    )
}