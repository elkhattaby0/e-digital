"use client"
import { motion } from "framer-motion"
import {
  MessageSquare,
  Search,
  CheckCircle,
  Code,
  TestTube,
  Rocket,
  HeadphonesIcon,
  ArrowRight,
  Clock,
  Users,
  Target,
} from "lucide-react"
import ButtonArrow from "../../component/ButtonArrow"

const data = [
  {
    step: 1,
    title: "Request a Quote",
    subtitle: "DEMANDE DE DEVIS",
    description: "You send a request with details about your project (needs, goals, budget, and timeline).",
    icon: MessageSquare,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    step: 2,
    title: "Project Study",
    subtitle: "ÉTUDE DU PROJET",
    description: "We analyze your needs and suggest the best technical and creative solutions tailored to your goals.",
    icon: Search,
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50 dark:bg-green-900/20",
  },
  {
    step: 3,
    title: "Validation & Planning",
    subtitle: "VALIDATION & PLANIFICATION",
    description:
      "We define the schedule, tools, and expected deliverables. Once approved, we move forward with development.",
    icon: CheckCircle,
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
  },
  {
    step: 4,
    title: "Development",
    subtitle: "DÉVELOPPEMENT",
    description: "We start building your website or app step by step, with regular updates and review stages.",
    icon: Code,
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
  },
  {
    step: 5,
    title: "Testing & Optimization",
    subtitle: "TESTS & OPTIMISATION",
    description:
      "We conduct full testing (functionality, SEO, speed, device compatibility) to ensure quality and performance.",
    icon: TestTube,
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50 dark:bg-red-900/20",
  },
  {
    step: 6,
    title: "Launch",
    subtitle: "MISE EN LIGNE",
    description:
      "After final approval, we publish your project: hosting setup, domain connection, and SSL installation.",
    icon: Rocket,
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
  },
  {
    step: 7,
    title: "Training & Support",
    subtitle: "FORMATION & SUPPORT",
    description: "We provide training if needed and remain available for support, updates, and maintenance.",
    icon: HeadphonesIcon,
    color: "from-teal-500 to-teal-600",
    bgColor: "bg-teal-50 dark:bg-teal-900/20",
  },
]

const Timeline = () => {
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

        {/* Process Flow Pattern */}
        <svg className="absolute top-20 right-1/4 w-20 h-20 opacity-10" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" fill="none" stroke="#FCA311" strokeWidth="2" strokeDasharray="5,5">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0 50 50"
              to="360 50 50"
              dur="20s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="50" cy="50" r="15" fill="#FCA311" opacity="0.3" />
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
              <Target size={16} />
              Our Process
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-[#14213D] dark:text-[#E5E5E5] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            How We{" "}
            <span className="relative" style={{ color: "#FCA311" }}>
              Work Together
              <div
                className="absolute -bottom-1 left-0 w-full h-1 rounded-full"
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
            From initial consultation to final launch, we follow a proven process that ensures your project&apos;s success
            every step of the way.
          </motion.p>
        </motion.div>

        {/* Timeline Steps */}
        <div className="relative">
          {/* Central Timeline Line - Desktop Only */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#FCA311] to-[#FCA311]/30 h-full rounded-full" />

          <div className="space-y-12 lg:space-y-24">
            {data.map((step, index) => (
              <motion.div
                key={step.step}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Step Content */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                  <motion.div
                    className="group relative p-8 bg-[#FFFFFF] dark:bg-[#1a2332] rounded-2xl border border-[#E5E5E5]/20 dark:border-[#E5E5E5]/10 hover:border-[#FCA311]/30 transition-all duration-300 hover:shadow-xl overflow-hidden"
                    whileHover={{ y: -5 }}
                  >
                    {/* Background Gradient */}
                    <div
                      className={`absolute top-0 right-0 w-32 h-32 ${step.bgColor} rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                    />

                    {/* Step Number Badge */}
                    <div className="relative mb-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                          <step.icon className="w-6 h-6 text-[#FFFFFF]" />
                        </div>
                        <div className="text-4xl font-black text-[#FCA311]">
                          {step.step.toString().padStart(2, "0")}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-[#14213D] dark:text-[#E5E5E5] group-hover:text-[#FCA311] transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="text-xs uppercase tracking-wider text-[#FCA311] font-medium">{step.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-[#14213D]/80 dark:text-[#E5E5E5]/80 leading-relaxed mb-6">{step.description}</p>

                    {/* Special CTA for first step */}
                    {step.step === 1 && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        viewport={{ once: true }}
                      >
                        <ButtonArrow link="/contact">Get a Quote</ButtonArrow>
                      </motion.div>
                    )}

                    {/* Duration Indicator */}
                    <div className="flex items-center gap-2 text-sm text-[#14213D]/60 dark:text-[#E5E5E5]/60 mt-4">
                      <Clock className="w-4 h-4" />
                      <span>
                        {step.step === 1 && "1-2 days"}
                        {step.step === 2 && "3-5 days"}
                        {step.step === 3 && "1-2 days"}
                        {step.step === 4 && "2-4 weeks"}
                        {step.step === 5 && "1 week"}
                        {step.step === 6 && "1-2 days"}
                        {step.step === 7 && "Ongoing"}
                      </span>
                    </div>

                    {/* Hover Effect Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FCA311]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                  </motion.div>
                </div>

                {/* Central Step Indicator - Desktop Only */}
                <div className="hidden lg:flex w-2/12 justify-center">
                  <motion.div
                    className="relative"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-16 h-16 bg-[#FCA311] rounded-full flex items-center justify-center shadow-lg border-4 border-[#FFFFFF] dark:border-[#14213D] relative z-10">
                      <step.icon className="w-8 h-8 text-[#FFFFFF]" />
                    </div>

                    {/* Connecting Arrow - Not for last step */}
                    {index < data.length - 1 && (
                      <motion.div
                        className="absolute top-16 left-1/2 transform -translate-x-1/2"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                        viewport={{ once: true }}
                      >
                        <ArrowRight className="w-6 h-6 text-[#FCA311] rotate-90" />
                      </motion.div>
                    )}
                  </motion.div>
                </div>

                {/* Empty space for alternating layout - Desktop Only */}
                <div className="hidden lg:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const Style = {
  container: "relative w-full flex items-center justify-center py-20 bg-[#FFFFFF] dark:bg-[#14213D] overflow-hidden",
  section: "relative z-10 w-11/12 max-w-7xl mx-auto",
}

export default Timeline
