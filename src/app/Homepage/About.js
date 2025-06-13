"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Clock, Heart, Shield, Users, Zap } from "lucide-react"
import AboutImage from "../../../public/assets/about_section_homepage.jpg"

const About = () => {
  const stats = [
    { number: "150+", label: "Projects", icon: Award },
    { number: "98%", label: "Satisfaction", icon: Heart },
    { number: "5+", label: "Years", icon: Clock },
    { number: "24/7", label: "Support", icon: Shield },
  ]

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
        <div className="absolute top-20 right-20 w-3 h-3 bg-[#FCA311]/20 rounded-full animate-pulse" />
        <div className="absolute bottom-32 left-20 w-2 h-2 bg-[#FCA311]/30 rounded-full animate-ping" />
        <div className="absolute top-1/2 left-10 w-1 h-1 bg-[#FCA311]/25 rounded-full animate-pulse" />

        {/* Moroccan-inspired decorative elements */}
        <svg className="absolute top-10 left-1/4 w-16 h-16 opacity-10" viewBox="0 0 100 100">
          <polygon
            points="50,10 60,40 90,40 70,60 80,90 50,70 20,90 30,60 10,40 40,40"
            fill="#FCA311"
            className="animate-spin"
            style={{ animationDuration: "20s" }}
          />
        </svg>
      </div>

      <div className={Style.section}>
        {/* Left Content */}
        <motion.div
          className={Style.left}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
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
              className="text-sm font-medium px-6 py-3 rounded-full border flex items-center gap-2 w-fit"
              style={{
                backgroundColor: "rgba(252, 163, 17, 0.1)",
                color: "#FCA311",
                borderColor: "rgba(252, 163, 17, 0.2)",
              }}
            >
              <Users size={16} />
              Who We Are
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-[#14213D] dark:text-[#E5E5E5] mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Your Trusted{" "}
            <span className="relative" style={{ color: "#FCA311" }}>
              Digital Partner
              <div
                className="absolute -bottom-1 left-0 w-full h-1 rounded-full"
                style={{ background: "linear-gradient(to right, #FCA311, #FCA311, transparent)" }}
              />
            </span>
          </motion.h2>

          {/* Description */}
          <motion.div
            className="space-y-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-base md:text-lg leading-relaxed text-[#14213D]/80 dark:text-[#E5E5E5]/80">
              We are a skilled team of developers and designers focused on building web and mobile solutions that combine practical functionality with clear, effective design to help your business grow its digital presence confidently.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-[#14213D]/70 dark:text-[#E5E5E5]/70">
              Based in Agadir, Morocco, we bring together solid development expertise and modern technologies to deliver meaningful digital experiences that align with your goals.
            </p>
          </motion.div>

          {/* Stats Mini Grid */}
          <motion.div
            className="grid grid-cols-4 gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="mb-2 flex justify-center">
                  <div className="w-10 h-10 bg-[#FCA311]/10 rounded-full flex items-center justify-center group-hover:bg-[#FCA311]/20 transition-colors duration-300">
                    <stat.icon className="w-5 h-5 text-[#FCA311]" />
                  </div>
                </div>
                <div className="text-xl font-bold text-[#FCA311] mb-1">{stat.number}</div>
                <div className="text-xs uppercase tracking-wider text-[#14213D]/60 dark:text-[#E5E5E5]/60">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <Link
              href="/about"
              className="inline-flex items-center px-8 py-3 text-lg font-semibold text-[#14213D] bg-transparent border-2 border-[#14213D] dark:text-[#E5E5E5] dark:border-[#E5E5E5] rounded-full hover:bg-[#14213D] hover:text-[#FFFFFF] dark:hover:bg-[#E5E5E5] dark:hover:text-[#14213D] transition-all duration-300 group"
            >
              Learn More About Us
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Content - Enhanced Image Section */}
        <motion.div
          className={Style.right}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Image Container with Enhanced Styling */}
          <div className="relative group">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#FCA311] to-[#14213D] p-1">
              <div className="relative overflow-hidden rounded-xl bg-[#FFFFFF] dark:bg-[#14213D]">
                <Image
                  src={AboutImage}
                  alt="Digital Agency Team - Trusted Web Agency"
                  className="w-full h-[480px] max-md:h-[280px] object-cover transition-transform duration-500 group-hover:scale-105"
                  width={600}
                  height={480}
                  priority
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#14213D]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#FCA311] rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <Zap className="w-4 h-4 text-[#FFFFFF]" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#14213D] dark:bg-[#E5E5E5] rounded-full flex items-center justify-center shadow-lg">
              <Heart className="w-3 h-3 text-[#FFFFFF] dark:text-[#14213D]" />
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute -z-10 top-8 right-8 w-32 h-32 bg-[#FCA311]/10 rounded-full blur-3xl" />
            <div className="absolute -z-10 bottom-8 left-8 w-24 h-24 bg-[#14213D]/10 dark:bg-[#E5E5E5]/10 rounded-full blur-2xl" />
          </div>

          {/* Additional Info Card */}
          <motion.div
            className="absolute bottom-4 left-4 right-4 bg-[#FFFFFF]/95 dark:bg-[#14213D]/95 backdrop-blur-md rounded-xl p-4 border border-[#E5E5E5]/20 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#FCA311] rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-[#FFFFFF]" />
              </div>
              <div>
                <h4 className="font-semibold text-[#14213D] dark:text-[#E5E5E5]">Expert Team</h4>
                <p className="text-sm text-[#14213D]/70 dark:text-[#E5E5E5]/70">Based in Agadir, Morocco</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

const Style = {
  container: "relative w-full flex items-center justify-center py-20 bg-[#FFFFFF] dark:bg-[#14213D] overflow-hidden",
  section: "relative z-10 w-11/12 max-w-7xl flex max-md:flex-col items-center justify-center gap-16 max-md:gap-12",
  left: "w-1/2 max-md:w-full space-y-6",
  right: "w-1/2 max-md:w-full relative",
}

export default About
