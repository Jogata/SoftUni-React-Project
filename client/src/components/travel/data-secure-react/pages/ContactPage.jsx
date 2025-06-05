import { Navigation } from "../components/navigation/Navigation";
import { Contact } from "../components/contact/Contact";
import { Footer } from "../components/footer/Footer";

export function ContactPage() {
    return (
        <>
            <div className="header full-screen contact-page">
                <Navigation />
                <Contact />
            </div>
            <Footer />   
        </>
    )
}