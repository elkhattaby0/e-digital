import Hero from "./Homepage/Hero";
import About from "./Homepage/About";
import Services from "./Homepage/Services";
import Projects from "./Homepage/Projects";
import Whyus from "./Homepage/Whyus";
import Technologies from "./Homepage/Technologies";
import Testimonials from "./Homepage/Testimonials";
import img from "../../public/assets/trusted_web_agency.png"

export const metadata = {
  title: "Trusted Web Agency: Your Partner for Online Growth",
  description: "We are Trusted Web Agency, a full-service digital team. We help your business grow online with great website design, powerful apps, strong brand, and smart online strategies that work.",
  keywords: [
    "Digital Agency", "Agadir", "Maroc", "Morocco", "Rabat", "Casablanca", 
    "Full Service Agency",
    "Web Development",
    "App Development",
    "SEO",
    "UI UX Design",
    "Social Media",
    "Branding",
    "E-commerce",
    "Content",
    "Digital Strategy",
    "Online Ads",
    "Software",
    "Graphic Design",
    "Cloud",
    "End-to-End Digital",
    "WordPress",
    "Elementor",
    "React",
    "Laravel",
    "Python",
    "AI",
    "ChatGPT",
    "Digital Transformation",
    "Trusted Web Agency"
  ],
  openGraph: {
    title: "Trusted Web Agency: Grow Your Business Online",
    description: "Trusted Web Agency offers smart website design, app development, branding, and digital marketing to help your business succeed online.",
    url: "https://trustedwebagency.com/",
    siteName: "Trusted Web Agency",
    images: [
      {
        url: img.src, // Please make sure 'img' is correctly defined and points to your image
        width: 1200,
        height: 630,
        alt: "Trusted Web Agency",
      }
    ],
    type: "website",
  }
};

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
