import "./skyrim-bestiary-page.css";
// import { Link } from "react-router-dom";
import PageNavigation from "../navigation/PageNavigation";

export default function SkyrimDraugrPage() {
    return (
        <div className="page">
            <PageNavigation />
            <main>
                <div className="page-content creature details-content">
                    <div className="header">
                        <h1 className="big-fs cursive">
                            <span className="silver decor-1">Draugr</span>
                        </h1>
                        <article className="main-article">
                            <div className="article-content">
                                <p>Draugr are ancient Nordic warriors who have been reanimated. Most draugr were followers of dragon priests in ancient times. When these priests died, their followers were killed, reanimated, and then sealed into the tomb where they would periodically awaken in order to worship the priests and transfer energy to them to maintain their undead state. Some draugr instead guard nobility and treasures buried in barrows and tombs. They often rest in catacombs or sarcophagi to awaken and fight when disturbed or alerted.</p>
                                <h2 className="cursive">Draugr Stats</h2>
                                <h3 className="cursive">Draugr Types</h3>
                                <ul className="vertical-list bulled basic-stats">
                                    <li>Draugr</li>
                                    <li>Restless Draugr</li>
                                    <li>Draugr Overlord</li>
                                    <li>Draugr Wight</li>
                                    <li>Draugr Wight Lord</li>
                                    <li>Draugr Scourge</li>
                                    <li>Draugr Scourge Lord</li>
                                    <li>Draugr Deathlord</li>
                                    <li>Draugr Death Overlord</li>
                                </ul>
                                <h3 className="cursive">Drops</h3>
                                <ul className="vertical-list bulled basic-stats">
                                    <li>Bone Meal</li>
                                    <li>Gold</li>
                                    <li>Ancient Nord & Ebony Equipment</li>
                                    <li>Gems</li>
                                </ul>
                                <h3 className="cursive">Abilities</h3>
                                <ul className="vertical-list bulled basic-stats">
                                    <li>Immunity to Poison</li>
                                    <li>50% Frost Resistance</li>
                                    <li>Dragon Shouts</li>
                                </ul>
                                <h2 className="cursive">Location</h2>
                                <ul className="vertical-list bulled basic-stats">
                                    <li>Nordic Ruins</li>
                                    <li>Tombs</li>
                                    <li>Barrows</li>
                                </ul>
                            </div>
                            <div className="article-image">
                                <img src="/skyrim/bestiary/draugr.png" alt="" />
                            </div>
                        </article>
                    </div>

                    <article>
                        <div className="article-content">
                            <h2 className="cursive">Appearance</h2>
                            <p>Despite the advanced embalming techniques of the ancient Nords, time has taken its toll on draugr's physical appearance. Their soft tissues are severely decomposed, and their armor does little to conceal the fact that much of their flesh is rotting away, exposing the underlying skeletal structure. All draugr have piercing blue eyes. Male and female draugr appear at similar rates, but at higher levels, males far outnumber females. Higher rank draugr are clearly recognizable by their increasingly more impressive helmets and equipment. The Draugr Deathlords and Death Overlords will almost always carry ebony equipment and are most recognizable by their unobtainable versions of the ancient Nord helmets.</p>
                        </div>
                    </article>

                    <article>
                        <div className="article-content">
                            <h2 className="cursive">Characteristics</h2>
                            <p>Most draugr are immune to poison and have a 50% resistance to frost. However, the Hallowed Dead found in Labyrinthian are not immune to poison and are 33% weaker to magic.</p>
                            <p>The specific variety of draugr that you meet is generally level-dependent. However, this also depends on the location at which they're encountered. In addition, draugr may be spellcasters, archers, one-handed melee fighters, or two-handed melee fighters; this is unspecified by their names, which only indicate their class. Draugr that begin appearing early in the game are equipped with ancient Nordic weapons, which are similar in strength to steel weaponry, and ancient Nord armor, similar in quality to iron armor, which is unlootable. The more powerful draugr that appear at higher levels often use ebony weapons and equipment, and may have the ability to use one or more dragon shouts in combat, including Unrelenting Force, Disarm, and sometimes even Frost Breath. Most types of draugr, apart from the very weakest, will employ Frost Damage in combat, whether through spells, shouts, or enchanted weapons. Draugr have a high ratio of health to their level when compared to most enemy types, such as Vampires and enemy mages, making them all the more dangerous.</p>
                            <p>You will often encounter draugr enthralled by necromancers or hostile mages, such as those found in the Nordic ruin of Ansilvund where the draugr are forced to mine.</p>
                        </div>
                    </article>
                </div>
            </main>
        </div>
    )
}