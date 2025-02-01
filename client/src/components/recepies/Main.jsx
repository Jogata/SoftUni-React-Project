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
            arr[index] = number;
        }
        return arr;
    }

    console.log(dice);
    const buttons = dice.map((number, index) => {
        return <Die key={index} value={number} />
    })

    function roll() {
        const newDice = generateArrayOfNumbers(10, 6);
        setDice(newDice);
    }

    return (
        <main id="tenzies">
            {buttons}
            <button className="roll" onClick={roll}>roll</button>
        </main>
    )
}