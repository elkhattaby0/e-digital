import React from 'react';
import HeroSection from '../../component/HeroSection';

import Image from "../../assets/hero_4.avif";
import Tools from './Tools';

const Technologieslayout = () => {
    return (
        <main>
            <HeroSection img={Image} text="Our Tools" />
            <Tools />
        </main>
    )
}

export default Technologieslayout;