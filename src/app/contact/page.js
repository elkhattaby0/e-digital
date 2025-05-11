import HeroSection from "../../component/HeroSection";
import Contact from "./Contact";
import Image from "../../../public/assets/hero_6.jpg"

export const metadata = {
    title: "edigital | Let's Build Something Great",
    description: "Get in touch with us for professional web development, mobile apps, and digital solutions. We're ready to bring your ideas to life.",
    keywords:[ "Contact eDigital", "Digital Agency Contact", "Web Development Help", "App Development Inquiry", "Branding Services", "Marketing Consultation", "Get a Quote", "Contact Form" ]
} 

const Contactlayout = () => {
    return (
        <main>
            <HeroSection 
                img={Image} 
                text={"Contact Us"} 
                para={"We work with clients of all sizes and sectors, from new startup ventures to well-established businesses."}    
            />
            <Contact />
        </main>
    )
}

export default Contactlayout;