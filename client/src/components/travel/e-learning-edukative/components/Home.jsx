import { Hero } from "./Hero/Hero";
import { Steps } from "./Steps/Steps";
import { Instructor } from "./Instructor/Instructor";

export function Home() {
    return (
        <>
            <Hero />
            <Steps />
            <Instructor />
        </>
    )
}