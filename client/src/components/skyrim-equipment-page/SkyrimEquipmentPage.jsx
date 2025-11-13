import PageNavigation from "../navigation/PageNavigation";
import "./skyrim-equipment-page.css";

import { Link } from 'react-router-dom'

export default function SkyrimEquipmentPage() {
  return (
    <>
      <div className="page">

        <PageNavigation />
        
        <main>
          <div className="page-content equipment details-content">

            <div className="header-section">
              <h1 className="big-fs cursive">
                <span className="silver decor-1">Equipment</span>
              </h1>
              <div className="header-content">
                <div className="main-description">
                  <p>Equipment include a wide variety of objects from weapons, to food, to junk items. Most items can be crafted, purchased from merchants, found in chests, looted from defeated enemies, or earned as a quest reward.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quidem. Repudiandae sequi nulla aliquam, repellat officiis obcaecati velit aut. Earum et, fuga repellendus unde vel harum. Deleniti, soluta. Ea sequi ducimus delectus iusto.</p>
                </div>
                <div className="image">
                  <div className="image-mask mask-1">
                    {/* <!-- <img src="./img/viking-spear.jpeg" alt=""> --> */}
                    {/* <!-- <img src="./img/00test2" alt=""> --> */}
                    <img src="/skyrim/equipment/equipment.jpeg" alt="" />
                    {/* <!-- https://playground.com/profile/cluczy2xj00nxs601y36rslhs --> */}
                    {/* <!-- <img src="./img/00test2/this-flute-of-nature-lies-in-a-beautiful-wooden-casket-made-of-rootsthe-casket-is-made-of-small-roo-534930541.jpeg" alt=""> --> */}
                    {/* <!-- <img src="./img/00test2/its-a-fantasy-style-the-photo-above-should-primarily-depict-the-contents-of-the-caseon-the-table-263427988.jpeg" alt=""> --> */}
                    {/* <!-- <img src="./img/00test2/natures-flute-rests-on-a-wooden-table-fantasy-treatment-27304190.jpeg" alt=""> --> */}
                  </div>
                </div>
              </div>
            </div>

            <article>
              <div className="article-content">
                <h2 className="cursive">Armor</h2>
                <p>Armor is a type of apparel that is worn on the body to increases a character's armor rating and thus helps to reduce the overall damage inflicted from physical attacks. Armor comes in two varieties: Heavy Armor and Light Armor. Both types have their advantages and disadvantages. There are also shields which provide an additional passive increase to armor rating. In addition armor can be enchanted to grant additional effects, such as, to boost certain skills, protect from magic attacks or to increase stats like Stamina, Health and Magicka.</p>
                <Link to="/skyrim-armor" className="details-btn">Learn More</Link>
              </div>
              <div className="article-image mask-3">
                {/* <!-- <img src="./img/00test2/file(10).png" alt=""> --> */}
                {/* <!-- <img src="./img/00test2/an-armor-made-of-white-bones-engraved-with-patterns-with-green-glowing-power-gems-set-floating-in-453316929 – Копие.png" alt=""> --> */}
                {/* <!-- <img src="./img/00test3/kneeling-knight-with-shield--tattoo-with-style-gothic--high-quality-12285050.png" alt=""> --> */}
                {/* <!-- <img src="./img/00test3/medieval-knight-armored-kneels-with-a-black-prince-style-sword-raised-surrounded-by-scattered-arm-746278622.jpeg" alt=""> --> */}
                {/* <!-- <img src="./img/00test3/medieval-knight-in-armor-kneeling-with-a-black-prince-style-sword-amidst-an-early-morning-battlefi-14692403.jpeg" alt=""> --> */}
                <img src="/skyrim/equipment/knight-in-shining-armor-kneeling.jpeg" alt="" />
                {/* <!-- <img src="./img/00test3/medieval-knight-kneeling-with-sword-high-quality-picture-very-detailed--127565242.png" alt=""> --> */}
                {/* <!-- <img src="./img/00test3/royal-knight-side-profile-full-body-holding-a-shield-303014372.jpeg" alt=""> --> */}
                {/* <!-- <img src="./img/00test3/royal-knight-standing-in-line-up-side-profile-full-body-18574760.jpeg" alt=""> --> */}
                {/* <!-- <img src="./img/00test3/royal-knight-standing-in-line-up-side-profile-full-body-hold-sword-with-both-hands-hold-sword-li-744765641.jpeg" alt=""> --> */}
                {/* <!-- <img src="./img/00test2/crusader-holy-helm-white-and-gold-intricate-gold-and-white-patterns-runes-etched-adorned-with-bl-316422468.png" alt=""> --> */}
              </div>
            </article>
            <article>
              <div className="article-content">
                <h2 className="cursive">Weapons</h2>
                <p>Weapons in The Elder Scrolls V: Skyrim refer to offensive equipment that the player can equipped by the player character, used to deal damage to enemies in combat. Skyrim's Weapons are the most prominent tools used in battle and are divided categorically by their class: One-Handed Weapons, Two-Handed Weapons, and Archery Weapons. Within each weapon class, weapons are further categorized based on their type. Aside from varying stat values and special effects, each weapon type has unique characteristics and behaves differently in combat.</p>
                {/* <a className="btn not-active">Learn More</a> */}
                <Link to="/skyrim-weapons" className="details-btn">Learn More</Link>
              </div>
              <div className="article-image">
                {/* <img src="/skyrim/equipment/weapons/erick-gonzalez-nw-weapons-corruptedheart-01.jpg" alt="" /> */}
                {/* <img src="/skyrim/equipment/weapons/fantasy-dagger-9822017.png" alt="" /> */}
                {/* <img src="/skyrim/equipment/weapons/Digen_image_1762972945218.jpeg" alt="" /> */}
                {/* <img src="/skyrim/equipment/weapons/Digen_image_1762972945218-trans.png" alt="" /> */}
                <img src="/skyrim/equipment/weapons/GlassGreatsword_SK-ed.png" alt="" />
                {/* <img src="/skyrim/equipment/weapons/Digen_image_1762972570539.jpeg" alt="" /> */}
              </div>
            </article>
            <article>
              <h2 className="cursive">Clothing</h2>
              <a className="btn not-active">Learn More</a>
            </article>
            <article>
              <h2 className="cursive">Daedric Artifacts</h2>
              <a className="btn not-active">Learn More</a>
            </article>
            <article>
              <h2 className="cursive">Jewelry</h2>
              <a className="btn not-active">Learn More</a>
            </article>
            <article>
              <h2 className="cursive">Items</h2>
              <a className="btn not-active">Learn More</a>
            </article>
            <article>
              <h2 className="cursive">Shields</h2>
              <a className="btn not-active">Learn More</a>
            </article>
            <article>
              <h2 className="cursive">Spells</h2>
              <a className="btn not-active">Learn More</a>
            </article>
            
          </div>

        </main>
      </div>
    </>
  )
}