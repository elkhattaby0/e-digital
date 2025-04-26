import React from "react";
import { ArrowRight } from "lucide-react";
import image from "../../assets/about_section_homepage.jpg"
import HeaderTwo from "../../component/HeaderTwo";

const About = () => {
    return (
        <section className={Style.container} >
            <div className={Style.section} >
                <div className={Style.left}>
                    <HeaderTwo>Who We Are ?</HeaderTwo>
                    <p className={Style.p} >We are a team of creative developers and designers. We love to build websites and apps that look good and work fast. Our goal is to help your business shine online.</p>
                    <a className={Style.a} href="/about">
                        Read more
                        <ArrowRight size="20px" className="ml-1 -rotate-45 group-hover:-rotate-0 transition-all duration-300 ease-in-out" />  
                    </a>
                </div>
                <div className={Style.right}
                    style={{
                        backgroundImage: `url(${image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                ></div>                
            </div>
        </section>
    )
}

const Style = {
    "container": "w-full flex items-center justify-center py-10 my-10",
    "section": "w-11/12 flex max-md:flex-col items-left justify-center h- [89lvh] gap-10",

    "left": "w-1/2 max-md:w-full",
    "right": "w-1/2 max-md:w-full h-[480px] max-md:h-[280px] rounded-md",

    "p": "font-base text-md text-[#000000] leading-[24px] mb-4 dark:text-[#E5E5E5]",
    "a": "flex items-center bg-[#FFFFFF] border-[#14213D] text-[#14213D] rounded-full px-4 py-2 dark:bg-[#14213D] dark:text-[#E5E5E5] dark:border-[#E5E5E5] outline-none cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#14213D] hover:text-[#FFFFFF] dark:hover:bg-[#E5E5E5] dark:hover:text-[#14213D] border-[1px] dark:hover:border-[#E5E5E5] w-fit group"
}

export default About;