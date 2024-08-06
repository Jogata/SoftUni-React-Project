import { Link } from 'react-router-dom'

import "./skyrim-armor-sets-page.css";
import PageNavigation from '../navigation/PageNavigation';

export default function SkyrimArmorSetsPage() {
  return (
    <>
      <div className="page">

        <PageNavigation />

        <main>
          <div class="page-content armor-sets details-content">
            <div class="header">
              <h1 class="big-fs cursive">
                <span class="silver decor-1">Armor sets</span>
              </h1>
              <div class="header-content">
                <div class="main-description">
                  <p>An Armor Set is defined as a complete set of armor that includes one matching armor piece for the head, chest, hands and feet.</p>
                  <p>There are several different armor sets available in Skyrim, both in heavy and light variants. Certain armor sets can provide special bonuses if the full set is worn.</p>
                  <p>Most of the sets can be crafted at Forges or improved at a Workbench, by using the Smithing skill. But there is some sets of Armors that belong to a specific faction and can be obtained only from members of that faction or unique sets that can be obtained only during special quests.</p>
                </div>
                <div class="image">
                  <div class="image-mask">
                    {/* <!-- <img src="./img/00test3/blue-dwarven-full-plate-armor.png" alt=""> --> */}
                    <img src="/skyrim/equipment/armor/sets/hero.png" alt="" />
                    {/* <!-- <img src="./img/00test3/female-warrior-full-body-viewmultiple-angle.jpeg" alt=""> --> */}
                  </div>
                </div>
              </div>
            </div>
            <article>
              <div class="article-content">
                <h2 class="cursive">Heavy Armor sets</h2>
                <p>There are a total of 19 Heavy armor sets. The armor set contains five pieces: a helmet, boots, gauntlets, a cuirass and greaves, and a shield. Some of the sets can be forged at a blacksmith's forge with a specific materials or bought from merchants, but some sets can only be found as random loot.</p>
                <ul class="bulled">
                  <li><a>Ancient Nord Armor</a></li>
                  <li><a>Blades Armor</a></li>
                  <li><a>Bonemold Armor</a></li>
                  <li><a>Chitin Heavy Armor</a></li>
                  <li><a>Daedric Armor</a></li>
                  <li><a>Dawnguard Heavy Armor</a></li>
                  <li><a>Dragonplate Armor</a></li>
                  <li><a>Dwarven Armor</a></li>
                  <li><a>Ebony Armor</a></li>
                  <li><a>Falmer Armor</a></li>
                  <li><a>Falmer Heavy Armor</a></li>
                  <li><a>Falmer Hardened Armor</a></li>
                  <li><a>Imperial Armor</a></li>
                  <li><a>Iron Armor</a></li>
                  <li><a>Nordic Carved Armor</a></li>
                  <li><a>Orcish Armor</a></li>
                  <li><a>Stalhrim Armor</a></li>
                  {/* <!-- <li><a>Steel Armor</a></li> --> */}
                  <li><a class="link" href="./skyrim-steel-plate-armor-set.html">Steel Plate Armor</a></li>
                  <li><a>Wolf Armor</a></li>
                </ul>
                <a href="./skyrim-heavy-armor-sets.html" class="details-btn">Learn More</a>
              </div>
            </article>
            <article>
              <div class="article-content">
                <h2 class="cursive">Light Armor sets</h2>
                <p>There are a total of 19 Light armor sets. The armor set contains five pieces: a helmet, boots, gauntlets, a cuirass and greaves, and a shield. Some of the sets can be forged at a blacksmith's forge with a specific materials or bought from merchants, but some sets can only be found as random loot.</p>
                <ul class="bulled">
                  <li><a>Chitin Armor</a></li>
                  <li><a>Elven Armor</a></li>
                  <li><a>Forsworn Armor</a></li>
                  <li><a>Fur Armor</a></li>
                  <li><a>Glass Armor</a></li>
                  <li><a>Dawnguard Armor</a></li>
                  <li><a>Dragonscale Armor</a></li>
                  <li><a>Hide Armor</a></li>
                  <li><a>Imperial Light Armor</a></li>
                  <li><a>Leather Armor</a></li>
                  <li><a>Morag Tong Armor</a></li>
                  <li><a>Penitus Oculatus Armor</a></li>
                  <li><a>Scaled Armor</a></li>
                  <li><a class="link" href="./skyrim-steel-armor.html">Steel Armor</a></li>
                  <li><a>Shrouded Armor</a></li>
                  <li><a>Skaal Armor</a></li>
                  <li><a>Stalhrim Light Armor</a></li>
                  <li><a>Stormcloak Armor</a></li>
                  <li><a>Stormcloak Officer Armor</a></li>
                </ul>
                <a href="./skyrim-light-armor-sets.html" class="details-btn">Learn More</a>
              </div>
            </article>
          </div>
        </main>
      </div>
    </>
  )
}