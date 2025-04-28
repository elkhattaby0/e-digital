import React from 'react';

import HeroSection from "../../component/HeroSection"
import Whoweare from './Whoweare';
import Team from './Team';
import Image from "../../assets/hero_1.jpg"


const Aboutlayout = () => {
    return (
        <main>
            <HeroSection img={ Image } text="About Us" />
            <Whoweare />
            <Team />
        </main>
    )
}

export default Aboutlayout;