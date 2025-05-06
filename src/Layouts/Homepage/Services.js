import React from "react";
import HeaderTwo from "../../component/HeaderTwo";
import ButtonArrow from "../../component/ButtonArrow";
import HeaderThree from "../../component/HeaderThree";
import { Globe2, Palette, SearchCheckIcon, SmartphoneIcon, Wrench } from "lucide-react";
import { motion } from "framer-motion";


const Services = () => {
    const data = [
        {
            "id": 1,
            "img": <Globe2 className={Style.img} />,
            "title": "Website Development",
            "text": "Modern, responsive, dynamic websites"
        },
        {
            "id": 2,
            "img": <SmartphoneIcon className={Style.img} />,
            "title": "Mobile App Development",
            "text": "Cross-platform mobile applications"
        },
        {
            "id": 3,
            "img": <Palette className={Style.img} />,
            "title": "Graphic & Web Design",
            "text": "Creative branding and UI design"
        },
        {
            "id": 4,
            "img": <SearchCheckIcon className={Style.img} />,
            "title": "SEO & Referencing",
            "text": "Optimized content and performance"
        },
        {
            "id": 5,
            "img": <Wrench className={Style.img} />,
            "title": "Maintenance & Support",
            "text": "Updates, security, and backups"
        }
    ]
    return (
        <section className={Style.container} >
            <div className={Style.section} >
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <HeaderTwo>What We Do ?</HeaderTwo>
                </motion.div>
                <div className="flex flex-wrap gap-10 max-md:gap-5 justify-center">
                {
                    data.map(n=> (
                        <motion.div key={n.id} className={Style.card}
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            {n.img}
                            <HeaderThree>{n.title}</HeaderThree>
                            <p className={Style.para}>{n.text}</p>
                        </motion.div>
                    ))
                }
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <ButtonArrow link="services">
                        View more
                    </ButtonArrow> 
                </motion.div>                    
            </div>
        </section>
    )
}

const Style = {
    "container": "w-full flex items-center justify-center py-10 my-10",
    "section": "w-11/12 flex flex-col items-center justify-center gap-10 max-md:gap-5",

    "card": "cursor-pointer border border-[#E5E5E5] dark:border-[#666666] size-100 rounded-xl p-6 hover:shadow-md dark:border-[#E5E5E5] transform transition-transform duration-300 group max-md:w-full",
    "img": "mb-2 size-[45px] text-[#14213D] dark:text-[#E5E5E5]",
    "para": "font-base text-[#000000] leading-relaxed dark:text-[#E5E5E5]"
}

export default Services;