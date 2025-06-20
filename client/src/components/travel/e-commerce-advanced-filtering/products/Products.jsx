import { Card } from "./Card";
import "./products.css";

export function Products({ data }) {
    return (
        <section className="card-container">
            {data.map((product, index) => (
                <Card key={index} product={product} />
            ))}
        </section>
    );
};