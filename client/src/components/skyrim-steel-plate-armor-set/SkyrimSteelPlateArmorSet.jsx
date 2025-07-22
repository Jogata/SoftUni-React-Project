import PageNavigation from "../navigation/PageNavigation";

import { Link } from 'react-router-dom';

export default function SkyrimSteelPlateArmorSet() {
    return (
        <>
            <div className="page">

                <PageNavigation />

                <main>
                    <div className="page-content armor-sets details-content">

                        <div className="header-section">
                            <h1 className="big-fs cursive">
                                <span className="silver decor-1">Steel Plate Armor set</span>
                            </h1>
                            <div className="header-content">
                                <div className="main-description">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quidem. Repudiandae sequi nulla aliquam, repellat officiis obcaecati velit aut. Earum et, fuga repellendus unde vel harum. Deleniti, soluta. Ea sequi ducimus delectus iusto.</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quidem. Repudiandae sequi nulla aliquam, repellat officiis obcaecati velit aut. Earum et, fuga repellendus unde vel harum. Deleniti, soluta. Ea sequi ducimus delectus iusto.</p>
                                </div>
                                <div className="image">
                                    <div className="image-mask mask-1">
                                        <img src="/skyrim/equipment/armor/heavy/steel/mountain-knight-in-full-armor.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <article>
                            <div className="article-content">
                                <p>The Steel Plate Armor set has 4 pieces: <a href="./skyrim-steel-plate-armor.html" className="link">Steel Plate Armor</a>, Steel Plate Boots, Steel Plate Helmet, Steel Plate Gauntlets.</p>
                                <p>The total weight of the basic set is 59 points and the total Armor Rating is 87 points. Using a Steel Shield will increase the Armor Rating with 24 points.</p>
                                <p>All four pieces can be purchased from Blacksmiths and general goods merchants, found as random loot in chests, worn by mid-level bandit chiefs and hired thugs or forged at a blacksmith's forge. The materials needed to forge a Steel Plate Armor set are Corundum Ingot, Leather Strips, Iron Ingot, Steel Ingot. The amount of materials is different for the different pieces.</p>
                                <p>Each piece can be upgraded with a Corundum ingot at a workbench.</p>
                            </div>
                            {/* <div className="article-image mask-1"> */}
                                {/* <img src="./img/00test3/royal-knight-side-profile-full-body-holding-a-shield-303014372.jpeg" alt="need a picture" /> */}
                                {/* <img src="/skyrim/equipment/armor/blue-dwarven-full-plate-armor.jpeg" alt="" /> */}
                                {/* <img src="./img/00test3/an-elven-male-clad-in-brown-leather-armor-crafted-from-leaves-appears-depicted-in-a-volumetric-art-723107854.png" alt="Knight in heavy armor" /> */}
                            {/* </div> */}
                        </article>
                        <article>
                            <div className="article-content">
                                <h2 className="cursive">Enchanting</h2>
                                <p>All four pieces of the set can be enchanted at Arcane Enchanter. There are 38 apparel enchantments available. The types of allowed enchantments are different for the different pieces. Unlike weapon enchantments, apparel enchantments do not require recharging and stay enchanted indefinitely.</p>
                                <a href="#" className="btn not-active">Learn More</a>
                            </div>
                            {/* <div className="article-image mask-1"> */}
                            {/* <img className="mask-1" src="./img/00test3/dwarven-bronze-plate-cuirass-firewalker.png" alt="" /> */}
                            {/* <img src="./img/00test/armors/heavy-steel-armor.png" alt="" /> */}
                            {/* </div> */}
                        </article>

                    </div>

                </main>
            </div>
        </>
    )
}