import { Banner } from "../../components/banner/Banner";
import { Brand } from "../../components/brand/Brand";
import { Delivery } from "../../components/delivery/Delivery";
import "./home.css";

export function Home() {
    return (
        <>
            <Banner />
            <Delivery />
            <Brand />
        </>
    )
}