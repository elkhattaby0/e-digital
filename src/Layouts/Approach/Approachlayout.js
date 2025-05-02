import React from "react"
import HeroSection from "../../component/HeroSection";
import Timeline from "./Timeline";
import Image from "../../assets/hero_7.jpg"

const Approachlayout = () => {
    return (
        <main>
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