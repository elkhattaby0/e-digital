import React from 'react';
import HeaderThree from "../../component/HeaderThree";
import Paragraph from "../../component/Paragraph";
import ListCheck from "../../component/ListCheck"


const data = [
  {
    title: "Frontend",
    tech: [
      { name: "React js", description: "Fast and interactive user interfaces" },
      { name: "Next js", description: "Server-rendered React apps for better performance" },
      { name: "Redux Toolkit", description: "Simple and clear app state management" },
      { name: "TypeScript", description: "Safer JavaScript with static types" }
    ]
  },
  {
    title: "Backend",
    tech: [
      { name: "Nodejs & Express", description: "Scalable web APIs with JavaScript" },
      { name: "Laravel (PHP)", description: "Secure and powerful PHP framework" },
      { name: "MySQL", description: "Reliable relational database management" },
      { name: "Supabase", description: "Backend-as-a-Service with auth and real-time data" }
    ]
  },
  {
    title: "Mobile",
    tech: [
      { name: "React Native", description: "Build native Android & iOS apps" }
    ]
  },
  {
    title: "Design & UI",
    tech: [
      { name: "Figma & Canva", description: "Collaborative interface design tool" },
      { name: "Adobe XD", description: "Wireframes and visual mockups" },
      { name: "Tailwind CSS", description: "Utility-first approach to styling" },
      { name: "Bootstrap", description: "Ready-made components for fast layouts" }
    ]
  },
  {
    title: "CMS & WordPress",
    tech: [
      { name: "WordPress", description: "Easy content management system" },
      { name: "Elementor", description: "Drag-and-drop page builder for custom layouts" },
      { name: "Headless Laravel", description: "Flexible API-driven backends" }
    ]
  },
  {
    title: "Other Tools",
    tech: [
      { name: "Chart.js", description: "Interactive charts and graphs" },
      { name: "jQuery", description: "Simplify JavaScript tasks for older browsers" },
      { name: "Git & GitHub", description: "Version control and collaboration platform" },
      { name: "Vercel & InfinityFree", description: "Deploy frontend and backend applications easily" }
    ]
  }
];


const Tools = () => (
  <section className={Style.container}>
    <div className={Style.section}>
      <Paragraph isCenter={ true }>
      We use the best and latest technologies to build your website, app, or online project. 
      Here are the tools and platforms we work with :
      </Paragraph>

      <div className="flex flex-wrap justify-evenly gap-4">
        {data.map(item => (
          <div
            key={item.title}
            className="w-[390px] max-md:w-full border border-[#E5E5E5] rounded-xl overflow-hidden transition-shadow duration-300 cursor-pointer group"
          >
            <div className="p-6">
              <HeaderThree className="mb-2">{item.title}</HeaderThree>
              <ul className="mt-4">
                {
                  item.tech.map(n=> (
                    <ListCheck key={n.name}>
                      <strong>{n.name}</strong> : {n.description}
                    </ListCheck>
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
