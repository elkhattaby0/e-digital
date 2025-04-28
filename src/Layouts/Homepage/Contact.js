import React from "react";
import { ArrowRight } from "lucide-react";
import HeaderTwo from "../../component/HeaderTwo";
import Paragraph from "../../component/Paragraph";

const Contact = () => {
    return (
        <section className={Style.container} >
            <div className={Style.section} >
                <div className="w-1/2 max-md:w-full">
                    <HeaderTwo>Let’s Work Together</HeaderTwo>
                    <Paragraph>Have a question or project ? Send us a message. We reply fast.</Paragraph>
                </div>
                <div className="w-1/2 max-md:w-full">
                    <form>
                        <div className="w-full block gap-2 my-2">
                            <label htmlFor="name" className="font-base text-sm text-[#14213D] dark:text-[#E5E5E5] mb-1">Name</label>
                            <input type="text" placeholder="ex : Jhon Doe" required 
                            className="text-[#14213D] border border-[#14213D] outline-none px-3 py-2 rounded-md w-full dark:bg-[#14213D] dark:border-[#E5E5E5] dark:text-[#E5E5E5]" />
                        </div>
                        <div className="w-full block gap-2 my-2">
                            <label htmlFor="object" className="font-base text-sm text-[#14213D] dark:text-[#E5E5E5] mb-1">Object</label>
                            <input type="text" placeholder="ex : i want to work with you" required
                            className="text-[#14213D] border border-[#14213D] outline-none px-3 py-2 rounded-md w-full dark:bg-[#14213D] dark:border-[#E5E5E5] dark:text-[#E5E5E5]" />
                        </div>
                        <div className="w-full block gap-2 my-2">
                            <label htmlFor="email" className="font-base text-sm text-[#14213D] dark:text-[#E5E5E5] mb-1">Email</label>
                            <input type="email" placeholder="ex : jhon@example.com" required
                            className="text-[#14213D] border border-[#14213D] outline-none px-3 py-2 rounded-md w-full dark:bg-[#14213D] dark:border-[#E5E5E5] dark:text-[#E5E5E5]" />
                        </div>
                        <div className="w-full block gap-2 my-2">
                            <label htmlFor="message" className="font-base text-sm text-[#14213D] dark:text-[#E5E5E5] mb-1">Message</label>
                            <textarea rows="5" placeholder="ex : Hello..." required
                                className="text-[#14213D] border border-[#14213D] outline-none px-3 py-2 rounded-md w-full dark:bg-[#14213D] dark:border-[#E5E5E5] dark:text-[#E5E5E5]"
                            ></textarea>
                        </div>
                        <button type="submit" className={Style.a}>
                            Send
                            <ArrowRight size="20px" className="ml-1 -rotate-45 group-hover:-rotate-0 transition-all duration-300 ease-in-out" />  
                        </button>          
                    </form>
                </div>
            </div>
        </section>
    )
}

const Style = {
    "container": "w-full flex items-center justify-center py-10 my-10",
    "section": "w-11/12 flex max-md:flex-col  justify-center",
    
    "a": "flex items-center justify-between bg-[#FFFFFF] border-[#14213D] text-[#14213D] rounded-full mt-2 px-4 py-2 dark:bg-[#14213D] dark:text-[#E5E5E5] dark:border-[#E5E5E5] outline-none cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#14213D] hover:text-[#FFFFFF] dark:hover:bg-[#E5E5E5] dark:hover:text-[#14213D] border-[1px] dark:hover:border-[#E5E5E5] w-1/3 max-md:w-1/2 group"
}

export default Contact;