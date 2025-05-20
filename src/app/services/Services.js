"use client";

import Image from "next/image";
import Space from "@/component/Space";

import img1 from "../../../public/assets/service_1.jpg";
import img2 from "../../../public/assets/service_2.avif";
import img3 from "../../../public/assets/service_3.avif";
import img4 from "../../../public/assets/service_4.jpg";
import img5 from "../../../public/assets/service_6.jpg";
import img6 from "../../../public/assets/service_5.jpg";
import img7 from "../../../public/assets/service_7.jpg";
import img8 from "../../../public/assets/service_8.jpg";

const data = [
  {
    title: "Website Development",
    description:
      "We build fast, secure, and user-friendly websites using the latest technologies like MERN Stack, Laravel, and WordPress with Elementor. Whether it’s a simple website or a complex platform, we ensure it's easy to use and meets your business goals.",
    img: img1,
  },
  {
    title: "Mobile App Development",
    description:
      "Our team develops high-quality mobile apps for both Android and iOS. Using React Native, we deliver a smooth user experience, so your app works effortlessly across devices while offering intuitive interfaces and functionality.",
    img: img2,
  },
  {
    title: "Graphic & Web Design",
    description:
      "We specialize in designing visual identities, logos, and UI/UX elements that leave a lasting impression. Our designs are crafted to connect with your audience, enhance your brand's personality, and ensure your website or app is visually appealing and functional.",
    img: img3,
  },
  {
    title: "SEO & Optimization",
    description:
      "We focus on optimizing your website’s content and structure to improve visibility in search engines. From speeding up your site to fine-tuning for better ranking, we make sure your business is seen by the right audience.",
    img: img4,
  },
  {
    title: "Web Project Management",
    description:
      "We handle every aspect of your web project, from idea to launch. Our approach ensures your goals are met, the project stays on track, and the final product exceeds expectations",
    img: img5,
  },
  {
    title: "Maintenance & Support",
    description:
      "After your website or app goes live, we continue to support you with regular updates, backups, and security measures. Your digital assets will always stay fresh and secure.",
    img: img6,
  },
  {
    title: "Hosting & Domain Services",
    description:
      "We manage all the technical details for you, from domain name registration to hosting setup and SSL certification, ensuring your website runs securely and is always available to your audience.",
    img: img7,
  },
  {
    title: "IT Consulting",
    description:
      "We help you choose the right technologies for your business needs. Whether it's selecting the perfect platform or devising a digital strategy, we guide you to make informed, strategic decisions for long-term growth.",
    img: img8,
  },
];

const Services = () => (
  <section className={Style.container}>
    <div className={Style.section}>
      <p className="text-center text-gray-700 dark:text-gray-300 mb-6 text-lg">
        Here is what we can do for you:
      </p>
      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6">
        {data.map((item) => (
          <div
            key={item.title}
            className="border dark:border-[#666666] rounded-xl bg-white dark:bg-[#1F2A40] cursor-pointer transition-shadow duration-300 hover:shadow-lg flex flex-col h-[370px]"
          >
            <div className="h-40 overflow-hidden rounded-t-xl">
              <Image
                src={item.img}
                alt={`edigital - ${item.title}`}
                width={400}
                height={160}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-4 flex flex-col flex-1">
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                {item.title}
              </h2>
              <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-5 flex-1">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Style = {
  container: "w-full flex justify-center py-10 bg-[#FFFFFF] dark:bg-[#14213d]",
  section: "w-11/12 max-w-7xl",
};

export default Services;
