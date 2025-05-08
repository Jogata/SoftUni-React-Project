import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Pricing } from "../components/Pricing";
import { Testimonials } from "../components/Testimonials";

export function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Pricing />
            <Testimonials />
        </div>
    )
}