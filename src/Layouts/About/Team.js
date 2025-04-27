import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeaderTwo from "../../component/HeaderTwo";
import HeaderThree from "../../component/HeaderThree";

const data = [
  { name: "Lahoucine", post: "CEO", img: "https://png.pngtree.com/png-clipart/20231020/original/pngtree-avatar-of-a-brunette-man-png-image_13379740.png" },
  { name: "Sara", post: "Developer", img: "https://png.pngtree.com/png-clipart/20241117/original/pngtree-business-women-avatar-png-image_17163554.png" },
  { name: "Youssef", post: "Project Manager", img: "https://png.pngtree.com/png-clipart/20250110/original/pngtree-the-vicious-gangster-q-version-avatar-png-image_5471084.png" },
  { name: "Fatima", post: "UI/UX Designer", img: "https://png.pngtree.com/png-clipart/20240123/original/pngtree-woman-flat-style-avatar-png-image_6961879.png" },
  { name: "Omar", post: "Backend Developer", img: "https://png.pngtree.com/png-clipart/20240117/original/pngtree-avatar-of-a-software-developer-man-png-image_6943391.png" },
  { name: "Nora", post: "Marketing Specialist", img: "https://png.pngtree.com/png-clipart/20240119/original/pngtree-happy-business-woman-avatar-png-image_6951103.png" },
  { name: "Rachid", post: "Frontend Developer", img: "https://png.pngtree.com/png-clipart/20240116/original/pngtree-man-flat-avatar-profile-png-image_6939994.png" },
  { name: "Imane", post: "Content Creator", img: "https://png.pngtree.com/png-clipart/20231029/original/pngtree-beautiful-muslim-woman-avatar-png-image_13392345.png" },
  { name: "Anas", post: "DevOps Engineer", img: "https://png.pngtree.com/png-clipart/20240116/original/pngtree-developer-flat-design-avatar-png-image_6939414.png" },
  { name: "Salma", post: "Support Lead", img: "https://png.pngtree.com/png-clipart/20230929/original/pngtree-businesswoman-avatar-flat-style-png-image_13289380.png" }
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
