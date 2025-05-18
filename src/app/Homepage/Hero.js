'use client';

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { identify } from "../layout";
import Paragraph from "@/component/Paragraph";
import HeaderOne from "@/component/HeaderOne";
import HighlightColor from "@/component/HighlightColor";
import Space from "@/component/Space";
import Image from "next/image";
import ImageHero from "../../../public/assets/trusted_web_agency_hero.png"

const Hero = () => {
    return (
        <section className={Style.container} >
            <div className={Style.section} >
                <div className={Style.left}>
                    {/* <div className="bg-[#FCA311] rounded-full px-3 py-1.5 w-fit uppercase text-sm text-[#14213D]">
                        Based In Morocco
                    </div> */}
                    <motion.div 
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    > 
                        <HeaderOne>
                            <HighlightColor>Boost </HighlightColor>
                            Your Business with 
                            <HighlightColor> { identify }</HighlightColor>
                        </HeaderOne>
                    </motion.div>
                    
                    <Space />
                    
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                        <Paragraph>
                        At { identify }, we build websites and apps that not only look great but also drive results, turning visitors into long-term customers and helping your business reach its full potential
                        </Paragraph> 
                    </motion.div>
                    
                    <Space />
                    <Space />
                    
                    <motion.a href="/contact" className={Style.a} 
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.8, ease: "easeOut" }}
                    >
                        Get a Free Quote
                        {/* <TrendingUp size="20px" className="ml-1" /> */}
                    </motion.a>
                </div>
                <div className={Style.right}>
                    <Image 
                        src={ImageHero} alt={identify + "responsive"}
                        fill
                        className="object-cover hidden max-md:flex"
                    />
                </div>
            </div>
        </section>
    )
}

const Style = {
    "container": "w-full flex items-center justify-center max-md:pt-10 bg-[#FFFFFF] dark:bg-[#14213D]",
    "section": "w-11/12 flex max-md:flex-col-reverse items-center justify-center h-[calc(100lvh-80px)] max-md:h-full",
   
    "left": "w-full 2/3 text-center" ,
    "right": "hidden max-md:flex w-1/3 h-[400px] max-md:w-full max-md:h-52 max-md:mb-5  relative",
    
    "a": "text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-lg font-semibold leading-normal tracking-wide mt-6 px-8 py-3 rounded-full bg-[#14213D] text-[#FFFFFF] dark:bg-[#E5E5E5] dark:text-[#14213D]",
}

export default Hero;