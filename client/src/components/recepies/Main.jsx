import { useState } from "react";

export function Main() {
    const [ingredients, setIngredients] = useState(
        ["all the main spices", "pasta", "ground beef", "tomato paste"]
    );
    const [value, setValue] = useState("");
    const [recipeVisible, setRecipeVisible] = useState(false);

    const ingredientsList = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function displayRecipe() {
        setRecipeVisible(prev => !prev);
    }

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

    const data = [
        {
            id: 1,
            color: "#F18D8B",
            on: true
        },   
        {
            id: 2,
            color: "#F5C280",
            on: false
        },   
        {
            id: 3,
            color: "#EEEC79",
            on: true
        },   
        {
            id: 4,
            color: "#64ED98",
            on: true
        },   
        {
            id: 5,
            color: "#63DEED",
            on: false
        },   
        {
            id: 6,
            color: "#877FED",
            on: false
        },   
        {
            id: 7,
            color: "#A57FE9",
            on: false
        },   
        {
            id: 8,
            color: "#F289C1",
            on: true
        },   
    ];

    function Pad(props) {
        const [isOn, setIsOn] = useState(props.isOn);
        console.log(props.id);

        function toggle() {
            setIsOn(prev => !prev);
        }

        return (
            <button 
                className={isOn ? "on" : undefined} 
                onClick={toggle} 
                style={{ backgroundColor: `${props.color}` }}
            ></button>
        )
    }

    const [pads, setPads] = useState(data);
    // console.log(pads);
    const [rerender, setRerender] = useState(false);

    const elements = pads.map(pad => (
        <Pad key={pad.id} color={pad.color} isOn={pad.on} id={pad.id} />
    ))

    function all() {
        // console.log("all");
        // pads.map(pad => pad.on = false);
        const newPads = [...pads];
        newPads.map(pad => pad.on = false);
        // console.log(pads);
        // console.log(newPads);
        setPads(newPads);
    }

    function turnAllOff() {
        console.log("off");
        // setPads(p => p.map(pad => {
        //     return {
        //         ...pad, 
        //         on: false
        //     }
        // }));
        const oldPads = [...pads];
        console.log(oldPads);
        // console.log(pads);
        pads.map(p => p.on = false);
        // setRerender(!rerender);
        console.log(pads);
    }

    // function click() {
    //     elements.forEach(e => console.log(e));
    // }

    console.log("main");
    console.log(pads);
    
    return (
        <>
        <main>
            <div className="pad-container">
                {elements}
            </div>
            {/* <button id="all" onClick={all}>all</button> */}
            <button id="all" onClick={turnAllOff}>all</button>
            {/* <button id="all" onClick={click}>all</button> */}
        </main>
        <main style={{display: "none"}}>
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

            {ingredients.length > 0 &&
                <section>
                    <h2>Ingredients on hand:</h2>
                    <ul className="ingredients-list" aria-live="polite">
                        {ingredientsList}
                    </ul>
                    {ingredients.length >= 4 && 
                        <div className="get-recipe-container">
                            <div>
                                <h3>Ready for a recipe?</h3>
                                <p>Generate a recipe from your list of ingredients.</p>
                            </div>
                            <button onClick={displayRecipe}>Get a recipe</button>
                        </div>
                    }
                </section>
            }

            {recipeVisible &&
                <section>
                    <h2>Chef Claude Recommends:</h2>
                    <article className="suggested-recipe-container" aria-live="polite">
                        <p>Based on the ingredients you have available,
                            I would recommend making a simple a delicious
                            <strong>Beef Bolognese Pasta</strong>. Here is the recipe:
                        </p>
                        <h3>Beef Bolognese Pasta</h3>
                        <strong>Ingredients:</strong>
                        <ul>
                            <li>1 lb. ground beef</li>
                            <li>1 onion, diced</li>
                            <li>3 cloves garlic, minced</li>
                            <li>2 tablespoons tomato paste</li>
                            <li>1 (28 oz) can crushed tomatoes</li>
                            <li>1 cup beef broth</li>
                            <li>1 teaspoon dried oregano</li>
                            <li>1 teaspoon dried basil</li>
                            <li>Salt and pepper to taste</li>
                            <li>8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)</li>
                        </ul>
                        <strong>Instructions:</strong>
                        <ol>
                            <li>Bring a large pot of salted water to a boil for the pasta.</li>
                            <li>In a large skillet or Dutch oven, cook the ground beef over medium-high heat,
                                breaking it up with a wooden spoon, until browned and cooked through, about 5-7 minutes.</li>
                            <li>Add the diced onion and minced garlic to the skillet and cook for 2-3 minutes, until the
                                onion is translucent.</li>
                            <li>Stir in the tomato paste and cook for 1 minute.</li>
                            <li>Add the crushed tomatoes, beef broth, oregano, and basil. Season with salt and pepper to taste.</li>
                            <li>Reduce the heat to low and let the sauce simmer for 15-20 minutes, stirring occasionally, to allow
                                the flavors to meld.</li>
                            <li>While the sauce is simmering, cook the pasta according to the package instructions. Drain the pasta
                                and return it to the pot.</li>
                            <li>Add the Bolognese sauce to the cooked pasta and toss to combine.</li>
                            <li>Serve hot, garnished with additional fresh basil or grated Parmesan cheese if desired.</li>
                        </ol>
                    </article>
                </section>
            }
        </main>
        </>
    )
}