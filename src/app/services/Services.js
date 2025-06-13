"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Globe2, Palette, Search, Smartphone, Wrench, ArrowRight, CheckCircle, Zap, Cloud } from "lucide-react"


const data = [
    {
      id: 1,
      icon: Globe2,
      title: "Website Development",
      text: "We build modern, responsive websites that reflect your brand, attract visitors, and rank well on search engines.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Secure"],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      delay: 0.1,
    },
    {
      id: 2,
      icon: Smartphone,
      title: "Mobile App Development",
      text: "Custom mobile apps tailored to your business goals, with seamless performance across Android and iOS.",
      features: ["Native & Cross-Platform", "Clean UI/UX", "API Integration", "Scalable Architecture"],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      delay: 0.2,
    },
    {
      id: 3,
      icon: Palette,
      title: "Graphic & Web Design",
      text: "Creative and consistent design that strengthens your brand identity and improves user experience.",
      features: ["UI/UX Design", "Logo & Branding", "Custom Layouts", "Interactive Prototypes"],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      delay: 0.3,
    },
    {
      id: 4,
      icon: Search,
      title: "SEO & Optimization",
      text: "We improve your online visibility and website speed to help you attract more organic traffic.",
      features: ["SEO Audit & Fixes", "Keyword Strategy", "Technical Optimization", "Speed Enhancement"],
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      delay: 0.4,
    },
    {
      id: 5,
      icon: Wrench,
      title: "Maintenance & Support",
      text: "Reliable support and updates to ensure your website or app remains secure, fast, and bug-free.",
      features: ["Regular Updates", "Security Monitoring", "Backup & Restore", "24/7 Technical Support"],
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50 dark:bg-red-900/20",
      delay: 0.5,
    },
    {
      id: 6,
      icon: Cloud,
      title: "Hosting & Domain Services",
      text: "Everything you need to keep your website online — from secure hosting to domain setup and management.",
      features: ["Domain Registration", "SSL Certificates", "Secure Hosting", "Email & DNS Configuration"],
      color: "from-gray-500 to-gray-600",
      bgColor: "bg-gray-50 dark:bg-gray-900/20",
      delay: 0.6,
    },
    {
    id: 7,
    icon: Zap,
    title: "IT Consulting",
    text: "Professional guidance to align your technology with business goals and scale your operations effectively.",
    features: ["Digital Strategy", "Tech Stack Planning", "System Audits", "Growth-Focused Solutions"],
    color: "from-yellow-500 to-yellow-600",
    bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
    delay: 0.7,
  },
  {
    id: 8,
    icon: CheckCircle,
    title: "System Management",
    text: "Custom systems to manage business operations like inventory, sales, users, and reporting in one dashboard.",
    features: ["Inventory & Sales", "User Roles", "Real-Time Dashboard", "Reports & Analytics"],
    color: "from-lime-500 to-lime-600",
    bgColor: "bg-lime-50 dark:bg-lime-900/20",
    delay: 0.8,
  },
  {
    id: 9,
    icon: ArrowRight,
    title: "Web Project Management",
    text: "End-to-end project coordination to keep your web development organized, on-time, and within budget.",
    features: ["Agile Planning", "Milestone Tracking", "Team Coordination", "Risk Management"],
    color: "from-cyan-500 to-cyan-600",
    bgColor: "bg-cyan-50 dark:bg-cyan-900/20",
    delay: 0.9,
  },

  ]

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("all")
  // const [isFilterOpen, setIsFilterOpen] = useState(false)

  // Filter services based on active category
  const filteredServices =
    activeCategory === "all" ? data : data.filter((service) => service.category === activeCategory)

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
      </div>

      <div className={Style.section}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                  {data.map((service) => (
                    <motion.div
                      key={service.id}
                      className="group relative"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: service.delay }}
                      viewport={{ once: true }}
                      whileHover={{ y: -10 }}
                    >
                      <div className="relative h-full p-8 bg-[#FFFFFF] dark:bg-[#1a2332] rounded-2xl border border-[#E5E5E5]/20 dark:border-[#E5E5E5]/10 hover:border-[#FCA311]/30 transition-all duration-300 hover:shadow-xl group-hover:shadow-2xl overflow-hidden">
                        {/* Background Gradient */}
                        <div
                          className={`absolute top-0 right-0 w-32 h-32 ${service.bgColor} rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                        />
        
                        {/* Icon */}
                        <div className="relative mb-6">
                          <div
                            className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                          >
                            <service.icon className="w-8 h-8 text-[#FFFFFF]" />
                          </div>
                        </div>
        
                        {/* Content */}
                        <div className="relative">
                          <h3 className="text-xl font-bold text-[#14213D] dark:text-[#E5E5E5] mb-4 group-hover:text-[#FCA311] transition-colors duration-300">
                            {service.title}
                          </h3>
        
                          <p className="text-[#14213D]/70 dark:text-[#E5E5E5]/70 mb-6 leading-relaxed">{service.text}</p>
        
                          {/* Features */}
                          <div className="space-y-2 mb-6">
                            {service.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-[#FCA311] flex-shrink-0" />
                                <span className="text-sm text-[#14213D]/60 dark:text-[#E5E5E5]/60">{feature}</span>
                              </div>
                            ))}
                          </div>
        
                          {/* Learn More Link */}
                          {/* <Link
                            href="/services"
                            className="inline-flex items-center text-[#FCA311] font-semibold hover:text-[#FCA311]/80 transition-colors duration-300 group/link"
                          >
                            Learn More
                            <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                          </Link> */}
                        </div>
        
                        {/* Hover Effect Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#FCA311]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                      </div>
                    </motion.div>
                  ))}
                </div>

        {/* No Results Message */}
        {filteredServices.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl text-[#14213D]/70 dark:text-[#E5E5E5]/70">No services found in this category.</p>
            <button
              onClick={() => setActiveCategory("all")}
              className="mt-4 px-6 py-3 bg-[#FCA311] text-[#FFFFFF] rounded-full hover:bg-[#FCA311]/90 transition-colors duration-300"
            >
              View All Services
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

const Style = {
  container: "relative w-full flex justify-center py-20 bg-[#FFFFFF] dark:bg-[#14213D] overflow-hidden",
  section: "relative z-10 w-11/12 max-w-7xl",
}

export default Services
