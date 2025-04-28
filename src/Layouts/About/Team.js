import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeaderTwo from "../../component/HeaderTwo";
import HeaderThree from "../../component/HeaderThree";

import avatar from "../../assets/avatar.png";

const data = [
  { name: "Lahoucine", post: "CEO", img: avatar },
  { name: "Sara", post: "Developer", img: avatar },
  { name: "Youssef", post: "Project Manager", img: avatar },
  { name: "Fatima", post: "UI/UX Designer", img: avatar },
  { name: "Omar", post: "Backend Developer", img: avatar },
  { name: "Nora", post: "Marketing Specialist", img: avatar },
  { name: "Rachid", post: "Frontend Developer", img: avatar },
  { name: "Imane", post: "Content Creator", img: avatar },
  { name: "Anas", post: "DevOps Engineer", img: avatar },
  { name: "Salma", post: "Support Lead", img: avatar }
];

const Team = () => {
      
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section className={Style.containre}>
      <div className={Style.section}>
        <HeaderTwo>Our Great Team</HeaderTwo>

        <Slider {...settings}>
          {data.map((n) => (
            <div key={n.name} className="flex justify-center items-center gap-5">
              <figure className="border p-4 w-fit text-center rounded-xl cursor-pointer group">
                <div className="rounded-xl overflow-hidden w-[200px] h-[200px] mx-auto">
                <img
                  src={n.img}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = avatar;
                  }}
                  alt={n.name} loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                </div>
                <figcaption>
                  <HeaderThree>{n.name}</HeaderThree>
                  <p className="font-base text-sm text-[#14213D] dark:text-[#E5E5E5]">{n.post}</p>
                </figcaption> 
              </figure>
            </div>
          ))}
        </Slider>

      </div>
    </section>
  );
};

const Style = {
  containre: "w-full flex flex-col items-center justify-center",
  section: "w-10/12 max-md:w-11/12 py-10",
};

export default Team;
