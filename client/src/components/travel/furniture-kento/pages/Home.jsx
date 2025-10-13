import { useState } from "react";
import { Hero } from "../components/hero/Hero";
import { Categories } from "../components/category/Category";

export function Home() {
    const [category, setCategory] = useState("All");

    return (
        <>
            <Hero />
            <Categories category={category} setCategory={setCategory} />
        </>
    )
}