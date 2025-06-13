"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaLaravel, FaBootstrap } from "react-icons/fa"
import {
  FaWordpressSimple,
  FaElementor,
  FaGitAlt,
  FaGithub,
  FaJira,
  FaExpeditedssl,
  FaGlobe,
  FaServer,
} from "react-icons/fa"
import { SiJavascript, SiRedux, SiTypescript, SiExpress, SiJquery, SiPostman, SiSonarqube } from "react-icons/si"
import { SiC, SiMicrogenetics, SiSqlite, SiRabbitmq, SiGoogleanalytics } from "react-icons/si"
import { RiNextjsFill, RiTailwindCssFill, RiSupabaseFill } from "react-icons/ri"
import { DiMysql, DiMongodb, DiScrum } from "react-icons/di"
import { IoLogoFirebase } from "react-icons/io5"
import { VscVscode } from "react-icons/vsc"
import { BsDiagram3Fill } from "react-icons/bs"
import { FaPython } from "react-icons/fa"

const data = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Tools and technologies we use to build stunning user interfaces",
    color: "#4361EE",
    icon: <FaReact className="text-3xl" />,
    tech: [
      { name: "HTML", img: <FaHtml5 />, level: 100 },
      { name: "CSS", img: <FaCss3Alt />, level: 100 },
      { name: "JavaScript", img: <SiJavascript />, level: 100 },
      { name: "TypeScript", img: <SiTypescript />, level: 100 },
      { name: "Bootstrap", img: <FaBootstrap />, level: 100 },
      { name: "TailwindCSS", img: <RiTailwindCssFill />, level: 100 },
      { name: "jQuery", img: <SiJquery />, level: 100 },
      { name: "React.js", img: <FaReact />, level: 100 },
      { name: "Next.js", img: <RiNextjsFill />, level: 100 },
      { name: "React Native", img: <FaReact />, level: 100 },
      { name: "Redux Toolkit", img: <SiRedux />, level: 100 },
      { name: "WordPress", img: <FaWordpressSimple />, level: 100 },
      { name: "Elementor", img: <FaElementor />, level: 100 },
      { name: "SEO", img: <SiGoogleanalytics />, level: 100 },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    description: "Powerful technologies that drive our server-side applications",
    color: "#7209B7",
    icon: <FaNodeJs className="text-3xl" />,
    tech: [
      { name: "Laravel", img: <FaLaravel />, level: 100 },
      { name: "Python", img: <FaPython />, level: 100 },
      { name: "Node.js", img: <FaNodeJs />, level: 100 },
      { name: "Express.js", img: <SiExpress />, level: 100 },
      { name: "C", img: <SiC />, level: 100 },
      { name: "Firebase", img: <IoLogoFirebase />, level: 100 },
      { name: "Supabase", img: <RiSupabaseFill />, level: 100 },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    description: "Database solutions we implement for efficient data management",
    color: "#F72585",
    icon: <DiMysql className="text-3xl" />,
    tech: [
      { name: "MySQL", img: <DiMysql />, level: 100 },
      { name: "SQLite", img: <SiSqlite />, level: 100 },
      { name: "MongoDB", img: <DiMongodb />, level: 100 },
    ],
  },
  {
    id: "devtools",
    title: "Dev Tools",
    description: "Tools that enhance our development workflow and productivity",
    color: "#FCA311",
    icon: <VscVscode className="text-3xl" />,
    tech: [
      { name: "VS Code", img: <VscVscode />, level: 100 },
      { name: "Postman", img: <SiPostman />, level: 100 },
      { name: "SonarQube", img: <SiSonarqube />, level: 100 },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Infra",
    description: "Infrastructure and deployment technologies we leverage",
    color: "#3A86FF",
    icon: <FaServer className="text-3xl" />,
    tech: [
      { name: "Hosting", img: <FaServer />, level: 100 },
      { name: "Domain", img: <FaGlobe />, level: 100 },
      { name: "SSL", img: <FaExpeditedssl />, level: 100 },
      { name: "RabbitMQ", img: <SiRabbitmq />, level: 100 },
      { name: "Microservices", img: <SiMicrogenetics />, level: 100 },
    ],
  },
  {
    id: "version-control",
    title: "Version Control",
    description: "Source control tools we use for collaborative development",
    color: "#2A9D8F",
    icon: <FaGithub className="text-3xl" />,
    tech: [
      { name: "Git", img: <FaGitAlt />, level: 100 },
      { name: "GitHub", img: <FaGithub />, level: 100 },
    ],
  },
  {
    id: "project-management",
    title: "Project Management",
    description: "Methodologies and tools for efficient project delivery",
    color: "#E76F51",
    icon: <FaJira className="text-3xl" />,
    tech: [
      { name: "Agile", img: <DiScrum />, level: 100 },
      { name: "Jira", img: <FaJira />, level: 100 },
      { name: "UML", img: <BsDiagram3Fill />, level: 100 },
    ],
  },
]

const ToolsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all")
  const [hoveredTech, setHoveredTech] = useState(null)

  // Filter categories or show all
  const filteredData = activeCategory === "all" ? data : data.filter((item) => item.id === activeCategory)

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const techItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="w-full bg-gradient-to-b from-[#14213D] via-[#1a2847] to-[#14213D] py-20 lg:py-32">
      <div className="container mx-auto px-4 max-w-7xl">
       
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory("all")}
            className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeCategory === "all"
                ? "bg-[#FCA311] text-[#14213D]"
                : "bg-[#1a2847] text-[#E5E5E5] hover:bg-[#1f2d52]"
            }`}
          >
            All Categories
          </motion.button>

          {data.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-[#FCA311] text-[#14213D]"
                  : "bg-[#1a2847] text-[#E5E5E5] hover:bg-[#1f2d52]"
              }`}
            >
              {category.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Categories Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-8"
          >
            {filteredData.map((category) => (
              <motion.div
                key={category.id}
                variants={categoryVariants}
                className="bg-[#1a2847] rounded-2xl overflow-hidden border border-[#2a3a5c] hover:border-[#FCA311]/30 transition-all duration-500 group"
              >
                {/* Category Header */}
                <div className="p-6 border-b border-[#2a3a5c] relative overflow-hidden">
                  {/* Gradient Background */}
                  <div
                    className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20"
                    style={{ backgroundColor: category.color }}
                  />

                  {/* Category Icon */}
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-white"
                    style={{ backgroundColor: category.color }}
                  >
                    {category.icon}
                  </div>

                  <h2 className="text-2xl font-bold text-[#E5E5E5] mb-2">{category.title}</h2>
                  <p className="text-[#E5E5E5]/70">{category.description}</p>
                </div>

                {/* Tech Grid */}
                <div className="p-6">
                  <motion.div
                    variants={containerVariants}
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                  >
                    {category.tech.map((tech) => (
                      <motion.div
                        key={tech.name}
                        variants={techItemVariants}
                        whileHover={{ scale: 1.05, y: -5 }}
                        onHoverStart={() => setHoveredTech(tech.name)}
                        onHoverEnd={() => setHoveredTech(null)}
                        className="relative flex flex-col items-center text-center group/tech"
                      >
                        {/* Icon Container */}
                        <div className="w-16 h-16 mb-3 rounded-2xl flex items-center justify-center bg-[#14213D] group-hover/tech:bg-gradient-to-br group-hover/tech:from-[#14213D] group-hover/tech:to-[#FCA311]/20 transition-all duration-300">
                          <div className="text-3xl text-[#E5E5E5] group-hover/tech:text-[#FCA311] transition-all duration-300">
                            {tech.img}
                          </div>
                        </div>

                        {/* Name */}
                        <p className="text-sm font-medium text-[#E5E5E5] group-hover/tech:text-[#FCA311] transition-colors duration-300">
                          {tech.name}
                        </p>

                        {/* Proficiency Level - visible on hover */}
                        <AnimatePresence>
                          {hoveredTech === tech.name && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              transition={{ duration: 0.2 }}
                              className="mt-2 w-full bg-[#14213D] h-1.5 rounded-full overflow-hidden"
                            >
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${tech.level}%` }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="h-full bg-[#FCA311]"
                              />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-[#FCA311] text-[#14213D] px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-[#FCA311]/25 transition-all duration-300"
          >
            Start Your Project With Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default ToolsSection
