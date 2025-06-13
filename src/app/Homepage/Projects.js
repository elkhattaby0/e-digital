"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { ArrowRight, ExternalLink, Eye, Globe, Smartphone, ShoppingCart, User, Wrench } from "lucide-react"

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
  },
  {
    id: 4,
    title: "Portfolio for Sarah Design",
    type: "Personal Portfolio",
    description: "We designed a clean and elegant website for a graphic designer to show her work and get clients.",
    img: img4,
    link: "/",
    icon: User,
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
    tags: ["Portfolio", "Design", "CMS"],
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
  },
]

const Projects = () => {
  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    rows: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  }

  return (
    <section className={Style.container}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F8F9FA] via-[#FFFFFF]/98 to-[#FFFFFF] dark:from-[#1a2332] dark:via-[#14213D]/98 dark:to-[#14213D]" />

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

        {/* Moroccan Pattern */}
        <svg className="absolute bottom-20 left-1/3 w-20 h-20 opacity-10" viewBox="0 0 100 100">
          <polygon
            points="50,10 60,40 90,40 70,60 80,90 50,70 20,90 30,60 10,40 40,40"
            fill="#FCA311"
            className="animate-spin"
            style={{ animationDuration: "25s" }}
          />
        </svg>

        {/* Digital Circuit Lines */}
        <svg className="absolute top-0 right-0 w-1/3 h-1/2 opacity-5 dark:opacity-10" viewBox="0 0 400 400" fill="none">
          <g stroke="#FCA311" strokeWidth="1">
            <path d="M400 100 L300 100 L300 200 L200 200 L200 300 L100 300 L100 400" />
            <circle cx="300" cy="100" r="3" fill="#FCA311" />
            <circle cx="200" cy="200" r="3" fill="#FCA311" />
            <circle cx="100" cy="300" r="3" fill="#FCA311" />
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
              <Eye size={16} />
              Our Work
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-[#14213D] dark:text-[#E5E5E5] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Featured{" "}
            <span className="relative" style={{ color: "#FCA311" }}>
              Projects
              <div
                className="absolute -bottom-1 left-0 w-full h-1 rounded-full"
                style={{ background: "linear-gradient(to right, #FCA311, #FCA311, transparent)" }}
              />
            </span>
          </motion.h2>

          <motion.p
            className="text-lg max-w-2xl mx-auto leading-relaxed text-[#14213D]/80 dark:text-[#E5E5E5]/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Our portfolio reflects successful collaborations with clients across industries, showcasing how we’ve enhanced their digital platforms to drive real business results.
          </motion.p>
        </motion.div>

        {/* Projects Slider */}
        <motion.div
          className="w-full mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Slider {...settings} className="projects-slider">
            {data.map((project) => (
              <div key={project.id} className="px-3">
                <div className="group relative h-[480px] bg-[#FFFFFF] dark:bg-[#1a2332] rounded-2xl border border-[#E5E5E5]/20 dark:border-[#E5E5E5]/10 hover:border-[#FCA311]/30 transition-all duration-300 hover:shadow-xl group-hover:shadow-2xl overflow-hidden">
                  {/* Project Image */}
                  <div className="relative overflow-hidden rounded-t-2xl">
                    <Image
                      src={project.img || "/placeholder.svg"}
                      alt={`${project.title} - Digital Agency Project`}
                      width={400}
                      height={240}
                      className="w-full h-[240px] object-cover transition-transform duration-500 group-hover:scale-110"
                      priority={project.id <= 3}
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#14213D]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Project Type Badge */}
                    <div className="absolute top-4 left-4">
                      <span
                        className="text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm"
                        style={{
                          backgroundColor: "rgba(252, 163, 17, 0.9)",
                          color: "#FFFFFF",
                        }}
                      >
                        {project.type}
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
                          View
                        </Link>
                        <Link
                          href={project.link}
                          className="flex-1 bg-[#FCA311]/90 backdrop-blur-sm text-[#FFFFFF] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#FCA311] transition-colors duration-300 flex items-center justify-center gap-2"
                        >
                          <ExternalLink size={16} />
                          Live
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-[#14213D] dark:text-[#E5E5E5] mb-2 group-hover:text-[#FCA311] transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-[#14213D]/70 dark:text-[#E5E5E5]/70 mb-4 leading-relaxed line-clamp-3 flex-1">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="text-xs px-3 py-1 rounded-full bg-[#F8F9FA] dark:bg-[#14213D] text-[#14213D]/70 dark:text-[#E5E5E5]/70 border border-[#E5E5E5]/20 dark:border-[#E5E5E5]/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Learn More Link */}
                    {/* <Link
                      href="/projects"
                      className="inline-flex items-center text-[#FCA311] font-semibold hover:text-[#FCA311]/80 transition-colors duration-300 group/link mt-auto"
                    >
                      View Project
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                    </Link> */}
                  </div>

                  {/* Background Gradient */}
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 ${project.bgColor} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          className="w-full text-center bg-gradient-to-r from-[#FCA311]/10 to-[#14213D]/10 rounded-2xl p-8 md:p-12 border border-[#FCA311]/20 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `
                              linear-gradient(rgba(252, 163, 17, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(252, 163, 17, 0.1) 1px, transparent 1px)
                              `,
                backgroundSize: "20px 20px",
              }}
            />
          </div>

          <div className="relative">
            <div className="mb-6">
              <Eye className="w-12 h-12 text-[#FCA311] mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-[#14213D] dark:text-[#E5E5E5] mb-4">
                Want to See More?
              </h3>
              <p className="text-lg text-[#14213D]/70 dark:text-[#E5E5E5]/70 max-w-2xl mx-auto mb-8">
                Explore our complete portfolio and discover how we can bring your vision to life with our expertise and
                passion for digital excellence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/projects"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-[#FFFFFF] bg-[#FCA311] rounded-full hover:bg-[#FCA311]/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                View All Projects
                <Eye className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-[#14213D] dark:text-[#E5E5E5] bg-transparent border-2 border-[#14213D]/20 dark:border-[#E5E5E5]/20 rounded-full hover:border-[#FCA311] hover:text-[#FCA311] transition-all duration-300"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Custom Slider Styles */}
      <style jsx global>{`
        .projects-slider .slick-slide {
          padding: 0 8px;
        }

        .projects-slider .slick-center .group {
          transform: scale(1.05);
          z-index: 10;
        }

        .projects-slider .slick-slide:not(.slick-center) .group {
          transform: scale(0.95);
          opacity: 0.7;
        }

        .projects-slider .slick-slide {
          transition: all 0.3s ease;
        }

        .projects-slider .slick-track {
          display: flex;
          align-items: center;
        }

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
  section: "relative z-10 w-11/12 max-w-7xl mx-auto flex flex-col items-center justify-center",
}

export default Projects
