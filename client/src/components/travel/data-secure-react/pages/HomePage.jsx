import { Navigation } from "../components/navigation/Navigation";
import { Hero } from '../components/hero/Hero';
import { Data } from '../components/data/Data';
import { Cloud } from '../components/cloud/Cloud';
import { Footer } from "../components/footer/Footer";

export function HomePage() {
    return (
        <>
            <Navigation />
            <Hero />
            <Data />
            <Cloud />
            <Footer />
        </>
    )
}