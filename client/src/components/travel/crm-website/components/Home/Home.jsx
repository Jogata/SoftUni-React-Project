import "./home.css";
import { Hero } from "./Hero";
import { Partners } from "../Partners/Partners";
import { How } from "../How/How";

export function Home() {
    return (
        <>
            <Hero />
            <Partners />
            <How />
        </>
    )
}