import React from 'react';

const Hero = () => {
    return (
        <section className={Style.container}>
            <div
                className={Style.section}
                style={{
                    backgroundImage: `url('https://img.freepik.com/free-psd/3d-team-work-concept-background_23-2151527874.jpg?t=st=1745580588~exp=1745584188~hmac=4ac0074679f60eaf2d45329b0d7d21a9cbeb8f00381950baf2318cfc167b4740&w=900')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <h1 className={Style.h1}>About Us</h1>
                <div className="absolute inset-0 bg-[#14213D] opacity-[0.5] rounded-xl"></div>

                
                <p></p>
            </div>
        </section>
    );
};

const Style = {
    "container": "w-full flex items-center justify-center",
    "section": "w-11/12 p-6 rounded-xl h-[50lvh] max-md:h-[25lvh] border my-6 flex items-center justify-center dark:border-[#14213D] relative overflow-hidden",
    "h1": "font-bold text-5xl text-[#E5E5E5] z-5" 
};

export default Hero;
