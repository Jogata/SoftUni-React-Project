import { Link } from "react-router-dom";
import { Banner } from "./Banneer";
import { Hero } from "./Hero";
import { Services } from "./Services";
import { FeaturedRooms } from "./FeaturedRooms";
import bg from "../../../../../images/defaultBcg.jpeg";

export function Home() {
    return (
        <div className="page full-screen">
            <Hero heroClass="default-hero-section" bcg={bg}>
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
            <FeaturedRooms />
            {/* <RoomConsumer>
                {(ctx) => {
                    console.log(ctx);
                    return <h1>rooms</h1>
                }}
            </RoomConsumer> */}
        </div>
    )
}