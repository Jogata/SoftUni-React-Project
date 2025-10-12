import { Navigation } from "../navigation/Navigation";
import "./hero.css";

export function Hero() {
  return (
    <div>
        <div className="hero-container">
            <Navigation />
            <div className="hero">
                <h1>Discover Timeless Style and <span>Unmatcherd Comfort</span></h1>
                <p>Shop the latest trends and classic essentials just for you</p>
                <button>Shop Now</button>
            </div>
        </div>
    </div>
  )
}