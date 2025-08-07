import PageNavigation from "../navigation/PageNavigation";
import "./skyrim-heavy-armor-sets.css";

import { Link } from 'react-router-dom';

export default function SkyrimHeavyArmorSets() {
    return (
        <>
            <div className="page">

                <PageNavigation />

                <main>
                    <div className="page-content armor-sets details-content">

                        <div className="header-section">
                            <h1 className="big-fs cursive">
                                <span className="silver decor-1">Heavy Armor sets</span>
                            </h1>
                            <div className="header-content">
                                <div className="main-description">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quidem. Repudiandae sequi nulla aliquam, repellat officiis obcaecati velit aut. Earum et, fuga repellendus unde vel harum. Deleniti, soluta. Ea sequi ducimus delectus iusto.</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quidem. Repudiandae sequi nulla aliquam, repellat officiis obcaecati velit aut. Earum et, fuga repellendus unde vel harum. Deleniti, soluta. Ea sequi ducimus delectus iusto.</p>
                                </div>
                                <div className="image">
                                    <div className="image-mask mask-1">
                                        <img src="/skyrim/equipment/armor/blue-dwarven-full-plate-armor.jpeg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <article>
                            <div className="article-content">
                                <h2 className="cursive">Steel Plate Armor Set</h2>
                                <p>The Steel Armor Set can be purchased from Blacksmiths and general goods merchants, found as random loot in chests, worn by mid-level bandit chiefs and hired thugs or forged at a blacksmith's forge with Steel Ingots, Iron Ingots, Leather Strips and requires the Steel Smithing perk. Can be upgraded with a steel ingot at a workbench.</p>
                                <p>The set has 4 pieces: <Link to="/skyrim-steel-plate-armor" className="link">Steel Plate Armor</Link>, Steel Plate Boots, Steel Plate Helmet, Steel Plate Gauntlets.</p>
                                <Link to="/skyrim-steel-plate-armor-set" className="details-btn">Learn More</Link>
                            </div>
                        </article>
                        <article>
                            <div className="article-content">
                                <h2 className="cursive">Dragonplate Armor Set</h2>
                                <p>Dragonplate Armor is forged from Dragon Bones, Dragon Scales and leather strips. The Dragon Armor perk, which requires a Smithing skill of 100, must be acquired before this armor type can be crafted.</p>
                                <p>The set has 5 pieces: Dragonplate Armor, Dragonplate Boots, Dragonplate Helmet, Dragonplate Gauntlets, Dragonplate Shield.</p>
                                <a href="#" className="btn not-active">Learn More</a>
                            </div>
                        </article>
                        <article>
                            <div className="article-content">
                                <h2 className="cursive">Blades Armor Set</h2>
                                <a href="#" className="btn not-active">Learn More</a>
                            </div>
                        </article>
                        <article>
                            <div className="article-content">
                                <h2 className="cursive">Daedric Armor Set</h2>
                                <a href="#" className="btn not-active">Learn More</a>
                            </div>
                        </article>
                        <article>
                            <div className="article-content">
                                <h2 className="cursive">Dawnguard Heavy Armor Set</h2>
                                <a href="#" className="btn not-active">Learn More</a>
                            </div>
                        </article>
                        <article>
                            <div className="article-content">
                                <h2 className="cursive">Dwarven Armor Set</h2>
                                <a href="#" className="btn not-active">Learn More</a>
                            </div>
                        </article>
                        <article>
                            <div className="article-content">
                                <h2 className="cursive">Ebony Armor Set</h2>
                                <a href="#" className="btn not-active">Learn More</a>
                            </div>
                        </article>

                    </div>

                </main>
            </div>
        </>
    )
}