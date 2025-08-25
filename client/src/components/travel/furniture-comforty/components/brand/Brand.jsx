import "./brand.css";

export function Brand() {
    const brands = [
        {
            id: 1,
            image: "/src/components/travel/furniture-comforty/images/brands/brand_1.png"
        },
        {
            id: 2,
            image: "/src/components/travel/furniture-comforty/images/brands/brand_2.png"
        },
        {
            id: 3,
            image: "/src/components/travel/furniture-comforty/images/brands/brand_3.png"
        },
        {
            id: 4,
            image: "/src/components/travel/furniture-comforty/images/brands/brand_4.png"
        },
        {
            id: 5,
            image: "/src/components/travel/furniture-comforty/images/brands/brand_5.png"
        },
        {
            id: 6,
            image: "/src/components/travel/furniture-comforty/images/brands/brand_6.png"
        }, 
        {
            id: 7,
            image: "/src/components/travel/furniture-comforty/images/brands/brand_7.png"
        },
 
    ]

    return (
        <div className="brands max-width">
            <div className="flex">
                {
                    brands?.map((brand) => (
                        <div key={brand?.id} className="brand-item">
                            <img src={brand?.image} alt="brand" />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};