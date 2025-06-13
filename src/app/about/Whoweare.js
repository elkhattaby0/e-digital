"use client"
import { motion } from "framer-motion"
import { Users, Target, Award, CheckCircle } from "lucide-react"

const info = [
  {
    title: "Who We Are",
    icon: Users,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    data: [
      "We are a digital agency based in Agadir, skilled in building websites, mobile applications, and effective digital designs.",
      "Our team is focused and talented, dedicated to providing high-quality digital services.",
      "We are passionate about helping businesses in Agadir and beyond achieve significant growth online.",
    ],
  },
  {
    title: "Our Mission",
    icon: Target,
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50 dark:bg-green-900/20",
    data: [
      "Our mission is to improve the online environment for businesses, making it more effective for growth.",
      "We create digital solutions that are user-friendly, fast-loading, and visually appealing for your target audience.",
    ],
  },
  {
    title: "What Makes Us Different",
    icon: Award,
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    data: [
      "We prioritize listening to our clients to fully understand their needs and goals.",
      "We work with dedication and strong passion, ensuring attention to detail in every project.",
      "We are committed to delivering projects on time and to the highest quality standards.",
      "We provide ongoing support even after your project is launched, ensuring your continued success"
    ],
  },
]

const WhoWeAre = () => {
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
      </div>

      <div className={Style.wrapper}>
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
              <Users size={16} />
              About Our Agency
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-[#14213D] dark:text-[#E5E5E5] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Get to{" "}
            <span className="relative" style={{ color: "#FCA311" }}>
              Know Us
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
            Learn more about our agency, our mission, and what makes us different from other digital agencies.
          </motion.p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {info.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + sectionIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative h-full p-8 bg-[#FFFFFF] dark:bg-[#1a2332] rounded-2xl border border-[#E5E5E5]/20 dark:border-[#E5E5E5]/10 hover:border-[#FCA311]/30 transition-all duration-300 hover:shadow-xl group-hover:shadow-2xl overflow-hidden">
                {/* Background Gradient */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 ${section.bgColor} rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                />

                {/* Section Icon */}
                <div className="relative mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${section.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg mb-4`}
                  >
                    <section.icon className="w-8 h-8 text-[#FFFFFF]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#14213D] dark:text-[#E5E5E5] group-hover:text-[#FCA311] transition-colors duration-300">
                    {section.title}
                  </h3>
                </div>

                {/* List Items */}
                <ul className="space-y-4">
                  {section.data.map((item, itemIndex) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + sectionIndex * 0.2 + itemIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-1 flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-[#FCA311]" />
                      </div>
                      <span className="text-[#14213D]/80 dark:text-[#E5E5E5]/80">{item}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FCA311]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-[#FCA311] to-[#FCA311]/50 rounded-full mx-auto mt-16"
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 96, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        />
      </div>
    </section>
  )
}

const Style = {
  container: "relative w-full py-20 bg-[#FFFFFF] dark:bg-[#14213D] overflow-hidden",
  wrapper: "relative z-10 w-11/12 max-w-7xl mx-auto",
}

export default WhoWeAre
