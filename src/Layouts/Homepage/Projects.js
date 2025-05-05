import React from "react";
import HeaderTwo from "../../component/HeaderTwo";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ButtonArrow from "../../component/ButtonArrow";
import Paragraph from "../../component/Paragraph";
import HeaderThree from "../../component/HeaderThree";

import img1 from "../../assets/project_1.avif";
import img2 from "../../assets/project_2.avif";
import img3 from "../../assets/project_3.avif";
import img4 from "../../assets/project_4.jpg";
import img5 from "../../assets/project_5.jpg";

const data = [
    {
        id: 1,
        title: "SmartBiz Website",
        type: "Business Website",
        description: "We created a modern website for a small business. It works on phones and computers, and it helps the company get more clients.",
        img: img1,
        link: "/"
    },
    {
        id: 2,
        title: "FoodieApp – Mobile App",
        type: "Food Delivery App (Android & iOS)",
        description: "This app lets people order food online. It has a simple design and is easy to use.",
        img: img2,
        link: "/"
    },
    {
        id: 3,
        title: "ShopEasy – Online Store",
        type: "E-commerce Website",
        description: "We built an online store for clothes and shoes. It has a shopping cart, payment system, and admin dashboard.",
        img: img3,
        link: "/"
    },
    {
        id: 4,
        title: "Portfolio for Sarah Design",
        type: "Personal Portfolio",
        description: "We designed a clean and elegant website for a graphic designer to show her work and get clients.",
        img: img4,
        link: "/"
    },
    {
        id: 5,
        title: "QuickFix – Repair Services",
        type: "Services Booking Website",
        description: "This website lets users book repair services (electricity, plumbing, etc.). It has a booking form and service list.",
        img: img5,
        link: "/"
    }
];

const Projects = () => {
    const settings = {
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: false,
        autoplay: true,         
        autoplaySpeed: 2000,
        rows: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                }
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1,
                    centerMode: false
                }
            }
        ]
    };

    return (
        <section className={Style.container}>
            <div className={Style.section}>
                <HeaderTwo>Our Work</HeaderTwo>
                <Paragraph isCenter={true}>
                    We have worked with many happy clients. Take a look at some of our recent projects.
                </Paragraph>

                <Slider {...settings} className="w-full">
                    {data.map((n) => (
                        <div key={n.id} className="px-2">
                            <div className={Style.card}>
                                <img
                                    src={n.img}
                                    alt={`edigital - ${n.title}`}
                                    className="h-[140px] w-full rounded-xl mb-4 object-cover bg-center"
                                />
                                <HeaderThree>{n.title}</HeaderThree>
                                <h4 className={Style.h6}>{n.type}</h4>
                                <p className={Style.p}>{n.description}</p>
                            </div>
                        </div>
                    ))}
                </Slider>

                <div className="mt-8">
                    <ButtonArrow link="projects">
                        View more
                    </ButtonArrow>
                </div>
            </div>
        </section>
    );
};

const Style = {
    container: "w-full flex items-center justify-center py-10 my-10",
    section: "w-11/12 flex flex-col items-center justify-center",
    card: "flex flex-col justify-between h-[380px] w-full overflow-hidden cursor-pointer border border-[#E5E5E5] rounded-xl p-4 hover:shadow-md dark:border-[#666666] transition-all duration-300 ease-in-out group",
    h6: "font-base text-md mt-2 leading-[18px] text-[#14213D] dark:text-[#E5E5E5]",
    p: "font-base text-sm my-2 text-[#000000] leading-[20px] dark:text-[#E5E5E5]",
};

export default Projects;
