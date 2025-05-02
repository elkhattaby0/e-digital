import React from 'react';

import Hero from './Hero';
import About from './About';
import Services from './Services';
import Projects from './Projects';
import Whyus from './Whyus';
import Testimonials from './Testimonials';
import Technologies from './Technologies';
import Pricing from './Pricing';
import Contact from './Contact';
import { Helmet } from "react-helmet";
import { titleIdentify } from "../../index"

const Homelayout = () => {
    return (
        <main>
            <Helmet>
                <title>{ titleIdentify }</title>
                <meta 
                    name="description" 
                    content="We build modern websites, mobile apps, and custom digital solutions to help your business grow online. High quality and creative results guaranteed." 
                />
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