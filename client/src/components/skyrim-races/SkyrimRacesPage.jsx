// import "./skyrim-races-page.css";
import { Link } from "react-router-dom";
import PageNavigation from "../navigation/PageNavigation";

export default function SkyrimRacesPage() {
    return (
        <div className="page">
            <PageNavigation />
            <main>
                <div className="page-content races details-content">
                    <div className="header-section">
                        <h1 className="big-fs cursive">
                            <span className="silver decor-1">Races</span>
                        </h1>
                        <div className="header-content">
                            <div className="main-description">
                                <p>Races in Skyrim are one of the main choices made during Character Creation. Each Race has different physical appearance options and unique powers that can only be used once a day. Picking a Race will give players various bonuses to certain skills, each option giving 10 levels to one main skill and 5 levels to 5 other skills. The Race selection is the only option that has an impact on the character's skills and abilities during Character Creation. However, this doesn't mean that a race is restricted to a certain play-style, as it is possible to develop any skill over time. All Races start with 2 basic spells - Flames and Healing.</p>
                                <p>All race types are roughly humanoid in shape and have two arms, two legs, a torso, and a head. This is important so that a race can take advantage of all the various magic item slots available to characters and can utilize the standard weapon and armor options.</p>
                            </div>
                            <div className="image">
                                <div className="image-mask">
                                    <img src="/skyrim/races/pngegg(5).png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <article>
                        <div className="article-content">
                            <h2 className="cursive">Race Variety</h2>
                            <p>There are ten playable races available to the player in-game, each occupying a different portion of Tamriel. They all have male and female version and can be separeted in three main groups: Humans, Elves and Beasts.</p>
                        </div>
                    </article>

                    <article>
                        <div className="article-content">
                            <h3 className="cursive">Humans</h3>
                            <p></p>
                            <ul className="bulled">
                                <li>Breton</li>
                                <li>Imperial</li>
                                <li>Nord</li>
                                <li>Redguard</li>
                            </ul>
                            {/* <a href="#" className="btn not-active">Learn More</a> */}
                        </div>
                        {/* <div className="article-image shadow">
                            <img src="/skyrim/equipment/armor/heavy-armor.png" alt="Knight in heavy armor" />
                        </div> */}
                    </article>
                    <article>
                        <div className="article-content">
                            <h3 className="cursive">Elves</h3>
                            <p></p>
                            <ul className="bulled">
                                <li>Altmer</li>
                                <li>Bosmer</li>
                                <li>Dunmer</li>
                                <li><Link to="/skyrim-orc" className="link">Orc</Link></li>
                            </ul>
                            {/* <a href="#" className="btn not-active">Learn More</a> */}
                        </div>
                        {/* <div className="article-image shadow">
                            <img src="/skyrim/equipment/armor/heavy-armor.png" alt="Knight in heavy armor" />
                        </div> */}
                    </article>
                    <article>
                        <div className="article-content">
                            <h3 className="cursive">Beasts</h3>
                            <p></p>
                            <ul className="bulled">
                                <li>Argonian</li>
                                <li>Khajiit</li>
                            </ul>
                            {/* <a href="#" className="btn not-active">Learn More</a> */}
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