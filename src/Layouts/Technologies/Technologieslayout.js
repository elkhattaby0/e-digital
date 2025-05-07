import React from 'react';
import HeroSection from '../../component/HeroSection';

import Image from "../../assets/hero_4.avif";
import Tools from './Tools';
import HeadHelmet from '../../component/HeadHelmet';

const Technologieslayout = () => {
    return (
        <main>
            <HeadHelmet
                title="Best Digital Solutions & Resources"
                description="Discover the modern technologies and powerful tools we use to build high-performance websites, mobile apps, and digital products."
                keywords="eDigital tools, digital agency tools, web development tools, SEO tools, UI UX resources, marketing automation, design tools, productivity tools, web agency software"
            />
            <HeroSection 
                img={Image} 
                text="Our Tools" 
                para="We use the best and latest technologies to build your website, app, or online project."
            />
            <Tools />
        </main>
    )
}

export default Technologieslayout;