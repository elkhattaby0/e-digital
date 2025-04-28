import React from "react";
import HeaderTwo from "../../component/HeaderTwo";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ButtonArrow from "../../component/ButtonArrow";
import Paragraph from "../../component/Paragraph";
import HeaderThree from "../../component/HeaderThree";

const data = [
    {
        "id": 1,
        "title": "SmartBiz Website",
        "type": "Business Website",
        "description": "We created a modern website for a small business. It works on phones and computers, and it helps the company get more clients.",
        "img": "https://plus.unsplash.com/premium_vector-1682309081920-d2725d3e620c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "link": "/"
    },
    {
        "id": 2,
        "title": "FoodieApp – Mobile App",
        "type": "Food Delivery App (Android & iOS)",
        "description": "This app lets people order food online. It has a simple design and is easy to use.",
        "img": "https://images.unsplash.com/photo-1657639515782-cf8ff2d7f9ce?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "link": "/"
    },
    {
        "id": 3,
        "title": "ShopEasy – Online Store",
        "type": "E-commerce Website",
        "description": "We built an online store for clothes and shoes. It has a shopping cart, payment system, and admin dashboard.",
        "img": "https://images.unsplash.com/photo-1642052503083-9b9f61e75710?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "link": "/"
    },
    {
        "id": 4,
        "title": "Portfolio for Sarah Design",
        "type": "Personal Portfolio",
        "description": "We designed a clean and elegant website for a graphic designer to show her work and get clients.",
        "img": "",
        "link": "/"
    },
    {
        "id": 5,
        "title": "QuickFix – Repair Services",
        "type": "Services Booking Website",
        "description": "This website lets users book repair services (electricity, plumbing, etc.). It has a booking form and service list.",
        "img": "",
        "link": "/"
    }
];

const Projects = () => {
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
                <HeaderTwo>Our Work</HeaderTwo>
                <Paragraph isCenter={true}>
                    We have worked with many happy clients. Take a look at some of our recent projects.
                </Paragraph>

                <Slider {...settings} className="w-full">
                    {data.map((n) => (
                        <div key={n.id} className="px-2 h-full group">
                            <div className={Style.card}>
                                <div
                                    className="h-[140px] rounded-xl mb-4"
                                    style={{
                                        backgroundImage: `url(${n.img})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat",
                                        backgroundColor: "#E5E5E5",
                                    }}
                                ></div>
                                <HeaderThree>{n.title}</HeaderThree>
                                <h4 className={Style.h6}>{n.type}</h4>
                                <p className={Style.p}>{n.description}</p>
                                <ButtonArrow>
                                    Read more
                                </ButtonArrow>
                            </div>
                        </div>
                    ))}
                </Slider>
                <br />
                <ButtonArrow>
                    View more
                </ButtonArrow>
            </div>
        </section>
    );
};

const Style = {
    container: "w-full flex items-center justify-center py-10 my-10",
    section: "w-11/12 flex flex-col items-center justify-center",
    card: "flex flex-col justify-between h-full min-h-[420px] max-md:min-h-[480px] cursor-pointer border border-[#14213D] rounded-xl p-4 hover:shadow-md dark:border-[#E5E5E5] transition-all duration-300 ease-in-out group",
    h6: "font-base text-md mt-2 leading-[18px] text-[#14213D] dark:text-[#E5E5E5]",
    p: "font-base text-sm my-2 text-[#000000] leading-[20px] dark:text-[#E5E5E5]",
};

export default Projects;