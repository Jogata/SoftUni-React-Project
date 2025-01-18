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
    const starFilled = "https://raw.githubusercontent.com/scrimba/learn-react/refs/heads/main/03.%20React%20State/19.%20Complex%20state%20-%20Objects/images/star-filled.png";

    const [contact, setContact] = useState({
        firstName: "John", 
        lastName: "Doe", 
        phone: "+1 (212) 555-1212", 
        email: "itsmyrealname@example.com", 
        isFavorite: false
    })

    const starIcon = contact.isFavorite ? starFilled : starEmpty;

    function toggleFavorite() {
        // console.log("Toggle Favorite");
        setContact(prevContact => {
            return {
                ...prevContact, 
                isFavorite: !prevContact.isFavorite
            }
        });
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