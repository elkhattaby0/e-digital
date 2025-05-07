import React from "react";

import HeroSection from "../../component/HeroSection";
import Services from "./Services";
import Image from "../../assets/hero_2.jpg"
import HeadHelmet from "../../component/HeadHelmet";

const Serviceslayout = () => {
    return (
        <main>
            <HeadHelmet 
                title="Our Services : Web, App, Marketing & Branding"
                description="Discover eDigital's full range of services in web design, app development, digital marketing, SEO, branding, and tailored tech solutions for your business."
                keywords="Digital Services, Web Development, Mobile App Development, SEO Services, Branding, Digital Marketing, UI UX Design, eDigital Agency, Business Solutions"
            />
            <HeroSection 
                img={Image} 
                text="Our Services" 
                para="We help businesses grow with smart websites, apps, and marketing."    
            />
            <Services />
        </main>
    )
}

export default Serviceslayout;