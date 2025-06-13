"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  ExternalLink,
  Eye,
  Calendar,
  User,
  Code,
  Palette,
  Globe,
  Smartphone,
  ShoppingCart,
  Wrench,
} from "lucide-react"

// Import your images
import img1 from "../../../public/assets/project_1.avif"
import img2 from "../../../public/assets/project_2.avif"
import img3 from "../../../public/assets/project_3.avif"
import img4 from "../../../public/assets/project_4.jpg"
import img5 from "../../../public/assets/project_5.jpg"

const data = [
  {
    id: 1,
    title: "SmartBiz Website",
    type: "Business Website",
    description:
      "We created a modern website for a small business. It works on phones and computers, and it helps the company get more clients.",
    img: img1,
    link: "/",
    icon: Globe,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    tags: ["React", "Responsive", "SEO"],
    client: "SmartBiz Corp",
    completedDate: "2024",
    category: "Web Development",
  },
  {
    id: 2,
    title: "FoodieApp – Mobile App",
    type: "Food Delivery App",
    description: "This app lets people order food online. It has a simple design and is easy to use.",
    img: img2,
    link: "/",
    icon: Smartphone,
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50 dark:bg-green-900/20",
    tags: ["React Native", "API", "UI/UX"],
    client: "FoodieApp Inc",
    completedDate: "2024",
    category: "Mobile Development",
  },
  {
    id: 3,
    title: "ShopEasy – Online Store",
    type: "E-commerce Website",
    description:
      "We built an online store for clothes and shoes. It has a shopping cart, payment system, and admin dashboard.",
    img: img3,
    link: "/",
    icon: ShoppingCart,
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    tags: ["Next.js", "Payment", "Admin"],
    client: "ShopEasy Ltd",
    completedDate: "2023",
    category: "E-commerce",
  },
  {
    id: 4,
    title: "Portfolio for Sarah Design",
    type: "Personal Portfolio",
    description: "We designed a clean and elegant website for a graphic designer to show her work and get clients.",
    img: img4,
    link: "/",
    icon: Palette,
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
    tags: ["Portfolio", "Design", "CMS"],
    client: "Sarah Design Studio",
    completedDate: "2023",
    category: "Portfolio",
  },
  {
    id: 5,
    title: "QuickFix – Repair Services",
    type: "Services Booking Website",
    description:
      "This website lets users book repair services (electricity, plumbing, etc.). It has a booking form and service list.",
    img: img5,
    link: "/",
    icon: Wrench,
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50 dark:bg-red-900/20",
    tags: ["Booking", "Services", "Forms"],
    client: "QuickFix Services",
    completedDate: "2023",
    category: "Service Platform",
  },
]

