"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowDown, Sparkles } from "lucide-react"
import Space from "./Space"


const HeroSection = ({ img, text, para = "", showScrollIndicator = true }) => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <section className={Style.container}>
      {/* Background Image Container */}
      <div className={Style.section}>
        {/* Background Image */}
        <div className="absolute inset-0 rounded-xl overflow-hidden">
          <Image
            src={img || "/placeholder.svg"}
            alt="Hero Background"
            fill
            className="object-cover"
            priority
            quality={90}
          />

          {/* Enhanced Overlay with Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#14213D]/70 via-[#14213D]/60 to-[#14213D]/80 rounded-xl" />

          {/* Additional Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(252, 163, 17, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(252, 163, 17, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
              }}
            />
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden rounded-xl">
          {/* Animated Particles */}
          <motion.div
            className="absolute top-20 left-20 w-3 h-3 bg-[#FCA311]/40 rounded-full"
            animate={{
              y: [0, -20, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-32 right-32 w-2 h-2 bg-[#FCA311]/30 rounded-full"
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute bottom-40 left-1/4 w-4 h-4 bg-[#FCA311]/20 rounded-full"
            animate={{
              y: [0, -25, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 2,
            }}
          />

          {/* Geometric Shapes */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-16 h-16 border border-[#FCA311]/20 rounded-full"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />

          <motion.div
            className="absolute bottom-1/3 right-20 w-12 h-12 border border-[#E5E5E5]/20 rounded-lg"
            animate={{
              rotate: [0, -360],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        </div>

        {/* Main Content */}
        <div className={Style.content}>
          {/* Decorative Badge */}
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span
              className="text-sm font-medium px-6 py-3 rounded-full border flex items-center gap-2 w-fit backdrop-blur-sm"
              style={{
                backgroundColor: "rgba(252, 163, 17, 0.2)",
                color: "#FCA311",
                borderColor: "rgba(252, 163, 17, 0.3)",
              }}
            >
              <Sparkles size={16} />
              Welcome
            </span>
          </motion.div>

          {/* Main Heading with Enhanced Animation */}
          <motion.h1
            className={Style.h1}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            {text.split(" ").map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.6 + index * 0.1,
                  ease: "easeOut",
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <Space />

          {/* Paragraph with Staggered Animation */}
          {para && (
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            >
              <p className={Style.para}>{para}</p>
            </motion.div>
          )}

          {/* Decorative Line */}
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-[#FCA311] to-[#FCA311]/50 rounded-full mx-auto mt-8"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 96, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          />
        </div>

        {/* Scroll Indicator */}
        {showScrollIndicator && (
          <motion.button
            onClick={scrollToContent}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[#E5E5E5]/70 hover:text-[#FCA311] transition-colors duration-300 cursor-pointer group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            whileHover={{ scale: 1.1 }}
            aria-label="Scroll to content"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm font-medium">Scroll Down</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <ArrowDown size={20} className="group-hover:text-[#FCA311] transition-colors duration-300" />
              </motion.div>
            </div>
          </motion.button>
        )}

        {/* Corner Decorations */}
        <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#FCA311]/30 rounded-tl-lg" />
        <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-[#FCA311]/30 rounded-tr-lg" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-[#FCA311]/30 rounded-bl-lg" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#FCA311]/30 rounded-br-lg" />
      </div>
    </section>
  )
}

const Style = {
  container: "w-full flex items-center justify-center bg-[#FFFFFF] dark:bg-[#14213D] py-6",
  section:
    "relative w-11/12 max-w-7xl h-[60vh] min-h-[500px] max-md:h-[50vh] max-md:min-h-[400px] rounded-2xl overflow-hidden shadow-2xl",
  content: "relative z-10 flex flex-col items-center justify-center h-full px-6 text-center",
  h1: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black leading-tight tracking-tight text-[#E5E5E5] text-center mb-4 drop-shadow-lg",
  para: "text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl font-light leading-relaxed text-[#E5E5E5]/90 text-center max-w-4xl drop-shadow-md",
}

export default HeroSection
