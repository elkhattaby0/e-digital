import React from "react";
import HeaderTwo from "../../component/HeaderTwo";
import ButtonArrow from "../../component/ButtonArrow";
import Paragraph from "../../component/Paragraph";

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
                <HeaderTwo>What We Do ?</HeaderTwo>

                <div className="flex flex-wrap gap-10 justify-center">
                {
                    data.map(n=> (
                        <div key={n.id} className={Style.card}>
                            <h3 className={Style.h3}>{n.title}</h3>
                            <Paragraph>{n.text}</Paragraph>
                        </div>
                    ))
                }
                </div>
                <ButtonArrow>
                    View more
                </ButtonArrow>     
            </div>
        </section>
    )
}

const Style = {
    "container": "w-full flex items-center justify-center py-10 my-10",
    "section": "w-11/12 flex flex-col items-center justify-center h- [89lvh] gap-10",

    "card": "cursor-pointer border border-[#14213D] size-100 rounded-xl p-6 hover:shadow-md hover:bg-[#14213D] dark:border-[#E5E5E5] dark:hover:bg-[#E5E5E5] transition-all duration-300 ease-in-out group",
    "h3": "font-semibold text-3xl text-[#14213D] group-hover:text-[#FFFFFF] dark:text-[#E5E5E5] dark:group-hover:text-[#14213D]",
}

export default Services;