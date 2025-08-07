import PageNavigation from "../navigation/PageNavigation";
// import "./skyrim-light-armor-sets.css";

import { Link } from 'react-router-dom';

export default function SkyrimLightArmorSets() {
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
        </div>
        <article>
          <div className="article-content">
            <p>The Steel Armor set has 5 pieces: <a href="./skyrim-steel-armor.html" className="link">Steel Armor</a>, Steel Cuffed Boots, Steel Helmet or Steel Horned Helmet, Steel Nordic Gauntlets, Steel Shield.</p>
            <p>The total weight of the basic set is 11 points and the total Armor Rating is 46 points. Using a Steel Shield will increase the Armor Rating with 24 points.</p>
            <p>All five pieces can be purchased from Blacksmiths and general goods merchants, found as random loot in chests, worn by mid-level bandit chiefs and hired thugs or forged at a blacksmith's forge. The materials needed to forge a Steel Armor set are Steel Ingot, Iron Ingot and Leather Strips. The amount of materials is different for the different pieces.</p>
            <p>Each piece can be upgraded with a Steel ingot at a workbench.</p>
          </div>
          <div className="article-image mask-1">
            <img src="./img/00test3/royal-knight-side-profile-full-body-holding-a-shield-303014372.jpeg" alt="need a picture" />
            {/* <img src="./img/00test3/blue-dwarven-full-plate-armor.jpeg" alt="" /> */}
            {/* <img src="./img/00test3/an-elven-male-clad-in-brown-leather-armor-crafted-from-leaves-appears-depicted-in-a-volumetric-art-723107854.png" alt="Knight in heavy armor" /> */}
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

                    <div className="page-content armor-sets details-content" style={{display: "none"}}>
                        <div className="header-section">
                            <h1 className="big-fs cursive">
                                <span className="silver decor-1">Light Armor sets</span>
                            </h1>
                            <div className="header-content">
                                <div className="main-description">
                                    <p>Armor comes in several pieces which can be equipped independently of each other. An armor set is defined as a complete set of armor that includes one matching armor piece for the head, chest, hands and feet.</p>
                                    <p>There are several different light armor sets available in Skyrim. Certain armor sets can provide special bonuses if the full set is worn. The light armor sets are much lighter than heavy armor, allow player to carry more items in his inventory, make less noise than heavy armor, so sneaking is easier and consume less stamina when sprinting but offer much less protection from physical attacks.</p>
                                </div>
                                <div className="image">
                                    <div className="image-mask">
                                        {/* <img src="./img/00test3/blue-dwarven-full-plate-armor.png" alt="" /> */}
                                        <img src="/skyrim/equipment/armor/light-armor-ac-origin.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <article>
                            <div className="article-content">
                                <h2 className="cursive">Steel Armor Set</h2>
                                <p>The Steel Armor Set can be purchased from Blacksmiths and general goods merchants, found as random loot in chests, worn by mid-level bandit chiefs and hired thugs or forged at a blacksmith's forge with Steel Ingots, Iron Ingots, Leather Strips and requires the Steel Smithing perk. All pieces can be upgraded with a Steel Ingot at a workbench.</p>
                                <p>The set has 5 pieces: <a href="./skyrim-steel-armor.html" className="link">Steel Armor</a>, Steel Cuffed Boots, Steel Helmet or Steel Horned Helmet, Steel Nordic Gauntlets, Steel Shield.</p>
                                <a href="./skyrim-steel-armor-set.html" className="details-btn">Learn More</a>
                            </div>
                        </article>
                        <article>
                            <div className="article-content">
                                <h2 className="cursive">Dragonscale Armor Set</h2>
                                <p>The Dragonscale Armor Set can be found very rarely as random loot in chests or forged at a blacksmith's forge with Dragon Scales, Iron Ingots, Leather, Leather Strips and requires the Dragon Armor perk. All pieces can be upgraded with a Dragon Scale at a workbench.</p>
                                <p>The set has 5 pieces: <a href="./skyrim-steel-plate-armor.html" className="link">Dragonscale Armor</a>, Dragonscale Boots, Dragonscale Helmet, Dragonscale Gauntlets, Dragonscale Shield.</p>
                                <a href="#" className="btn not-active">Learn More</a>
                            </div>
                        </article>
                    </div>

                </main>
            </div>
        </>
    )
}