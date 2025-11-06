import { useState } from "react";
import PageNavigation from "../navigation/PageNavigation";

// export default function SkyrimSteelArmor1() {
export function SkyrimSteelArmor1() {
    const [ current, setCurrent ] = useState(2);
    const [ isGalleryOpen, setIsGalleryOpen ] = useState(false);

    const slides = ["slide-image", "slide-image", "slide-image", "slide-image", "slide-image"];
    let left = current - 1;
    left = left + slides.length;
    left = left % slides.length;
    let right = current + 1;
    right = right % slides.length;

    slides[current] = "slide-image middle";
    slides[left] = "slide-image left";
    slides[right] = "slide-image right";

    function rotateLeft() {
        let newSlide = current - 1;
        newSlide = newSlide + slides.length;
        newSlide = newSlide % slides.length;
        setCurrent(newSlide);
    }
    
    function rotateRight() {
        let newSlide = current + 1;
        newSlide = newSlide % slides.length;
        setCurrent(newSlide);
    }

    function openGallery() {
        setIsGalleryOpen(true);
    }

    function closeGallery() {
        setIsGalleryOpen(false);
    }

    return (
        <>
            <div className="page">

                <PageNavigation />

                <main>
                    <div className="page-content armor-sets details-content">
                        <div className="header">
                            <h1 className="big-fs cursive">
                                <span className="silver decor-1">Steel Armor</span>
                            </h1>
                        </div>
                        <article className="main-article">
                            <div className="article-content">
                                <p>The Steel Armor can be purchased from Blacksmiths and general goods merchants, found as random loot in chests, worn by mid-level bandit chiefs and hired thugs or forged at a blacksmith's forge.</p>
                                <h2 className="cursive">Basic Stats</h2>
                                <ul className="vertical-list bulled basic-stats">
                                    <li>Type: Light Armor</li>
                                    <li>Slot: Chest</li>
                                    <li>Armor rating: 23</li>
                                    <li>Weight: 6</li>
                                    <li>Price: 125 gold</li>
                                    <li>Set Name: Steel Armor Set</li>
                                </ul>
                                <div className="gallery-section">
                                    <p>Steel Armor is available in five variants, but the difference is only cosmetic - their statistics are identical.</p>
                                    <button className="details-btn" onClick={openGallery}>open gallery</button>
                                </div>
                            </div>
                            <div className="article-image mask-1">
                                {/* <img src="./img/00test/armors/steel/a-male-scales-breastplate-artstation-heroic-fantasy-dnd-ultra-detailed-987212266.png" alt="" /> */}
                                <img src="/skyrim/equipment/armor/light/steel/steel-armor.jpeg" alt="" />
                                {/* <img src="./img/00test/armors/mountain-knight-in-full-armor.jpg" alt="" /> */}
                                {/* <img src="./img/00test3/an-elven-male-clad-in-brown-leather-armor-crafted-from-leaves-appears-depicted-in-a-volumetric-art-723107854.png" alt="Knight in heavy armor" /> */}
                            </div>
                        </article>
                        <article>
                            <div className="article-content">
                                <h3>Smithing</h3>
                                <p>Steel Armor requires the Steel Smithing perk to create. It can be forged at a blacksmith's forge. The materials needed to create a Steel Armor are 2 Steel Ingots, 2 Leather, 3 Leather Strips.</p>
                                <p>It can be upgraded with a steel ingot at a workbench and also benefits from the Steel Smithing perk, which doubles the improvement.</p>
                            </div>
                        </article>
                        <article>
                            <div className="article-content">
                                <h3>Enchanting</h3>
                                <p>Steel Armor can be enchanted at Arcane Enchanter. Unlike weapon enchantments, apparel enchantments do not require recharging and stay enchanted indefinitely. There are 38 apparel enchantments available but only 20 of them can be applied on the chest armor.</p>
                                <ul className="vertical-list bulled">
                                    <li>Fortify Alteration</li>
                                    <li>Fortify Alteration and Magicka Regen</li>
                                    <li>Fortify Conjuration</li>
                                    <li>Fortify Conjuration and Magicka Regen</li>
                                    <li>Fortify Destruction</li>
                                    <li>Fortify Destruction and Magicka Regen</li>
                                    <li>Fortify Healing Rate</li>
                                    <li>Fortify Health</li>
                                    <li>Fortify Heavy Armor</li>
                                    <li>Fortify Illusion</li>
                                    <li>Fortify Illusion and Magicka Regen</li>
                                    <li>Fortify Light Armor</li>
                                    <li>Fortify Magicka Regen</li>
                                    <li>Fortify Restoration</li>
                                    <li>Fortify Restoration and Magicka Regen</li>
                                    <li>Fortify Smithing</li>
                                    <li>Fortify Stamina</li>
                                    <li>Fortify Stamina Regen</li>
                                    <li>Resist Disease</li>
                                    <li>Resist Poison</li>
                                </ul>
                            </div>
                            {/* <div className="article-image mask-1"> */}
                                {/* <img src="/skyrim/equipment/armor/light/steel/wind-magic-armor-male-scale-mail-05.jpeg" alt="" /> */}
                                {/* <img className="mask-1" src="./img/00test3/dwarven-bronze-plate-cuirass-firewalker.png" alt="" /> */}
                                {/* <img src="./img/00test/armors/heavy-steel-armor.png" alt="" /> */}
                            {/* </div> */}
                        </article>
                    </div>
                </main>

                {isGalleryOpen ? (
                    <div className="fixed-3d-gallery">
                        <button id="close-btn" onClick={closeGallery}>x</button>
                        <div className="slider">
                            <img className={slides[0]} src="/skyrim/equipment/armor/light/steel/a-male-scales-breastplate-01.png" alt="" />
                            <img className={slides[1]} src="/skyrim/equipment/armor/light/steel/an-elven-male-full-scales-armor-02.png" alt="" />
                            <img className={slides[2]} id="relative" src="/skyrim/equipment/armor/light/steel/light-blue-magic-male-scale-armor-03.jpeg" alt="" />
                            <img className={slides[3]} src="/skyrim/equipment/armor/light/steel/light-blue-magic-male-scale-armor-04.jpeg" alt="" />
                            <img className={slides[4]} src="/skyrim/equipment/armor/light/steel/wind-magic-armor-male-scale-mail-05.jpeg" alt="" />
                        </div>

                        <div className="arrows">
                            <button id="prev" onClick={rotateRight}>
                                Previous Slide
                                <i className="fa fa-angle-double-left" aria-hidden="true"></i>
                            </button>
                            <button id="next" onClick={rotateLeft}>
                                Next Slide
                                <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                            </button>
                        </div>

                    </div>
                ) : null}

            </div>
        </>
    )
}

