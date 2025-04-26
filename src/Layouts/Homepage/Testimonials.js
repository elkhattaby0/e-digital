import React from "react";
import { Quote, Star } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
    {
        id: 1,
        name: "Sarah",
        msg: "This team is amazing! They made my website fast and beautiful.",
        post: "Small Business Owner",
        star: 5
    },
    {
        id: 2,
        name: "John",
        msg: "Great service and fast support. They helped my online shop grow.",
        post: "E-commerce Manager",
        star: 4
    },
    {
        id: 3,
        name: "Amina",
        msg: "I love my new app! It works very well and looks great. Thank you.",
        post: "Startup Founder",
        star: 5
    },
    {
        id: 4,
        name: "Youssef",
        msg: "Professional team! They delivered on time and exceeded expectations.",
        post: "Marketing Consultant",
        star: 5
    },
    {
        id: 5,
        name: "Leila",
        msg: "Excellent communication and results. My portfolio looks perfect now.",
        post: "Freelance Designer",
        star: 5
    }
];

const Testimonials = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 }
            }
        ]
    };

    return (
        <section className={Style.container}>
            <div className={Style.section}>
                <h1 className={Style.h1}>Happy Clients</h1>

                <Slider {...settings} className="w-full">
                    {data.map(n => (
                        <div key={n.id} className="px-1">
                            <div className={Style.card}>
                                <div className="text-[#14213D] dark:text-[#E5E5E5]">
                                    <Quote size="40px" />
                                    <p className="font-base text-xl mt-2">{n.msg}</p>
                                </div>

                                <div className="flex items-center mt-4">
                                    {Array.from({ length: n.star }).map((_, i) => (
                                        <Star key={i} size="18px" className="fill-[#FCA311]" />
                                    ))}
                                    {Array.from({ length: 5 - n.star }).map((_, i) => (
                                        <Star key={i} size="18px" className="fill-[#E5E5E5]" />
                                    ))}
                                </div>

                                <div className="flex items-center text-[#14213D] dark:text-[#E5E5E5] mt-2">
                                    <p className="font-semibold mr-1">{n.name}</p> - 
                                    <p className="font-base text-sm ml-1">{n.post}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

const Style = {
    container: "w-full flex items-center justify-center py-10",
    section: "w-11/12 flex flex-col items-center justify-center gap-10",
    h1: "text-5xl font-bold text-[#14213D] mb-4 dark:text-[#E5E5E5]",
    card: "cursor-pointer border border-[#14213D] min-h-[250px] h-full rounded-xl p-6 transition-all duration-300 ease-in-out group dark:border-[#E5E5E5] hover:shadow-md bg-white dark:bg-[#14213D]"
};

export default Testimonials;
