import "./skyrim-windhelm-page.css";
import PageNavigation from "../navigation/PageNavigation";
import { Link } from "react-router-dom";

export function SkyrimWindhelmPage() {
    return (
        <div className="page full-screen darken-bg" id="windhelm">

            <PageNavigation />

            <main>
                <div className="animated-title-container">
                    <div className="animated-title-page-content">
                        <h1 className="animated-title banner" data-text="Windhelm">Windhelm</h1>
                        <p>Windhelm is a major city in the northeast of Skyrim and the capital of <Link to="/skyrim-eastmarch" className="link">Eastmarch</Link>. Lying near the coast at the northern tip of Eastmarch, the city is extremely cold and frequently experiences blizzards.</p>
                        <a className="details-btn" href="./skyrim-windhelm-history.html">details</a>
                    </div>
                </div>
            </main>
        </div>
    )
}