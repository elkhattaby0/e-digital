import React from "react"
import HeroSection from "../../component/HeroSection";
import Image from "../../assets/hero_5.jpg";
import Pricing from "./Pricing";

const Pricinglayout = () => {
    return (
        <main>
            <HeroSection img={Image} text={"Our Prices"} />
            <Pricing />
        </main>
    )
}



export default Pricinglayout;