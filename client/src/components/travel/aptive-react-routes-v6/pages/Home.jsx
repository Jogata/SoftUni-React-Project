import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Pricing } from "../components/Pricing";

export function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Pricing />
        </div>
    )
}