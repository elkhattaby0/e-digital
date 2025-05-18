'use client';
import { motion } from "framer-motion";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import HeaderTwo from "@/component/HeaderTwo";
import HeaderFive from "@/component/HeaderFive";
import HeaderSix from "@/component/HeaderSix";
import Paragraph from "@/component/Paragraph";
import ButtonArrow from "@/component/ButtonArrow";
import Space from "@/component/Space";

import img1 from "../../../public/assets/project_1.avif";
import img2 from "../../../public/assets/project_2.avif";
import img3 from "../../../public/assets/project_3.avif";
import img4 from "../../../public/assets/project_4.jpg";
import img5 from "../../../public/assets/project_5.jpg";


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
        type: "Food Delivery App",
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
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <HeaderTwo>Our Work</HeaderTwo>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <Paragraph isCenter={true}>
                        We have worked with many happy clients. Take a look at some of our recent projects.
                    </Paragraph>
                </motion.div>

                <Space />
                <Slider {...settings} className="w-full">
                    {data.map((n) => (
                        <div key={n.id} className="px-2">
                            <div className={Style.card}>
                                <Image
                                    src={n.img}
                                    alt={`edigital - ${n.title}`}
                                    className="h-[150px] w-full rounded-xl mb-4 object-cover bg-center"
                                />
                                <HeaderFive>{n.title}</HeaderFive>
                                <HeaderSix>{n.type}</HeaderSix>
                                <Space />
                                <Paragraph>{n.description}</Paragraph>
                            </div>
                        </div>
                    ))}
                </Slider>

                <motion.div className="mt-8"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <ButtonArrow link="projects">
                        View more
                    </ButtonArrow>
                </motion.div>
            </div>
        </section>
    );
};

const Style = {
    container: "w-full flex items-center justify-center py-20 bg-[#FFFFFF] dark:bg-[#14213D]",
    section: "w-11/12 flex flex-col items-center justify-center",
    card: "flex flex-col justify-between h-[450px] max-md:h-fit w-full overflow-hidden cursor-pointer border border-[#E5E5E5] rounded-xl p-4 hover:shadow-md dark:border-[#666666] dark:bg-[#1F2A40] transition-all duration-300 ease-in-out group"
};

export default Projects;
