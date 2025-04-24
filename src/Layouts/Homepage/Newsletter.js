import React from "react";
import { ArrowRight, CheckIcon } from "lucide-react";

const data = [
    "We listen to your ideas", " We deliver on time", "We use the best tools", "We support you after the project is done"
]

const Newsletter  = () => {
    return (
        <section className={Style.container} >
            <div className={Style.section} >
                <div className={Style.left}>
                    <h1 className={Style.h1} >Get Our News</h1>
                    <p className={Style.p}>Enter your email to get updates and tips from us.</p>
                    <form>
                        <input type="email" placeholder="Enter your email"
                            className="text-[#14213D] border border-[#14213D] outline-none px-3 py-2 rounded-md w-2/3 max-md:w-full dark:bg-[#14213D] dark:border-[#E5E5E5] mb-4 dark:text-[#E5E5E5]" />
                        <a className={Style.a}>
                        Subscribe
                        <ArrowRight size="20px" className="ml-1 -rotate-45 group-hover:-rotate-0 transition-all duration-300 ease-in-out" />  
                    </a>
                    </form>
                    
                </div>
                <div className={Style.right}></div>                
            </div>
        </section>
    )
}

const Style = {
    "container": "w-full flex items-center justify-center py-10",
    "section": "w-11/12 flex max-md:flex-col items-left justify-center h- [89lvh] gap-10",

    "left": "w-2/3 max-md:w-full",
    "right": "w-1/3 max-md:w-full rounded",

    "h1": "text-5xl font-bold text-[#14213D] mb-4 dark:text-[#E5E5E5]",
    "p": "font-base text-md text-[#000000] leading-[24px] mb-4 dark:text-[#E5E5E5]",
    "a": "flex items-center bg-[#FFFFFF] border-[#14213D] text-[#14213D] rounded-full px-4 py-2 dark:bg-[#14213D] dark:text-[#E5E5E5] dark:border-[#E5E5E5] outline-none cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#14213D] hover:text-[#FFFFFF] dark:hover:bg-[#E5E5E5] dark:hover:text-[#14213D] border-[1px] dark:hover:border-[#E5E5E5] w-fit group"
}

export default Newsletter ;