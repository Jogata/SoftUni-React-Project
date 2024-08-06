import { Link } from 'react-router-dom'

import "./skyrim-armor-page.css";
import PageNavigation from '../navigation/PageNavigation';

export default function SkyrimArmorPage() {
  return (
    <>
      <div className="page">

        <PageNavigation />
        
        <main>
        <div class="page-content armor details-content">
        <div class="header">
          <h1 class="big-fs cursive">
            <span class="silver decor-1">Armor</span>
          </h1>
          <div class="header-content">
            <div class="main-description">
              <p>Armor is a type of apparel that is worn on the body to increases a character's armor rating and thus helps to reduce the overall damage inflicted from physical attacks. Armor comes in two varieties: Heavy Armor and Light Armor. Both types have their advantages and disadvantages. There are also shields which provide an additional passive increase to armor rating. In addition armor can be enchanted to grant additional effects, such as, to boost certain skills, protect from magic attacks or to increase stats like Stamina, Health and Magicka.</p>
              <p>Armor appears in several different materials and styles, which determine the quality of the armor. Higher quality armor provides better protection but is generally heavier. Most armor can be created at Forges, by using the Smithing skill.</p>
              <p>Jewelry can be created at any blacksmith's forge from ingots and jewels, but these are not counted as protective armor. It adds accessory options to players in the form of circlets, rings, necklaces and amulets. Players can only wear 1 ring and only 1 necklace or amulet while circlets are worn on the head. Jewelry can be enchanted to provide more magical effects for the player. Jewelry are usually low in weight and high in value.</p>
              <p>As an alternative to Armor players can choose to wear Clothing options such as robes instead. Clothing is lighter and quieter than armor and usually can be found with enchantments. Clothing does not benefit from any skills and perks.</p>
            </div>
            <div class="image">
              <div class="image-mask">
                {/* <!-- <img src="./img/viking-spear.jpeg" alt=""> --> */}
                {/* <!-- <img src="./img/00test2" alt=""> --> */}
                {/* <!-- <img src="./img/00test3/royal-knight-standing.jpeg" alt=""> --> */}
                {/* <!-- <img src="./img/00test3/0c55b88ada354aa3935f134ce19c5843.jpeg" alt=""> --> */}
                <img src="/skyrim/equipment/armor/armor.png" alt="" />
                {/* <!-- https://playground.com/profile/cluczy2xj00nxs601y36rslhs --> */}
                {/* <!-- <img src="./img/00test2/this-flute-of-nature-lies-in-a-beautiful-wooden-casket-made-of-rootsthe-casket-is-made-of-small-roo-534930541.jpeg" alt=""> --> */}
                {/* <!-- <img src="./img/00test2/its-a-fantasy-style-the-photo-above-should-primarily-depict-the-contents-of-the-caseon-the-table-263427988.jpeg" alt=""> --> */}
                {/* <!-- <img src="./img/00test2/natures-flute-rests-on-a-wooden-table-fantasy-treatment-27304190.jpeg" alt=""> --> */}
              </div>
            </div>
          </div>
        </div>
        <article>
          <div class="article-content">
            <h2 class="cursive">Heavy Armor</h2>
            <p>Heavy Armor in Skyrim refers to armor that is heavier in weight with higher base armor values. Heavy Armor provides damage reduction against physical attacks up to a maximum of 80% damage reduction. Armor can be enchanted with magical effects and improved with Smithing.</p>
            <h3 class="cursive">Pros</h3>
            <ul class="bulled">
              <li>Offers a greater variety of armors available to craft.</li>
              <li>Offers a greater number of Perks to choose from.</li>
              <li>Offers much more protection from physical attacks.</li>
            </ul>
            <h3 class="cursive">Cons</h3>
            <ul class="bulled">
              <li>Makes more noise than light armor, so sneaking is harder.</li>
              <li>Slows down movement much more than light armor.</li>
              <li>Stamina is drained much quicker while sprinting.</li>
            </ul>

            <a href="#" class="btn not-active">Learn More</a>
          </div>
          <div class="article-image shadow">
            <img src="/skyrim/equipment/armor/heavy-armor.png" alt="Knight in heavy armor" />
            {/* <!-- <img src="./img/00test3/an-elven-male-clad-in-brown-leather-armor-crafted-from-leaves-appears-depicted-in-a-volumetric-art-723107854.png" alt="Knight in heavy armor"> --> */}
          </div>
        </article>
        <article>
          <div class="article-content">
            <h2 class="cursive">Light Armor</h2>
            <p>Light Armor in Skyrim refers to armor that is lighter, provide better stealth and use less stamina when sprinting. Light Armor provides damage reduction against physical attacks up to a maximum of 80% damage reduction. Armor can be enchanted with magical effects and improved with Smithing.</p>
            <h3 class="cursive">Pros</h3>
            <ul class="bulled">
              <li>Much lighter than heavy armor.</li>
              <li>Makes less noise than heavy armor, so sneaking is easier.</li>
              <li>Less stamina is drained while sprinting.</li>
            </ul>
            <h3 class="cursive">Cons</h3>
            <ul class="bulled">
              <li>Offers fewer variety of armors available to craft.</li>
              <li>Offers fewer number of Perks to choose from.</li>
              <li>Offers much less protection from physical attacks.</li>
            </ul>
            <a href="#" class="btn not-active">Learn More</a>
          </div>
          <div class="article-image">
            <img src="/skyrim/equipment/armor/light-armor.png" alt="Warrior in light armor" />
          </div>
        </article>
        <article>
          <div class="article-content">
            <h2 class="cursive">Armor sets</h2>
            <p>Armor comes in several pieces which can be equipped independently of each other. These pieces are:
              <ul class="bulled">
                <li>Cuirasses: covers your legs, chest and shoulders</li>
                <li>Boots: covers your feet and ankles</li>
                <li>Gauntlets: covers your hands up to your elbow</li>
                <li>Helmet: covers your head</li>
                <li>Shield: protect and block attacks</li>
              </ul>
            </p>
            <p>An armor set is defined as a complete set of armor that includes one matching armor piece for the head, chest, hands and feet.</p>
            <p>There are several different armor sets available in Skyrim, both in heavy and light variants. Certain armor sets can provide special bonuses if the full set is worn.</p>
            <Link to="/skyrim-armor-sets" class="details-btn">Learn More</Link>
          </div>
          {/* <!-- <div class="article-image"> --> */}
            {/* <!-- <img src="./img/00test2/file(10).png" alt=""> --> */}
            {/* <!-- <img src="./img/00test2/an-armor-made-of-white-bones-engraved-with-patterns-with-green-glowing-power-gems-set-floating-in-453316929 – Копие.png" alt=""> --> */}
          {/* <!-- </div> --> */}
        </article>
        <article>
          <div class="article-content">
            <h2 class="cursive">Enchantments</h2>
            <p>Armor can have enchantments, which provide special magical effects, and traits, which are inherent properties of the piece that cannot be altered. Enchantments come from glyphs created at an enchanting table, while traits are crafted into the piece with the appropriate additional material.</p>
            <p>To enchant an armor it requires an item with no existing enchantments, a filled soul gem, knowledge of an enchantment, and the use of an Arcane Enchanter. The Law of the Firsts states that once an item is enchanted, it can not be enchanted again and can not accept another enchantment. The effect is permanent as long as the item is worn.</p>
            <a href="#" class="btn not-active">Learn More</a>
          </div>
          <div class="article-image">
            <img class="mask-1" src="./img/00test3/dwarven-bronze-plate-cuirass-firewalker.png" alt="" />
          </div>
        </article>
        {/* <!-- <article>
          <div class="article-content">
            <h2 class="cursive">Boots</h2>
            <a href="./skyrim-armor.html" class="btn not-active">Learn More</a>
          </div>
          <div class="article-image">
          </div>
        </article> --> */}
        {/* <!-- <article>
          <div class="article-content">
            <h2 class="cursive">Gauntlets</h2>
            <a href="./skyrim-armor.html" class="btn not-active">Learn More</a>
          </div>
          <div class="article-image">
          </div>
        </article> --> */}
        {/* <!-- <article>
          <div class="article-content">
            <h2 class="cursive">Helmet</h2>
            <a href="./skyrim-armor.html" class="btn not-active">Learn More</a>
          </div>
          <div class="article-image">
          </div>
        </article> --> */}
        {/* <!-- <article>
          <div class="article-content">
            <h2 class="cursive">Shield</h2>
            <a href="./skyrim-armor.html" class="btn not-active">Learn More</a>
          </div>
          <div class="article-image">
          </div>
        </article> --> */}
        {/* <!-- <article>
          <div class="article-content">
            <h2 class="cursive">next</h2>
            <a href="./skyrim-armor.html" class="btn not-active">Learn More</a>
          </div>
          <div class="article-image">
          </div>
        </article> --> */}
      </div>

        </main>
      </div>
    </>
  )
}