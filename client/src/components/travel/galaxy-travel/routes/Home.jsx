import { Navbar } from "../components/navbar/Navbar";
import { Video } from "../components/video/Video";
import { Footer } from "../components/footer/Footer";

export function Home() {
    return (
        <div className="page">
            <Navbar />
            <Video />
            <Footer />
        </div>
    )
}