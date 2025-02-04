const languages = [
    {
        name: "HTML",
        backgroundColor: "#E2680F",
        color: "#F9F4DA",
    },
    {
        name: "CSS",
        backgroundColor: "#328AF1",
        color: "#F9F4DA",
    },
    {
        name: "JavaScript",
        backgroundColor: "#F4EB13",
        color: "#1E1E1E",
    },
    {
        name: "React",
        backgroundColor: "#2ED3E9",
        color: "#1E1E1E",
    },
    {
        name: "TypeScript",
        backgroundColor: "#298EC6",
        color: "#F9F4DA",
    },
    {
        name: "Node.js",
        backgroundColor: "#599137",
        color: "#F9F4DA",
    },
    {
        name: "Python",
        backgroundColor: "#FFD742",
        color: "#1E1E1E",
    },
    {
        name: "Ruby",
        backgroundColor: "#D02B2B",
        color: "#F9F4DA",
    },
    {
        name: "Assembly",
        backgroundColor: "#2D519F",
        color: "#F9F4DA",
    },
]

export function Main() {
    return (
        <main id="assembly">
            <h1>main</h1>
            {languages.map(lang => {
                return (
                    <span 
                        key={lang.name} 
                        className="language" 
                        style={{
                            color: `${lang.color}`, 
                            backgroundColor: `${lang.backgroundColor}`
                        }}
                    >
                        {lang.name}
                    </span>
                )
            })}
        </main>
    )
}