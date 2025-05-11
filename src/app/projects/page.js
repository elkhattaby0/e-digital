import HeroSection from "../../component/HeroSection";
import Image from "../../../public/assets/hero_3.jpg"
import Projects from "./Projects";

export const metadata = {
    title: "edigital | Our Latest Web & App Development Projects",
    description: "Explore eDigital’s portfolio of successful projects in web design, mobile app development, branding, and digital marketing across diverse industries.",
    keywords:[ "eDigital Projects", "Web Design Portfolio", "App Development Work", "Branding Projects", "Digital Marketing Case Studies", "UI UX Design", "Creative Solutions" ]
} 

const Projectslayout = () => {
    return (
        <main>
            <HeroSection 
                img={Image} 
                text="We Make Things Happen" 
                para="We love to build products that help our clients grow."
            />
            <Projects />
        </main>
    )
}

export default Projectslayout;