import React from "react";
import { Check } from "lucide-react";
import HeaderTwo from "../../component/HeaderTwo";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ButtonArrow from "../../component/ButtonArrow";
import Paragraph from "../../component/Paragraph";

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
                <HeaderTwo>Our Prices</HeaderTwo>
                <Paragraph isCenter={true} >We offer fair prices for quality work.</Paragraph>
                <Paragraph isCenter={true} >Choose a plan that fits your needs, or ask us for a custom offer.</Paragraph>

                <Slider {...settings} className="w-full mt-6">
                    {data.map((n) => (
                        <div key={n.id} className="px-2 h-full">
                            <div className={Style.card}>
                                <h3 className={Style.h3}>{n.type}</h3>
                                <p className="font-base text-sm my-2 text-[#000000] leading-[20px] dark:text-[#E5E5E5]">{n.description}</p>
                                <h4 className="font-semibold text-3xl text-[#14213D] my-4 dark:text-[#E5E5E5]">{n.price}</h4>
                                {n.benefits.map((benefit, index) => (
                                    <p key={index} className="font-base text-sm flex text-[#14213D] items-center my-1 dark:text-[#E5E5E5]">
                                        <Check size="1em" className="mr-2" />
                                        {benefit}
                                    </p>
                                ))}
                                <ButtonArrow>
                                    Get started
                                </ButtonArrow>
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

    card: "flex flex-col justify-between h-full min-h-[420px] cursor-pointer border border-[#14213D] rounded-xl p-6 hover:shadow-md dark:border-[#E5E5E5] transition-all duration-300 ease-in-out group",
    h3: "font-bold text-4xl leading-[24px] text-[#14213D] dark:text-[#E5E5E5]",
};

export default Pricing;
