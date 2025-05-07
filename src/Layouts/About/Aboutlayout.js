import React from 'react';

import HeroSection from "../../component/HeroSection"
import Whoweare from './Whoweare';
import Team from './Team';
import Image from "../../assets/hero_1.jpg"
import HeadHelmet from '../../component/HeadHelmet';

const Aboutlayout = () => {
    return (
        <main>
            <HeadHelmet 
                title="About Our Digital Solutions Agency"
                description="Learn more about eDigital — a full-service digital agency dedicated to delivering innovative web, app, and marketing solutions tailored to your business."
                keywords="About eDigital, Digital Agency Morocco, Web Development Team, App Developers, UI UX Experts, Online Marketing Agency, Creative Tech Agency, Branding, Software Solutions"
            />
            <HeroSection img={ Image } text="About Us" />
            <Whoweare />
            <Team />
        </main>
    )
}

export default Aboutlayout;