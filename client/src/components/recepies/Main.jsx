export function Main() {
    return (
        <main>
            {/* <h1>main component</h1> */}
            <form className="recipe-form">
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