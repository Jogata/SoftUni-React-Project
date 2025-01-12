import { useState } from "react";

export function Main() {
    const [isImportant, setIsImportant] = useState("Yes");

    function handleClick() {
        setIsImportant("Heck yes");
    }

    return (
        <main>
            {/* <h1>main component</h1> */}
            <h1 className="title">Is state important to know?</h1>
            <button 
                className="value" 
                onClick={handleClick} 
            >
                {isImportant}
            </button>
            <form className="recipe-form" style={{display: "none"}}>
                <input 
                    type="text" 
                    placeholder="e.g. oregano" 
                    aria-label="add ingridient"
                />
                <button type="submit">Add ingridient</button>
            </form>
        </main>
    )
}