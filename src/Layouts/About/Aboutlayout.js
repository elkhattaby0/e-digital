import React from 'react';

import HeroSection from "../../component/HeroSection"
import Whoweare from './Whoweare';
import Team from './Team';
import Image from "../../assets/hero_1.jpg"
import { Helmet } from "react-helmet";
import { titleIdentify } from "../../index"

const Aboutlayout = () => {
    return (
        <main>
            <Helmet>
                <title>{ titleIdentify } - About Us</title>
                <meta 
                    name="description" 
                    content="Learn more about our mission, vision, and expertise in building high-quality websites, mobile apps, and digital solutions for businesses." 
                />
            </Helmet>
            <HeroSection img={ Image } text="About Us" />
            <Whoweare />
            <Team />
        </main>
    )
}

export default Aboutlayout;