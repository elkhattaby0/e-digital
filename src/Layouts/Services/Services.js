import React from 'react';
import HeaderThree from "../../component/HeaderThree";
import Paragraph from "../../component/Paragraph";

const data = [
  { 
    title: "Website Development", 
    description: [ 
      "We create websites that are fast, mobile-friendly, and easy to use.",
      "Your website will look great on computers, tablets, and phones."
    ], 
    img: "https://img.freepik.com/free-photo/view-3d-computer-device-with-peripheral-devices_23-2150714049.jpg?t=st=1745793276~exp=1745796876~hmac=7b5a106e79d20e0c50d25d86c33f2e13e2653d8915d467d9493443cea6961de4&w=740"
  },
  { 
    title: "Mobile App Development", 
    description: [ 
      "We design and build mobile apps for Android and iOS.",
      "Your app will be beautiful, fast, and easy for users."
    ], 
    img: "https://img.freepik.com/free-photo/representations-user-experience-interface-design_23-2150104507.jpg?t=st=1745794352~exp=1745797952~hmac=1f3182cbb39f43d00c201834ae8f47e10b9f01e31af0942f4e82d80661f0a591&w=996"
  },
  { 
    title: "UI/UX Design", 
    description: [ 
      "Good design makes people trust your brand.",
      "We create clean and modern designs that are easy to understand and fun to use."
    ], 
    img: "https://img.freepik.com/free-photo/ui-ux-representations-with-laptop_23-2150201871.jpg?t=st=1745797809~exp=1745801409~hmac=52f8b530b4ae886857147443dc11082f77dd34531898da2f58fc0332d6bf5f67&w=996"
  },
  { 
    title: "SEO & Online Marketing", 
    description: [ 
      "We help your website show up on Google.",
      "We also help you get more visitors and customers with smart marketing."
    ], 
    img: "https://img.freepik.com/free-photo/magnifying-glass-with-seo-concepts_1134-81.jpg?t=st=1745797705~exp=1745801305~hmac=0932ff1fb10adb5cb872312e4a0b152a87498faf705105d0504cb24f026f7840&w=996"
  },
  { 
    title: "WordPress Solutions", 
    description: [ 
      "Want a website you can manage yourself?",
      "We build strong, easy-to-use WordPress websites, perfect for blogs, shops, or business sites."
    ], 
    img: "https://img.freepik.com/free-photo/creative-3d-render-design-web-development-banner-marketing-material-business-presentation-online-advertising_460848-6512.jpg?t=st=1745794701~exp=1745798301~hmac=37eaea877eac33845daa899235a38c1080f92f1844a1eb57cc397156d0106b12&w=900"
  }
];

const Services = () => (
  <section className={Style.container}>
    <div className={Style.section}>
      <div className="flex flex-wrap justify-center gap-8">
        {data.map(item => (
          <div
            key={item.title}
            className="w-full sm:w-[300px] lg:w-[350px] border rounded-xl overflow-hidden transition-shadow duration-300 cursor-pointer group"
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
