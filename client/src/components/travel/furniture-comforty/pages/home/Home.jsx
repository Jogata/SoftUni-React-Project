import { Banner } from "../../components/banner/Banner";
import { Delivery } from "../../components/delivery/Delivery";
import { Brand } from "../../components/brand/Brand";
import { Features } from "../../components/Features/Features";
import { Categories } from "../../components/categories/Categories";
import { Products } from "../../components/products/Products";
import { Clients } from "../../components/clients/Clients";
import { Recent } from "../../components/recent/Recent";

export function Home() {
    return (
        <>
            <Banner />
            <Delivery />
            <Brand />
            <Features />
            <Categories />
            <Products />
            <Clients />
            <Recent />
        </>
    )
}