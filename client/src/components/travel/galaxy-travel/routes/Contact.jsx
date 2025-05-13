import { Navbar } from "../components/navbar/Navbar";
import { SectionTitle } from "../components/section-title/SectionTitle";
import { Form } from "../components/form/Form";
import { Footer } from "../components/footer/Footer";

export function Contact() {
    return (
        <div className="page">
            <Navbar />
            <SectionTitle heading="CONTACT." text="Contact GLX Travel" />
            <Form/>
            <Footer/>
        </div>
    )
}