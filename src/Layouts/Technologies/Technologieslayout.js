import React from 'react';
import HeroSection from '../../component/HeroSection';

import Image from "../../assets/hero_4.avif";
import Tools from './Tools';
import { Helmet } from "react-helmet";
import { titleIdentify } from "../../index"

const Technologieslayout = () => {
    return (
        <main>
            <Helmet>
                <title>{ titleIdentify } - Tools</title>
                <meta 
                    name="description" 
                    content="Discover the modern technologies and powerful tools we use to build high-performance websites, mobile apps, and digital products." 
                />
            </Helmet>
            <HeroSection img={Image} text="Our Tools" />
            <Tools />
        </main>
    )
}

export default Technologieslayout;