import Space from './Space';

const HeroSection = ({ img, text, para="" }) => (
  <section className={Style.container}>
    <div
      className={Style.section}
      style={{
        backgroundImage: `url('${ img.src }')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className={Style.overlay}></div>

      <div className={Style.content}>
        <h1 className={Style.h1}>{ text }</h1>
        <Space />
        <p className={Style.para}>{para}</p>
      </div>
    </div>
  </section>
);

const Style = {
  container: "w-full flex items-center justify-center bg-[#FFFFFF] dark:bg-[#14213d]",
  section: "w-11/12 p-6 rounded-xl h-[50lvh] max-md:min-h-[25lvh] my-6 relative overflow-hidden",
  overlay: "absolute inset-0 bg-[#14213D] opacity-60 rounded-xl",
  content: "relative z-10 flex flex-col items-center justify-center h-full",
  h1: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl font-extrabold leading-tight tracking-tigh text-[#E5E5E5] text-center",
  para: "text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-lg font-normal leading-relaxed text-[#E5E5E5] text-center"
};

export default HeroSection;
