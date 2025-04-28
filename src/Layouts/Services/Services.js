import React from 'react';
import HeaderThree from "../../component/HeaderThree";
import Paragraph from "../../component/Paragraph";

import img1 from "../../assets/service_1.jpg";
import img2 from "../../assets/service_2.avif";
import img3 from "../../assets/service_3.avif";
import img4 from "../../assets/service_4.jpg";
import img5 from "../../assets/service_5.jpg";

const data = [
  { 
    title: "Website Development", 
    description: [ 
      "We create websites that are fast, mobile-friendly, and easy to use.",
      "Your website will look great on computers, tablets, and phones."
    ], 
    img: img1
  },
  { 
    title: "Mobile App Development", 
    description: [ 
      "We design and build mobile apps for Android and iOS.",
      "Your app will be beautiful, fast, and easy for users."
    ], 
    img: img2
  },
  { 
    title: "UI/UX Design", 
    description: [ 
      "Good design makes people trust your brand.",
      "We create clean and modern designs that are easy to understand and fun to use."
    ], 
    img: img3
  },
  { 
    title: "SEO & Online Marketing", 
    description: [ 
      "We help your website show up on Google.",
      "We also help you get more visitors and customers with smart marketing."
    ], 
    img: img4
  },
  { 
    title: "WordPress Solutions", 
    description: [ 
      "Want a website you can manage yourself?",
      "We build strong, easy-to-use WordPress websites, perfect for blogs, shops, or business sites."
    ], 
    img: img5
  }
];

const Services = () => (
  <section className={Style.container}>
    <div className={Style.section}>
      <Paragraph isCenter={ true }>
        We help businesses grow with smart websites, apps, and marketing.
      </Paragraph>
      <div className="flex flex-wrap justify-center gap-8">
        {data.map(item => (
          <div
            key={item.title}
            className="w-full sm:w-[300px] lg:w-[350px] border border-[#E5E5E5] rounded-xl overflow-hidden transition-shadow duration-300 cursor-pointer group"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform transform hover:scale-105 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <HeaderThree className="mb-2">{item.title}</HeaderThree>
              <div className="mt-2">
                {item.description.map((line, idx) => (
                  <Paragraph key={idx} className="leading-relaxed">
                    {line}
                  </Paragraph>
                ))}
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
