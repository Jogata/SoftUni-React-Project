// import { Link } from "react-router-dom";

import "./skyrim-eastmarch-history-page.css";
import PageNavigation from "../navigation/PageNavigation";
import { Link } from "react-router-dom";

export default function SkyrimEastmarchHistoryPage() {
    return (
        <>
            <div className="page hold-page fixed-bg" id="eastmarch">

                <PageNavigation />

                <main>
                    <section className="header-content details-content bordered-section">
                        <h1 className="cursive">Eastmarch</h1>
                        <p>
                            Eastmarch is a hold in eastern Skyrim, with its capital in Windhelm. The hold is the home of Jarl Ulfric Stormcloak, leader of the Stormcloak rebellion. The Dunmer homeland of Morrowind is to the east, across the Velothi Mountain passes. Since the Red Year, Dunmer have had a much bigger presence in Eastmarch, particularly in the capital, due to its proximity to one of the only passes through the Velothi.
                        </p>
                        <p>
                            Eastmarch covers much of Skyrim's eastern border with Morrowind. The surrounding holds are Winterhold to the north, The Pale and Whiterun to the west and The Rift to the south. Central/south Eastmarch is a volcanically active area, plains with steaming gas leaking in between cracks in the ground, colorful, mineral filled bodies of water, and geysers. The far west of the hold resembles much of the rest of central Skyrim, and to the north a mountainous tundra, where the hold's capital Windhelm lies. The east is composed of the Velothi mountain range, which extends down to the Rift. The province's border with Morrowind can be accessed by road a short walk up the mountains from Windhelm, though the border cannot be crossed.
                        </p>
                        <h2 className="cursive">Topographical Overview</h2>
                        <p>
                            Eastmarch varies greatly. The central and southern parts of Eastmarch are dominated by sulfurous pools and rocky crags, as well as Bonestrewn Crest. The Velothi Mountains form a spine along the eastern edge of the hold, and a high ridge to the south leads up from the lowland sulfur pools to the Rift.
                        </p>
                        <p>
                            The Darkwater River joins the White River in the west, after which the White River merges with River Yorgrim at the Windhelm bridge and flows out into the Sea of Ghosts.
                        </p>
                        <h2 className="cursive">Flora and Fauna</h2>
                        <p>
                            The sulfur pools are home to giants, deer, sabre cats, and other, smaller creatures, such as rabbits and goats. Further north are snowy sabre cats, ice wolves, and frost trolls along the road to Morrowind.
                        </p>
                        <p>
                            Eastmarch is fairly well-forested, all around the Aalto springs, especially towards the Whiterun Hold and the Rift in the south. The forests in Eastmarch are sacred to the people, especially the woods of Kynesgrove, situated south of the city-state of Windhelm. Kynesgrove is named after Kyne, the Nordic Goddess of Storms, who guided the Five Hundred Companions across the Sea of Ghosts and into Mereth. It is considered a crime to defile Kynesgrove, considering its connection. The Keepers of the Grove maintain the area, as well as, offer daily sacraments and tributes. Many pilgrims flock to the settlement, where they can pray freely. Soldiers going to war would often pray at Kynesgrove, before heading to their possible fate. But beyond that, the pine forest is considered prime hunting grounds in Eastmarch, specifically for Bears. Several witches even hideout in the forest, to continue their experiments as they see fit. Speaking of Aalto, the area produces a special kind of Jazbay Grapes, that is made into wine that even the Emperor of Cyrodiil desires. But they require permission from the Elder Council.
                        </p>
                        <p>
                            There are a few farms near Windhelm, but otherwise the only plant in the snowy parts of Eastmarch is the humble snowberry bush. In the sulfur region to the south, in the middle of the hold, the endemic plants of dragon's tongue, Jazbay grapes, and creep clusters are to be found. The pine forest and shrublands surrounding the sulfur region are home to thistle, snowberries, and all common varieties of mountain flowers. Mora tapinella and to some extent nightshade can also be found throughout the hold. In the last parts of the White River, stretching from Mixwater Mill to the Sea of Ghosts, nordic barnacle is common.
                        </p>
                        <h2 className="cursive">Locations in Eastmarch</h2>
                        <ul className="main-list">
                            <li className="sub-list">Hold Capital
                                <ul className="bulled">
                                    <li><Link className="link" to="/skyrim-windhelm">Windhelm</Link></li>
                                    <li>Palace of the Kings</li>
                                    <li>Windhelm Stables</li>
                                </ul>
                            </li>
                            <li className="sub-list">Towns and Settlements
                                <ul className="bulled">
                                    <li>Kynesgrove</li>
                                </ul>
                            </li>
                            <li className="sub-list">Farms and Mills
                                <ul className="bulled">
                                    <li>Brandy-Mug Farm</li>
                                    <li>Hlaalu Farm</li>
                                    <li>Hollyfrost Farm</li>
                                    <li>Mixwater Mill</li>
                                </ul>
                            </li>
                            <li className="sub-list">Camps, Giant camps and Military Camps
                                <ul className="bulled">
                                    <li>Broken Limb Camp</li>
                                    <li>Cradlecrush Rock</li>
                                    <li>Eastmarch Imperial Camp</li>
                                    <li>Steamcrag Camp</li>
                                    <li>Windhelm Military Camp</li>
                                </ul>
                            </li>
                            <li className="sub-list">Caves
                                <ul className="bulled">
                                    <li>Cragslane Cavern</li>
                                    <li>Cragwallow Slope</li>
                                    <li>Eldergleam Sanctuary</li>
                                    <li>Lost Knife Hideout</li>
                                    <li>Mara's Eye Den</li>
                                    <li>Snapleg Cave</li>
                                    <li>Stony Creek Cave</li>
                                    <li>Uttering Hills Cave</li>
                                </ul>
                            </li>
                            <li className="sub-list">Daedric Shrines
                                <ul className="bulled">
                                    <li>Sacellum of Boethiah</li>
                                </ul>
                            </li>
                            <li className="sub-list">Dwemer Ruins
                                <ul className="bulled">
                                    <li>Mzulft</li>
                                    <li>Kagrenzel</li>
                                </ul>
                            </li>
                            <li className="sub-list">Dragon Lairs
                                <ul className="bulled">
                                    <li>Bonestrewn Crest</li>
                                </ul>
                            </li>
                            <li className="sub-list">Forts and Orc Strongholds
                                <ul className="bulled">
                                    <li>Abandoned Prison</li>
                                    <li>Fort Amol</li>
                                    <li>Gallows Rock</li>
                                    <li>Mistwatch</li>
                                    <li>Morvunskar</li>
                                    <li>Narzulbur</li>
                                </ul>
                            </li>
                            <li className="sub-list">Groves, Landmarks, Passes and Clearings
                                <ul className="bulled">
                                    <li>Dunmeth Pass</li>
                                    <li>Mara's Eye Pond</li>
                                    <li>Witchmist Grove</li>
                                </ul>
                            </li>
                            <li className="sub-list">Mines
                                <ul className="bulled">
                                    <li>Gloombound Mine</li>
                                    <li>Darkwater Crossing</li>
                                    <li>Goldenrock Mine</li>
                                    <li>Steamscorch Mine</li>
                                </ul>
                            </li>
                            <li className="sub-list">Ruins and Nordic Ruins
                                <ul className="bulled">
                                    <li>Ansilvund</li>
                                    <li>Hillgrund's Tomb</li>
                                    <li>Yngol Barrow</li>
                                </ul>
                            </li>
                            <li className="sub-list">Shacks
                                <ul className="bulled">
                                    <li>Traitor's Post</li>
                                    <li>Riverside Shack</li>
                                </ul>
                            </li>
                            <li className="sub-list">Ships and Shipwrecks, Bodies of Water
                                <ul className="bulled">
                                    <li>Darkwater River</li>
                                    <li>Sea of Ghost</li>
                                    <li>White River</li>
                                    <li>Yorgrim River</li>
                                </ul>
                            </li>
                            <li className="sub-list">Standing Stones
                                <ul className="bulled">
                                    <li>The Atronach Stone</li>
                                </ul>
                            </li>
                            <li className="sub-list">Watchtowers
                                <ul className="bulled">
                                    <li>Refugees' Rest</li>
                                </ul>
                            </li>
                        </ul>
                    </section>
                </main>
            </div>
        </>
    )
}