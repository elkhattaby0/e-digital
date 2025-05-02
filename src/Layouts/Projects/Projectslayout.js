import React from "react";
import HeroSection from "../../component/HeroSection";
import Image from "../../assets/hero_3.jpg"
import Projects from "./Projects";
import { Helmet } from "react-helmet";
import { titleIdentify } from "../../index"

const Projectslayout = () => {
    return (
        <main>
            <Helmet>
                <title>{ titleIdentify } - Projects</title>
                <meta 
                    name="description" 
                    content="Explore our latest web, mobile, and digital projects. See how we turn ideas into high-quality digital solutions." 
                />
            </Helmet>
            <HeroSection 
                img={Image} 
                text="We Make Things Happen" 
                para="We love to build products that help our clients grow."
            />
            <Projects />
        </main>
    )
}

export default Projectslayout;