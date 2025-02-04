import { useEffect, useRef, useState } from "react";

function Die(props) {
    // console.log(props.id);
    // console.log(props.isHeld);
    const classes = props.isHeld ? "green" : "white";
    return (
        <button 
            className={classes} 
            onClick={() => props.toggle(props.id)} 
            aria-pressed={props.isHeld} 
            aria-label={`Die with value ${props.value}, 
            ${props.isHeld ? "held" : "not held"}`}
        >
            {props.value}
        </button>
    )
}

export function Main() {
    const [dice, setDice] = useState(() => generateArrayOfNumbers(10, 6));
    const buttonRef = useRef(null);
    let buttonText = "Roll";

    let isGameOver = false;
    let callback = () => roll(6);

    // const gameWon = dice.every(die => die.isHeld) &&
    //     dice.every(die => die.value === dice[0].value);

    isGameOver = dice.every(x => x.isHeld === true);
    // console.log(isGameOver);
    if (isGameOver) {
        isGameOver = checkEN(dice);
        // console.log(isGameOver);
        buttonText = "New Game";
        callback = () => startNewGame(10, 6);
    }

    function checkEN(arr) {
        // console.log(arr);
        let areEqual = true;
        const first = arr[0].value;
        for (let index = 1; index < arr.length; index++) {
            if (arr[index].value !== first) {
                // console.log(first);
                // console.log("are diff");
                areEqual = false;
            }
        }
        return areEqual;
    }

    useEffect(() => {
        if (isGameOver) {
            buttonRef.current.focus();
            console.log("button focused");
        }
    }, [isGameOver]);

    function generateArrayOfNumbers(length, max) {
        // console.log("generate");
        const arr = new Array(length);
        for (let index = 0; index < arr.length; index++) {
            const number = Math.ceil(Math.random() * max);
            const buttonState = {
                id: index, 
                value: number, 
                isHeld: false
            }
            arr[index] = buttonState;
        }
        return arr;
    }

    // console.log(dice);
    const buttons = dice.map(obj => {
        return (
            <Die 
                key={obj.id} 
                id={obj.id} 
                value={obj.value} 
                isHeld={obj.isHeld} 
                toggle={toggle} 
            />
        )
    })

    function startNewGame(number, max) {
        const newDice = generateArrayOfNumbers(number, max);
        setDice(newDice);
    }

    function toggle(id) {
        setDice(dice.map(dice => {
            if (dice.id == id) {
                dice.isHeld = !dice.isHeld;
            }
            return dice;
        }))
    }

    function roll(max) {
        // startNewGame();
        const newDice = dice.map((dice, index) => {
            if (!dice.isHeld) {
                const oldValue = dice.value;
                let number = Math.ceil(Math.random() * max);
                if (number == oldValue) {
                    console.log(`${number} == ${oldValue}`);
                    number = number + oldValue;
                    number = number % max || Math.ceil(Math.random() * max);
                }
                const newDiceState = {
                    id: index, 
                    value: number, 
                    isHeld: false
                }
                return newDiceState;
            }
            return dice;
        })
        setDice(newDice);
    }

    return (
        <main id="tenzies">
            <div aria-live="polite" className="sr-only">
                {isGameOver && <p>Congratulations! You won! Press "New Game" to start again.</p>}
            </div>
            <div className="container">
                {buttons}
            </div>
            {/* <button className="roll" onClick={() => roll(6)}>
                {isGameOver ? "New Game" : "Roll"}
            </button> */}
            {/* <button className="roll" onClick={() => roll(6)}>roll</button> */}
            {/* {isGameOver && <button className="roll" onClick={() => startNewGame(10, 6)}>New Game</button>} */}
            <button 
                className="roll" 
                onClick={callback} 
                ref={buttonRef}
            >
                {buttonText}
            </button>
        </main>
    )
}