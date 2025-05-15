"use client";
import { motion } from "framer-motion";

import { Quote, Star } from "lucide-react";
import HeaderTwo from "@/component/HeaderTwo";
import Space from "@/component/Space";

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
    }
];


const Testimonials = () => {
    return (
        <section className={Style.container} >
            <div className={Style.section} >
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <HeaderTwo>Happy Clients</HeaderTwo>
                </motion.div>
                <div className="flex max-md:flex-wrap gap-5 justify-center items-center">
                {
                    data.map(n=> (
                        <motion.div key={n.id} className={Style.card}
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            viewport={{ once: true }}
                        >   
                            <div className="text-[#14213D] dark:text-[#E5E5E5]">
                                <Quote size="40px"/>
                                <blockquote className="text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-lg font-normal leading-relaxed">{n.msg}</blockquote>
                            </div>
                            <Space />
                            <div className="flex items-center ">
                                {
                                    Array.from({ length: n.star }).map((_, i) => (
                                        <Star key={i} size="18px" className="fill-[#FCA311]" />
                                    ))
                                }
                                {
                                    Array.from({ length: 5 - n.star }).map((_, i) => (
                                        <Star key={i} size="18px" className="fill-[#E5E5E5]" />
                                    ))
                                }
                            </div>
                            
                            <div className="text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-lg font-normal leading-relaxed flex items-center text-[#14213D] dark:text-[#E5E5E5]">
                                <cite className="mr-1">{n.name}</cite> - 
                                <p className="ml-1">{n.post}</p>
                            </div>
                        </motion.div>
                    ))
                }
                </div>
            </div>
        </section>
    )
}

const Style = {
    "container": "w-full flex items-center justify-center py-20 bg-[#FFFFFF] dark:bg-[#14213D]",
    "section": "w-11/12 flex flex-col items-center justify-center h- [89lvh] gap-10",
    
    "card": "cursor-pointer border border-[#14213D] size-100 rounded-xl p-6 transition-all duration-300 ease-in-out group border-[#E5E5E5] h-fit max-md:w-full dark:border-[#666666] hover:shadow-md",
}

export default Testimonials;