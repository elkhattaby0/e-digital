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
import Newsletter from './Newsletter';


const Homelayout = () => {
    return (
        <main>
            <Hero />
            <About />
            <Services />
            <Projects />
            <Whyus />
            <Testimonials />
            <Technologies />
            <Pricing />

            <Contact />
            <Newsletter />
        </main>
    )
}

export default Homelayout;