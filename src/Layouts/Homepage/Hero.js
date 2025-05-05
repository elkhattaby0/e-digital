import React from "react";
import { TrendingUp } from "lucide-react";
import { identify } from "../../index";
import Paragraph from "../../component/Paragraph";

const Hero = () => {
    return (
        <section className={Style.container} >
            <div className={Style.section} >
                <div className={Style.left}>
                    <h1 className={Style.h1} >
                        Transform Your Business Online with { identify }
                    </h1>
                    <h2 className={Style.h2} >
                        Expert Web Design & App Development That Drives Real Results
                    </h2>
                    <Paragraph>
                        Your vision deserves exceptional execution. We build beautiful, high-performing websites and applications that convert visitors into loyal customers.
                    </Paragraph>
                    <a href="/contact" className={Style.a} >
                        Get a Free Quote
                        <TrendingUp size="20px" className="ml-1" />
                    </a>
                </div>
                <div className={Style.right}>
                    <img
                        src=""
                        alt=""
                        className=""
                    />
                </div>
            </div>
        </section>
    )
}

const Style = {
    "container": "w-full flex items-center justify-center max-md:mt-6",
    "section": "w-11/12 flex max-md:flex-col items-center justify-center h-[calc(100lvh-80px)] max-md:h-full",
    "left": "w-2/3 max-md:w-full bor der " ,
    "right": "w-1/3 max-md:w-full bo rder",
    "h1": "text-6xl font-bold text-[#14213D] mb-4 dark:text-[#E5E5E5]",
    "h2": "text-3xl font-base text-[#14213D] leading-[38px]  mb-4 dark:text-[#E5E5E5]",
    "a": "flex items-center bg-[#14213D] text-[#FFFFFF] rounded-full px-4 py-2 dark:bg-[#E5E5E5] dark:text-[#14213D] outline-none cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#000000] dark:hover:bg-[#14213D] dark:hover:text-[#E5E5E5] border-[1px] dark:hover:border-[#E5E5E5] w-fit",
}

export default Hero;