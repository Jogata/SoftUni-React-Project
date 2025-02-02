import { useState } from "react";

function Die(props) {
    return <button>{props.value}</button>
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

    console.log(dice);
    const buttons = dice.map(obj => {
        return (
            <Die 
                key={obj.id} 
                value={obj.value} 
                id={obj.id} 
            />
        )
    })

    function roll() {
        const newDice = generateArrayOfNumbers(10, 6);
        setDice(newDice);
    }

    return (
        <main id="tenzies">
            <div className="container">
                {buttons}
            </div>
            <button className="roll" onClick={roll}>roll</button>
        </main>
    )
}