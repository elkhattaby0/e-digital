import Hero from "./Homepage/Hero";
import About from "./Homepage/About";
import Services from "./Homepage/Services";
import Projects from "./Homepage/Projects";
import Whyus from "./Homepage/Whyus";
import Technologies from "./Homepage/Technologies";
import Testimonials from "./Homepage/Testimonials";

export const metadata = {
  title: "edigital | Full Service Digital Agency",
  description: "eDigital is a full-service digital agency offering creative solutions in web design, app development, digital marketing, branding, and custom software to help businesses grow online.",
  keywords:[ "Digital Agency", "Full-Service Agency", "Web Development", "Mobile App Development", "SEO Services", "UI UX Design", "Social Media Marketing", "Branding", "E-commerce Solutions", "Content Creation", "Digital Strategy", "Online Advertising", "Software Development", "Graphic Design", "Cloud Solutions", "End-to-End Digital Services", "Wordpress", "Elementor", "React", "Laravel", "Python", "AI", "Chatgpt", "edigital" ]

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
