import React from "react";

import HeroSection from "../../component/HeroSection";
import Services from "./Services";
import Image from "../../assets/hero_2.jpg"

const Serviceslayout = () => {
    return (
        <main>
            <HeroSection img={Image} text="Our Services" />
            <Services />
        </main>
    )
}

export default Serviceslayout;