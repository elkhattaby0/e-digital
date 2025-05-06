import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import HeaderTwo from "../../component/HeaderTwo";
import Paragraph from "../../component/Paragraph";


const Newsletter  = () => {
    return (
        <motion.section className={Style.container} 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
        >
            <div className={Style.section} >
                <div className={Style.left}>
                    <HeaderTwo>Get Our News</HeaderTwo>
                    <Paragraph>
                        Enter your email to get updates and tips from us.
                    </Paragraph>
                    <form>
                        <input type="email" placeholder="Enter your email" required
                            className="text-[#14213D] border border-[#14213D] outline-none px-3 py-2 rounded-md w-2/3 max-md:w-full dark:bg-[#14213D] dark:border-[#E5E5E5] mb-4 dark:text-[#E5E5E5]" />
                        <button type="submit" className={Style.a}>
                            Subscribe
                            <ArrowRight size="20px" className="ml-1 -rotate-45 group-hover:-rotate-0 transition-all duration-300 ease-in-out" />  
                        </button>
                    </form>
                    
                </div>
                <div className={Style.right}></div>                
            </div>
        </motion.section>
    )
}

const Style = {
    "container": "w-full flex items-center justify-center py-10",
    "section": "w-11/12 flex max-md:flex-col items-left justify-center h- [89lvh] gap-10",

    "left": "w-2/3 max-md:w-full",
    "right": "w-1/3 max-md:w-full rounded",

    "a": "flex items-center bg-[#FFFFFF] border-[#14213D] text-[#14213D] rounded-full px-4 py-2 dark:bg-[#14213D] dark:text-[#E5E5E5] dark:border-[#E5E5E5] outline-none cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#14213D] hover:text-[#FFFFFF] dark:hover:bg-[#E5E5E5] dark:hover:text-[#14213D] border-[1px] dark:hover:border-[#E5E5E5] w-fit group"
}

export default Newsletter ;