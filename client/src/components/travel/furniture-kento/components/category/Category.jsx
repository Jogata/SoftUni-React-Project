import { categories } from "../../data";
import "./category.css";

export function Categories({ setCategory }) {
    return (
        <div className="category-menu">
            <h1>Choose From Our Top Quality Products</h1>
            <p>
                Whether you are looking to funish your living room,
                bedroom, dinning area or office, we have something
                that suits every taste and need
            </p>
            <div className="categories">
                {categories.map((category, index) => {
                    return (
                        <div
                            key={index}
                            className="category"
                            onClick={() => setCategory(prev => (prev === category.name ? "All" : category.name))}
                        >
                            <p>{category.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}