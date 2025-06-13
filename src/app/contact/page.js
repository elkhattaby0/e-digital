import HeroSection from "../../component/HeroSection";
import Contact from "./Contact";
import Image from "../../../public/assets/hero_6.jpg"
import img from "../../../public/assets/trusted_web_agency.png"

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
     ],
     openGraph: {
        title: "Trusted Web Agency - Let's Build Something Great",
        description: "Contact Trusted Web Agency for expert web development, mobile apps, and end-to-end digital solutions. We're here to bring your ideas to life and drive results.",
        url: "https://trustedwebagency.com/contact",
        siteName: "Trusted Web Agency",
        images: [
            {
            url: img.src,
            width: 1200,
            height: 630,
            alt: "Trusted Web Agency",
            }
        ],
        type: "website",
        }
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