import React from "react";
import { ArrowRight, CheckIcon } from "lucide-react";

const data = [
    "We listen to your ideas", " We deliver on time", "We use the best tools", "We support you after the project is done"
]

const Whyus = () => {
    return (
        <section className={Style.container} >
            <div className={Style.section} >
                <div className={Style.left}>
                    <h1 className={Style.h1} >Why Work With Us ?</h1>
                    {
                        data.map(n=> (
                            <div key={n} className="flex items-center text-[#14213D] text-xl my-2 dark:text-[#E5E5E5]">
                                <CheckIcon size="1em" className="mr-3" />
                                <h3>{n}.</h3>
                            </div>
                        ))
                    }
                </div>
                <div className={Style.right}></div>                
            </div>
        </section>
    )
}

const Style = {
    "container": "w-full flex items-center justify-center py-10 my-10",
    "section": "w-11/12 flex max-md:flex-col items-left justify-center h- [89lvh] gap-10",

    "left": "w-1/2 max-md:w-full",
    "right": "w-1/2 max-md:w-full border rounded",

    "h1": "text-5xl font-bold text-[#14213D] mb-4 dark:text-[#E5E5E5]",
    "p": "font-base text-md text-[#000000] leading-[24px] mb-4 dark:text-[#E5E5E5]",
    "a": "flex items-center bg-[#FFFFFF] border-[#14213D] text-[#14213D] rounded-full px-4 py-2 dark:bg-[#14213D] dark:text-[#E5E5E5] dark:border-[#E5E5E5] outline-none cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#14213D] hover:text-[#FFFFFF] dark:hover:bg-[#E5E5E5] dark:hover:text-[#14213D] border-[1px] dark:hover:border-[#E5E5E5] w-fit group"
}

export default Whyus;