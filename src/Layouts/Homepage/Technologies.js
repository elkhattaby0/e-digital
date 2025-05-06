import React from "react";
import { FaLaravel, FaReact, FaWordpress, FaYoast } from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { FaElementor } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import HeaderTwo from "../../component/HeaderTwo";
import ButtonArrow from "../../component/ButtonArrow";
import Paragraph from "../../component/Paragraph";
import { motion } from "framer-motion";

const Technologies  = () => {
    const data = [
        { "name": "React js", "icon": <FaReact /> }, 
        { "name": "Next js", "icon": <RiNextjsLine /> }, 
        { "name": "Tailwindcss", "icon": <RiTailwindCssFill /> }, 
        { "name": "Typescript", "icon": <SiTypescript /> }, 
        { "name": "Laravel", "icon": <FaLaravel /> }, 
        { "name": "Wordpress", "icon": <FaWordpress /> }, 
        { "name": "Elementor", "icon": <FaElementor /> }, 
        { "name": "Yoast", "icon": <FaYoast /> }, 
    ]
    return (
        <section className={Style.container} >
            <div className={Style.section}>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <HeaderTwo>Our Tools</HeaderTwo>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <Paragraph>
                        We use the best and latest technologies :
                    </Paragraph>
                </motion.div>
                <div className="flex flex-wrap gap-8 justify-center">
                {
                    data.map(n=> (
                        <motion.div key={n.name} className={Style.card}
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            {n.icon}
                        </motion.div>
                    ))
                }
                </div>
                <br />
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <ButtonArrow link="tools">
                        View more
                    </ButtonArrow>
                </motion.div>         
            </div>
        </section>
    )
}

const Style = {
    "container": "w-full flex items-center justify-center py-10 my-10",
    "section": "w-11/12 flex flex-col items-center justify-center",

    "card": "text-[#14213D] dark:text-[#E5E5E5] text-4xl",

}

export default Technologies;