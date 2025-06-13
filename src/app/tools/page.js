import HeroSection from '../../component/HeroSection';
import Image from "../../../public/assets/hero_4.avif";
import Tools from './Tools';
import img from "../../../public/assets/trusted_web_agency.png"


export const metadata = {
    title: "Trusted Web Agency - Best Digital Solutions & Tools",
    description: "Take a look at the tools and tech we use every day to build fast, modern websites, apps, and digital experiences that help your business grow.",
    keywords:[ 
        "Trusted Web Agency tools", 
        "digital agency tools", 
        "web development tools", 
        "SEO tools", 
        "UI UX resources", 
        "marketing automation", 
        "design tools", 
        "productivity tools", 
        "web agency software"
     ],
     openGraph: {
        title: "Trusted Web Agency - Best Digital Solutions & Tools",
        description: "Take a look at the tools and tech we use every day to build fast, modern websites, apps, and digital experiences that help your business grow.",
        url: "https://trustedwebagency.com/tools",
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

const Technologieslayout = () => {
    return (
        <main>
            <HeroSection 
                img={Image} 
                text="Our Tools" 
                para="We use the best and latest technologies to build your website, app, or online project."
            />
            <Tools />
        </main>
    )
}

export default Technologieslayout;