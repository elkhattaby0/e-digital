import React from "react"
import HeroSection from "../../component/HeroSection";
import Timeline from "./Timeline";
import Image from "../../assets/hero_7.jpg"
import HeadHelmet from "../../component/HeadHelmet";

const Approachlayout = () => {
    return (
        <main>
            <HeadHelmet 
                title="How We Work to Deliver Digital Success"
                description="Discover how eDigital delivers digital success using agile methods, creative thinking, and client collaboration for websites, apps, and marketing solutions."
                keywords="How We Work, eDigital Process, Digital Workflow, Creative Approach, Agile Methodology, Client Collaboration, Web Design Process, App Development Steps"
            />
            <HeroSection 
                img={Image} 
                text="This is How We Work" 
                para="Learn about our working process to know what to expect when choosing us" 
            />
            <Timeline />
        </main>
    )
}

export default Approachlayout;