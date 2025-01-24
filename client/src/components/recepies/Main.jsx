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

    const [contact, setContact] = useState({
        firstName: "John", 
        lastName: "Doe", 
        phone: "+1 (212) 555-1212", 
        email: "itsmyrealname@example.com", 
        isFavorite: true
    })

    const avatar = "https://raw.githubusercontent.com/scrimba/learn-react/refs/heads/main/03.%20React%20State/20.%20Complex%20state%20-%20updating%20state%20objects/images/user.png";
    const starEmpty = "https://raw.githubusercontent.com/scrimba/learn-react/refs/heads/main/03.%20React%20State/20.%20Complex%20state%20-%20updating%20state%20objects/images/star-empty.png";
    const starFilled = "https://raw.githubusercontent.com/scrimba/learn-react/refs/heads/main/03.%20React%20State/20.%20Complex%20state%20-%20updating%20state%20objects/images/star-filled.png";
    
    let starIcon = contact.isFavorite ? starFilled : starEmpty;

    function toggleFavorite() {
        setContact(prevContact => {
            return {
                isFavorite: !prevContact.isFavorite
            }
        })
    }

    return (
        <main>
            <article className="card">
                <img
                    src={avatar}
                    className="avatar"
                    alt="User profile picture of John Doe"
                />
                <div className="info">
                    <button
                        onClick={toggleFavorite}
                        aria-pressed={contact.isFavorite}
                        aria-label={contact.isFavorite ? "Remove from favorites" : "Add to favorites"}
                        className="favorite-button"
                    >
                        <img
                            src={starIcon}
                            alt={contact.isFavorite ? "filled star icon" : "empty star icon"}
                            className="favorite"
                        />
                    </button>
                    <h2 className="name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="contact">{contact.phone}</p>
                    <p className="contact">{contact.email}</p>
                </div>

            </article>

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
    )
}