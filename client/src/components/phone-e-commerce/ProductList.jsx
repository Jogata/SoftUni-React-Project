import { useContext } from "react";
import { Product } from "./Product";
import { Title } from "./Title";
import { ProductConsumer } from "./Context";

export function ProductList() {
    return (
        <>
            <Title name={"Our"} title={"Products"} />
            <ProductConsumer>
                {({products}) => {
                    return <h2>{products[0].title}</h2>
                }}
            </ProductConsumer>
        </>
    )
}