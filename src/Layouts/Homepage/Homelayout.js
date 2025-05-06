import React from 'react';

import Hero from './Hero';
import About from './About';
import Services from './Services';
import Projects from './Projects';
import Whyus from './Whyus';
import Testimonials from './Testimonials';
import Technologies from './Technologies';
// import Pricing from './Pricing';
// import Contact from './Contact';
import { Helmet } from "react-helmet";
import { titleIdentify } from "../../index"

const Homelayout = () => {
    return (
        <main>
            <Helmet>
                <meta name="author" content="eDigital Team" />
                <title>{ titleIdentify } | Full-Service Digital Agency for Web Design, App Development & Marketing</title>
                <meta 
                    name="description" 
                    content="eDigital is a full-service digital agency offering creative solutions in web design, app development, digital marketing, branding, and custom software to help businesses grow online." 
                />
                <meta 
                    name="keywords" 
                    content="Digital Agency, Full-Service Agency, Web Development, Mobile App Development, SEO Services, UI UX Design, Social Media Marketing, Branding, E-commerce Solutions, Content Creation, Digital Strategy, Online Advertising, Software Development, Graphic Design, Cloud Solutions, End-to-End Digital Services, Wordpress, Elementor, React, Laravel, Python, AI, Chatgpt " 
                />
                <meta property="og:title" content={`${titleIdentify} | Full-Service Digital Agency`} />
                <meta property="og:description" content="eDigital is a full-service digital agency offering creative solutions in web design, app development, digital marketing, branding, and custom software to help businesses grow online." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://edigital-seven.vercel.app/" />
                <meta property="og:image" content="https://raw.githubusercontent.com/elkhattaby0/e-digital/refs/heads/main/public/logo512.png" />

            </Helmet>
            <Hero />
            <About />
            <Services />
            <Projects />
            <Whyus />
            <Technologies />
            <Testimonials />
            
            {/* <Pricing /> */}
            {/* <Contact /> */}
        </main>
    )
}

export default Homelayout;