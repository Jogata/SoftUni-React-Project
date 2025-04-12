import hero from '../images/nike-hero.png';

export function HeroSection() {
    return (
        <div className="hero-section">
            <div className='hero-header'>
                <h1>Step Into The Future With Our Collection</h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus recusandae vero, quod ipsa ea ipsam  iure quae
                    repudiandae qui tenetur enim in? Non repellendus animi
                </p>
                <button>
                    View Collection
                </button>
            </div>
            <div className="hero-image">
                <img
                    src={hero}
                    alt="Nike Air"
                />
            </div>
        </div>
    )
}