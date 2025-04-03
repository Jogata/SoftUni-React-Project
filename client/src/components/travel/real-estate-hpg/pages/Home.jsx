import { Hero } from "../components/Hero";
import { Search } from "../components/Search";
import { EstatesList } from "../components/EstatesList";

export function Home() {
    return (
        <>
            <Hero />
            <Search />
            <EstatesList />
        </>
    )
}