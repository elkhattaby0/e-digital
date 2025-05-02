import React from 'react';
import HeaderThree from "../../component/HeaderThree";
import Paragraph from "../../component/Paragraph";

import img1 from "../../assets/service_1.jpg";
import img2 from "../../assets/service_2.avif";
import img3 from "../../assets/service_3.avif";
import img4 from "../../assets/service_4.jpg";
import img5 from "../../assets/service_6.jpg";
import img6 from "../../assets/service_5.jpg";
import img7 from "../../assets/service_7.jpg";
import img8 from "../../assets/service_8.jpg";

const data = [
  {
    "title": "Website Development",
    "description": "We build fast, dynamic, and secure websites using modern technologies like the MERN Stack, Laravel, and WordPress with Elementor. From responsive design to dynamic effects and an intuitive admin panel, your site will be powerful, beautiful, and easy to manage.",
    "img": img1
  },
  {
    "title": "Mobile App Development",
    "description": "We develop high-performance, cross-platform mobile applications using React Native, delivering sleek designs and smooth user experiences on both Android and iOS.",
    "img": img2
  },
  {
    "title": "Graphic & Web Design",
    "description": "From logos and business cards to brand guides and UI/UX design, we create visually striking and professional graphics that define your brand and enhance user engagement.",
    "img": img3
  },
  {
    "title": "SEO & Referencing",
    "description": "We optimize your website’s speed, structure, and content to improve visibility and search engine rankings through technical SEO and natural referencing strategies.",
    "img": img4
  },
  {
    "title": "Web Project Management",
    "description": "Whether it’s a showcase website, an e-commerce store, or a blog, we manage your web project from start to finish to ensure it aligns with your goals and delivers results.",
    "img": img5
  },
  {
    "title": "Maintenance & Support",
    "description": "We provide ongoing support with regular updates, bug fixes, backups, and security enhancements to keep your website running smoothly and securely.",
    "img": img6
  },
  {
    "title": "Hosting & Domain Services",
    "description": "We handle domain name registration, hosting setup, and SSL certificate installation to ensure your website is fast, secure, and always accessible.",
    "img": img7
  },
  {
    "title": "IT Consulting",
    "description": "We guide you in choosing the right technologies and digital strategies tailored to your business goals, helping you make informed decisions for long-term success.",
    "img": img8
  }
];

const Services = () => (
  <section className={Style.container}>
    <div className={Style.section}>
      <Paragraph isCenter={ true }>
        Here is what we can do for you :
      </Paragraph>
      <div className="flex flex-wrap justify-center gap-8">
        {data.map(item => (
          <div
            key={item.title}
            className="w-full sm:w-[300px] lg:w-[390px] border border-[#E5E5E5] rounded-xl overflow-hidden transition-shadow duration-300 cursor-pointer group"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={item.img}
                alt={`edigital - ${item.title}`}
                className="w-full h-full object-cover transition-transform transform hover:scale-105 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <HeaderThree className="mb-2">{item.title}</HeaderThree>
              <div className="mt-2">
                <Paragraph>
                    {item.description}
                </Paragraph>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Style = {
  container: "w-full flex justify-center py-8",
  section: "w-11/12 max-w-7xl"
};

export default Services;
