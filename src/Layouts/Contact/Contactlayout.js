import React from "react"
import HeroSection from "../../component/HeroSection";
import Contact from "../Homepage/Contact";
import Image from "../../assets/hero_6.jpg"
import { Helmet } from "react-helmet";
import { titleIdentify } from "../../index"

const Contactlayout = () => {
    return (
        <main>
            <Helmet>
                <title>{ titleIdentify } - Contact Us</title>
                <meta 
                    name="description" 
                    content="Get in touch with us for professional web development, mobile apps, and digital solutions. We're ready to bring your ideas to life." 
                />
            </Helmet>
            <HeroSection 
                img={Image} 
                text={"Contact Us"} 
                para={"We work with clients of all sizes and sectors, from new startup ventures to well-established businesses."}    
            />
            <Contact />
        </main>
    )
}

export default Contactlayout;