import React from "react";
import HeaderThree from "../../component/HeaderThree";
import Paragraph from "../../component/Paragraph";
import ButtonArrow from "../../component/ButtonArrow";

const data = [
  {
    "step": 1,
    "title": "Request a Quote",
    "subtitle": "DEMANDE DE DEVIS",
    "description": "You send a request with details about your project (needs, goals, budget, and timeline)."
  },
  {
    "step": 2,
    "title": "Project Study",
    "subtitle": "ÉTUDE DU PROJET",
    "description": "We analyze your needs and suggest the best technical and creative solutions tailored to your goals."
  },
  {
    "step": 3,
    "title": "Validation & Planning",
    "subtitle": "VALIDATION & PLANIFICATION",
    "description": "We define the schedule, tools, and expected deliverables. Once approved, we move forward with development."
  },
  {
    "step": 4,
    "title": "Development",
    "subtitle": "DÉVELOPPEMENT",
    "description": "We start building your website or app step by step, with regular updates and review stages."
  },
  {
    "step": 5,
    "title": "Testing & Optimization",
    "subtitle": "TESTS & OPTIMISATION",
    "description": "We conduct full testing (functionality, SEO, speed, device compatibility) to ensure quality and performance."
  },
  {
    "step": 6,
    "title": "Launch",
    "subtitle": "MISE EN LIGNE",
    "description": "After final approval, we publish your project: hosting setup, domain connection, and SSL installation."
  },
  {
    "step": 7,
    "title": "Training & Support",
    "subtitle": "FORMATION & SUPPORT",
    "description": "We provide training if needed and remain available for support, updates, and maintenance."
  }
];

const Timeline = () => {
  return (
    <section className={Style.container}>
      <div className={Style.section}>
        <div className="flex flex-wrap justify-between gap-6 my-8">
          {data.map((n) => (
            <div
              key={n.step}
              className={`flex bor der justify-between items-center w-full ${
                n.step % 2 === 0 ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <div className="flex flex-col text-[#14213D] dark:text-[#E5E5E5] bor der w-1/3 max-md:w-full gap-1">
                <span className="font-bold text-6xl w-full">{n.step}.</span>
                <div className="h-full w-full">
                  <HeaderThree>{n.title}</HeaderThree>
                  <Paragraph>{n.description}</Paragraph>
                  {n.step === 1 && <ButtonArrow link="contact">Get a Quote</ButtonArrow>}
                </div>
              </div>
              {n.step !== 7 && n.step % 2 !== 0 && (
                <svg
                  className="bor der w-2/3 h-[200px] m-0 p-0 block max-md:hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  viewBox="0 0 800 800"
                >
                  <g className="stroke-[#14213D] dark:stroke-[#E5E5E5]"
                    strokeWidth="12"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="31 24"
                  >
                    <polyline
                      points="-900,290 691,290 691,650"
                      markerEnd="url(#SvgjsMarker1700)"
                    />
                  </g>
                  <defs>
                    <marker className="fill-[#14213D] dark:fill-[#E5E5E5]"
                      markerWidth="7.5"
                      markerHeight="7.5"
                      refX="3.75"
                      refY="3.75"
                      viewBox="0 0 7.5 7.5"
                      orient="auto"
                      id="SvgjsMarker1700"
                    >
                      <polygon
                        points="0,7.5 2.5,3.75 0,0 7.5,3.75"
                      />
                    </marker>
                  </defs>
                </svg>
              )}
              {n.step !== 7 && n.step % 2 === 0 && (
                <svg
                  className="bor der w-2/3 h-[200px] m-0 p-0 block scale-x-[-1] max-md:hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  viewBox="0 0 800 800"
                >
                  <g className="stroke-[#14213D] dark:stroke-[#E5E5E5]"
                    strokeWidth="12"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="31 24"
                  >
                    <polyline
                      points="-999,290 791,290 800,750"
                      markerEnd="url(#SvgjsMarker1700)"
                    />
                  </g>
                  <defs>
                    <marker
                      markerWidth="7.5"
                      markerHeight="7.5"
                      refX="3.75"
                      refY="3.75"
                      viewBox="0 0 7.5 7.5"
                      orient="auto"
                      id="SvgjsMarker1700"
                    >
                      <polygon
                        points="0,7.5 2.5,3.75 0,0 7.5,3.75"
                        fill="#e5e5e5"
                      />
                    </marker>
                  </defs>
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Style = {
  container: "w-full flex items-center justify-center",
  section: "w-11/12"
};

export default Timeline;
