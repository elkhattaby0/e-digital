import HeroSection from "../../component/HeroSection"
import Whoweare from './Whoweare';
import Team from './Team';
import Image from "../../../public/assets/hero_1.jpg"

export const metadata = {
  title: "Trusted Web Agency - About Our Full-Service Digital Solutions",
  description: "Discover Trusted Web Agency — your go-to partner for innovative web design, app development, and marketing solutions that drive results and grow your business.",
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
 ]

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