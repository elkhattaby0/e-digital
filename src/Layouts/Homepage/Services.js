import React from "react";
import { ArrowRight } from "lucide-react";

const data = [
    {
        "id": 1,
        "img": "",
        "title": "Website Development",
        "text": "Fast, mobile-friendly websites",
        "link": "/"
    },
    {
        "id": 2,
        "img": "",
        "title": "Mobile Apps",
        "text": "Android and iOS apps",
        "link": "/"
    },
    {
        "id": 3,
        "img": "",
        "title": "UI/UX Design",
        "text": "Clean and modern designs",
        "link": "/"
    },
    {
        "id": 4,
        "img": "",
        "title": "SEO & Marketing",
        "text": "Help your website rank on Google",
        "link": "/"
    },
    {
        "id": 5,
        "img": "",
        "title": "WordPress Solutions",
        "text": "Easy to use and powerful websites",
        "link": "/"
    }
]

const Services = () => {
    return (
        <section className={Style.container} >
            <div className={Style.section} >
                <h1 className={Style.h1} >What We Do ?</h1>

                <div className="flex flex-wrap gap-10 justify-center">
                {
                    data.map(n=> (
                        <div key={n.id} className={Style.card}>
                            <h3 className={Style.h3}>{n.title}</h3>
                            <p className={Style.p}>{n.text}</p>
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
    "container": "w-full flex items-center justify-center py-10",
    "section": "w-11/12 flex flex-col items-center justify-center h- [89lvh] gap-10",

    "h1": "text-5xl font-bold text-[#14213D] mb-4 dark:text-[#E5E5E5]",

    "card": "cursor-pointer border border-[#14213D] size-100 rounded-xl p-6 hover:shadow-md hover:bg-[#14213D] dark:border-[#E5E5E5] dark:hover:bg-[#E5E5E5] transition-all duration-300 ease-in-out group",
    "h3": "font-semibold text-3xl text-[#14213D] group-hover:text-[#FFFFFF] dark:text-[#E5E5E5] dark:group-hover:text-[#14213D]",
    "p": "font-base text-md text-[#000000] leading-[24px] group-hover:text-[#E5E5E5] dark:text-[#E5E5E5] dark:group-hover:text-[#14213D]",

    "a": "flex items-center bg-[#FFFFFF] border-[#14213D] text-[#14213D] rounded-full px-4 py-2 dark:bg-[#14213D] dark:text-[#E5E5E5] dark:border-[#E5E5E5] outline-none cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#14213D] hover:text-[#FFFFFF] dark:hover:bg-[#E5E5E5] dark:hover:text-[#14213D] border-[1px] dark:hover:border-[#E5E5E5] w-fit group"
}

export default Services;