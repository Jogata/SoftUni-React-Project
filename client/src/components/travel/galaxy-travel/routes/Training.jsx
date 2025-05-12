import { Navbar } from "../components/navbar/Navbar";
import { SectionTitle } from "../components/section-title/SectionTitle";
import { TrainingSection } from "../components/training-section/TrainingSection";
import { Footer } from "../components/footer/Footer";

export function Training() {
    return (
        <div>
            <Navbar />
            <SectionTitle heading="TRAINING." text="Pre-Flight & In-Flight Training." />
            <TrainingSection/>
            <Footer/>
        </div>
    )
}