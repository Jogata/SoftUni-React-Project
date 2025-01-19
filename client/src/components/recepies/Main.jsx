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

    function signUp(formData) {
        const email = formData.get("email");
        console.log(email);
        const password = formData.get("password");
        console.log(password);
    }
    return (
        <main>
            <section>
                <h1>Signup form</h1>
                {/* <form action={signUp}> */}
                <form onSubmit={e => signUp(new FormData(e.currentTarget))}>
                    <label htmlFor="email">Email:</label>
                    <input id="email" type="email" name="email" placeholder="joe@schmoe.com" />
                    <br />
                    <label htmlFor="password">Password:</label>
                    <input id="password" type="password" name="password" />
                    <br />
                    <button>Submit</button>
                </form>
            </section>
    
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