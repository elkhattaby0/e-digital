"use client"
import { motion } from "framer-motion"
import AnimatedNumbers from "react-animated-numbers"
import { CheckCircle, Award, Clock, Heart, Shield, Users, Zap, Star, Globe, TrendingUp } from "lucide-react"

import HeaderTwo from "@/component/HeaderTwo"
import Space from "@/component/Space"

import img1 from "../../../public/assets/why_1.jpg"
import img2 from "../../../public/assets/why_2.avif"
import img3 from "../../../public/assets/why_3.avif"
import img4 from "../../../public/assets/why_4.jpg"

const data = [
  { text: "We listen to your ideas and understand your vision", icon: Users },
  { text: "We deliver projects on time, every time", icon: Clock },
  { text: "We use the latest tools and technologies", icon: Zap },
  { text: "We provide ongoing support after project completion", icon: Shield },
  { text: "We focus on results that drive business growth", icon: TrendingUp },
  { text: "We maintain transparent communication throughout", icon: Heart },
]

const facts = [
  { name: "projects delivered", nbr: 100, lf: "+", rt: "", img: img1, icon: Award, color: "from-blue-500 to-blue-600" },
  { name: "happy clients", nbr: 50, lf: "+", rt: "", img: img2, icon: Users, color: "from-green-500 to-green-600" },
  {
    name: "satisfaction rate",
    nbr: 95,
    lf: "",
    rt: "%",
    img: img3,
    icon: Star,
    color: "from-purple-500 to-purple-600",
  },
  {
    name: "years of experience",
    nbr: 4,
    lf: "",
    rt: "+",
    img: img4,
    icon: Globe,
    color: "from-orange-500 to-orange-600",
  },
]

const Whyus = () => {
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
        <svg className="absolute top-20 right-1/4 w-20 h-20 opacity-10" viewBox="0 0 100 100">
          <polygon
            points="50,10 60,40 90,40 70,60 80,90 50,70 20,90 30,60 10,40 40,40"
            fill="#FCA311"
            className="animate-spin"
            style={{ animationDuration: "30s" }}
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
            <circle cx="450" cy="100" r="3" fill="#FCA311" />
          </g>
        </svg>
      </div>

      <div className={Style.section}>
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
              className="text-sm font-medium px-6 py-3 rounded-full border flex items-center gap-2 w-fit max-md:mx-auto"
              style={{
                backgroundColor: "rgba(252, 163, 17, 0.1)",
                color: "#FCA311",
                borderColor: "rgba(252, 163, 17, 0.2)",
              }}
            >
              <Star size={16} />
              Why Choose Us
            </span>
          </motion.div>

          <HeaderTwo>
            Why Work{" "}
            <span className="relative" style={{ color: "#FCA311" }}>
              With Us?
              <div
                className="absolute -bottom-1 left-0 w-full h-1 rounded-full"
                style={{ background: "linear-gradient(to right, #FCA311, #FCA311, transparent)" }}
              />
            </span>
          </HeaderTwo>

          <Space />

          {/* Enhanced Description */}
          <motion.p
            className="text-lg leading-relaxed text-[#14213D]/80 dark:text-[#E5E5E5]/80 mb-8 max-md:text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            We combine deep Full Stack expertise with WordPress and SEO to build digital foundations that grow with your business and meet real market demands.
          </motion.p>

          <ul className="max-md:flex flex-col items-center space-y-4">
            {data.map((item, index) => (
              <motion.li
                key={item.text}
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-[#FCA311]/5 transition-colors duration-300 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-10 h-10 bg-[#FCA311]/10 rounded-full flex items-center justify-center group-hover:bg-[#FCA311]/20 transition-colors duration-300">
                  <item.icon className="w-5 h-5 text-[#FCA311]" />
                </div>
                <span className="text-[#14213D]/80 dark:text-[#E5E5E5]/80 font-medium">{item.text}</span>
              </motion.li>
            ))}
          </ul>

          {/* Additional Trust Indicators */}
          <motion.div
            className="mt-8 p-6 bg-gradient-to-r from-[#FCA311]/10 to-[#14213D]/10 rounded-xl border border-[#FCA311]/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-[#FCA311] rounded-full flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-[#FFFFFF]" />
              </div>
              <h4 className="font-semibold text-[#14213D] dark:text-[#E5E5E5]">Our Guarantee</h4>
            </div>
            <p className="text-sm text-[#14213D]/70 dark:text-[#E5E5E5]/70">
              100% satisfaction guarantee with free revisions and ongoing support to ensure your success.
            </p>
          </motion.div>
        </motion.div>

        <div className={Style.right}>
          {facts.map((fact, index) => (
            <motion.div
              key={fact.name}
              className="group relative flex flex-col items-center justify-center border h-[250px] max-md:h-[160px] p-4 rounded-xl overflow-hidden bg-cover bg-center text-[#E5E5E5] border-[#E5E5E5]/20 dark:border-[#666666]/30 hover:border-[#FCA311]/30 transition-all duration-300 hover:shadow-xl"
              style={{ backgroundImage: `url(${fact.img.src})` }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Enhanced Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#14213D]/80 via-[#14213D]/60 to-[#14213D]/40 group-hover:from-[#14213D]/70 group-hover:via-[#14213D]/50 group-hover:to-[#14213D]/30 transition-all duration-300"></div>

              {/* Icon Badge */}
              <div className="absolute top-4 right-4 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                <div
                  className={`w-8 h-8 bg-gradient-to-br ${fact.color} rounded-lg flex items-center justify-center shadow-lg`}
                >
                  <fact.icon className="w-4 h-4 text-[#FFFFFF]" />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 left-4 w-2 h-2 bg-[#FCA311]/60 rounded-full animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-[#FCA311]/40 rounded-full animate-ping"></div>

              <div className="relative z-10 flex flex-col items-center justify-center">
                <div className="flex w-full items-center justify-center text-[#E5E5E5] mb-2">
                  <span className="mr-1 font-normal text-2xl max-md:text-xl">{fact.lf}</span>
                  <h3 className="font-bold text-5xl max-md:text-4xl">
                    <AnimatedNumbers
                      animateToNumber={fact.nbr}
                      configs={(_, index) => ({
                        mass: 1,
                        friction: 100,
                        tension: 140 * (index + 1),
                      })}
                    />
                  </h3>
                  <span className="ml-1 font-normal text-2xl max-md:text-xl">{fact.rt}</span>
                </div>
                <p className="capitalize text-sm text-center font-medium tracking-wide">{fact.name}</p>

                {/* Progress Bar */}
                <div className="w-16 h-0.5 bg-[#FCA311]/50 mt-2 group-hover:w-20 transition-all duration-300 rounded-full"></div>
              </div>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FCA311]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Style = {
  container: "relative w-full flex items-center justify-center py-20 bg-[#FFFFFF] dark:bg-[#14213D] overflow-hidden",
  section:
    "relative z-10 w-11/12 max-w-7xl flex max-md:flex-col items-start justify-center h-auto gap-16 max-md:gap-12",
  left: "w-1/2 max-md:w-full max-md:flex flex-col items-start max-md:items-center",
  right: "w-1/2 max-md:w-full grid grid-cols-2 justify-center gap-6 max-md:gap-3",
}

export default Whyus
