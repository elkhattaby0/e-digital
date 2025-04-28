import React from "react";
import HeroSection from "../../component/HeroSection";
import Image from "../../assets/hero_3.jpg"
import Projects from "./Projects";

const Projectslayout = () => {
    return (
        <main>
            <HeroSection img={Image} text="Our Projects" />
            <Projects />
        </main>
    )
}

export default Projectslayout;