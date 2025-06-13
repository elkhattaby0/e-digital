import HeroSection from "../../component/HeroSection";
import Services from "./Services";
import Image from "../../../public/assets/hero_2.jpg"
import img from "../../../public/assets/trusted_web_agency.png"


export const metadata = {
    title: "Trusted Web Agency - Our Services: Web, App, Marketing & Branding",
    description: "Explore Trusted Web Agency's wide range of services, including web design, app development, SEO, branding, digital marketing, and custom tech solutions tailored for your business.",
    keywords:[
        "Digital Services",
        "Web Development",
        "Mobile App Development",
        "SEO Services",
        "Branding",
        "Digital Marketing",
        "UI UX Design",
        "Trusted Web Agency",
        "Business Solutions"
     ],
    openGraph: {
        title: "Trusted Web Agency - Our Services: Web, App, Marketing & Branding",
        description: "Explore Trusted Web Agency's wide range of services, including web design, app development, SEO, branding, digital marketing, and custom tech solutions tailored for your business.",
        url: "https://trustedwebagency.com/services",
        siteName: "Trusted Web Agency",
        images: [
            {
            url: img.src,
            width: 1200,
            height: 630,
            alt: "Trusted Web Agency",
            }
        ],
        type: "article",
        }
} 

const Serviceslayout = () => {
    return (
        <main>
            <HeroSection 
                img={Image} 
                text="Our Services" 
                para="At Trusted Web Agency, we create websites, apps, and marketing strategies that drive real results for your business."    
            />
            <Services />
        </main>
    )
}

export default Serviceslayout;