export default function SkyrimSteelArmorTest() {
    // const [ current, setCurrent ] = useState(2);
    // const [ isGalleryOpen, setIsGalleryOpen ] = useState(false);

    // const slides = ["slide-image", "slide-image", "slide-image", "slide-image", "slide-image"];
    // let left = current - 1;
    // left = left + slides.length;
    // left = left % slides.length;
    // let right = current + 1;
    // right = right % slides.length;

    // slides[current] = "slide-image middle";
    // slides[left] = "slide-image left";
    // slides[right] = "slide-image right";

    // function rotateLeft() {
    //     let newSlide = current - 1;
    //     newSlide = newSlide + slides.length;
    //     newSlide = newSlide % slides.length;
    //     setCurrent(newSlide);
    // }
    
    // function rotateRight() {
    //     let newSlide = current + 1;
    //     newSlide = newSlide % slides.length;
    //     setCurrent(newSlide);
    // }

    // function openGallery() {
    //     setIsGalleryOpen(true);
    // }

    // function closeGallery() {
    //     setIsGalleryOpen(false);
    // }

    return (
        <div className="page">

                <PageNavigation />

                <main>
                    <div className="page-content armor-sets details-content">
                        <Header />
                <PageContent>
                        {/* <MainArticle /> */}
                        {/* <MainArticle>
                            <Button openGallery={openGallery} />
                        </MainArticle> */}
                        <Article1 />
                        <Article2 />
                </PageContent>
                    </div>
                </main>

                {/* {isGalleryOpen ? (
                    <div className="fixed-3d-gallery">
                        <button id="close-btn" onClick={closeGallery}>x</button>
                        <div className="slider">
                            <img className={slides[0]} src="/skyrim/equipment/armor/light/steel/a-male-scales-breastplate-01.png" alt="" />
                            <img className={slides[1]} src="/skyrim/equipment/armor/light/steel/an-elven-male-full-scales-armor-02.png" alt="" />
                            <img className={slides[2]} id="relative" src="/skyrim/equipment/armor/light/steel/light-blue-magic-male-scale-armor-03.jpeg" alt="" />
                            <img className={slides[3]} src="/skyrim/equipment/armor/light/steel/light-blue-magic-male-scale-armor-04.jpeg" alt="" />
                            <img className={slides[4]} src="/skyrim/equipment/armor/light/steel/wind-magic-armor-male-scale-mail-05.jpeg" alt="" />
                        </div>

                        <div className="arrows">
                            <button id="prev" onClick={rotateRight}>
                                Previous Slide
                                <i className="fa fa-angle-double-left" aria-hidden="true"></i>
                            </button>
                            <button id="next" onClick={rotateLeft}>
                                Next Slide
                                <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                            </button>
                        </div>

                    </div>
                ) : null}
 */}
            </div>
    )
}

