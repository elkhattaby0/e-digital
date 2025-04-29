import React from "react"
import HeroSection from "../../component/HeroSection";
import Image from "../../assets/hero_5.jpg";
import Pricing from "./Pricing";
import { Helmet } from "react-helmet";
import { titleIdentify } from "../../index"

const Pricinglayout = () => {
    return (
        <main>
            <Helmet>
                <title>{ titleIdentify } - Pricing</title>
                <meta 
                    name="description" 
                    content="Discover affordable and transparent pricing plans for web development, mobile apps, and digital services. Choose the plan that fits your business needs." 
                />
            </Helmet>
            <HeroSection img={Image} text={"Our Prices"} />
            <Pricing />
        </main>
    )
}



export default Pricinglayout;