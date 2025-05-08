import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Pricing } from "../components/Pricing";
import { Testimonials } from "../components/Testimonials";
import { Faq } from "../components/Faq";

export function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Pricing />
            <Testimonials />
            <Faq />
        </div>
    )
}