import React from "react";
import AnimatedNumbers from "react-animated-numbers";
import HeaderTwo from "../../component/HeaderTwo";
import ListCheck from "../../component/ListCheck";

import img1 from "../../assets/why_1.jpg"
import img2 from "../../assets/why_2.avif"
import img3 from "../../assets/why_3.avif"
import img4 from "../../assets/why_4.jpg"

import { motion } from "framer-motion";

const data = [
    "We listen to your ideas",
    "We deliver on time",
    "We use the best tools",
    "We support you after the project is done"
];

const facts = [
    { name: "projects delivered", nbr: 100, lf: "+", rt: "", img: img1 },
    { name: "happy clients", nbr: 50, lf: "+", rt: "", img: img2 },
    { name: "satisfaction rate", nbr: 95, lf: "", rt: "%", img: img3 },
    { name: "years of experience", nbr: 4, lf: "", rt: "+", img: img4 },
];

const Whyus = () => {
    return (
        <section className={Style.container}>
            <div className={Style.section}>
                <motion.div className={Style.left}
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <HeaderTwo>Why Work With Us</HeaderTwo>
                    <ul>
                    {data.map((item) => (
                        <ListCheck key={item} >
                            { item }
                        </ListCheck>
                    ))}
                    </ul>
                </motion.div>

                <div className={Style.right}>
                    {facts.map((fact) => (
                        <motion.div
                            key={fact.name}
                            className="relative flex flex-col items-center justify-center border w-[250px] h-[250px] max-md:w-[160px] max-md:h-[160px] p-4 rounded-xl overflow-hidden bg-cover bg-center text-[#E5E5E5] border-[#E5E5E5] dark:border-[#666666]"
                            style={{ backgroundImage: `url(${fact.img})` }}
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="absolute inset-0 bg-[#14213D] opacity-[0.7]"></div> 
                            <div className="relative z-1 flex flex-col items-center justify-center">
                                <div className="flex w-full items-center justify-center text-[#E5E5E5]">
                                    <span className="mr-1 font-normal text-2xl">{fact.lf}</span>
                                    <h3 className="font-semibold text-5xl">
                                        <AnimatedNumbers
                                            animateToNumber={fact.nbr}
                                            configs={(_, index) => ({
                                                mass: 1,
                                                friction: 100,
                                                tension: 140 * (index + 1),
                                            })}
                                        />
                                    </h3>
                                    <span className="ml-1 font-normal text-2xl">{fact.rt}</span>
                                </div>
                                <p className="capitalize text-sm text-center mt-2">
                                    {fact.name}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

const Style = {
    container: "w-full flex items-center justify-center py-10 my-10",
    section: "w-11/12 flex max-md:flex-col items-left justify-center h-auto gap-10",
    left: "w-1/2 max-md:w-full",
    right: "w-1/2 max-md:w-full flex flex-wrap justify-center gap-6 max-md:gap-3",
};

export default Whyus;
