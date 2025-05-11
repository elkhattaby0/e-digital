import HeroSection from "../../component/HeroSection"
import Whoweare from './Whoweare';
import Team from './Team';
import Image from "../../../public/assets/hero_1.jpg"

export const metadata = {
  title: "edigital | About Our Digital Solutions Agency",
  description: "Learn more about eDigital — a full-service digital agency dedicated to delivering innovative web, app, and marketing solutions tailored to your business.",
  keywords:[ "About eDigital", "Digital Agency Morocco", "Web Development Team", "App Developers", "UI UX Experts", "Online Marketing Agency", "Creative Tech Agency", "Branding", "Software Solutions" ]

} 

const Aboutlayout = () => {
    return (
        <main>
            <HeroSection img={ Image } text="About Us" />
            <Whoweare />
            <Team />
        </main>
    )
}

export default Aboutlayout;