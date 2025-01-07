import { Entry } from "./Entry";

export function Main() {
    return (
        <main>
            <h1>main component</h1>
            <Entry
                src="https://raw.githubusercontent.com/Jogata/CSS/refs/heads/main/assets/img/stock-photo-131318185-copy.jpg"
                country="Japan"
                title="Mount Fuji"
                dates="12 Jan, 2021 - 24 Jan, 2021"
                text="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
            />
        </main>
    )
}