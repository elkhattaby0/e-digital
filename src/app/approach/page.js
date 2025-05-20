import HeroSection from "../../component/HeroSection";
import Timeline from "./Timeline";
import Image from "../../../public/assets/hero_7.jpg"
import img from "../../../public/assets/trusted_web_agency.png"


export const metadata = {
    title: "Trusted Web Agency - How We Work to Deliver Digital Success",
    description: "Learn how Trusted Web Agency delivers digital success through agile processes, creative solutions, and close client collaboration for web design, app development, and marketing.",
    keywords:[ "How We Work", "eDigital Process", "Digital Workflow", "Creative Approach", "Agile Methodology", "Client Collaboration", "Web Design Process", "App Development Steps" ],
    openGraph: {
        title: "Trusted Web Agency - How We Work to Deliver Digital Success",
        description: "Learn how Trusted Web Agency delivers digital success through agile processes, creative solutions, and close client collaboration for web design, app development, and marketing.",
        url: "https://trustedwebagency.com/approach",
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

const Approachlayout = () => {
    return (
        <main>
            <HeroSection 
                img={Image} 
                text="This is How We Work" 
                para="Discover how Trusted Web Agency works to deliver top-notch websites, apps, and digital solutions tailored to your business goals." 
            />
            <Timeline />
        </main>
    )
}

export default Approachlayout;