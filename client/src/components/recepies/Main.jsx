import { useState } from "react";

const words = [
    "about",
    "account",
    "across",
    "addition",
    "after",
    "again",
    "against",
    "agreement",
    "almost",
    "among",
    "amount",
    "amusement",
    "angle",
    "angry",
    "animal",
    "answer",
    "apparatus",
    "apple",
    "approval",
    "argument",
    "attack",
    "attempt",
    "attention",
    "authority",
    "automatic",
    "awake",
    "balance",
    "basin",
    "basket",
    "beautiful",
    "because",
    "before",
    "behaviour",
    "belief",
    "berry",
    "between",
    "birth",
    "bitter",
    "black",
    "blade",
    "blood",
    "board",
    "boiling",
    "bottle",
    "brain",
    "brake",
    "branch",
    "brass",
    "bread",
    "breath",
    "brick",
    "bridge",
    "bright",
    "broken",
    "brother",
    "brown",
    "brush",
    "bucket",
    "building",
    "burst",
    "business",
    "butter",
    "button",
    "camera",
    "canvas",
    "carriage",
    "cause",
    "certain",
    "chain",
    "chalk",
    "chance",
    "change",
    "cheap",
    "cheese",
    "chemical",
    "chest",
    "chief",
    "church",
    "circle",
    "clean",
    "clear",
    "clock",
    "cloth",
    "cloud",
    "collar",
    "colour",
    "comfort",
    "committee",
    "common",
    "company",
    "complete",
    "complex",
    "condition",
    "conscious",
    "control",
    "copper",
    "cotton",
    "cough",
    "country",
    "cover",
    "crack",
    "credit",
    "crime",
    "cruel",
    "crush",
    "current",
    "curtain",
    "curve",
    "cushion",
    "damage",
    "danger",
    "daughter",
    "death",
    "decision",
    "degree",
    "delicate",
    "dependent",
    "design",
    "desire",
    "detail",
    "different",
    "digestion",
    "direction",
    "dirty",
    "discovery",
    "disease",
    "disgust",
    "distance",
    "division",
    "doubt",
    "drain",
    "drawer",
    "dress",
    "drink",
    "driving",
    "early",
    "earth",
    "education",
    "effect",
    "elastic",
    "electric",
    "engine",
    "enough",
    "equal",
    "error",
    "event",
    "every",
    "example",
    "exchange",
    "existence",
    "expansion",
    "expert",
    "false",
    "family",
    "father",
    "feather",
    "feeble",
    "feeling",
    "female",
    "fertile",
    "fiction",
    "field",
    "fight",
    "finger",
    "first",
    "fixed",
    "flame",
    "flight",
    "floor",
    "flower",
    "foolish",
    "force",
    "forward",
    "frame",
    "frequent",
    "friend",
    "front",
    "fruit",
    "future",
    "garden",
    "general",
    "glass",
    "glove",
    "grain",
    "grass",
    "great",
    "green",
    "group",
    "growth",
    "guide",
    "hammer",
    "hanging",
    "happy",
    "harbour",
    "harmony",
    "healthy",
    "hearing",
    "heart",
    "history",
    "hollow",
    "horse",
    "hospital",
    "house",
    "humour",
    "important",
    "impulse",
    "increase",
    "industry",
    "insect",
    "insurance",
    "interest",
    "invention",
    "island",
    "jelly",
    "jewel",
    "journey",
    "judge",
    "kettle",
    "knife",
    "knowledge",
    "language",
    "laugh",
    "learning",
    "leather",
    "letter",
    "level",
    "library",
    "light",
    "limit",
    "linen",
    "liquid",
    "little",
    "living",
    "loose",
    "machine",
    "manager",
    "market",
    "married",
    "match",
    "material",
    "measure",
    "medical",
    "meeting",
    "memory",
    "metal",
    "middle",
    "military",
    "minute",
    "mixed",
    "money",
    "monkey",
    "month",
    "morning",
    "mother",
    "motion",
    "mountain",
    "mouth",
    "muscle",
    "music",
    "narrow",
    "nation",
    "natural",
    "necessary",
    "needle",
    "nerve",
    "night",
    "noise",
    "normal",
    "north",
    "number",
    "offer",
    "office",
    "operation",
    "opinion",
    "opposite",
    "orange",
    "order",
    "ornament",
    "other",
    "owner",
    "paint",
    "paper",
    "parallel",
    "parcel",
    "paste",
    "payment",
    "peace",
    "pencil",
    "person",
    "physical",
    "picture",
    "place",
    "plane",
    "plant",
    "plate",
    "please",
    "pleasure",
    "plough",
    "pocket",
    "point",
    "poison",
    "polish",
    "political",
    "porter",
    "position",
    "possible",
    "potato",
    "powder",
    "power",
    "present",
    "price",
    "print",
    "prison",
    "private",
    "probable",
    "process",
    "produce",
    "profit",
    "property",
    "prose",
    "protest",
    "public",
    "purpose",
    "quality",
    "question",
    "quick",
    "quiet",
    "quite",
    "range",
    "reaction",
    "reading",
    "ready",
    "reason",
    "receipt",
    "record",
    "regret",
    "regular",
    "relation",
    "religion",
    "request",
    "respect",
    "reward",
    "rhythm",
    "right",
    "river",
    "rough",
    "round",
    "scale",
    "school",
    "science",
    "scissors",
    "screw",
    "second",
    "secret",
    "secretary",
    "selection",
    "sense",
    "separate",
    "serious",
    "servant",
    "shade",
    "shake",
    "shame",
    "sharp",
    "sheep",
    "shelf",
    "shirt",
    "shock",
    "short",
    "silver",
    "simple",
    "sister",
    "skirt",
    "sleep",
    "slope",
    "small",
    "smash",
    "smell",
    "smile",
    "smoke",
    "smooth",
    "snake",
    "sneeze",
    "society",
    "solid",
    "sound",
    "south",
    "space",
    "spade",
    "special",
    "sponge",
    "spoon",
    "spring",
    "square",
    "stage",
    "stamp",
    "start",
    "statement",
    "station",
    "steam",
    "steel",
    "stick",
    "sticky",
    "stiff",
    "still",
    "stitch",
    "stocking",
    "stomach",
    "stone",
    "store",
    "story",
    "straight",
    "strange",
    "street",
    "stretch",
    "strong",
    "structure",
    "substance",
    "sudden",
    "sugar",
    "summer",
    "support",
    "surprise",
    "sweet",
    "system",
    "table",
    "taste",
    "teaching",
    "tendency",
    "theory",
    "there",
    "thick",
    "thing",
    "thought",
    "thread",
    "throat",
    "through",
    "through",
    "thumb",
    "thunder",
    "ticket",
    "tight",
    "tired",
    "together",
    "tomorrow",
    "tongue",
    "tooth",
    "touch",
    "trade",
    "train",
    "transport",
    "trick",
    "trouble",
    "trousers",
    "twist",
    "umbrella",
    "under",
    "value",
    "verse",
    "vessel",
    "violent",
    "voice",
    "waiting",
    "waste",
    "watch",
    "water",
    "weather",
    "weight",
    "wheel",
    "where",
    "while",
    "whistle",
    "white",
    "window",
    "winter",
    "woman",
    "wound",
    "writing",
    "wrong",
    "yellow",
    "yesterday",
    "young"
];

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
    const [currentWord, setCurrentWord] = useState(() => getRandomWord());
    const [guessedLetters, setGuessedLetters] = useState([]);
    console.log(currentWord);
    console.log(guessedLetters);
    // const currentWord = "example";

    const numGuessesLeft = languages.length - 1;
    const wrongGuessCount =
        guessedLetters.filter(letter => !currentWord.includes(letter)).length;
    const isGameWon =
        currentWord.split("").every(letter => guessedLetters.includes(letter));
    const isGameLost = wrongGuessCount >= numGuessesLeft;
    const isGameOver = isGameWon || isGameLost;
    const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];
    const isLastGuessIncorrect = lastGuessedLetter && !currentWord.includes(lastGuessedLetter);

    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    let gameStatusClass = "game-status";

    if (isGameLost) {
        gameStatusClass += " lost";
    } else if (isGameWon) {
        gameStatusClass += " won";
    }

    const languageElements = languages.map((lang, index) => {
        const isLanguageLost = index < wrongGuessCount;

        const styles = {
            color: lang.color, 
            backgroundColor: lang.backgroundColor,
        };

        let classes = "chip";

        if (isLanguageLost) {
            classes += " skull";
        }

        return (
            <span
                key={lang.name} 
                className={classes} 
                style={styles}
            >
                {lang.name}
            </span>
        )
    });

    const letterElements = currentWord.split("").map((letter, index) => {
        let shouldRevealLetter = guessedLetters.includes(letter);
        // const shouldRevealLetter = isGameLost || guessedLetters.includes(letter);
        let classes = "letter";

        if (isGameLost) {
            if (!shouldRevealLetter) {
                classes += " missed";
                shouldRevealLetter = true;
            }
        }

        return (
            <span key={index} className={classes}>
                {/* {letter} */}
                {shouldRevealLetter ? letter.toUpperCase() : ""}
            </span>
        )
    })

    const keyboardElements = alphabet.split("").map(letter => {
        const isGuessed = guessedLetters.includes(letter);
        const isCorrect = isGuessed && currentWord.includes(letter);
        const isWrong = isGuessed && !currentWord.includes(letter);

        let classes = "letter";

        if (isCorrect) {
            classes += " correct";
        }

        if (isWrong) {
            classes += " wrong";
        }

        // if (isGameOver) {
        //     classes += " disabled";
        // }

        return (
            <button
                key={letter} 
                className={classes} 
                disabled={isGameOver} 
                onClick={() => addGuessedLetter(letter)} 
                aria-label={`Letter ${letter}`} 
                aria-disabled={isGuessed}
            >
                {letter}
            </button>
        )
    })

    function getRandomWord() {
        const randomIndex = Math.floor(Math.random() * words.length);
        return words[randomIndex];
    }

    function addGuessedLetter(letter) {
        setGuessedLetters(prevLetters =>
            prevLetters.includes(letter) ?
                prevLetters :
                [...prevLetters, letter]
        )
    }

    function renderGameStatus() {
        if (isGameLost) {
            return (
                <>
                    <h2>Game over!</h2>
                    <p>You lose! Better start learning Assembly 😭</p>
                </>
            )
        }

        if (isGameWon) {
            return (
                <>
                    <h2>You win!</h2>
                    <p>Well done! 🎉</p>
                </>
            )
        }

        return null;
    }

    function startNewGame() {
        setCurrentWord(getRandomWord());
        setGuessedLetters([]);
    }

    return (
        <main>
            <header>
                <h1>Assembly: Endgame</h1>
                <p>Guess the word within 8 attempts to keep the 
                    programming world safe from Assembly!</p>
            </header>

            <section className={gameStatusClass}>
                {renderGameStatus()}
                {/* <h2>You win!</h2> */}
                {/* <p>Well done! 🎉</p> */}
            </section>

            <section
                className="sr-only"
                aria-live="polite"
                role="status"
            >
                <p>
                    {currentWord.includes(lastGuessedLetter) ?
                        `Correct! The letter ${lastGuessedLetter} is in the word.` :
                        `Sorry, the letter ${lastGuessedLetter} is not in the word.`
                    }
                    You have {numGuessesLeft} attempts left.
                </p>
                <p>Current word: {currentWord.split("").map(letter =>
                    guessedLetters.includes(letter) ? letter + "." : "blank.")
                    .join(" ")}</p>

            </section>

            {/* <h2>main</h2> */}
            <section className="language-chips">
                {languageElements}
            </section>

            <section className="word">
                {letterElements}
            </section>

            <section className="keyboard">
                {keyboardElements}
            </section>

            {isGameOver &&
                <button
                    className="new-game"
                    onClick={startNewGame}
                >New Game</button>}
        </main>
    )
}