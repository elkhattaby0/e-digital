'use client';

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { identify } from "../layout";
import Paragraph from "../../component/Paragraph";

const Hero = () => {
    return (
        <section className={Style.container} >
            <div className={Style.section} >
                <div className={Style.left}>
                    <motion.h1 className={Style.h1}
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className={Style.word}>Transform</span> Your Business with <span className={Style.word}>{ identify }</span>
                    </motion.h1>
                    <motion.h2 className={Style.h2} 
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        Expert Web Design & App Development to Drive Real Results
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                        <Paragraph>
                        We create beautiful, high-performing websites and apps that help your business grow and turn visitors into loyal customers.
                        </Paragraph> 
                    </motion.div>
                    
                    <motion.a href="/contact" className={Style.a} 
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.8, ease: "easeOut" }}
                    >
                        Get a Free Quote
                        <TrendingUp size="20px" className="ml-1" />
                    </motion.a>
                </div>
                <div className={Style.right}>
                    {/* <img
                        src=""
                        alt=""
                        className=""
                    /> */}
                </div>
            </div>
        </section>
    )
}

const Style = {
    "container": "w-full flex items-center justify-center max-md:pt-6 bg-foreground dark:bg-background",
    "section": "w-11/12 flex max-md:flex-col items-center justify-center h-[calc(100lvh-80px)] max-md:h-full",
    "left": "w-2/3 max-md:w-full" ,
    "right": "w-1/3 max-md:w-full bo rder",
    "h1": "text-6xl font-bold text-[#14213D] mb-4 dark:text-[#E5E5E5]",
    "h2": "text-3xl font-base text-[#14213D] leading-[38px]  mb-4 dark:text-[#E5E5E5]",
    "a": "flex items-center bg-[#14213D] text-[#FFFFFF] rounded-full px-4 py-2 dark:bg-[#E5E5E5] dark:text-[#14213D] outline-none cursor-pointer transition-all duration-300 ease-in-out hover:text-[#14213D] hover:bg-[#FFFFFF] dark:hover:bg-[#14213D] dark:hover:text-[#E5E5E5] border-[1px] dark:hover:border-[#E5E5E5] w-fit",
    "word": "text-[#FCA311]"
}

export default Hero;