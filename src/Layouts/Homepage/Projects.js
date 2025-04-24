import React from "react";
import { ArrowRight } from "lucide-react";


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
]

const Projects = () => {
    return (
        <section className={Style.container} >
            <div className={Style.section} >
                <h1 className={Style.h1} >Our Work</h1>
                <p className="font-base text-md text-center text-[#000000] leading-[24px] mb-4 dark:text-[#E5E5E5]">
                    We have worked with many happy clients. Take a look at some of our recent projects.
                </p>

                <div className="flex flex-wrap gap-8 justify-center">
                {
                    data.slice(0,3).map(n=> (
                        <div key={n.id} className={Style.card}>
                            <div className="h-[140px] rounded-xl mb-4"
                                style={{
                                    backgroundImage: `url(${n.img})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    backgroundColor: "#E5E5E5",

                                }}
                            ></div>
                            <h3 className={Style.h3}>{n.title}</h3>
                            <h6 className={Style.h6}>{n.type}</h6>
                            <p className={Style.p}>{n.description}</p>
                            <a className={Style.a}>
                                Read more
                                <ArrowRight size="20px" className="ml-1 -rotate-45 group-hover:-rotate-0 transition-all duration-300 ease-in-out" />  
                            </a>  
                        </div>
                    ))
                }
                </div>

                <a className={Style.a}>
                    View Projects
                    <ArrowRight size="20px" className="ml-1 -rotate-45 group-hover:-rotate-0 transition-all duration-300 ease-in-out" />  
                </a>           
            </div>
        </section>
    )
}

const Style = {
    "container": "w-full flex items-center justify-center py-10",
    "section": "w-11/12 flex flex-col items-center justify-center",

    "h1": "text-5xl font-bold text-[#14213D] mb-4 dark:text-[#E5E5E5]",

    "card": " flex flex-col justify-between cursor-pointer border border-[#14213D] size-100 rounded-xl p-4 hover:shadow-md dark:border-[#E5E5E5] transition-all duration-300 ease-in-out group w-[300px]",
    "h3": "font-semibold text-2xl leading-[24px] text-[#14213D] dark:text-[#E5E5E5]",
    "h6": "font-base text-md mt-2 leading-[18px] text-[#14213D] dark:text-[#E5E5E5]",
    "p": "font-base text-sm my-2 text-[#000000] leading-[20px] dark:text-[#E5E5E5]",

    "a": "flex items-center bg-[#FFFFFF] border-[#14213D] text-[#14213D] rounded-full mt-4 px-4 py-2 dark:bg-[#14213D] dark:text-[#E5E5E5] dark:border-[#E5E5E5] outline-none cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#14213D] hover:text-[#FFFFFF] dark:hover:bg-[#E5E5E5] dark:hover:text-[#14213D] border-[1px] dark:hover:border-[#E5E5E5] w-fit group"
}

export default Projects;