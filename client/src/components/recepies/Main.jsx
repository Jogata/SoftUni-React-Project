import { useEffect, useRef, useState } from "react";

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

    // const [show, setShow] = useState(false);
    
    // function toggle() {
    //     setShow(prev => !prev);
    // }
    
    // function WindowTracker() {
    //     const [width, setWidth] = useState(window.innerWidth);
        
    //     useEffect(() => {
    //         console.log("event added");
    //         function observe() {
    //             setWidth(window.innerWidth);
    //         }

    //         window.addEventListener("resize", observe);

    //         return function () {
    //             console.log("event removed");
    //             window.removeEventListener("resize", observe);
    //         }
    //     }, []);

    //     return (
    //         <h1>Window width: {width}</h1>
    //     )
    // }

// import Anthropic from "@anthropic-ai/sdk";
// import { HfInference } from '@huggingface/inference';

// const SYSTEM_PROMPT = `
// You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
// `;

async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ");

    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
            ],
            max_tokens: 1024,
        });
        return response.choices[0].message.content;
    } catch (err) {
        console.error(err.message);
    }
}

    const [ingredients, setIngredients] = useState(
        ["all the main spices", "pasta", "ground beef", "tomato paste"]
    );
    const [value, setValue] = useState("");
    const [recipeVisible, setRecipeVisible] = useState(false);
    const [recipe, setRecipe] = useState("");

    const ingredientsList = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    const recipeSection = useRef(null);

    useEffect(() => {
        console.log(recipeSection.current);
        recipeSection.current && recipeSection.current.scrollIntoView();
    }, [recipeVisible]);

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingredients);
        setRecipe(recipeMarkdown);
    }

    function displayRecipe() {
        setRecipeVisible(prev => !prev);
        console.log("created");
    }

    function addIngredient(event) {
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
    

function Recipe() {
    return (
        <section ref={recipeSection}>
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
                <hr />
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
    )
}

function IngredientsList(props) {
    return (
        <section>

            <h2>Ingredients on hand:</h2>

            <ul className="ingredients-list" aria-live="polite">
                {props.ingredientsList}
            </ul>

            {props.ingredients.length >= 4 &&
                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>

                    <button onClick={props.displayRecipe}>
                        Get a recipe
                    </button>

                    <button onClick={props.getRecipe}>
                        Get a recipe from AI
                    </button>
                </div>
            }
        </section>
    )
}

    return (
        <main>
            <form className="recipe-form" onSubmit={addIngredient}>
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
                <IngredientsList 
                    ingredients={ingredients} 
                    ingredientsList={ingredientsList} 
                    displayRecipe={displayRecipe} 
                    getRecipe={getRecipe} 
                />
            }

            {recipeVisible && <Recipe recipe={recipe} />}

            {/* <button id="test" onClick={toggle}>
                Toggle WindowTracker
            </button>
            {show && <WindowTracker />} */}
            <div className="form" style={{display: "none"}}>
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
            <div className="meme" style={{display: "none"}}>
                <img src={state.src} />
                <span className="top">{state.top}</span>
                <span className="bottom">{state.bottom}</span>
            </div>
        </main>
    )
}