"use client"

import { motion } from "framer-motion"
import { ArrowRight, Code, Database, Globe, Layers, Zap } from "lucide-react"
import { identify } from "../layout"
import Paragraph from "@/component/Paragraph"
import HeaderOne from "@/component/HeaderOne"
import HighlightColor from "@/component/HighlightColor"
import Space from "@/component/Space"

const Hero = () => {
  return (
    <section className={Style.container}>
      {/* Digital Background Illustrations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                            linear-gradient(rgba(20, 33, 61, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(20, 33, 61, 0.1) 1px, transparent 1px)
                            `,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        {/* Digital Circuit Lines */}
        <svg
          className="absolute top-0 right-0 w-1/2 h-full opacity-10 dark:opacity-20"
          viewBox="0 0 600 800"
          fill="none"
        >
          <g stroke="#14213D" strokeWidth="2" className="dark:stroke-[#FCA311]">
            <path d="M600 200 L500 200 L500 300 L400 300 L400 400 L300 400 L300 500 L200 500" />
            <path d="M600 400 L550 400 L550 500 L450 500 L450 600" />
            <path d="M600 600 L500 600 L500 700 L400 700" />
            <circle cx="500" cy="200" r="5" fill="#14213D" className="dark:fill-[#FCA311]" />
            <circle cx="400" cy="300" r="5" fill="#14213D" className="dark:fill-[#FCA311]" />
            <circle cx="300" cy="400" r="5" fill="#14213D" className="dark:fill-[#FCA311]" />
            <circle cx="200" cy="500" r="5" fill="#14213D" className="dark:fill-[#FCA311]" />
            <circle cx="550" cy="400" r="5" fill="#14213D" className="dark:fill-[#FCA311]" />
            <circle cx="450" cy="500" r="5" fill="#14213D" className="dark:fill-[#FCA311]" />
            <circle cx="450" cy="600" r="5" fill="#14213D" className="dark:fill-[#FCA311]" />
            <circle cx="500" cy="600" r="5" fill="#14213D" className="dark:fill-[#FCA311]" />
            <circle cx="400" cy="700" r="5" fill="#14213D" className="dark:fill-[#FCA311]" />
          </g>
        </svg>

        {/* Digital Icons */}
        <div className="absolute top-20 right-20 w-16 h-16 opacity-20 dark:opacity-30">
          <Code className="w-full h-full text-[#14213D] dark:text-[#FCA311]" />
        </div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 opacity-10 dark:opacity-20">
          <Database className="w-full h-full text-[#14213D] dark:text-[#FCA311]" />
        </div>
        <div className="absolute bottom-1/4 right-1/3 w-20 h-20 opacity-15 dark:opacity-25">
          <Globe className="w-full h-full text-[#14213D] dark:text-[#FCA311]" />
        </div>
        <div className="absolute bottom-32 right-20 w-14 h-14 opacity-20 dark:opacity-30">
          <Layers className="w-full h-full text-[#14213D] dark:text-[#FCA311]" />
        </div>

        {/* Binary Code Background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 overflow-hidden select-none">
          <div className="binary-rain text-[8px] text-[#14213D] dark:text-[#FCA311] opacity-20">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="binary-column"
                style={{
                  left: `${i * 5}%`,
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: `${10 + Math.random() * 20}s`,
                }}
              >
                {Array.from({ length: 40 }).map((_, j) => (
                  <span key={j}>{Math.round(Math.random())}</span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Digital Pulse */}
        <div className="absolute bottom-20 left-20 w-32 h-32 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              d="M10 50 L30 50 L40 30 L50 70 L60 40 L70 50 L90 50"
              fill="none"
              stroke="#14213D"
              strokeWidth="3"
              className="dark:stroke-[#FCA311] digital-pulse"
            />
          </svg>
        </div>
      </div>

      <div className={Style.section}>
        <div className={Style.content}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="inline-block"
          >
            <p
              className="text-sm font-medium px-4 py-2 rounded-full flex items-center gap-2 border"
              style={{
                backgroundColor: "rgba(252, 163, 17, 0.2)",
                color: "#FCA311",
                borderColor: "rgba(252, 163, 17, 0.3)",
                backdropFilter: "blur(4px)",
              }}
            >
              <Zap size="1em" className="text-[#FCA311]" />
              Based In Agadir, Morocco
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <HeaderOne>
              <HighlightColor>Build </HighlightColor>
              Trust and
              <HighlightColor> Growth </HighlightColor>
              with 
              <HighlightColor> {identify}</HighlightColor>
            </HeaderOne>
          </motion.div>

          <Space />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
          >
            <Paragraph>
              {identify} is your digital partner in Agadir, helping you build a strong and lasting presence online by turning ideas into impactful experiences that connect with your audience and support real business growth.
            </Paragraph>
          </motion.div>

          <Space />
          <Space />

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="flex justify-center"
          >
            <a href="/contact" className={Style.a}>
              Start Your Journey
              <ArrowRight size={18} className="ml-2" />
            </a>
          </motion.div>

          {/* Digital Stats */}
          <motion.div
            className="grid grid-cols-3 gap-4 mt-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.8, ease: "easeOut" }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-[#FCA311]">100+</div>
              <div className="text-xs uppercase tracking-wider text-[#14213D] dark:text-[#E5E5E5] opacity-70">
                Projects
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#FCA311]">98%</div>
              <div className="text-xs uppercase tracking-wider text-[#14213D] dark:text-[#E5E5E5] opacity-70">
                Client Satisfaction
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#FCA311]">24/7</div>
              <div className="text-xs uppercase tracking-wider text-[#14213D] dark:text-[#E5E5E5] opacity-70">
                Support
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
                .binary-rain {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                }
                
                .binary-column {
                    position: absolute;
                    top: -100%;
                    display: flex;
                    flex-direction: column;
                    animation: rain linear infinite;
                }
                
                @keyframes rain {
                    0% {
                        transform: translateY(-100%);
                    }
                    100% {
                        transform: translateY(100%);
                    }
                }
                
                .digital-pulse {
                    stroke-dasharray: 400;
                    stroke-dashoffset: 400;
                    animation: pulse 3s linear infinite;
                }
                
                @keyframes pulse {
                    0% {
                        stroke-dashoffset: 400;
                    }
                    50% {
                        stroke-dashoffset: 0;
                    }
                    100% {
                        stroke-dashoffset: -400;
                    }
                }
            `}</style>
    </section>
  )
}

const Style = {
  container:
    "w-full flex items-center justify-center relative min-h- [calc(100lvh-80px)] bg-[#FFFFFF] dark:bg-[#14213D] overflow-hidden",
  section: "w-11/12 flex items-center justify-center h- [calc(100lvh-80px)] max-md:h-full py-16",
  content: "w-full text-center px-4",
  a: "inline-flex items-center justify-center text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-lg font-semibold leading-normal tracking-wide px-8 py-3 rounded-full bg-[#14213D] text-[#FFFFFF] dark:bg-[#FCA311] dark:text-[#14213D] hover:shadow-lg transition-all duration-300 hover:scale-105",
}

export default Hero
