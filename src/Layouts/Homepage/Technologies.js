import React from "react";
import { ArrowRight } from "lucide-react";
import { FaLaravel, FaReact, FaWordpress, FaYoast } from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { FaElementor } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";



const Technologies  = () => {
    const data = [
        { "name": "React js", "icon": <FaReact /> }, 
        { "name": "Next js", "icon": <RiNextjsLine /> }, 
        { "name": "Tailwindcss", "icon": <RiTailwindCssFill /> }, 
        { "name": "Typescript", "icon": <SiTypescript /> }, 
        { "name": "Laravel", "icon": <FaLaravel /> }, 
        { "name": "Wordpress", "icon": <FaWordpress /> }, 
        { "name": "Elementor", "icon": <FaElementor /> }, 
        { "name": "Yoast", "icon": <FaYoast /> }, 
    ]
    return (
        <section className={Style.container} >
            <div className={Style.section} >
                <h2 className={Style.h1} >Our Tools</h2>
                <p className="font-base text-md text-center text-[#000000] leading-[24px] mb-4 dark:text-[#E5E5E5]">
                    We use the best and latest technologies :
                </p>

                <div className="flex flex-wrap gap-8 justify-center">
                {
                    data.map(n=> (
                        <div key={n.name} className={Style.card}>
                            {n.icon}
                        </div>
                    ))
                }
                </div>

                <a className={Style.a}>
                    View more
                    <ArrowRight size="20px" className="ml-1 -rotate-45 group-hover:-rotate-0 transition-all duration-300 ease-in-out" />  
                </a>           
            </div>
        </section>
    )
}

const Style = {
    "container": "w-full flex items-center justify-center py-10 my-10",
    "section": "w-11/12 flex flex-col items-center justify-center",

    "h1": "text-5xl font-bold text-[#14213D] mb-4 dark:text-[#E5E5E5]",

    "card": "text-[#14213D] dark:text-[#E5E5E5] text-4xl",

    "a": "flex items-center bg-[#FFFFFF] border-[#14213D] text-[#14213D] rounded-full mt-4 px-4 py-2 dark:bg-[#14213D] dark:text-[#E5E5E5] dark:border-[#E5E5E5] outline-none cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#14213D] hover:text-[#FFFFFF] dark:hover:bg-[#E5E5E5] dark:hover:text-[#14213D] border-[1px] dark:hover:border-[#E5E5E5] w-fit group"
}

export default Technologies;