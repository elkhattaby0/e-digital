'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import AboutImage from "../../../public/assets/about_section_homepage.jpg"
import HeaderTwo from "@/component/HeaderTwo";
import ButtonArrow from "@/component/ButtonArrow";
import Paragraph from "@/component/Paragraph";
import Space from "@/component/Space";

const About = () => {
    return (
        <section className={Style.container} >
            <div className={Style.section} >
                <motion.div className={Style.left}
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <HeaderTwo>Who We Are</HeaderTwo>
                    <Space />
                    <Paragraph>
                        We’re a creative team of developers and designers who love building websites and mobile apps that are not only beautiful but easy to use. We focus on making things work well, look great, and truly help your business grow online.
                    </Paragraph>
                    <Space />
                    <ButtonArrow link="about">
                        Learn more about us
                    </ButtonArrow>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="w-1/2 max-md:w-full relative"
                >
                    <Image src={AboutImage} 
                        alt="trustedwebagency" 
                        className={Style.right} 
                        priority
                    /> 
                </motion.div>
            </div>
        </section>
    )
}

const Style = {
    "container": "w-full flex items-center justify-center py-20  bg-[#FFFFFF] dark:bg-[#14213D]",
    "section": "w-11/12 flex max-md:flex-col items-left justify-center h- [89lvh] gap-10",

    "left": "w-1/2 max-md:w-full",
    "right": "w- 1/2 max-md:w-full h-[480px] max-md:h-[280px] rounded-md object-cover bg-center",
}

export default About;