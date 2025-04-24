import React from "react";
import { ArrowRight } from "lucide-react";

const Contact = () => {
    return (
        <section className={Style.container} >
            <div className={Style.section} >
                <div className="w-1/2 max-md:w-full">
                    <h1 className={Style.h1} >Let’s Work Together</h1>
                    <p className={Style.p}>Have a question or project ? Send us a message. We reply fast.</p>
                </div>
                <div className="w-1/2 max-md:w-full">
                    <form>
                        <div className="w-full block gap-2 my-2">
                            <p className="font-base text-sm text-[#14213D] dark:text-[#E5E5E5]">Name</p>
                            <input type="text" 
                            className="text-[#14213D] border border-[#14213D] outline-none px-3 py-2 rounded-md w-2/3 max-md:w-full dark:bg-[#14213D] dark:border-[#E5E5E5] dark:text-[#E5E5E5]" />
                        </div>
                        <div className="w-full block gap-2 my-2">
                            <p className="font-base text-sm text-[#14213D] dark:text-[#E5E5E5]">Email</p>
                            <input type="email"
                            className="text-[#14213D] border border-[#14213D] outline-none px-3 py-2 rounded-md w-2/3 max-md:w-full dark:bg-[#14213D] dark:border-[#E5E5E5] dark:text-[#E5E5E5]" />
                        </div>
                        <div className="w-full block gap-2 my-2">
                            <p className="font-base text-sm text-[#14213D] dark:text-[#E5E5E5]">Message</p>
                            <textarea rows="5"
                                className="text-[#14213D] border border-[#14213D] outline-none px-3 py-2 rounded-md w-2/3 max-md:w-full dark:bg-[#14213D] dark:border-[#E5E5E5] dark:text-[#E5E5E5]"
                            ></textarea>
                        </div>
                        <a className={Style.a}>
                            Send
                            <ArrowRight size="20px" className="ml-1 -rotate-45 group-hover:-rotate-0 transition-all duration-300 ease-in-out" />  
                        </a>          
                    </form>
                </div>
            </div>
        </section>
    )
}

const Style = {
    "container": "w-full flex items-center justify-center",
    "section": "w-11/12 flex max-md:flex-col  justify-center",
    
    "h1": "text-5xl font-bold text-[#14213D] mb-4 dark:text-[#E5E5E5]",
    "p": "font-base text-md text-[#000000] leading-[24px] mb-4 dark:text-[#E5E5E5]",

    "a": "flex items-center justify-between bg-[#FFFFFF] border-[#14213D] text-[#14213D] rounded-full mt-2 px-4 py-2 dark:bg-[#14213D] dark:text-[#E5E5E5] dark:border-[#E5E5E5] outline-none cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#14213D] hover:text-[#FFFFFF] dark:hover:bg-[#E5E5E5] dark:hover:text-[#14213D] border-[1px] dark:hover:border-[#E5E5E5] w-1/3 max-md:w-full group"
}

export default Contact;