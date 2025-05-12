import HeroSection from "../../component/HeroSection";
import Image from "../../../public/assets/hero_3.jpg"
import Projects from "./Projects";

export const metadata = {
    title: "Trusted Web Agency - Our Latest Web & App Development Projects",
    description: "Explore Trusted Web Agency's portfolio of successful web design, app development, branding, and digital marketing projects across various industries.",
    keywords:[ 
        "Trusted Web Agency Projects", 
        "Web Design Portfolio", 
        "App Development Work", 
        "Branding Projects", 
        "Digital Marketing Case Studies", 
        "UI UX Design", 
        "Creative Solutions"
     ]
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