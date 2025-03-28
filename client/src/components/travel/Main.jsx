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
            {/* <h1>main component</h1> */}
            {entries}
            {/* <Entry
                img={{
                    src: "https://raw.githubusercontent.com/Jogata/CSS/refs/heads/main/assets/img/stock-photo-131318185-copy.jpg", 
                    alt: "Mount Fuji"
                }} 
                country="Japan" 
                title="Mount Fuji" 
                googleMapsLink="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu" 
                dates="12 Jan, 2021 - 24 Jan, 2021" 
                text="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
            /> */}
        </main>
    )
}