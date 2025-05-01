import React from 'react';

const HeroSection = ({ img, text, para="" }) => (
  <section className={Style.container}>
    <div
      className={Style.section}
      style={{
        backgroundImage: `url('${ img }')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className={Style.overlay}></div>

      <div className={Style.content}>
        <h1 className={Style.h1}>{ text }</h1>
        <p className={Style.para}>{para}</p>
      </div>
    </div>
  </section>
);

const Style = {
  container: "w-full flex items-center justify-center",
  section: "w-11/12 p-6 rounded-xl h-[50lvh] max-md:min-h-[25lvh] my-6 relative overflow-hidden",
  overlay: "absolute inset-0 bg-[#14213D] opacity-60 rounded-xl",
  content: "relative z-10 flex flex-col items-center justify-center h-full",
  h1: "font-bold text-5xl text-[#E5E5E5] text-center leading-[50px]",
  para: "font-base text-md leading-relaxed text-[#E5E5E5] text-center mt-2"
};

export default HeroSection;
