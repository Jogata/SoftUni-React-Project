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
];

export function Main() {
    const letters = new Array(26).fill(0);
    letters.forEach((letter, index, arr) => {
        // console.log(letter);
        letter = String.fromCharCode((index + 65));
        // console.log(letter);
        arr[index] = letter;
    });
    // console.log(letters);

    return (
        <main id="assembly">
            {/* <h1>main</h1> */}
            <div className="languages-section">
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
            </div>
            <div className="letters">
                {letters.map((letter) => {
                    return (
                        <button key={letter} className="letter">
                            {letter}
                        </button>
                    )
                })}
            </div>
        </main>
    )
}