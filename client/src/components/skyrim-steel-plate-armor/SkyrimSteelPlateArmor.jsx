import PageNavigation from "../navigation/PageNavigation";

// import { Link } from 'react-router-dom';

export default function SkyrimSteelPlateArmor() {
    return (
        <>
            <div className="page">

                <PageNavigation />

                <main>
                    <div className="page-content steel-armor details-content">
                        <div className="header">
                            <h1 className="big-fs cursive">
                                <span className="silver decor-1">Steel Plate Armor</span>
                            </h1>
                        </div>
                        <article className="main-article">
                            <div className="article-content">
                                <p>The Steel Plate Armor can be purchased from Blacksmiths and general goods merchants, found as random loot in chests, worn by mid-level bandit chiefs and hired thugs or forged at a blacksmith's forge.</p>
                                <h2 className="cursive">Basic Stats</h2>
                                <ul className="basic-stats">
                                    <li className="bulled">Type: Heavy Armor</li>
                                    <li className="bulled">Slot: Chest</li>
                                    <li className="bulled">Armor rating: 31</li>
                                    <li className="bulled">Weight: 35</li>
                                    <li className="bulled">Price: 275 gold</li>
                                    <li className="bulled">Set Name: Steel Plate Armor Set</li>
                                </ul>
                            </div>
                            <div className="article-image mask-1" id="shadow">
                                <img src="/skyrim/equipment/armor/heavy/steel/heavy-steel-armor-2.png" alt="" />
                                {/* <img src="./img/00test/armors/heavy-steel-armor-2.png" alt="" /> */}
                                {/* <img src="./img/00test/armors/mountain-knight-in-full-armor.jpg" alt="" /> */}
                                {/* <img src="./img/00test3/an-elven-male-clad-in-brown-leather-armor-crafted-from-leaves-appears-depicted-in-a-volumetric-art-723107854.png" alt="Knight in heavy armor" /> */}
                            </div>
                        </article>
                        <article>
                            <div className="article-content">
                                <h3>Smithing</h3>
                                <p>Steel Plate Armor requires the Steel Smithing perk to create. It can be forged at a blacksmith's forge. The materials needed to create a Steel Plate Armor are 3 Leather Strips, 4 Steel Ingots, 1 Iron Ingot.</p>
                                <p>It can be upgraded with a steel ingot at a workbench and also benefits from the Steel Smithing perk, which doubles the improvement.</p>
                            </div>
                        </article>
                        <article>
                            <div className="article-content">
                                <h3>Enchanting</h3>
                                <p>Steel Armor can be enchanted at Arcane Enchanter. Unlike weapon enchantments, apparel enchantments do not require recharging and stay enchanted indefinitely. There are 38 apparel enchantments available but only 20 of them can be applied on the chest armor.</p>
                                <ul className="bulled">
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
                                {/* <img className="mask-1" src="./img/00test3/dwarven-bronze-plate-cuirass-firewalker.png" alt="" /> */}
                                {/* <img src="./img/00test/armors/heavy-steel-armor.png" alt="" /> */}
                            </div>
                        </article>
                    </div>
                </main>
            </div>
        </>
    )
}