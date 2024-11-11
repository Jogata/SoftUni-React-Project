import { useContext } from "react";
import { Product } from "./Product";
import { Title } from "./Title";
import { ProductConsumer } from "./Context";

export function ProductList() {
    return (
        <>
            <Title name={"Our"} title={"Progucts"} />
            <ProductConsumer>
                {({storeProducts}) => {
                    return <h2>{storeProducts[0].title}</h2>
                }}
            </ProductConsumer>
            <Product />
        </>
    )
}