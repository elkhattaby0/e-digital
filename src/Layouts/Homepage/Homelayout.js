import React from 'react';

import Hero from './Hero';
import About from './About';
import Services from './Services';
import Projects from './Projects';
import Whyus from './Whyus';
import Testimonials from './Testimonials';
import Technologies from './Technologies';
import HeadHelmet from '../../component/HeadHelmet';

const Homelayout = () => {
    return (
        <main>
            <HeadHelmet
                title="Full-Service Digital Agency for Web Design, App Development & Marketing"
                description="eDigital is a full-service digital agency offering creative solutions in web design, app development, digital marketing, branding, and custom software to help businesses grow online."
                keywords="Digital Agency, Full-Service Agency, Web Development, Mobile App Development, SEO Services, UI UX Design, Social Media Marketing, Branding, E-commerce Solutions, Content Creation, Digital Strategy, Online Advertising, Software Development, Graphic Design, Cloud Solutions, End-to-End Digital Services, Wordpress, Elementor, React, Laravel, Python, AI, Chatgpt"
            />
            <Hero />
            <About />
            <Services />
            <Projects />
            <Whyus />
            <Technologies />
            <Testimonials />
        </main>
    )
}

export default Homelayout;