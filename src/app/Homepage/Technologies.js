"use client"
import { motion } from "framer-motion"
import { FaLaravel, FaReact, FaWordpress, FaYoast, FaFigma, FaGitAlt } from "react-icons/fa"
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri"
import { FaElementor } from "react-icons/fa6"
import { SiTypescript, SiMongodb, SiMysql, SiVercel, SiNetlify, SiFramer } from "react-icons/si"
import { Code, Palette, Database, Cloud, Wrench, Zap, Star, ArrowRight } from "lucide-react"
import HeaderTwo from "@/component/HeaderTwo"
import ButtonArrow from "@/component/ButtonArrow"
import Paragraph from "@/component/Paragraph"

const Technologies = () => {
  const categories = [
    {
      title: "Frontend Development",
      icon: Code,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      tools: [
        { name: "React.js", icon: <FaReact />, color: "#61DAFB", description: "Modern UI library" },
        { name: "Next.js", icon: <RiNextjsLine />, color: "#000000", description: "Full-stack framework" },
        { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6", description: "Type-safe JavaScript" },
        { name: "Tailwind CSS", icon: <RiTailwindCssFill />, color: "#06B6D4", description: "Utility-first CSS" },
      ],
    },
    {
      title: "Backend Development",
      icon: Database,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      tools: [
        { name: "Laravel", icon: <FaLaravel />, color: "#FF2D20", description: "PHP framework" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248", description: "NoSQL database" },
        { name: "MySQL", icon: <SiMysql />, color: "#4479A1", description: "Relational database" },
        { name: "Git", icon: <FaGitAlt />, color: "#F05032", description: "Version control" },
      ],
    },
    {
      title: "Design & CMS",
      icon: Palette,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      tools: [
        { name: "WordPress", icon: <FaWordpress />, color: "#21759B", description: "Content management" },
        { name: "Elementor", icon: <FaElementor />, color: "#92003B", description: "Page builder" },
        { name: "Figma", icon: <FaFigma />, color: "#F24E1E", description: "Design tool" },
        { name: "Framer Motion", icon: <SiFramer />, color: "#0055FF", description: "Animation library" },
      ],
    },
    {
      title: "Deployment & SEO",
      icon: Cloud,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      tools: [
        { name: "Vercel", icon: <SiVercel />, color: "#000000", description: "Deployment platform" },
        { name: "Netlify", icon: <SiNetlify />, color: "#00C7B7", description: "Web hosting" },
        { name: "Yoast SEO", icon: <FaYoast />, color: "#A4286A", description: "SEO optimization" },
        { name: "Performance", icon: <Zap />, color: "#FCA311", description: "Speed optimization" },
      ],
    },
  ]

  const allTools = categories.flatMap((category) => category.tools)

  return (
    <section className={Style.container}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFFFFF] via-[#FFFFFF]/98 to-[#F8F9FA] dark:from-[#14213D] dark:via-[#14213D]/98 dark:to-[#1a2332]" />

        {/* Digital Grid Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                            linear-gradient(rgba(20, 33, 61, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(20, 33, 61, 0.1) 1px, transparent 1px)
                            `,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-32 left-20 w-4 h-4 bg-[#FCA311]/20 rounded-full animate-pulse" />
        <div className="absolute bottom-40 right-32 w-3 h-3 bg-[#FCA311]/30 rounded-full animate-ping" />
        <div className="absolute top-2/3 left-1/4 w-2 h-2 bg-[#FCA311]/25 rounded-full animate-pulse" />

        {/* Tech Circuit Pattern */}
        <svg className="absolute top-0 right-0 w-1/3 h-1/2 opacity-5 dark:opacity-10" viewBox="0 0 400 400" fill="none">
          <g stroke="#FCA311" strokeWidth="1">
            <path d="M400 100 L300 100 L300 200 L200 200 L200 300 L100 300 L100 400" />
            <path d="M400 200 L350 200 L350 250 L250 250 L250 350" />
            <circle cx="300" cy="100" r="3" fill="#FCA311" />
            <circle cx="200" cy="200" r="3" fill="#FCA311" />
            <circle cx="100" cy="300" r="3" fill="#FCA311" />
            <circle cx="350" cy="200" r="3" fill="#FCA311" />
            <circle cx="250" cy="250" r="3" fill="#FCA311" />
          </g>
        </svg>

        {/* Code Symbols */}
        <div className="absolute bottom-20 left-1/4 text-6xl text-[#FCA311]/10 font-mono select-none">{"</>"}</div>
        <div className="absolute top-1/4 right-1/4 text-4xl text-[#FCA311]/10 font-mono select-none">{"{ }"}</div>
      </div>

      <div className={Style.section}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Section Badge */}
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span
              className="text-sm font-medium px-6 py-3 rounded-full border flex items-center gap-2 w-fit mx-auto"
              style={{
                backgroundColor: "rgba(252, 163, 17, 0.1)",
                color: "#FCA311",
                borderColor: "rgba(252, 163, 17, 0.2)",
              }}
            >
              <Wrench size={16} />
              Our Technology Stack
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <HeaderTwo>
              Our{" "}
              <span className="relative" style={{ color: "#FCA311" }}>
                Tools & Technologies
                <div
                  className="absolute -bottom-1 left-0 w-full h-1 rounded-full"
                  style={{ background: "linear-gradient(to right, #FCA311, #FCA311, transparent)" }}
                />
              </span>
            </HeaderTwo>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Paragraph>
              We apply modern technologies and proven methods to create digital solutions that deliver measurable results for your business.
            </Paragraph>
          </motion.div>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-full p-6 bg-[#FFFFFF] dark:bg-[#1a2332] rounded-2xl border border-[#E5E5E5]/20 dark:border-[#E5E5E5]/10 hover:border-[#FCA311]/30 transition-all duration-300 hover:shadow-xl group-hover:shadow-2xl overflow-hidden">
                {/* Background Gradient */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 ${category.bgColor} rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                />

                {/* Category Header */}
                <div className="relative mb-6">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg mb-4`}
                  >
                    <category.icon className="w-6 h-6 text-[#FFFFFF]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#14213D] dark:text-[#E5E5E5] group-hover:text-[#FCA311] transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                {/* Tools List */}
                <div className="space-y-3">
                  {category.tools.map((tool, toolIndex) => (
                    <motion.div
                      key={tool.name}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#FCA311]/5 transition-colors duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: categoryIndex * 0.1 + toolIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-lg"
                        style={{ backgroundColor: `${tool.color}15`, color: tool.color }}
                      >
                        {tool.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-[#14213D] dark:text-[#E5E5E5]">{tool.name}</div>
                        <div className="text-xs text-[#14213D]/60 dark:text-[#E5E5E5]/60">{tool.description}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FCA311]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Tools Showcase */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[#14213D] dark:text-[#E5E5E5] mb-4">
              Technologies We <span style={{ color: "#FCA311" }}>Master</span>
            </h3>
            <p className="text-[#14213D]/70 dark:text-[#E5E5E5]/70">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </div>

          <div className="flex flex-wrap gap-6 justify-center">
            {allTools.map((tool, index) => (
              <motion.div
                key={`${tool.name}-showcase`}
                className="group relative"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl shadow-lg border border-[#E5E5E5]/20 dark:border-[#E5E5E5]/10 hover:border-[#FCA311]/30 transition-all duration-300 group-hover:shadow-xl"
                  style={{
                    backgroundColor: `${tool.color}15`,
                    color: tool.color,
                  }}
                >
                  {tool.icon}
                </div>

                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-[#14213D] dark:bg-[#FFFFFF] text-[#FFFFFF] dark:text-[#14213D] px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                  {tool.name}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#14213D] dark:border-t-[#FFFFFF]"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.a
        href="/tools"
        className="inline-flex items-center px-8 py-3 text-lg font-semibold text-[#14213D] dark:text-[#E5E5E5] bg-transparent border-2 border-[#14213D]/20 dark:border-[#E5E5E5]/20 rounded-full hover:border-[#FCA311] hover:text-[#FCA311] transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        >
        View All Tools
        <ArrowRight className="ml-2 w-5 h-5" />
        </motion.a>
      </div>
    </section>
  )
}

const Style = {
  container: "relative w-full flex items-center justify-center py-20 bg-[#FFFFFF] dark:bg-[#14213D] overflow-hidden",
  section: "relative z-10 w-11/12 max-w-7xl flex flex-col items-center justify-center",
}

export default Technologies
