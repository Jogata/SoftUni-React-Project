import { Link } from "react-router-dom";
import img1 from "../../../../../images/room-1.jpeg";
import { Banner } from "./Banneer";
import { Hero } from "./Hero";

export function Home() {
    // console.log(hotels[0].fields.images[0].fields.file.url);
    // const img = hotels[0].fields.images[0].fields.file.url;
    return (
        <div className="page full-screen">
            <Hero hero="default-hero-section">
                <Banner 
                    title="luxurious rooms" 
                    subtitle="deluxe rooms starting at $299.00" 
                >
                    <Link to="/rooms" className="btn-primary">our rooms</Link>
                </Banner>
            {/* <h1 className="cursive" 
                style={{
                    position: "absolute", 
                    top: "10%", 
                    width: "100%", 
                    padding: "1em 0", 
                    fontSize: "5rem", 
                    textAlign: "center", 
                    textTransform: "uppercase" 
                }}>
                    hero
                </h1> */}
            </Hero>
            <img src={img1} alt="" style={{flex: "1", objectFit: "cover"}} />
        </div>
    )
}