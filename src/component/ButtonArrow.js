import React from "react";
import { ArrowRight } from "lucide-react";

const ButtonArrow = ({ children, link="/" }) => {
    return (
        <a
            href={ link }
            className="flex items-center bg-[#FFFFFF] border-[#14213D] text-[#14213D] rounded-full px-4 py-2 dark:bg-[#14213D] dark:text-[#E5E5E5] dark:border-[#E5E5E5] outline-none cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#14213D] hover:text-[#FFFFFF] dark:hover:bg-[#E5E5E5] dark:hover:text-[#14213D] border-[1px] dark:hover:border-[#E5E5E5] w-fit group"
        >
            { children }
            
            <ArrowRight 
                size="20px" 
                className="ml-1 -rotate-45 group-hover:-rotate-0 transition-all duration-300 ease-in-out" 
            />  
        </a>
    )
}

export default ButtonArrow;