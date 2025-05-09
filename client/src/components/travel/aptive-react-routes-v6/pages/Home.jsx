import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Pricing } from "../components/Pricing";
import { Testimonials } from "../components/Testimonials";
import { Faq } from "../components/Faq";
import { Contact } from "../components/Contact";

export function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Pricing />
            <Testimonials />
            <Faq />
            <Contact />
        </div>
    )
}