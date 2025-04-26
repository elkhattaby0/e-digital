import React from "react";
import { CheckIcon } from "lucide-react";
import AnimatedNumbers from "react-animated-numbers";
import HeaderTwo from "../../component/HeaderTwo";

const data = [
    "We listen to your ideas",
    "We deliver on time",
    "We use the best tools",
    "We support you after the project is done"
];

const facts = [
    { name: "projects delivered", nbr: 100, lf: "+", rt: "", img: "https://img.freepik.com/free-psd/interface-with-hands-sales-background_23-2151706751.jpg?t=st=1745674666~exp=1745678266~hmac=b48ba8159bef55a97a7aaaf480888dbb9b915ac335422f31cb52e6d552f0154c&w=900" },
    { name: "happy clients", nbr: 50, lf: "+", rt: "", img: "https://img.freepik.com/free-psd/3d-rendering-graphic-design-element_23-2149412220.jpg?t=st=1745674835~exp=1745678435~hmac=9c833f35d4165426f2069100239bd064125b675ae0bfe212e75d8d71568adf8a&w=740" },
    { name: "satisfaction rate", nbr: 95, lf: "", rt: "%", img: "https://img.freepik.com/free-psd/3d-rendering-positive-vibe-icon_23-2151392791.jpg?t=st=1745674949~exp=1745678549~hmac=c926efa417c35390db7ab5307f0e9de2217979a55a715e3a2f2b40049ff3a67c&w=740" },
    { name: "years of experience", nbr: 4, lf: "", rt: "+", img: "https://img.freepik.com/free-psd/3d-transparent-hourglass_23-2148938928.jpg?t=st=1745675023~exp=1745678623~hmac=98bd0e95b7863d2afb6693b467eb37c3f3f573785e8e3828ba5a88bc4067ba82&w=740" },
];

const Whyus = () => {
    return (
        <section className={Style.container}>
            <div className={Style.section}>
                <div className={Style.left}>
                    <HeaderTwo>Why Work With Us ?</HeaderTwo>
                    {data.map((item) => (
                        <div key={item} className="flex items-center text-[#14213D] text-xl my-2 dark:text-[#E5E5E5]">
                            <CheckIcon size="1em" className="mr-3" />
                            <h3>{item}.</h3>
                        </div>
                    ))}
                </div>

                <div className={Style.right}>
                    {facts.map((fact) => (
                        <div
                            key={fact.name}
                            className="relative flex flex-col items-center justify-center border w-[250px] h-[250px] max-md:w-[160px] max-md:h-[160px] p-4 rounded-xl overflow-hidden bg-cover bg-center text-[#E5E5E5]"
                            style={{ backgroundImage: `url(${fact.img})` }}
                        >
                            <div className="absolute inset-0 bg-[#14213D] opacity-[0.7]"></div> 
                            <div className="relative z-1 flex flex-col items-center justify-center">
                                <div className="flex w-full items-center justify-center text-[#E5E5E5]">
                                    <span className="mr-1 font-normal text-2xl">{fact.lf}</span>
                                    <h4 className="font-semibold text-5xl">
                                        <AnimatedNumbers
                                            animateToNumber={fact.nbr}
                                            configs={(_, index) => ({
                                                mass: 1,
                                                friction: 100,
                                                tension: 140 * (index + 1),
                                            })}
                                        />
                                    </h4>
                                    <span className="ml-1 font-normal text-2xl">{fact.rt}</span>
                                </div>
                                <p className="capitalize text-sm text-center mt-2">
                                    {fact.name}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

const Style = {
    container: "w-full flex items-center justify-center py-10 my-10",
    section: "w-11/12 flex max-md:flex-col items-left justify-center h-auto gap-10",
    left: "w-1/2 max-md:w-full",
    right: "w-1/2 max-md:w-full flex flex-wrap justify-center gap-6 max-md:gap-3",
    p: "font-base text-md text-[#000000] leading-[24px] mb-4 dark:text-[#E5E5E5]",
    a: "flex items-center bg-[#FFFFFF] border-[#14213D] text-[#14213D] rounded-full px-4 py-2 dark:bg-[#14213D] dark:text-[#E5E5E5] dark:border-[#E5E5E5] outline-none cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#14213D] hover:text-[#FFFFFF] dark:hover:bg-[#E5E5E5] dark:hover:text-[#14213D] border-[1px] dark:hover:border-[#E5E5E5] w-fit group"
};

export default Whyus;
