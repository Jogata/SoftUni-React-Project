import "./hero.css";
import { Entry, data } from "./Entry";

export function Main() {
    const entries = data.map(entry => {
        return (
            <Entry 
                key={entry.id}
                img={entry.img} 
                title={entry.title} 
                country={entry.country} 
                googleMapsLink={entry.googleMapsLink}
                dates={entry.dates} 
                text={entry.text}
            />
        )
    });

    return (
        <main>
            {entries}
        </main>
    )
}