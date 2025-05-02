import React from 'react';
import HeaderTwo from "../../component/HeaderTwo";
import Paragraph from "../../component/Paragraph";

import { FaReact } from 'react-icons/fa';
import { RiNextjsFill } from 'react-icons/ri';
import { SiRedux } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import { FaLaravel } from 'react-icons/fa';
import { DiMysql } from 'react-icons/di';
import { RiSupabaseFill } from 'react-icons/ri';
import { SiCanva } from 'react-icons/si';
import { RiTailwindCssFill } from 'react-icons/ri';
import { FaBootstrap } from 'react-icons/fa';
import { FaWordpressSimple } from 'react-icons/fa';
import { FaElementor } from 'react-icons/fa';
import { FaChartLine } from 'react-icons/fa';
import { SiJquery } from 'react-icons/si';
import { FaGitAlt } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { RiVercelFill } from 'react-icons/ri';

const data = [
  {
    title: "Frontend",
    tech: [
      { name: "ReactJs", img: <FaReact /> },
      { name: "NextJs", img: <RiNextjsFill /> },
      { name: "Redux Toolkit", img: <SiRedux /> },
      { name: "TypeScript", img: <SiTypescript /> }
    ]
  },
  {
    title: "Backend",
    tech: [
      { name: "NodeJs", img: <FaNodeJs /> },
      { name: "ExpressJs", img: <SiExpress /> },
      { name: "Laravel (PHP)", img: <FaLaravel /> },
      { name: "MySQL", img: <DiMysql /> },
      { name: "Supabase", img: <RiSupabaseFill /> }
    ]
  },
  {
    title: "Mobile",
    tech: [
      { name: "React Native", img: <FaReact /> }
    ]
  },
  {
    title: "Design & UI",
    tech: [
      { name: "Canva", img: <SiCanva /> },
      { name: "TailwindCss", img: <RiTailwindCssFill /> },
      { name: "Bootstrap", img: <FaBootstrap /> }
    ]
  },
  {
    title: "CMS & WordPress",
    tech: [
      { name: "WordPress", img: <FaWordpressSimple /> },
      { name: "Elementor", img: <FaElementor /> }
    ]
  },
  {
    title: "Other Tools",
    tech: [
      { name: "ChartJs", img: <FaChartLine /> },
      { name: "jQuery", img: <SiJquery /> },
      { name: "Git", img: <FaGitAlt /> },
      { name: "GitHub", img: <FaGithub /> },
      { name: "Vercel", img: <RiVercelFill /> }
    ]
  }
];


const Tools = () => (
  <section className={Style.container}>
    <div className={Style.section}>
      <Paragraph isCenter={ true }>
        Here are the tools and platforms we work with :
      </Paragraph>

      <div className="flex flex-wrap justify-evenly gap-4">
        {data.map(item => (
          <div
            key={item.title}
            className="w-full [390px] max-md:w-full bo rder border-[#E5E5E5] rounded-xl overflow-hidden transition-shadow duration-300 cursor-pointer group"
          >
            <div className="p-6">
              <HeaderTwo className="mb-2">{item.title}</HeaderTwo>

              <ul className="mt-4 py-6 border-t border-[#E5E5E5] flex flex-wrap gap-10">
                {
                  item.tech.map(n=> (
                    <li className="dark:text-[#E5E5E5] flex flex-col gap-3 items-center justify-center w-fit">
                      <span className="text-[40px] font-base">{n.img}</span>
                      <p>{n.name}</p>
                    </li>
                  ))
                }
              </ul>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Style = {
  container: "w-full flex justify-center py-8",
  section: "w-11/12"
};

export default Tools;
