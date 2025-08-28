import { useContext, useRef } from "react";
import { useParams } from "react-router-dom";
import "./features.css";
import { BlogContext } from "../AuthCont/AuthCont";

export function BlogDetails() {
    const { id } = useParams();
    const { blogs } = useContext(BlogContext);

    const blog = blogs.find(blog => {
        return blog.id === parseInt(id);
    })

    const latest = blogs.slice(0, 5);

    return (
        <div>
            <div className="blog-details">
                <div className="blog-details-right">
                    <div className="detail-category">
                        <p>{blog.category}</p>
                    </div>
                    <h2 className="blog-title">{blog.title} </h2>
                    <div className="author-date">
                        <div className="author">
                            <img src={blog.blogDetail.author_image} alt="" />
                            <p>By: {blog.blogDetail.author_name}</p>
                        </div>
                        <p className="date">Published on {blog.blogDetail.date} </p>
                    </div>
                    <img src={blog.blog_image} alt="" />
                    <p className="desc">{blog.blogDetail.description} </p>
                </div>
                <div className="blog-details-left">
                    <h2>LATEST</h2>
                    {latest.map((blog, index) => {
                        return (
                            <div className="popular-post" key={index}>
                                <div className="post">
                                    <img src={blog.blog_image} alt="" />
                                    <h3>{blog.title} </h3>
                                    <div className="author-name-date">
                                        <p className="name"> By <span>{blog.blogDetail.author_name}</span></p>
                                        <p className="date-written">{blog.blogDetail.date} </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="comment">
                <h2 className="comment-header">WRITE A COMMENT</h2>
                <form action="#">
                    <div className="comment-details">
                        <input type="text" placeholder='Name' />
                        <input type="email" placeholder='Email' />
                    </div>
                    <textarea name="comment" placeholder='Write yout comment here'></textarea>
                    <div className="check">
                        <input type="checkbox" />
                        <label htmlFor="#">Save my name and email</label>
                    </div>
                    <button>Send</button>
                </form>
            </div>
        </div>
    )
}


export function Features() {
    const features = [
        {
            title: "library stool",
            status: "New",
            price: "$250",
            image: "/src/components/travel/furniture-comforty/images/features/product_1.png",
            currentPrice: "$200",
        },
        {
            title: "library stool Chair",
            status: "Sales",
            price: "$250",
            image: "/src/components/travel/furniture-comforty/images/features/product_2.png",
        },
        {
            title: "library stool Chair",
            price: "$250",
            image: "/src/components/travel/furniture-comforty/images/features/product_3.png",
        },
        {
            title: "library stool Chair",
            status: "New",
            price: "$250",
            image: "/src/components/travel/furniture-comforty/images/features/product_4.png",
            currentPrice: "$200",
        },
        {
            title: "library stool",
            status: "New",
            price: "$250",
            image: "/src/components/travel/furniture-comforty/images/features/product_1.png",
            currentPrice: "$200",
        },
        {
            title: "library stool Chair",
            status: "Sales",
            price: "$250",
            image: "/src/components/travel/furniture-comforty/images/features/product_2.png",
        },
        {
            title: "library stool Chair",
            price: "$250",
            image: "/src/components/travel/furniture-comforty/images/features/product_3.png",
        },
        {
            title: "library stool Chair",
            status: "New",
            price: "$250",
            image: "/src/components/travel/furniture-comforty/images/features/product_4.png",
            currentPrice: "$200",
        },
    ];

    const track = useRef();

    function scrollLeft() {
        const width = Math.max(track.current.clientWidth, 300);
        const slides = Math.floor(width / 300);
        track.current.scrollLeft += slides * 300;
    }

    function scrollRight() {
        const width = Math.max(track.current.clientWidth, 300);
        const slides = Math.floor(width / 300);
        track.current.scrollLeft -= slides * 300;
    }

    return (
        <div className="features max-width">
            <h3>Featured Products</h3>
            <div className="slider">
                <div className="slider-track" onMouseDown={e => console.log(e)} ref={track} >
                    {
                        features?.map((feature, index) => (
                            <div key={index} className="slide">
                                <div className="feature-image">
                                    <img src={feature?.image} alt={feature?.title} />
                                    {
                                        feature?.status && (
                                            <div className="status">
                                                <button>{feature?.status}</button>
                                            </div>
                                        )
                                    }
                                </div>
                                <div className="feature-content">
                                    <div className="header">
                                        <h4>{feature?.title}</h4>
                                        <a href="#cart" className="cart">
                                            <i className="fa fa-shopping-cart"></i>
                                        </a>
                                    </div>
                                    <p className="prices">
                                        {feature?.price}
                                        {
                                            feature?.currentPrice && (
                                                <span className="current">{feature?.currentPrice}</span>
                                            )
                                        }
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <button id="prev" className="arrow" onClick={scrollLeft}>
                    <i className="fa fa-angle-double-left"></i>
                </button>
                <button id="next" className="arrow" onClick={scrollRight}>
                    <i className="fa fa-angle-double-right"></i>
                </button>
            </div>

        </div>
    );
};