import Hero from "./Homepage/Hero";
import About from "./Homepage/About";
import Services from "./Homepage/Services";
import Projects from "./Homepage/Projects";
import Whyus from "./Homepage/Whyus";
import Technologies from "./Homepage/Technologies";
import Testimonials from "./Homepage/Testimonials";

export const metadata = {
  title: "Trusted Web Agency - Full Service Digital Agency",
  description: "Trusted Web Agency provides end-to-end digital solutions, specializing in web design, app development, branding, digital marketing, and custom software to help businesses succeed online.",
  keywords:[ 
    "Digital Agency", "Full-Service Agency", "Web Development", "App Development", "SEO Services", "UI/UX Design", "Social Media Marketing", "Branding", "E-commerce Solutions", 
    "Content Creation", "Digital Strategy", "Online Advertising", "Software Development", "Graphic Design", "Cloud Solutions", "End-to-End Digital Services", 
    "WordPress", "Elementor", "React", "Laravel", "Python", "AI", "ChatGPT", "Digital Transformation", "Trusted Web Agency"
  ]
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
