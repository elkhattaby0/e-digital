import React from 'react';

import HeroSection from "../../component/HeroSection"
import Whoweare from './Whoweare';
import Team from './Team';

const ImageURL = "https://img.freepik.com/free-psd/3d-team-work-concept-background_23-2151527874.jpg?t=st=1745580588~exp=1745584188~hmac=4ac0074679f60eaf2d45329b0d7d21a9cbeb8f00381950baf2318cfc167b4740&w=900"
const Aboutlayout = () => {
    return (
        <main>
            <HeroSection img={ ImageURL } text="About Us" />
            <Whoweare />
            <Team />
        </main>
    )
}

export default Aboutlayout;