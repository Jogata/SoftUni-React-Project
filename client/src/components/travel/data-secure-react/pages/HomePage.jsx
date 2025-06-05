import { Navigation } from "../components/navigation/Navigation";
import { Hero } from '../components/hero/Hero';
import { Data } from '../components/data/Data';
import { Cloud } from '../components/cloud/Cloud';
import { Footer } from "../components/footer/Footer";

export function HomePage() {
    return (
        <>
            <div className="full-screen home-page">
                <div className="header">
                    <Navigation />
                    <Hero />
                </div>
                <Data />
                <Cloud />
            </div>
            <Footer />
        </>
    )
}