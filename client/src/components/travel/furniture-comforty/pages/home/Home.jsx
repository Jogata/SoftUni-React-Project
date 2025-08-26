// import { Banner } from "../../components/banner/Banner";
// import { Delivery } from "../../components/delivery/Delivery";
// import { Brand } from "../../components/brand/Brand";
// import { Features } from "../../components/Features/Features";
// import { Categories } from "../../components/categories/Categories";
// import { Products } from "../../components/products/Products";
// import { Clients } from "../../components/clients/Clients";
// import { Recent } from "../../components/recent/Recent";

import { useState } from "react";
import { Hero } from "../../components/banner/Banner";
import { Topics } from "../../components/categories/Categories";

export function Home() {
    const [topic, setTopic] = useState("All");

    return (
        <>
            <Hero />
            <Topics topic={topic} setTopic={setTopic} />
            {/* <Banner />
            <Delivery />
            <Brand />
            <Features />
            <Categories />
            <Products />
            <Clients />
            <Recent /> */}
        </>
    )
}