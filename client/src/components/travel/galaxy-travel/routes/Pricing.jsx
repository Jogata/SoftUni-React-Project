import { Navbar } from "../components/navbar/Navbar";
import { SectionTitle } from "../components/section-title/SectionTitle";
import { PricingCards } from "../components/pricing-cards/PricingCards";
import { Footer } from "../components/footer/Footer";

export function Pricing() {
    return (
        <div className="page">
            <Navbar />
            <SectionTitle heading="PRICING." text="Choose your trip." />
            <PricingCards />
            <Footer />
        </div>
    )
}