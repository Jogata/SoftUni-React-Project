import hero from '../images/nike-hero.png';

export function HeroSection() {
    return (
        <div className="hero-section">
            <div className='hero-header'>
                {/* <div className="grid w-full place-items-center bg-gradient-to-r from-[#0f0fd7] via-[#2c67f2] to-[#00d4ff]"> */}
                <h1>Step Into The Future With Our Collection</h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus recusandae vero, quod ipsa ea ipsam  iure quae
                    repudiandae qui tenetur enim in? Non repellendus animi
                </p>
                {/* <div className="flex justify-center gap-4 mt-4"> */}
                <button>
                    {/* <button className="px-10 py-4 bg-white text-blue-900 font-semibold rounded-full hover:bg-sky-500"> */}
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