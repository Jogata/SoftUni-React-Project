import PageNavigation from "../navigation/PageNavigation";

// import { Link } from 'react-router-dom';

export default function SkyrimSteelArmor() {
    return (
        <>
            <div className="page">

                <PageNavigation />

                <main>
                    <div className="page-content armor-sets details-content">
                        <div className="header">
                            <h1 className="big-fs cursive">
                                <span className="silver decor-1">Steel Armor</span>
                            </h1>
                        </div>
                        <article className="main-article">
                            <div className="article-content">
                                <p>The Steel Armor can be purchased from Blacksmiths and general goods merchants, found as random loot in chests, worn by mid-level bandit chiefs and hired thugs or forged at a blacksmith's forge.</p>
                                <h2 className="cursive">Basic Stats</h2>
                                <ul className="vertical-list bulled basic-stats">
                                    <li>Type: Light Armor</li>
                                    <li>Slot: Chest</li>
                                    <li>Armor rating: 23</li>
                                    <li>Weight: 6</li>
                                    <li>Price: 125 gold</li>
                                    <li>Set Name: Steel Armor Set</li>
                                </ul>
                                <div className="gallery-section">
                                    <p>Steel Armor is available in five variants, but the difference is only cosmetic - their statistics are identical.</p>
                                    <button className="details-btn">open gallery</button>
                                </div>
                            </div>
                            <div className="article-image mask-1">
                                {/* <img src="./img/00test/armors/steel/a-male-scales-breastplate-artstation-heroic-fantasy-dnd-ultra-detailed-987212266.png" alt="" /> */}
                                <img src="/skyrim/equipment/armor/light/steel/steel-armor.jpeg" alt="" />
                                {/* <img src="./img/00test/armors/mountain-knight-in-full-armor.jpg" alt="" /> */}
                                {/* <img src="./img/00test3/an-elven-male-clad-in-brown-leather-armor-crafted-from-leaves-appears-depicted-in-a-volumetric-art-723107854.png" alt="Knight in heavy armor" /> */}
                            </div>
                        </article>
                        <article>
                            <div className="article-content">
                                <h3>Smithing</h3>
                                <p>Steel Armor requires the Steel Smithing perk to create. It can be forged at a blacksmith's forge. The materials needed to create a Steel Armor are 2 Steel Ingots, 2 Leather, 3 Leather Strips.</p>
                                <p>It can be upgraded with a steel ingot at a workbench and also benefits from the Steel Smithing perk, which doubles the improvement.</p>
                            </div>
                        </article>
                        <article>
                            <div className="article-content">
                                <h3>Enchanting</h3>
                                <p>Steel Armor can be enchanted at Arcane Enchanter. Unlike weapon enchantments, apparel enchantments do not require recharging and stay enchanted indefinitely. There are 38 apparel enchantments available but only 20 of them can be applied on the chest armor.</p>
                                <ul className="vertical-list bulled">
                                    <li>Fortify Alteration</li>
                                    <li>Fortify Alteration and Magicka Regen</li>
                                    <li>Fortify Conjuration</li>
                                    <li>Fortify Conjuration and Magicka Regen</li>
                                    <li>Fortify Destruction</li>
                                    <li>Fortify Destruction and Magicka Regen</li>
                                    <li>Fortify Healing Rate</li>
                                    <li>Fortify Health</li>
                                    <li>Fortify Heavy Armor</li>
                                    <li>Fortify Illusion</li>
                                    <li>Fortify Illusion and Magicka Regen</li>
                                    <li>Fortify Light Armor</li>
                                    <li>Fortify Magicka Regen</li>
                                    <li>Fortify Restoration</li>
                                    <li>Fortify Restoration and Magicka Regen</li>
                                    <li>Fortify Smithing</li>
                                    <li>Fortify Stamina</li>
                                    <li>Fortify Stamina Regen</li>
                                    <li>Resist Disease</li>
                                    <li>Resist Poison</li>
                                </ul>
                            </div>
                            <div className="article-image mask-1">
                                <img src="./img/00test/armors/steel/wind-magic-armor-male-scale-mail-05.jpeg" alt="" />
                                <img className="mask-1" src="./img/00test3/dwarven-bronze-plate-cuirass-firewalker.png" alt="" />
                                <img src="./img/00test/armors/heavy-steel-armor.png" alt="" />
                            </div>
                        </article>
                    </div>
                </main>
                <div className="gallery hidden">
                    <button id="close-btn">x</button>
                    <div className="slider">
                        <img className="slide-image hidden" src="./img/00test/armors/steel/a-male-scales-breastplate-01.png" alt="" />
                        <img className="slide-image left" src="./img/00test/armors/steel/an-elven-male-full-scales-armor-02.png" alt="" />
                        <img className="slide-image middle relative" src="./img/00test/armors/steel/light-blue-magic-male-scale-armor-03.jpeg" alt="" />
                        <img className="slide-image right" src="./img/00test/armors/steel/light-blue-magic-male-scale-armor-04.jpeg" alt="" />
                        <img className="slide-image hidden" src="./img/00test/armors/steel/wind-magic-armor-male-scale-mail-05.jpeg" alt="" />
                        {/* <img className="slide-image hidden" src="./img/00test/armors/a-piece-of-pristine-white-steel-armor-uniquely-designed-with-intricate-dwarven-patterns-and-arcane--475226286(1).png" alt="" /> */}
                        {/* <img className="slide-image left" src="./img/00test/armors/a-piece-of-pristine-white-steel-armor-uniquely-designed-with-intricate-dwarven-patterns-and-arcane--475226286(2).png" alt="" /> */}
                        {/* <img className="slide-image middle relative" src="./img/00test/armors/a-piece-of-pristine-white-steel-armor-uniquely-designed-with-intricate-dwarven-patterns-and-arcane--475226286.png" alt="" /> */}
                        {/* <img className="slide-image right" src="./img/00test/armors/paladin-in-full-plate-armor-embroidered-with-blue-and-gold-dwarven-patterns-and-runes-glowing-blue-616490374(1).png" alt="" /> */}
                        {/* <img className="slide-image hidden" src="./img/00test/armors/paladin-in-full-plate-armor-embroidered-with-blue-and-gold-dwarven-patterns-and-runes-glowing-blue-616490374.png" alt="" /> */}
                    </div>

                    <div className="arrows">
                        <button id="prev">&#139;</button>
                        <button id="next">&#155;</button>
                    </div>

                </div>
            </div>
        </>
    )
}