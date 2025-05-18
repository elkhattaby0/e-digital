import { ArrowRight } from "lucide-react";
import Link from "next/link";

const ButtonArrow = ({ children, link }) => {
    return (
        <Link
            href={ `/${link ?? ""}` } aria-label={`Go to ${link}`}
            className="text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-lg font-semibold leading-normal tracking-wide mt-6 px-8 py-3 rounded-full
            text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-lg font-semibold leading-normal flex items-center bg-[#FFFFFF] border-[#14213D] text-[#14213D] rounded-full px-4 py-2 dark:bg-[#14213D] dark:text-[#E5E5E5] dark:border-[#E5E5E5] outline-none cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#14213D] hover:text-[#FFFFFF] dark:hover:bg-[#E5E5E5] dark:hover:text-[#14213D] border-[1px] dark:hover:border-[#E5E5E5] w-fit group"
        >
            { children }
            
            <ArrowRight 
                size="20px" 
                className="ml-1 -rotate-45 group-hover:-rotate-0 transition-all duration-300 ease-in-out" 
            />  
        </Link>
    )
}

export default ButtonArrow;