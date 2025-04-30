import React from "react";
import { TrendingUp } from "lucide-react";
import { identify } from "../../index";
import Paragraph from "../../component/Paragraph";

const Hero = () => {
    return (
        <section className={Style.container} >
            <div className={Style.section} >
                <h1 className={Style.h1} >{ identify }</h1>
                <h2 className={Style.h2} >We Create Beautiful Websites and Apps</h2>
                <Paragraph isCenter={true} >
                    We help you grow your business online with smart design and clean code.
                </Paragraph>
                <a href="/contact" className={Style.a} >
                    Get a Free Quote
                    <TrendingUp size="20px" className="ml-1" />
                </a>
            </div>
        </section>
    )
}

const Style = {
    "container": "w-full flex items-center justify-center",
    "section": "w-11/12 flex flex-col items-center justify-center h-[calc(100lvh-80px)] [89lvh]",

    "h1": "text-6xl font-bold text-[#14213D] mb-4 dark:text-[#E5E5E5]",
    "h2": "text-5xl font-base text-[#14213D] leading-[50px] text-center mb-4 dark:text-[#E5E5E5]",
    "a": "flex items-center bg-[#14213D] text-[#FFFFFF] rounded-full px-4 py-2 dark:bg-[#E5E5E5] dark:text-[#14213D] outline-none cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#000000] dark:hover:bg-[#14213D] dark:hover:text-[#E5E5E5] border-[1px] dark:hover:border-[#E5E5E5]",
}

export default Hero;