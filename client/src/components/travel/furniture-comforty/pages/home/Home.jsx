import { Banner } from "../../components/banner/Banner";
import { Delivery } from "../../components/delivery/Delivery";
import { Brand } from "../../components/brand/Brand";
import { Features } from "../../components/Features/Features";
import "./home.css";

export function Home() {
    return (
        <>
            <Banner />
            <Delivery />
            <Brand />
            <Features />
        </>
    )
}