import HeroSection from "../../component/HeroSection"
import Whoweare from './Whoweare';
// import Team from './Team';
import Image from "../../../public/assets/hero_1.jpg"
import img from "../../../public/assets/trusted_web_agency.png"

export const metadata = {
  title: "Trusted Web Agency - About Our Full-Service Digital Solutions",
  description: "Trusted Web Agency helps you build a stronger online presence with smart web design, powerful apps, and strategies that actually get results and move your business forward.",
  keywords:[ 
    "About Trusted Web Agency",
    "Full-Service Digital Agency",
    "Web Development Team",
    "App Developers",
    "UI/UX Experts",
    "Online Marketing Agency",
    "Creative Tech Agency",
    "Branding",
    "Software Solutions",
    "Digital Solutions Morocco"
 ],
 openGraph: {
     title: "Trusted Web Agency - About Our Full-Service Digital Solutions",
     description: "Trusted Web Agency helps you build a stronger online presence with smart web design, powerful apps, and strategies that actually get results and move your business forward.",
     url: "https://trustedwebagency.com/about",
     siteName: "Trusted Web Agency",
     images: [
       {
         url: img.src,
         width: 1200,
         height: 630,
         alt: "Trusted Web Agency",
       }
     ],
     type: "profile",
   }
} 

const Aboutlayout = () => {
    return (
        <main>
            <HeroSection 
                img={ Image } 
                text="About Trusted Web Agency" 
                para="We are a full service digital agency committed to helping businesses thrive online through expert web design, app development, and strategic marketing solutions." 
            />
            <Whoweare />
            {/* <Team /> */}
        </main>
    )
}

export default Aboutlayout;