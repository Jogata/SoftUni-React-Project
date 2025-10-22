import { Link } from "react-router-dom";
import { Navigation } from "../navigation/Navigation";
import "./hero.css";

export function Hero() {
  return (
    <div className="hero-container">
      <Navigation />
      <div className="hero">
        <h1>Discover Timeless Style and <span>Unmatched Comfort</span></h1>
        <p>Shop the latest trends and classic essentials just for you</p>
        <a href="#products">Shop Now</a>
      </div>
    </div>
  )
}