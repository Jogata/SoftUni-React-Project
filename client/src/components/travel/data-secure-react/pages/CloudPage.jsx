import { Navigation } from "../components/navigation/Navigation";
import { Cloud } from "../components/cloud/Cloud";
import { Footer } from "../components/footer/Footer";

export function CloudPage() {
    return (
        <>
            <div className="header full-screen cloud-page">
                <Navigation />
                <Cloud />
            </div>
            <Footer />
        </>
    )
}