import HeroSection from "../../component/HeroSection";
import Contact from "./Contact";
import Image from "../../../public/assets/hero_6.jpg"

export const metadata = {
    title: "Trusted Web Agency - Let's Build Something Great",
    description: "Contact Trusted Web Agency for expert web development, mobile apps, and end-to-end digital solutions. We're here to bring your ideas to life and drive results.",
    keywords:[ 
        "Contact Trusted Web Agency", 
        "Full-Service Digital Agency Contact", 
        "Web Development Inquiry", 
        "App Development Contact", 
        "Branding Solutions", 
        "Digital Marketing Consultation", 
        "Get a Free Quote", 
        "Contact Form"
     ]
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