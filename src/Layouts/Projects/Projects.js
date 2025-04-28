import React from 'react';
import HeaderThree from "../../component/HeaderThree";
import Paragraph from "../../component/Paragraph";

import img1 from "../../assets/project_1.avif";
import img2 from "../../assets/project_2.avif";
import img3 from "../../assets/project_3.avif";
import img4 from "../../assets/project_4.jpg";
import img5 from "../../assets/project_5.jpg";
import ButtonArrow from '../../component/ButtonArrow';

const data = [
  {
      "id": 1,
      "title": "SmartBiz Website",
      "type": "Business Website",
      "description": "We created a modern website for a small business. It works on phones and computers, and it helps the company get more clients.",
      "img": img1,
      "link": "/"
  },
  {
      "id": 2,
      "title": "FoodieApp – Mobile App",
      "type": "Food Delivery App (Android & iOS)",
      "description": "This app lets people order food online. It has a simple design and is easy to use.",
      "img": img2,
      "link": "/"
  },
  {
      "id": 3,
      "title": "ShopEasy – Online Store",
      "type": "E-commerce Website",
      "description": "We built an online store for clothes and shoes. It has a shopping cart, payment system, and admin dashboard.",
      "img": img3,
      "link": "/"
  },
  {
      "id": 4,
      "title": "Portfolio for Sarah Design",
      "type": "Personal Portfolio",
      "description": "We designed a clean and elegant website for a graphic designer to show her work and get clients.",
      "img": img4,
      "link": "/"
  },
  {
      "id": 5,
      "title": "QuickFix – Repair Services",
      "type": "Services Booking Website",
      "description": "This website lets users book repair services (electricity, plumbing, etc.). It has a booking form and service list.",
      "img": img5,
      "link": "/"
  }
];

const Projects = () => (
  <section className={Style.container}>
    <div className={Style.section}>
      <Paragraph isCenter={ true }>
        We love to build products that help our clients grow.
        Here are some of our recent works :
      </Paragraph>
      <div className="flex flex-wrap justify-center gap-8">
        {
        data.map(item => (
          <div
            key={item.id}
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
              <h4 className={Style.h4}>{item.type}</h4>
              <br />
              <Paragraph className="leading-relaxed">
                {item.description}
              </Paragraph>
              <ButtonArrow>View more</ButtonArrow>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Style = {
  container: "w-full flex justify-center py-8",
  section: "w-11/12 max-w-7xl",
  h4: "font-base text-md mt-2 leading-[18px] text-[#14213D] dark:text-[#E5E5E5]"
};

export default Projects;
