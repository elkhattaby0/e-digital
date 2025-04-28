import React from "react";
import { FaLaravel, FaReact, FaWordpress, FaYoast } from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { FaElementor } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import HeaderTwo from "../../component/HeaderTwo";
import ButtonArrow from "../../component/ButtonArrow";
import Paragraph from "../../component/Paragraph";


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
            <div className={Style.section} >
                <HeaderTwo>Our Tools</HeaderTwo>
                <Paragraph>
                    We use the best and latest technologies :
                </Paragraph>

                <div className="flex flex-wrap gap-8 justify-center">
                {
                    data.map(n=> (
                        <div key={n.name} className={Style.card}>
                            {n.icon}
                        </div>
                    ))
                }
                </div>
                <br />
                <ButtonArrow link="tools">
                    View more
                </ButtonArrow>         
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