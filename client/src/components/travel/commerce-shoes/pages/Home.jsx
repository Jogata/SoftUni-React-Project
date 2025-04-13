import { HeroSection } from "../components/HeroSection";
import { Products } from "../components/Products";

export function Home() {
    return (
        <main className="main-commerce">
            <HeroSection />
            <Products />
        </main>
    )
}