import React from "react";
import image from "../../assets/about_section_homepage.jpg"
import HeaderTwo from "../../component/HeaderTwo";
import ButtonArrow from "../../component/ButtonArrow";
import Paragraph from "../../component/Paragraph";

const About = () => {
    return (
        <section className={Style.container} >
            <div className={Style.section} >
                <div className={Style.left}>
                    <HeaderTwo>Who We Are ?</HeaderTwo>
                    <Paragraph>
                        We are a team of creative developers and designers. We love to build websites and apps that look good and work fast. Our goal is to help your business shine online.
                    </Paragraph>
                    
                    <ButtonArrow link="about">
                        Learn more about us
                    </ButtonArrow>
                </div>
                <div className={Style.right}
                    style={{
                        backgroundImage: `url(${image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                ></div>                
            </div>
        </section>
    )
}

const Style = {
    "container": "w-full flex items-center justify-center py-10 my-10",
    "section": "w-11/12 flex max-md:flex-col items-left justify-center h- [89lvh] gap-10",

    "left": "w-1/2 max-md:w-full",
    "right": "w-1/2 max-md:w-full h-[480px] max-md:h-[280px] rounded-md",
}

export default About;