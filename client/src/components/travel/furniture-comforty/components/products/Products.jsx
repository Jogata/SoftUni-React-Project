import { useContext, useState } from "react";
import { userContext } from "../AuthCont/AuthCont";
import "./products.css";

export function Products1({ selectedCategory }) {
    const { products } = useContext(userContext);
    // console.log(products);
    let filtered = products;

    if (selectedCategory !== "All") {
        filtered = [...products].filter(product => product.category === selectedCategory);
    }

    return (
        <div className="products-test">
            <div className="product-items">
                {filtered.map(product => {
                    // console.log(product);
                    const { id, image, name, price } = product;

                    return (
                        <div className="item" key={id}>
                            <img src={image} alt={name} />
                            <div className="product-info">
                                <h4>{name}</h4>
                                <p>${price}</p>
                                <button>Buy</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}



export function Products() {
    const [active, setActive] = useState({
        id: 0,
        product: "all"
    });

    const categories = [
        {
            id: 0,
            title: "all",
            product: "all"
        },
        {
            id: 1,
            title: "newest",
            product: "newest"
        },
        {
            id: 2,
            title: "trending",
            product: "trending"
        },
        {
            id: 3,
            title: "best seller",
            product: "best-seller"
        },
    ];

    const ids = new Array(categories.length).fill(null);
    ids[active.id] = "active";

    const products = [
        {
            title: "library stool",
            status: "New",
            price: "$250",
            image: "/src/components/travel/furniture-comforty/images/products/product_1.png",
            currentPrice: "$200",
            product: "newest",
        },
        {
            title: "library stool Chair",
            status: "Sales",
            price: "$250",
            image: "/src/components/travel/furniture-comforty/images/products/product_2.png",
            product: "newest",
        },
        {
            title: "library stool",
            status: "New",
            price: "$250",
            image: "/src/components/travel/furniture-comforty/images/products/product_3.png",
            currentPrice: "$200",
            product: "newest",
        },
        {
            title: "library stool Chair",
            status: "Sales",
            price: "$250",
            image: "/src/components/travel/furniture-comforty/images/products/product_4.png",
            product: "newest",
        },

        {
            title: "library stool Chair",
            status: "Sales",
            price: "$250",
            image: "/src/components/travel/furniture-comforty/images/products/product_5.png",
            product: "trending",
        },
        {
            title: "library stool",
            status: "New",
            price: "$250",
            image: "/src/components/travel/furniture-comforty/images/products/product_6.png",
            currentPrice: "$200",
            product: "trending",
        },
        {
            title: "library stool Chair",
            status: "Sales",
            price: "$250",
            image: "/src/components/travel/furniture-comforty/images/products/product_7.png",
            product: "trending",
        },
        {
            title: "library stool Chair",
            status: "Sales",
            price: "$250",
            image: "/src/components/travel/furniture-comforty/images/products/product_8.png",
            product: "trending",
        },
        {
            title: "library stool",
            status: "New",
            price: "$250",
            image: "/src/components/travel/furniture-comforty/images/products/product_1.png",
            currentPrice: "$200",
            product: "best-seller",
        },
        {
            title: "library stool Chair",
            status: "Sales",
            price: "$250",
            image: "/src/components/travel/furniture-comforty/images/products/product_2.png",
            product: "best-seller",
        },
        {
            title: "library stool Chair",
            status: "Sales",
            price: "$250",
            image: "/src/components/travel/furniture-comforty/images/products/product_3.png",
            product: "best-seller",
        },
        {
            title: "library stool Chair",
            status: "Sales",
            price: "$250",
            image: "/src/components/travel/furniture-comforty/images/products/product_5.png",
            product: "best-seller",
        },
        {
            title: "library stool Chair",
            status: "Sales",
            price: "$250",
            image: "/src/components/travel/furniture-comforty/images/products/product_6.png",
            product: "featured",
        },
        {
            title: "library stool Chair",
            status: "Sales",
            price: "$250",
            image: "/src/components/travel/furniture-comforty/images/products/product_7.png",
            product: "featured",
        },
        {
            title: "library stool Chair",
            status: "Sales",
            price: "$250",
            image: "/src/components/travel/furniture-comforty/images/products/product_8.png",
            product: "featured",
        },
        {
            title: "library stool Chair",
            status: "Sales",
            price: "$250",
            image: "/src/components/travel/furniture-comforty/images/products/product_1.png",
            product: "featured",
        },
        {
            title: "library stool Chair",
            status: "Sales",
            price: "$250",
            image: "/src/components/travel/furniture-comforty/images/products/product_2.png",
            product: "all",
        },
        {
            title: "library stool Chair",
            status: "Sales",
            price: "$250",
            image: "/src/components/travel/furniture-comforty/images/products/product_3.png",
            product: "all",
        },
        {
            title: "library stool Chair",
            status: "Sales",
            price: "$250",
            image: "/src/components/travel/furniture-comforty/images/products/product_4.png",
            product: "all",
        },
        {
            title: "library stool Chair",
            status: "Sales",
            price: "$250",
            image: "/src/components/travel/furniture-comforty/images/products/product_5.png",
            product: "all",
        },
        {
            title: "library stool Chair",
            status: "Sales",
            price: "$250",
            image: "/src/components/travel/furniture-comforty/images/products/product_6.png",
            product: "all",
        },
        {
            title: "library stool Chair",
            status: "Sales",
            price: "$250",
            image: "/src/components/travel/furniture-comforty/images/products/product_7.png",
            product: "all",
        },
        {
            title: "library stool Chair",
            status: "Sales",
            price: "$250",
            image: "/src/components/travel/furniture-comforty/images/products/product_8.png",
            product: "all",
        },
        {
            title: "library stool Chair",
            status: "Sales",
            price: "$250",
            image: "/src/components/travel/furniture-comforty/images/products/product_1.png",
            product: "all",
        },
    ];

    const filteredProducts = active.product === "all" ? products : (
        products.filter(product => product.product == active?.product)
    );
    // console.log(filteredProducts);

    return (
        <div className="products max-width">
            {/* <div className="header"> */}
            <h3>our products</h3>

            <div className="categories">
                {
                    categories?.map((title, index) => (
                        <button key={title?.id} id={ids[index]}
                            onClick={() => setActive({
                                id: title?.id,
                                product: title?.product
                            })}
                        >
                            {title?.title}
                        </button>
                    ))
                }
            </div>
            {/* </div> */}

            <div className="products-list">
                {
                    filteredProducts?.map((product, index) => (
                        <div key={index} className="product">
                            <div className="image">
                                <img src={product?.image} alt={product?.title} />
                                {
                                    product?.status && (
                                        <div className="status">
                                            <button>{product?.status}</button>
                                        </div>
                                    )
                                }
                            </div>
                            <div className="content">
                                <div className="header">
                                    <h4>{product?.title}</h4>
                                    <a href="#cart" className="cart">
                                        <i className="fa fa-shopping-cart"></i>
                                    </a>
                                </div>
                                <p className="prices">
                                    {product?.price}
                                    {
                                        product?.currentPrice && (
                                            <span className="current">{product?.currentPrice}</span>
                                        )
                                    }
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};