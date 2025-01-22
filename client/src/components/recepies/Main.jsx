import { useState } from "react";

export function Main() {
    const [ingredients, setIngredients] = useState([]);
    const [value, setValue] = useState("");

    const ingredientsList = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function handleSubmit(event) {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        // const data = Object.fromEntries(formData);
        // console.log(data);
        const newIngredient = formData.get("ingredient");
        setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
        form.reset();
    }

    function handleChange(e) {
        setValue(e.currentTarget.value);
        // console.log(value);
    }

    return (
        <main>
            <form className="recipe-form" onSubmit={handleSubmit}>
                <input 
                    className="value"
                    type="text" 
                    name="ingredient" 
                    placeholder="e.g. oregano" 
                    aria-label="add ingredient" 
                    onChange={e => handleChange(e)} 
                    value={value}
                />

                <button type="submit">Add ingredient</button>

            </form>
            {/* <ul>
                {ingredientsList}
            </ul> */}
            {ingredients.length > 0 && <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">
                    {ingredientsList}
                </ul>
                {ingredients.length > 4 && <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button>Get a recipe</button>
                </div>
                }
            </section>}
        </main>
    )
}