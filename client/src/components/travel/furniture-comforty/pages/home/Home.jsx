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
import { Explore } from "../../components/brand/Brand";

export function Home() {
    const [selectedCategory, setSelectedCategory ] = useState("All");
    // console.log(selectedCategory);

    return (
        <>
            <Hero />
            <Explore selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
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