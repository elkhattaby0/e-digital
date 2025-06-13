import HeroSection from "../../component/HeroSection"
import Whoweare from './Whoweare';
import Image from "../../../public/assets/hero_1.jpg"
import img from "../../../public/assets/trusted_web_agency.png"

export const metadata = {
  title: "Discover Trusted Web Agency: Your Digital Growth Partners in Agadir",
  description: "Learn about Trusted Web Agency, your dedicated digital partner in Agadir. We combine Full Stack expertise with WordPress/Elementor proficiency and strategic SEO to help your business grow and succeed online.",
  keywords: [
    "About Trusted Web Agency Agadir",
    "Our Digital Agency Story",
    "Full-Service Web Development Team Agadir",
    "Meet Our App Developers Morocco",
    "Our UI/UX Design Philosophy",
    "Why Choose Trusted Web Agency",
    "Creative Digital Solutions Agadir",
    "Our Branding Expertise",
    "Custom Software Development Morocco",
    "Trusted Digital Solutions Agadir"
  ],
  openGraph: {
    title: "Discover Trusted Web Agency: Helping Businesses Thrive Online",
    description: "Learn more about Trusted Web Agency and how our expert team in Agadir provides web design, app development, and SEO services to help your business achieve its online goals.",
    url: "https://trustedwebagency.com/about",
    siteName: "Trusted Web Agency",
    images: [
      {
        url: img.src, // Make sure 'img' is correctly defined with your image URL
        width: 1200,
        height: 630,
        alt: "Trusted Web Agency - About Us",
      }
    ],
    type: "article", // Changed from "profile" to "article" as it's an informational page
  }
};

const Aboutlayout = () => {
    return (
        <main>
            <HeroSection 
                img={ Image } 
                text="About Trusted Web Agency" 
                para="We are a full-service digital agency with a strong commitment to help businesses succeed online. We achieve this through expert web design, app development, and strategic marketing solutions that deliver real growth." 
            />
            <Whoweare />
            {/* <Team /> */}
        </main>
    )
}

export default Aboutlayout;