import React from "react";

import HeroSection from "../../component/HeroSection";
import Services from "./Services";
import Image from "../../assets/hero_2.jpg"
import { Helmet } from "react-helmet";
import { titleIdentify } from "../../index"

const Serviceslayout = () => {
    return (
        <main>
            <Helmet>
                <title>{ titleIdentify } - Services</title>
                <meta 
                    name="description" 
                    content="Discover our professional services in web development, mobile apps, UI/UX design, SEO, and more. Tailored digital solutions for your business." 
                />
            </Helmet>
            <HeroSection img={Image} text="Our Services" />
            <Services />
        </main>
    )
}

export default Serviceslayout;