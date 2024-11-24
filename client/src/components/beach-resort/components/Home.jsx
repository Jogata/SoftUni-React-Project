import { Link } from "react-router-dom";
import { Banner } from "./Banneer";
import { Hero } from "./Hero";
import { Services } from "./Services";

export function Home() {
    return (
        <div className="page full-screen">
            <Hero hero="default-hero-section">
                <Banner 
                    title="luxurious rooms" 
                    subtitle="deluxe rooms starting at $299.00" 
                >
                    <Link to="/rooms" className="btn-primary">our rooms</Link>
                </Banner>
            </Hero>
            <Services>
                <h4>services</h4>
            </Services>
        </div>
    )
}