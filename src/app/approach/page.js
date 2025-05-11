import HeroSection from "../../component/HeroSection";
import Timeline from "./Timeline";
import Image from "../../../public/assets/hero_7.jpg"

export const metadata = {
    title: "edigital | How We Work to Deliver Digital Success",
    description: "Discover how eDigital delivers digital success using agile methods, creative thinking, and client collaboration for websites, apps, and marketing solutions.",
    keywords:[ "How We Work", "eDigital Process", "Digital Workflow", "Creative Approach", "Agile Methodology", "Client Collaboration", "Web Design Process", "App Development Steps" ]
  
  } 

const Approachlayout = () => {
    return (
        <main>
            <HeroSection 
                img={Image} 
                text="This is How We Work" 
                para="Learn about our working process to know what to expect when choosing us" 
            />
            <Timeline />
        </main>
    )
}

export default Approachlayout;