function PageContent({children}) {
    console.log("PageContent");
    const [ current, setCurrent ] = useState(2);
    const [ isGalleryOpen, setIsGalleryOpen ] = useState(false);

    const slides = ["slide-image", "slide-image", "slide-image", "slide-image", "slide-image"];
    let left = current - 1;
    left = left + slides.length;
    left = left % slides.length;
    let right = current + 1;
    right = right % slides.length;

    slides[current] = "slide-image middle";
    slides[left] = "slide-image left";
    slides[right] = "slide-image right";

    function rotateLeft() {
        let newSlide = current - 1;
        newSlide = newSlide + slides.length;
        newSlide = newSlide % slides.length;
        setCurrent(newSlide);
    }
    
    function rotateRight() {
        let newSlide = current + 1;
        newSlide = newSlide % slides.length;
        setCurrent(newSlide);
    }

    function openGallery() {
        setIsGalleryOpen(true);
    }

    function closeGallery() {
        setIsGalleryOpen(false);
    }

    return (
        <>
                <MainArticle>
                            <Button openGallery={openGallery} />
                        </MainArticle>
        {children}
        {isGalleryOpen ? (
                    <div className="fixed-3d-gallery">
                        <button id="close-btn" onClick={closeGallery}>x</button>
                        <div className="slider">
                            <img className={slides[0]} src="/skyrim/equipment/armor/light/steel/a-male-scales-breastplate-01.png" alt="" />
                            <img className={slides[1]} src="/skyrim/equipment/armor/light/steel/an-elven-male-full-scales-armor-02.png" alt="" />
                            <img className={slides[2]} id="relative" src="/skyrim/equipment/armor/light/steel/light-blue-magic-male-scale-armor-03.jpeg" alt="" />
                            <img className={slides[3]} src="/skyrim/equipment/armor/light/steel/light-blue-magic-male-scale-armor-04.jpeg" alt="" />
                            <img className={slides[4]} src="/skyrim/equipment/armor/light/steel/wind-magic-armor-male-scale-mail-05.jpeg" alt="" />
                        </div>

                        <div className="arrows">
                            <button id="prev" onClick={rotateRight}>
                                Previous Slide
                                <i className="fa fa-angle-double-left" aria-hidden="true"></i>
                            </button>
                            <button id="next" onClick={rotateLeft}>
                                Next Slide
                                <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                            </button>
                        </div>

                    </div>
                ) : null}
        </>
    )
}

function Header() {
    console.log("Header");
    return (
        <div className="header">
        <h1 className="big-fs cursive">
            <span className="silver decor-1">Steel Armor</span>
        </h1>
    </div>
    )
}

