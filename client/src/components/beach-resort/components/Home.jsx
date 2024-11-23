import img1 from "../../../../../images/room-1.jpeg";
import { Hero } from "./Hero";

export function Home() {
    // console.log(hotels[0].fields.images[0].fields.file.url);
    // const img = hotels[0].fields.images[0].fields.file.url;
    return (
        <div className="page full-screen" 
            style={{position: "relative", width: "100%"}}
        >
            <Hero hero="default-hero-section">
            <h1 className="cursive" 
                style={{
                    // position: "absolute", 
                    // top: "10%", 
                    width: "100%", 
                    padding: "1em 0", 
                    fontSize: "5rem", 
                    textAlign: "center", 
                    textTransform: "uppercase" 
                }}>
                    hero
                </h1>
            </Hero>
            <img src={img1} alt="" style={{flex: "1", objectFit: "cover"}} />
        </div>
    )
}