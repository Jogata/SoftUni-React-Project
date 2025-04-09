import { Hero } from "../components/Hero";
import { Search } from "../components/Search";
import { EstatesList } from "../components/EstatesList";
import { Mission } from "../components/Mission";

export function Home() {
    return (
        <>
            <Hero />
            <Search />
            <EstatesList />
            <Mission />
        </>
    )
}