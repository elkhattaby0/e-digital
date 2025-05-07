import React from 'react';
import HeaderTwo from "../../component/HeaderTwo";
import Paragraph from "../../component/Paragraph";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaReact } from 'react-icons/fa';
import { RiNextjsFill } from 'react-icons/ri';
import { SiRedux } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import { FaLaravel } from 'react-icons/fa';
import { DiMysql } from 'react-icons/di';
import { RiSupabaseFill } from 'react-icons/ri';
import { RiTailwindCssFill } from 'react-icons/ri';
import { FaBootstrap } from 'react-icons/fa';
import { FaWordpressSimple } from 'react-icons/fa';
import { FaElementor } from 'react-icons/fa';
import { SiJquery } from 'react-icons/si';
import { FaGitAlt } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaPython } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { SiSqlite } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import { SiPostman } from "react-icons/si";
import { SiSonarqube } from "react-icons/si";
import { FaJira } from "react-icons/fa";
import { SiRabbitmq } from "react-icons/si";
import { FaExpeditedssl } from "react-icons/fa";
import { BsDiagram3Fill } from "react-icons/bs";
import { SiGoogleanalytics } from 'react-icons/si';
import { SiC } from 'react-icons/si';
import { SiMicrogenetics } from 'react-icons/si';
import { FaGlobe } from 'react-icons/fa';
import { FaServer } from 'react-icons/fa';
import { DiScrum } from "react-icons/di";


const data = [
  {
    title: "Frontend",
    tech: [
      { name: "HTML", img: <FaHtml5 /> },
      { name: "CSS", img: <FaCss3Alt /> },
      { name: "JavaScript", img: <SiJavascript  /> },
      { name: "TypeScript", img: <SiTypescript /> },

      { name: "Bootstrap", img: <FaBootstrap /> },
      { name: "TailwindCss", img: <RiTailwindCssFill /> },
      { name: "jQuery", img: <SiJquery /> },
      { name: "ReactJs", img: <FaReact /> },
      { name: "NextJs", img: <RiNextjsFill /> },
      { name: "React Native", img: <FaReact /> },
      { name: "Redux Toolkit", img: <SiRedux /> },

      { name: "WordPress", img: <FaWordpressSimple /> },
      { name: "Elementor", img: <FaElementor /> },

      { name: "SEO", img: <SiGoogleanalytics /> }
    ]
  },
  {
    title: "Backend",
    tech: [
      { name: "Laravel (PHP)", img: <FaLaravel /> },
      { name: "Python", img: <FaPython /> },
      { name: "NodeJs", img: <FaNodeJs /> },
      { name: "ExpressJs", img: <SiExpress /> },
      { name: "C", img: <SiC /> },
      
      { name: "Firebase", img: <IoLogoFirebase /> },
      { name: "Supabase", img: <RiSupabaseFill /> }
    ]
  },
  {
    title: "Databases",
    tech: [
      { name: "MySQL", img: <DiMysql /> },
      { name: "SQLite", img: <SiSqlite /> },
      { name: "MongoDB", img: <DiMongodb /> },
    ]
  },
  {
    title: "Development Tools",
    tech: [
      { name: "VSCode", img: <VscVscode /> },
      { name: "Postman", img: <SiPostman /> },
      { name: "SonarQube", img: <SiSonarqube /> },
    ]
  },
  {
    title: "DevOps & Infrastructure",
    tech: [
      { name: "Hosting", img: <FaServer /> },
      { name: "Domain", img: <FaGlobe /> },
      { name: "SSL", img: <FaExpeditedssl /> },
      { name: "RabbitMQ", img: <SiRabbitmq /> },
      { name: "Microservices", img: <SiMicrogenetics /> },
    ]
  },
  {
    title: "Version Control",
    tech: [
      { name: "Git", img: <FaGitAlt /> },
      { name: "GitHub", img: <FaGithub /> },
    ]
  },
  {
    title: "Project Management & Methodologies",
    tech: [
      { name: "Agile", img: <DiScrum  /> },
      { name: "Jira", img: <FaJira /> },
      { name: "UML", img: <BsDiagram3Fill /> },
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
                    <li className="text-[#14213D] dark:text-[#E5E5E5] flex flex-col gap-3 items-center justify-center w-fit">
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
