import "./brand.css";

const productCategoryList = [
    {
        name: "Chair",
        icon: "fa fa-spinner"
    },
    {
        name: "Table",
        icon: "fa fa-tv"
    },
    {
        name: "Bed",
        icon: "fa fa-bed"
    },
    {
        name: "Office Chair",
        icon: "ri-archive-drawer-line"
    },
    {
        name: "Lightning",
        icon: "ri-lightbulb-line"
    },
    {
        name: "Sofa",
        icon: "fa fa-spinner"
    },
]

export function Explore({ selectedCategory, setSelectedCategory }) {
    const category = {
        name: "All", 
    }

    const classes = selectedCategory == category.name ? "menu-list-item active" : "menu-list-item";

    return (
        <div className="explore-menu">
            <h2>Explore Our Products</h2>
            <p className="explore-text">
                Explore our wide range of furnoture and find the perfect pieces 
                to express your unique style. Whether you are looking to finish 
                your living room, bedroom, dinning area or office, we have 
                something that suits every taste and need.
            </p>
            <div className="menu-list">
                <div className={classes}>
                    <button onClick={() => setSelectedCategory(category.name)}>
                        <i className={category.icon}></i>
                        <p>{category.name}</p>
                    </button>
                </div>

                {productCategoryList.map((category, index) => {
                    const classes = selectedCategory == category.name ? "menu-list-item active" : "menu-list-item";
                    // console.log(selectedCategory);
                    // console.log(category);
                    // console.log(classes);

                    return (
                        <div className={classes} key={index}>
                            <button onClick={() => setSelectedCategory(category.name)}>
                                <i className={category.icon}></i>
                                <p>{category.name}</p>
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}



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