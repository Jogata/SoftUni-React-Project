import "./skyrim-bestiary-page.css";
import PageNavigation from "../navigation/PageNavigation";

export default function SkyrimBestiaryPage() {
    return (
        <div className="page">
            <PageNavigation />
            <main>
                <div className="page-content bestiary details-content">
                    <div className="header-section">
                        <h1 className="big-fs cursive">
                            <span className="silver decor-1">Bestiary</span>
                        </h1>
                        <div className="header-content">
                            <div className="main-description">
                                <p>In Skyrim, the term bestiary refers to a variety of creatures, some adapted from folklore and legends and others invented specifically for the game. Included are traditional monsters such as trolls and dragons, supernatural creatures such as Wispmother, and mundane (wolves, bears, deer) or mythical creatures (Hagraven, Falmer, Spriggan). A defining feature of the game is that monsters are typically obstacles that players must overcome to progress through the game.</p>
                                <p>Most of the creatures are hostile and will immediately enter combat upon detecting the player, requiring the use of fighting skills, magic, or stealth to overcome. After an enemy is defeated, their corpse can be safely looted for gear, gold, and various ingredients or materials to craft different items like weapons or potions. Most non-unique enemies will respawn after a set amount of in-game time. From the wolves in the wilds outside Whiterun to the draugr deep within ancient Nordic tombs, they are the most common challenge players will face while exploring, questing, and adventuring.</p>
                            </div>
                            <div className="image">
                                <div className="image-mask">
                                    <img src="/skyrim/bestiary/bestiary.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2 className="cursive">Creature Types</h2>
                    <p>The creatures in Skyrim are incredibly diverse, covering wild animals, the undead, mythical creatures, and even powerful dragons and Daedra. They can be classified into typologies based on their common characteristics and origin.</p>

                    <article>
                        <div className="article-content">
                            <h3 className="cursive">Animals</h3>
                            <p>Animals comprise various mundane creatures that have no magical or weapon-wielding abilities.</p>
                            <ul className="bulled">
                                <li>Bear</li>
                                <li>Wolf</li>
                                <li>Sabre Cat</li>
                                <li>Skeever</li>
                                <li>Horker</li>
                                <li>Mammoth</li>
                                <li>Mudcrab</li>
                                <li>Slaughterfish</li>
                                <li>Rabbit</li>
                                <li>Horse</li>
                                <li>Fox</li>
                                <li>Goat</li>
                                <li>Deer</li>
                                <li>Cow</li>
                                <li>Dog</li>
                                <li>Chicken</li>
                            </ul>
                            <a href="#" className="btn not-active">Learn More</a>
                        </div>
                        {/* <div className="article-image shadow">
                            <img src="/skyrim/equipment/armor/heavy-armor.png" alt="Knight in heavy armor" />
                        </div> */}
                    </article>
                    <article>
                        <div className="article-content">
                            <h3 className="cursive">Daedra</h3>
                            <p>Daedra are creatures from the planes of Oblivion.</p>
                            <ul className="bulled">
                                <li>Flame Atronach</li>
                                <li>Frost Atronach</li>
                                <li>Storm Atronach</li>
                                <li>Lurker</li>
                                <li>Seeker</li>
                            </ul>
                            <a href="#" className="btn not-active">Learn More</a>
                        </div>
                        {/* <div className="article-image shadow">
                            <img src="/skyrim/equipment/armor/heavy-armor.png" alt="Knight in heavy armor" />
                        </div> */}
                    </article>
                    <article>
                        <div className="article-content">
                            <h3 className="cursive">Dwarven Automatons</h3>
                            <p>Dwarven Automatons are ancient, robot-like machines encountered in Dwarven Ruins. </p>
                            <ul className="bulled">
                                <li>Dwarven Ballista</li>
                                <li>Dwarven Centurion</li>
                                <li>Dwarven Sphere</li>
                                <li>Dwarven Spider</li>
                            </ul>
                            <a href="#" className="btn not-active">Learn More</a>
                        </div>
                        {/* <div className="article-image shadow">
                            <img src="/skyrim/equipment/armor/heavy-armor.png" alt="Knight in heavy armor" />
                        </div> */}
                    </article>
                    <article>
                        <div className="article-content">
                            <h3 className="cursive">Monsters</h3>
                            <p>Monsters are creatures with various magical abilities, ranging from magical attacks to various magical resistances.</p>
                            <ul className="bulled">
                                <li>Chaurus</li>
                                <li>Dragon</li>
                                <li>Falmer</li>
                                <li>Frostbite Spider</li>
                                <li>Gargoyle</li>
                                <li>Giant</li>
                                <li>Goblin</li>
                                <li>Hagraven</li>
                                <li>Ice Wraith</li>
                                <li>Spriggan</li>
                                <li>Troll</li>
                                <li>Werewolf</li>
                            </ul>
                            <a href="#" className="btn not-active">Learn More</a>
                        </div>
                        {/* <div className="article-image shadow">
                            <img src="/skyrim/equipment/armor/heavy-armor.png" alt="Knight in heavy armor" />
                        </div> */}
                    </article>
                    <article>
                        <div className="article-content">
                            <h3 className="cursive">Undead</h3>
                            <p>Undead creatures consist of spirits, reanimated skeletons, and reanimated corpses. Vampires are also considered undead, but are undead NPCs instead of creatures.</p>
                            <ul className="bulled">
                                <li>Dragon Priest</li>
                                <li>Draugr</li>
                                <li>Ghost</li>
                                <li>Skeleton</li>
                                <li>Zombie</li>
                                <li>Death Hound</li>
                            </ul>
                            <a href="#" className="btn not-active">Learn More</a>
                        </div>
                        {/* <div className="article-image shadow">
                            <img src="/skyrim/equipment/armor/heavy-armor.png" alt="Knight in heavy armor" />
                        </div> */}
                    </article>
                    <article>
                        <div className="article-content">
                            <h3 className="cursive">Passive Creatures</h3>
                            <p>Passive creatures are completely unable to attack or harm you.</p>
                            <ul className="bulled">
                                <li>Aquatic Creatures</li>
                                <li>Food</li>
                                <li>Insects</li>
                                <li>Other Creatures</li>
                            </ul>
                            <a href="#" className="btn not-active">Learn More</a>
                        </div>
                        {/* <div className="article-image shadow">
                            <img src="/skyrim/equipment/armor/heavy-armor.png" alt="Knight in heavy armor" />
                        </div> */}
                    </article>
                </div>
            </main>
        </div>
    )
}