function MainArticle({children}) {
    console.log("MainArticle");
    return (
        <article className="main-article">
        <div className="article-content">
            <p>The Steel Armor can be purchased from Blacksmiths and general goods merchants, found as random loot in chests, worn by mid-level bandit chiefs and hired thugs or forged at a blacksmith's forge.</p>
            <h2 className="cursive">Basic Stats</h2>
            <ul className="vertical-list bulled basic-stats">
                <li>Type: Light Armor</li>
                <li>Slot: Chest</li>
                <li>Armor rating: 23</li>
                <li>Weight: 6</li>
                <li>Price: 125 gold</li>
                <li>Set Name: Steel Armor Set</li>
            </ul>
            <div className="gallery-section">
                <p>Steel Armor is available in five variants, but the difference is only cosmetic - their statistics are identical.</p>
                {/* <button className="details-btn" onClick={openGallery}>open gallery</button> */}
                {children}
            </div>
        </div>
        <div className="article-image mask-1">
            {/* <img src="./img/00test/armors/steel/a-male-scales-breastplate-artstation-heroic-fantasy-dnd-ultra-detailed-987212266.png" alt="" /> */}
            <img src="/skyrim/equipment/armor/light/steel/steel-armor.jpeg" alt="" />
            {/* <img src="./img/00test/armors/mountain-knight-in-full-armor.jpg" alt="" /> */}
            {/* <img src="./img/00test3/an-elven-male-clad-in-brown-leather-armor-crafted-from-leaves-appears-depicted-in-a-volumetric-art-723107854.png" alt="Knight in heavy armor" /> */}
        </div>
    </article>
    )
}

function Button({openGallery}) {
    console.log("Button");
    return (
        <button className="details-btn" onClick={openGallery}>open gallery</button>
    )
}

function Article1() {
    console.log("Article1");
    return (
        <article>
        <div className="article-content">
            <h3>Smithing</h3>
            <p>Steel Armor requires the Steel Smithing perk to create. It can be forged at a blacksmith's forge. The materials needed to create a Steel Armor are 2 Steel Ingots, 2 Leather, 3 Leather Strips.</p>
            <p>It can be upgraded with a steel ingot at a workbench and also benefits from the Steel Smithing perk, which doubles the improvement.</p>
        </div>
    </article>
    )
}

function Article2() {
    console.log("Article2");
    return (
        <article>
        <div className="article-content">
            <h3>Enchanting</h3>
            <p>Steel Armor can be enchanted at Arcane Enchanter. Unlike weapon enchantments, apparel enchantments do not require recharging and stay enchanted indefinitely. There are 38 apparel enchantments available but only 20 of them can be applied on the chest armor.</p>
            <ul className="vertical-list bulled">
                <li>Fortify Alteration</li>
                <li>Fortify Alteration and Magicka Regen</li>
                <li>Fortify Conjuration</li>
                <li>Fortify Conjuration and Magicka Regen</li>
                <li>Fortify Destruction</li>
                <li>Fortify Destruction and Magicka Regen</li>
                <li>Fortify Healing Rate</li>
                <li>Fortify Health</li>
                <li>Fortify Heavy Armor</li>
                <li>Fortify Illusion</li>
                <li>Fortify Illusion and Magicka Regen</li>
                <li>Fortify Light Armor</li>
                <li>Fortify Magicka Regen</li>
                <li>Fortify Restoration</li>
                <li>Fortify Restoration and Magicka Regen</li>
                <li>Fortify Smithing</li>
                <li>Fortify Stamina</li>
                <li>Fortify Stamina Regen</li>
                <li>Resist Disease</li>
                <li>Resist Poison</li>
            </ul>
        </div>
        {/* <div className="article-image mask-1"> */}
            {/* <img src="/skyrim/equipment/armor/light/steel/wind-magic-armor-male-scale-mail-05.jpeg" alt="" /> */}
            {/* <img className="mask-1" src="./img/00test3/dwarven-bronze-plate-cuirass-firewalker.png" alt="" /> */}
            {/* <img src="./img/00test/armors/heavy-steel-armor.png" alt="" /> */}
        {/* </div> */}
    </article>
    )
}