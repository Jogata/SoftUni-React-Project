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
        // console.log(arr);
        return arr;
    }

    console.log(dice);
    // generateArrayOfNumbers(10, 6);
    const buttons = dice.map((number, index) => {
        return <Die key={index} value={number} />
    })

    return (
        <main id="tenzies">
            {buttons}
            {/* <Die value={1} />
            <Die value={2} />
            <Die value={3} />
            <Die value={4} />
            <Die value={5} />
            <Die value={6} />
            <Die value={1} />
            <Die value={2} />
            <Die value={3} />
            <Die value={4} /> */}
        </main>
    )
}