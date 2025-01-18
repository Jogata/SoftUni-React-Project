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

    const avatar = "https://raw.githubusercontent.com/scrimba/learn-react/refs/heads/main/03.%20React%20State/19.%20Complex%20state%20-%20Objects/images/user.png";
    const starEmpty = "https://raw.githubusercontent.com/scrimba/learn-react/refs/heads/main/03.%20React%20State/19.%20Complex%20state%20-%20Objects/images/star-empty.png";

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
                        // onClick={toggleFavorite}
                        aria-pressed={false}
                        className="favorite-button"
                    >
                        <img
                            src={starEmpty}
                            alt="empty star icon"
                            className="favorite"
                        />
                    </button>
                    <h2 className="name">
                        John Doe
                    </h2>
                    <p className="contact">+1 (212) 555-1212</p>
                    <p className="contact">itsmyrealname@example.com</p>
                </div>
            </article>
            <form className="recipe-form" onSubmit={handleSubmit} style={{display: "none"}}>
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