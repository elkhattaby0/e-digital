import React from "react";
import { ArrowRight, Check } from "lucide-react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
    {
        "id": 1,
        "type": "Starter Plan",
        "description": "Perfect for small projects.",
        "benefits": [
            "1 page website",
            "Mobile-friendly",
            "Contact form",
            "Delivery : 3 days"
        ],
        "price": "$100",
        "link": "/"
    },
    {
        "id": 2,
        "type": "Business Plan",
        "description": "Best for growing companies.",
        "benefits": [
            "Up to 5 pages",
            "Basic SEO",
            "Fast loading speed",
            "Delivery : 5 days"
        ],
        "price": "$300",
        "link": "/"
    },
    {
        "id": 3,
        "type": "Pro Plan",
        "description": "Full service for serious businesses.",
        "benefits": [
            "10+ pages or app",
            "SEO & Analytics",
            "1 month free support",
            "Delivery : 7–10 days"
        ],
        "price": "Custom",
        "link": "/contact"
    }
];

const Pricing = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    centerMode: true
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    centerMode: true
                }
            }
        ]
    };

    return (
        <section className={Style.container}>
            <div className={Style.section}>
                <h2 className={Style.h1}>Our Prices</h2>
                <p className={Style.para}>We offer fair prices for quality work.</p>
                <p className={Style.para}>Choose a plan that fits your needs, or ask us for a custom offer.</p>

                <Slider {...settings} className="w-full mt-6">
                    {data.map((n) => (
                        <div key={n.id} className="px-2 h-full">
                            <div className={Style.card}>
                                <h2 className={Style.h3}>{n.type}</h2>
                                <p className="font-base text-sm my-2 text-[#000000] leading-[20px] dark:text-[#E5E5E5]">{n.description}</p>
                                <h3 className="font-semibold text-3xl text-[#14213D] my-4 dark:text-[#E5E5E5]">{n.price}</h3>
                                {n.benefits.map((benefit, index) => (
                                    <p key={index} className="font-base text-sm flex text-[#14213D] items-center my-1 dark:text-[#E5E5E5]">
                                        <Check size="1em" className="mr-2" />
                                        {benefit}
                                    </p>
                                ))}
                                <a className={Style.a}>
                                    Get started
                                    <ArrowRight size="20px" className="ml-1 -rotate-45 group-hover:-rotate-0 transition-all duration-300 ease-in-out" />
                                </a>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

const Style = {
    container: "w-full flex items-center justify-center py-10 my-10",
    section: "w-11/12 flex flex-col items-center justify-center",

    h1: "text-5xl font-bold text-[#14213D] mb-4 dark:text-[#E5E5E5]",
    para: "font-base text-md text-center text-[#000000] leading-[24px] dark:text-[#E5E5E5]",

    card: "flex flex-col justify-between h-full min-h-[420px] cursor-pointer border border-[#14213D] rounded-xl p-6 hover:shadow-md dark:border-[#E5E5E5] transition-all duration-300 ease-in-out group",
    h3: "font-bold text-4xl leading-[24px] text-[#14213D] dark:text-[#E5E5E5]",

    a: "flex items-center bg-[#FFFFFF] border-[#14213D] text-[#14213D] rounded-full mt-4 px-4 py-2 dark:bg-[#14213D] dark:text-[#E5E5E5] dark:border-[#E5E5E5] outline-none cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#14213D] hover:text-[#FFFFFF] dark:hover:bg-[#E5E5E5] dark:hover:text-[#14213D] border-[1px] dark:hover:border-[#E5E5E5] w-fit group"
};

export default Pricing;
