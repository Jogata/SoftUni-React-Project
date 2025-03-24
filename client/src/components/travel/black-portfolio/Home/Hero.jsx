import { useEffect, useState } from "react";
import "./hero.css";
import img from "../images/headshot.jpg";

export function Hero() {
    const professions = [
        "Senior Frontend Developer", 
        "Senior Frontend Engineer."
    ];

    const [professionIndex, setProfessionIndex] = useState(0);
    const profession = professions[professionIndex];

    const [letterIndex, setLetterIndex] = useState(0);
    const [typewriter, setTypewriter] = useState("");
    const [letter, setLetter] = useState(profession[letterIndex]);
    // const [letter, setLetter] = useState("");

    // useEffect(() => {
    //     setTimeout(() => {
    //         let newIndex = professionIndex + 1;
    //         newIndex = newIndex % professions.length;
    //         setProfessionIndex(newIndex);
    //     }, 5000);
    // }, [professionIndex]);

    useEffect(() => {
        const newLetterIndex = letterIndex + 1;
        // console.log(newLetterIndex);
        if (newLetterIndex < profession.length) {
            setTimeout(() => {
                const newLetter = profession[newLetterIndex];
                setTypewriter(value => value + letter);
                setLetter(newLetter);
                setLetterIndex(newLetterIndex);
            }, 50);
        } else {
            setTimeout(() => {
        let newprofessionIndex = professionIndex + 1;
        newprofessionIndex = newprofessionIndex % professions.length;
                setProfessionIndex(newprofessionIndex);
                setTypewriter("");
                setLetterIndex(0);
                setLetter(professions[professionIndex][0]);
            }, 3000);
        }
    }, [letterIndex]);

    return (
        <div className="hero" id="home">
            <div className="hero-content">
                <div className="hero-left">
                    <h2>I'm Alvin Jonathan</h2>
                    <h1>
                        {profession}
                        <span className="typewriter">
                            {typewriter}
                            <span className="letter">{letter}</span>
                        </span>
                    </h1>
                    <p>
                        I'm a senior frontend engineer with over 15 
                        years of successful working experience
                    </p>
                </div>
                <div className="hero-right">
                    <div className="hero-img">
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}