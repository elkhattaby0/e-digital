import HeroSection from '../../component/HeroSection';
import Image from "../../../public/assets/hero_4.avif";
import Tools from './Tools';

export const metadata = {
    title: "Trusted Web Agency | Best Digital Solutions & Tools",
    description: "Explore the cutting-edge tools and technologies we use to create high-performance websites, mobile apps, and digital products that drive results.",
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
     ]
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