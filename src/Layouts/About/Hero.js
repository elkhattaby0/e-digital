import React from 'react';

const Hero = () => {
    return (
        <section className={Style.container}>
            <div
                className={Style.section}
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1665006962810-d20a0244e576?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="absolute inset-0 bg-[#14213D] opacity-[0.3] rounded-xl"></div>

                <h1 className={Style.h1}>About Us</h1>
            </div>
        </section>
    );
};

const Style = {
    "container": "w-full flex items-center justify-center",
    "section": "w-11/12 p-6 rounded-xl h-[50lvh] border my-6 flex items-center justify-center dark:border-[#14213D] relative overflow-hidden",
    "h1": "font-bold text-5xl text-[#E5E5E5] z-10" 
};

export default Hero;
