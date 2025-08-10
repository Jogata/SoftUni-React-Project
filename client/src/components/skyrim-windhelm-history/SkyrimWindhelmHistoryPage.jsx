import "./skyrim-windhelm-history-page.css";
import PageNavigation from "../navigation/PageNavigation";
import { Link } from "react-router-dom";

export default function SkyrimWindhelmHistoryPage() {
    return (
        <>
            <div className="page hold-page full-screen fixed-bg" id="windhelm">

                <PageNavigation />

                <main>
                    <section className="header-content details-content bordered-section">
                        <h1 className="cursive">Windhelm</h1>
                        <p>
                            Windhelm is a major city in <Link to="/skyrim-eastmarch" className="link">Eastmarch</Link>, located near the Dunmeth Pass to Morrowind in northeastern Skyrim.
                        </p>
                        <p>
                            It is not only the oldest extant city in Skyrim, but it is also the oldest continuously inhabited human settlement in Tamriel. Windhelm was once the capital of the First Empire of the Nords and the old palace of the Ysgramor dynasty. The Palace of the Kings still stands in the center of the city.
                        </p>
                        <p>
                            Lying near the coast on the very northern tip of Eastmarch, Windhelm is an extremely cold city and frequently experiences blizzards. The main gate can only be accessed by crossing a long stone bridge over the White River. The Jarl of Windhelm is Ulfric Stormcloak, who resides in the Palace of the Kings.
                        </p>
                        <p>
                            Because of its proximity to Morrowind, Windhelm also contains a sizable population of Dark Elves, who sought refuge in Skyrim after the eruption of Red Mountain. The Dark Elves are confined to a cramped slum below the rest of Windhelm called the Gray Quarter, previously known as the Snow Quarter. The Dunmer are not violently persecuted, but the local Nords are suspicious and outwardly xenophobic while Ulfric Stormcloak turns a blind eye to their plight. Argonians also populate Windhelm, but are prohibited from entering the city itself and are forced to live and work on the docks outside the city walls.
                        </p>

                        <h2 className="cursive">History</h2>
                        <p>
                            Windhelm was founded by the legendary Ysgramor and the crew of his ship, the Ylgermet, following the Battle of the Moesring in the late Merethic Era. According to Nordic tradition, after the Five Hundred Companions disbanded, the Ylgermet's crew stumbled upon the barrow of Yngol, Ysgramor's son. When Ysgramor looked south and saw where the White River flowed into the Sea of Ghosts, he decreed that a great city should be built there to serve as a monument to the glories of mankind, a place from where he could gaze upon the hill of Yngol's barrow, and a gateway to guard Skyrim's interior against incursion via the river.
                        </p>
                        <p>
                            Captive elves were forced to build the city in the architectural style of their captors, and it is alleged that as many elves died during Windhelm's construction as were killed by the Ylgermet's crew before they had arrived at the site. The city's great bridge was designed to allow a vigilant watch on the White River for elven attacks, and Ysgramor's palace, the Palace of the Kings, towered over the city to show man's dominion over the very winds that had caused Yngol's death on the voyage from Atmora. An elaborate tomb was built in the catacombs beneath Windhelm to serve as Ysgramor's final resting place upon his death, but was never used because he chose to be buried by the sea.
                        </p>
                        <p>
                            Ysgramor's descendants would rule the burgeoning territory of the Nords from Windhelm. When Harald assumed the mantle of High King in 1E 143, he relinquished his holdings in Atmora and established Skyrim as an independent kingdom with Windhelm as its capital. During the time of Vrage the Gifted, the city became the capital of not just Skyrim, but the First Empire of the Nords that also encompassed High Rock, Morrowind, and parts of Cyrodiil. When the First Empire of the Nords later collapsed amidst the War of Succession that raged from 1E 369 to 1E 420, the city was sacked.
                        </p>
                        <p>
                            In 2E 431, after the onset of the Interregnum, High King Logrolf was assassinated, precipitating a succession dispute between his daughter, Freydis, and Jarl Svartr of Solitude. While Freydis was accepted as High Queen by the Crown of Verity in Windhelm, a partial Moot convened in Solitude and declared Svartr to be High King. From then on, Skyrim was divided into two kingdoms, with Windhelm serving as the capital of Eastern Skyrim and the seat of Freydis and her line.
                        </p>
                        <p>
                            Windhelm was sacked a second time in 2E 572 by the Akaviri army of Ada'Soom Dir-Kamal, and then-High Queen Mabjaarn Flame-Hair was slain in battle along with her daughter, Nurnhilde, who briefly succeeded her. The Palace of the Kings was one of the few of the city's original structures that survived these events, however it was badly damaged. The palace court was temporarily displaced as High King Jorunn, who succeeded Nurnhilde, elected to repair the rest of city first, and work on the palace was not completed until 2E 582. At some point during the Second Era, the city also suffered under the disastrous reign of Jarl Elgryr the Unminded, who taxed his citizens to the point of destitution and eventually drove them to revolt.
                        </p>
                        <p>
                            In the ninth century of the Second Era, during the formation of the Third Empire of Tamriel, Windhelm served as a base for Imperial troops guarding the Dunmeth Pass into Morrowind prior to that region's incorporation into the Empire.
                        </p>
                        <p>
                            During the Imperial Simulacrum in the late Third Era, the city-state of Windhelm was an active settlement, being ruled by King Asgan. It had a rivalry with Riften and Winterhold. It was neighbored by several settlements, including Amol to the west, Dragon Wood to the south, Laintar Dale to the southwest, and Morrowind to the east, towards Cormar View.
                        </p>
                        <p>
                            By 4E 201, Windhelm was the center of the Stormcloak Rebellion against the Third Empire. Jarl Ulfric Stormcloak, leader of the rebellion, sought to liberate Skyrim from Imperial control to protect the traditional Nord way of life and restore the right to worship Talos, which had been banned Empire-wide by the White-Gold Concordat. In open defiance of the ban, Windhelm's Temple of Talos was kept open throughout the conflict with the Empire. The city had also come to house a substantial population of Dunmer refugees who had fled Morrowind in the aftermath of the Red Year. The elves were relegated to the city's run-down Snow Quarter, later named the Gray Quarter after the Dunmer refugees, and faced constant suspicion from the xenophobic local Nords.
                        </p>
                    </section>
                </main>
            </div>
        </>
    )
}