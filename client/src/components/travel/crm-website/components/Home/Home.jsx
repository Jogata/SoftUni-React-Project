import "./home.css";
import { Partners } from "../Partners/Partners";
import { How } from "../How/How";
import { Services } from "../Services/Services";
import { Details } from "../Details/Details";
import { Faq } from "../FAQ/Faq";
import { Trial } from "../Trial/Trial";
import { Feedback } from "../Feedback/Feedback";

export function Home() {
    return (
        <div className="crm-page">
            <Hero />
            <Partners />
            <How />
            <Services />
            <Details />
            <Faq />
            <Trial />
            <Feedback />
        </div>
    )
}