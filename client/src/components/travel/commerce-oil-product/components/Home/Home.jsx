import oil from "../../images/oil.png";
import "./home.css";

const spark = "https://raw.githubusercontent.com/Zhully18/oil-product-landing-page/refs/heads/main/src/Components/Assets/spark.png";

export function Home() {
    return (
        <section className="home">
            <div className="main">
                <div className="text">
                    <h1>Ultra Protein Hair Oil</h1>
                    <p>A beauty nourishing hair oil mixed with concentrated organic product used
                        to nourish hair. It soothes the scalp and repairs damaging hair.
                        An anti-dandruff hair oil that works like magic in days after usage.
                    </p>
                    <button>Buy Now</button>
                </div>
                <div className="image">
                    <img src={oil} alt="" />
                    <div className="circle"></div>
                    <div className="spark-container">
                    <div className="spark1">
                        <img src={spark} alt=""/>
                    </div>
                    <div className="spark2">
                        <img src={spark} alt=""/>
                    </div>
                    <div className="spark3">
                        <img src={spark} alt=""/>
                    </div>
                    <div className="spark4">
                        <img src={spark} alt=""/>
                    </div>
                    <div className="spark5">
                        <img src={spark} alt=""/>
                    </div>
                </div>
                </div>
            </div>

            <div className="info">
                <div className="details">
                    <p>INGREDIENTS</p>
                    <h2>100% Organic</h2>
                </div>
                <div className="details">
                    <p>Material</p>
                    <h2>Beauty Grade</h2>
                </div>
                <div className="details">
                    <p>Flavour</p>
                    <h2>9 Variation</h2>
                </div>
                <div className="details">
                    <p>Volume</p>
                    <h2>200ml</h2>
                </div>
                <div className="details">
                    <p>Chemical</p>
                    <h2>Free</h2>
                </div>
            </div>
        </section>
    )
}