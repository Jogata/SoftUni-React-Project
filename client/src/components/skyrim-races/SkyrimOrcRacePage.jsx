import "./skyrim-races.css";
import { Link } from "react-router-dom";
import PageNavigation from "../navigation/PageNavigation";

export default function SkyrimOrcRacePage() {
    return (
        <div className="page">
            <PageNavigation />
            <main>
                <div className="page-content race details-content">
                    <div className="header">
                        <h1 className="big-fs cursive">
                            <span className="silver decor-1">Orc</span>
                        </h1>
                        <article className="main-article">
                            <div className="article-content">
                                <p>Orc is a <Link to="/skyrim-races" className="link">Race</Link> in Skyrim. Orsimer is one of the ten playable Races in Skyrim. Having unshakable courage in war and unflinching endurance of hardships, Orcs are widely feared and hated by the other nations and races of Tamriel in the past. They are also well known to be the greatest warriors and smiths.</p>
                                <h2 className="cursive">Orc Stats</h2>
                                <h3 className="cursive">Initial Bonuses</h3>
                                <ul className="vertical-list bulled basic-stats">
                                    <li>+10 Heavy Armor</li>
                                    <li>+5 Block</li>
                                    <li>+5 One-handed</li>
                                    <li>+5 Two-Handed</li>
                                    <li>+5 Enchanting</li>
                                    <li>+5 Smithing</li>
                                </ul>
                                <h3 className="cursive">Starting Spells</h3>
                                <ul className="vertical-list bulled basic-stats">
                                    <li>Flames</li>
                                    <li>Healing</li>
                                </ul>
                                <h3 className="cursive">Specialties</h3>
                                <dl className="list">
                                    <div className="row">
                                    <dt>Abilities:</dt>
                                    <dd>None</dd>
                                    </div>
                                    <div className="row">
                                    <dt>Additional status:</dt>
                                    <dd>Blood-Kin</dd>
                                    </div>
                                    <div className="row">
                                    <dt>Powers:</dt>
                                    <dd>Berserker Rage - You take half damage and do double damage for 60 seconds, once per day</dd>
                                    </div>
                                </dl>
                            </div>
                            <div className="article-image">
                                <img src="/skyrim/races/orc.png" alt="" />
                            </div>
                        </article>
                    </div>

                    <article>
                        <div className="article-content">
                            <h2 className="cursive">History</h2>
                            <p>Orcs, also called Orsimer or "Pariah Folk" in ancient times, are sophisticated, brutish elves of the Wrothgarian Mountains, Dragontail Mountains, Valenwood, and Orsinium (literally translated as "Orc-Town"). They are noted for their unshakable courage in war and their unflinching endurance of hardships. Orcs have elven blood, but are usually considered to be both beastfolk and goblin-ken. In the past, Orcs were widely feared and hated by the other nations and races of Tamriel. However, they have slowly won acceptance in the Empire, in particular for their distinguished service in the Emperor's Legions. Orc armorers are prized for their craftsmanship, and Orc warriors in heavy armor are among the finest front-line troops in the Empire, and are fearsome when using their berserker rage. Most Imperial citizens regard Orc society as rough and cruel. The Orcs of the Iliac Bay region have developed their own language, known as Orcish, and have often had their own kingdom, Orsinium.</p>
                        </div>
                    </article>

                    <article>
                        <div className="article-content">
                            <h3 className="cursive">Gameplay</h3>
                            <p>Bonuses to both one-handed and two-handed weapons allows players to choose their weapon styles early-on, and they receive an early benefit to augmenting their weaponry with bonuses to both Smithing and Enchanting. These combined with a strong bonus to Heavy Armor give Orcs the opportunity to become very fearsome warriors. However, to balance their potency in physical combat, they have no benefits for magic or stealth character builds.</p>
                            <p>Their Berserker Rage power is extremely useful at all levels, potentially making the difference between life and death at earlier levels against stronger opponents. Because it has no effect on magic, try to save it for combat against tough melee or archery opponents for best results.</p>
                            <p>Orc players are automatically Blood-Kin to the Orcs of Skyrim, providing them with full access to all Orc Strongholds.</p>
                            {/* <a href="#" className="btn not-active">Learn More</a> */}
                        </div>
                        {/* <div className="article-image shadow">
                            <img src="/skyrim/equipment/armor/heavy-armor.png" alt="Knight in heavy armor" />
                        </div> */}
                    </article>

                    <article>
                        <div className="article-content">
                            <h2 className="cursive">Strongholds</h2>
                            <p>Most orcs are found in strongholds throughout Skyrim, though some are seen in major cities such as Morthal and Markarth. The Dragonborn may enter, but cannot have conversation with the Orcs inside. Once you are near an Orcish Stronghold, a guard will tell you to stay away. You are allowed to enter the stronghold, but the Orcs dislike it, thus making conversation impossible until you become "Blood-Kin" by completing the quest the guard gives you. This quest varies per Stronghold. If the Dragonborn is an Orc, they will be accepted and may enter and engage in conversations without the need for prerequisite quests, though they will still treat the Dragonborn as an "outlander." However, if you are an Orc, as well as a vampire, then there will be a prerequisite quest. Orc strongholds tend to have a mine and blacksmith tools, which are usable regardless of whether the associated quest has been completed.</p>
                        </div>
                    </article>
                </div>
            </main>
        </div>
    )
}