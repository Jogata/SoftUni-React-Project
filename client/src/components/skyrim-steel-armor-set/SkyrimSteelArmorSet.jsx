import PageNavigation from "../navigation/PageNavigation";
// import "./skyrim-steel-armor-set.css";

import { Link } from 'react-router-dom';

export default function SkyrimSteelArmorSet() {
    return (
        <>
            <div className="page">

                <PageNavigation />

                <main>
                    <div className="page-content armor-sets details-content">
                        <div className="header-section">
                            <h1 className="big-fs cursive">
                                <span className="silver decor-1">Steel Armor set</span>
                            </h1>
                            <div className="header-content">
                                <div className="main-description">
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, neque! Illum dolore delectus alias rerum itaque placeat iusto pariatur architecto necessitatibus voluptatem commodi deserunt dignissimos provident ex debitis deleniti aut maiores numquam beatae laboriosam, aliquam blanditiis molestiae. Natus hic possimus necessitatibus culpa, harum, quaerat dolores nisi repellendus magni optio eius.</p>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, neque! Illum dolore delectus alias rerum itaque placeat iusto pariatur architecto necessitatibus voluptatem commodi deserunt dignissimos provident ex debitis deleniti aut maiores numquam beatae laboriosam, aliquam blanditiis molestiae. Natus hic possimus necessitatibus culpa, harum, quaerat dolores nisi repellendus magni optio eius.</p>
                                </div>
                                <div className="image">
                                    <div className="image-mask mask-1">
                                        {/* <img src="/skyrim/equipment/armor/light/steel/steel-armor-set.png" alt="" /> */}
                                        <img src="/skyrim/equipment/armor/light/steel/a-grizzled-male-warrior-of-african-descent-in-ligh__44947.png" alt="" />
                                        {/* <img src="./img/00test3/royal-knight-side-profile-full-body-holding-a-shield-303014372.jpeg" alt="need a picture" /> */}
                                        {/* <img src="./img/00test3/blue-dwarven-full-plate-armor.jpeg" alt="" /> */}
                                        {/* <img src="./img/00test3/an-elven-male-clad-in-brown-leather-armor-crafted-from-leaves-appears-depicted-in-a-volumetric-art-723107854.png" alt="Knight in heavy armor" /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <article>
                            <div className="article-content">
                                <p>The Steel Armor set has 5 pieces: <Link to="/skyrim-steel-armor" className="link">Steel Armor</Link>, Steel Cuffed Boots, Steel Helmet or Steel Horned Helmet, Steel Nordic Gauntlets, Steel Shield.</p>
                                <p>The total weight of the basic set is 11 points and the total Armor Rating is 46 points. Using a Steel Shield will increase the Armor Rating with 24 points.</p>
                                <p>All five pieces can be purchased from Blacksmiths and general goods merchants, found as random loot in chests, worn by mid-level bandit chiefs and hired thugs or forged at a blacksmith's forge. The materials needed to forge a Steel Armor set are Steel Ingot, Iron Ingot and Leather Strips. The amount of materials is different for the different pieces.</p>
                                <p>Each piece can be upgraded with a Steel ingot at a workbench.</p>
                            </div>
                        </article>
                        <article>
                            <div className="article-content">
                                <h2 className="cursive">Enchanting</h2>
                                <p>All four pieces of the set can be enchanted at Arcane Enchanter. There are 38 apparel enchantments available. The types of allowed enchantments are different for the different pieces. Unlike weapon enchantments, apparel enchantments do not require recharging and stay enchanted indefinitely.</p>
                                <a href="#" className="btn not-active">Learn More</a>
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