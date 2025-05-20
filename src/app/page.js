import Hero from "./Homepage/Hero";
import About from "./Homepage/About";
import Services from "./Homepage/Services";
import Projects from "./Homepage/Projects";
import Whyus from "./Homepage/Whyus";
import Technologies from "./Homepage/Technologies";
import Testimonials from "./Homepage/Testimonials";
import img from "../../public/assets/trusted_web_agency.png"

export const metadata = {
  title: "Trusted Web Agency - Full Service Digital Agency",
  description: "Trusted Web Agency helps businesses grow online through smart design, powerful apps, strong branding, and digital strategies that actually work.",
  keywords:[ 
    "Digital Agency",
    "Full-Service Agency", 
    "Web Development", 
    "App Development", 
    "SEO Services", 
    "UI/UX Design", 
    "Social Media Marketing", 
    "Branding, E-commerce Solutions", 
    "Content Creation", 
    "Digital Strategy", 
    "Online Advertising", 
    "Software Development", 
    "Graphic Design", 
    "Cloud Solutions", 
    "End-to-End Digital Services", 
    "WordPress", "Elementor", "React", "Laravel", "Python", "AI", "ChatGPT", 
    "Digital Transformation", "Trusted Web Agency"
  ],
  openGraph: {
    title: "Trusted Web Agency - Full Service Digital Agency",
    description: "Trusted Web Agency helps businesses grow online through smart design, powerful apps, strong branding, and digital strategies that actually work.",
    url: "https://trustedwebagency.com/",
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

export default function Home() {
  return (
    <main>    
        <Hero />
        <About />
        <Services />
        <Projects />
        <Whyus />
        <Technologies />
        <Testimonials />
      </main>
  );
}
