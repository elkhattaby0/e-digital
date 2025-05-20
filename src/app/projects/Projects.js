import Image from "next/image";
import Link from "next/link";
import Paragraph from "../../component/Paragraph";

import img1 from "../../../public/assets/project_1.avif";
import img2 from "../../../public/assets/project_2.avif";
import img3 from "../../../public/assets/project_3.avif";
import img4 from "../../../public/assets/project_4.jpg";
import img5 from "../../../public/assets/project_5.jpg";

const data = [
  {
    id: 1,
    title: "SmartBiz Website",
    type: "Business Website",
    description: "We created a modern website for a small business. It works on phones and computers, and it helps the company get more clients.",
    img: img1,
    link: "/"
  },
  {
    id: 2,
    title: "FoodieApp – Mobile App",
    type: "Food Delivery App (Android & iOS)",
    description: "This app lets people order food online. It has a simple design and is easy to use.",
    img: img2,
    link: "/"
  },
  {
    id: 3,
    title: "ShopEasy – Online Store",
    type: "E-commerce Website",
    description: "We built an online store for clothes and shoes. It has a shopping cart, payment system, and admin dashboard.",
    img: img3,
    link: "/"
  },
  {
    id: 4,
    title: "Portfolio for Sarah Design",
    type: "Personal Portfolio",
    description: "We designed a clean and elegant website for a graphic designer to show her work and get clients.",
    img: img4,
    link: "/"
  },
  {
    id: 5,
    title: "QuickFix – Repair Services",
    type: "Services Booking Website",
    description: "This website lets users book repair services (electricity, plumbing, etc.). It has a booking form and service list.",
    img: img5,
    link: "/"
  }
];

const Projects = () => (
  <section className={Style.container}>
    <div className={Style.section}>
      <Paragraph isCenter={true}>
        Here are some of our recent works:
      </Paragraph>

      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6 w-full">
        {data.map((project) => (
          <div key={project.id} className={Style.card}>
            <Image
              src={project.img}
              alt={`edigital - ${project.title}`}
              width={400}
              height={250}
              className="rounded-xl object-cover w-full h-auto"
            />
            <div className="pt-4 px-2 text-[#14213D] dark:text-[#E5E5E5]">
              <h2 className="text-lg font-semibold mb-2">{project.title}</h2>
              <h3 className="bg-[#FCA311] py-1 px-3 rounded-full text-xs font-medium inline-block mb-2">
                {project.type}
              </h3>
              
              <p className="text-sm mb-3 line-clamp-3">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Style = {
  container: "w-full flex items-center justify-center max-md:pt-10 bg-[#FFFFFF] dark:bg-[#14213D]",
  section: "w-11/12 max-w-7xl flex flex-col gap-8",
  card: "p-3 rounded-xl border dark:border-[#666666] dark:bg-[#1F2A40] transition-all duration-300 ease-in-out group cursor-pointer",
};

export default Projects;