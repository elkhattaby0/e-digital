import HeroSection from "../../component/HeroSection";
import Services from "./Services";
import Image from "../../../public/assets/hero_2.jpg"

export const metadata = {
    title: "edigital | Our Services : Web, App, Marketing & Branding",
    description: "Discover eDigital's full range of services in web design, app development, digital marketing, SEO, branding, and tailored tech solutions for your business.",
    keywords:[ "Digital Services", "Web Development", "Mobile App Development", "SEO Services", "Branding", "Digital Marketing", "UI UX Design", "eDigital Agency", "Business Solutions" ]
} 

const Serviceslayout = () => {
    return (
        <main>
            <HeroSection 
                img={Image} 
                text="Our Services" 
                para="We help businesses grow with smart websites, apps, and marketing."    
            />
            <Services />
        </main>
    )
}

export default Serviceslayout;