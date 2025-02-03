import { useState } from "react";

function Die(props) {
    console.log(props.id);
    // console.log(props.isHeld);
    const classes = props.isHeld ? "green" : "white";
    return (
        <button 
        className={classes}
            onClick={() => props.toggle(props.id)} 
        >
            {props.value}
        </button>
    )
}

export function Main() {
    const [dice, setDice] = useState(generateArrayOfNumbers(10, 6));

    function generateArrayOfNumbers(length, max) {
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

    function startNewGame() {
        const newDice = generateArrayOfNumbers(10, 6);
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
                    // console.log(`${number} == ${oldValue}`);
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
            <div className="container">
                {buttons}
            </div>
            <button className="roll" onClick={() => roll(6)}>roll</button>
        </main>
    )
}