import React from 'react';


const Hero = () => {
    return (
        <section className={Style.container}>
            <div
                className={Style.section}
                style={{
                    backgroundImage: `url('https://img.freepik.com/free-vector/security-robots-cartoon-characters-pc-chatbot_107791-8463.jpg?t=st=1745791699~exp=1745795299~hmac=2345a6659f8c4089d164c1df6a3e63a5955554caaa1d31b4ba625dab895d3956&w=1380')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <h1 className={Style.h1}>Our Services</h1>
                <div className="absolute inset-0 bg-[#14213D] opacity-[0.5] rounded-xl"></div>
            </div>
        </section>
    );
};

const Style = {
    "container": "w-full flex items-center justify-center",
    "section": "w-11/12 p-6 rounded-xl h-[50lvh] max-md:h-[25lvh] border my-6 flex items-center justify-center dark:border-[#14213D] relative overflow-hidden",
    "h1": "font-bold text-5xl text-[#E5E5E5] z-5 text-shadow-xl" 
};

export default Hero;