const Projects = () => {
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

        {/* Decorative Pattern */}
        <svg className="absolute top-20 right-1/4 w-20 h-20 opacity-10" viewBox="0 0 100 100">
          <polygon
            points="50,10 60,40 90,40 70,60 80,90 50,70 20,90 30,60 10,40 40,40"
            fill="#FCA311"
            className="animate-spin"
            style={{ animationDuration: "25s" }}
          />
        </svg>

        {/* Digital Circuit Lines */}
        <svg
          className="absolute bottom-0 left-0 w-1/2 h-1/3 opacity-5 dark:opacity-10"
          viewBox="0 0 600 300"
          fill="none"
        >
          <g stroke="#FCA311" strokeWidth="1">
            <path d="M0 150 L150 150 L150 50 L300 50 L300 200 L450 200 L450 100 L600 100" />
            <circle cx="150" cy="150" r="3" fill="#FCA311" />
            <circle cx="300" cy="50" r="3" fill="#FCA311" />
            <circle cx="450" cy="200" r="3" fill="#FCA311" />
          </g>
        </svg>
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
              <Eye size={16} />
              Our Recent Work
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-[#14213D] dark:text-[#E5E5E5] mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Featured{" "}
            <span className="relative" style={{ color: "#FCA311" }}>
              Projects
              <div
                className="absolute -bottom-2 left-0 w-full h-1 rounded-full"
                style={{ background: "linear-gradient(to right, #FCA311, #FCA311, transparent)" }}
              />
            </span>
          </motion.h2>

          <motion.p
            className="text-lg max-w-3xl mx-auto leading-relaxed text-[#14213D]/80 dark:text-[#E5E5E5]/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Here are some of our recent works that showcase our expertise in creating exceptional digital experiences.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {data.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className={Style.card}>
                {/* Project Image Container */}
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <Image
                    src={project.img || "/placeholder.svg"}
                    alt={`${project.title} - Digital Agency Project`}
                    width={400}
                    height={280}
                    className="w-full h-[280px] object-cover transition-transform duration-500 group-hover:scale-110"
                    priority={index < 3}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14213D]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className="text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm"
                      style={{
                        backgroundColor: "rgba(252, 163, 17, 0.9)",
                        color: "#FFFFFF",
                      }}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Project Icon */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div
                      className={`w-10 h-10 bg-gradient-to-br ${project.color} rounded-lg flex items-center justify-center shadow-lg`}
                    >
                      <project.icon className="w-5 h-5 text-[#FFFFFF]" />
                    </div>
                  </div>

                  {/* Hover Actions */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-2">
                      <Link
                        href={project.link}
                        className="flex-1 bg-[#FFFFFF]/90 backdrop-blur-sm text-[#14213D] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#FFFFFF] transition-colors duration-300 flex items-center justify-center gap-2"
                      >
                        <Eye size={16} />
                        View Details
                      </Link>
                      <Link
                        href={project.link}
                        className="flex-1 bg-[#FCA311]/90 backdrop-blur-sm text-[#FFFFFF] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#FCA311] transition-colors duration-300 flex items-center justify-center gap-2"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="space-y-4">
                  {/* Project Title */}
                  <h2 className="text-xl font-bold text-[#14213D] dark:text-[#E5E5E5] group-hover:text-[#FCA311] transition-colors duration-300">
                    {project.title}
                  </h2>

                  {/* Project Type */}
                  <div className="inline-block">
                    <span className="bg-[#FCA311]/10 text-[#FCA311] py-1 px-3 rounded-full text-sm font-medium border border-[#FCA311]/20">
                      {project.type}
                    </span>
                  </div>

                  {/* Project Description */}
                  <p className="text-[#14213D]/70 dark:text-[#E5E5E5]/70 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Project Meta Info */}
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center gap-4 text-sm text-[#14213D]/60 dark:text-[#E5E5E5]/60">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{project.client}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{project.completedDate}</span>
                      </div>
                    </div>

                    {/* Technologies Used */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs px-2 py-1 rounded-md bg-[#F8F9FA] dark:bg-[#14213D] text-[#14213D]/70 dark:text-[#E5E5E5]/70 border border-[#E5E5E5]/20 dark:border-[#E5E5E5]/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* View Project Link */}
                    {/* <Link
                      href={project.link}
                      className="inline-flex items-center text-[#FCA311] font-semibold hover:text-[#FCA311]/80 transition-colors duration-300 group/link pt-2"
                    >
                      View Full Project
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                    </Link> */}
                  </div>
                </div>

                {/* Background Gradient */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 ${project.bgColor} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                />

                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FCA311]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Custom Styles for line-clamp */}
      <style jsx global>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}

const Style = {
  container: "relative w-full py-20 bg-[#FFFFFF] dark:bg-[#14213D] overflow-hidden",
  section: "relative z-10 w-11/12 max-w-7xl mx-auto",
  card: "relative h-full p-6 bg-[#FFFFFF] dark:bg-[#1a2332] rounded-2xl border border-[#E5E5E5]/20 dark:border-[#E5E5E5]/10 hover:border-[#FCA311]/30 transition-all duration-300 hover:shadow-xl group-hover:shadow-2xl overflow-hidden",
}

export default Projects
