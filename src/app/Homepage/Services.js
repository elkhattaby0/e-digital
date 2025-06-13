"use client"

import { motion } from "framer-motion"
import { Globe2, Palette, Search, Smartphone, Wrench, ArrowRight, CheckCircle, Zap, Cloud } from "lucide-react"

const Services = () => {
  const data = [
    {
      id: 1,
      icon: Globe2,
      title: "Website Development",
      text: "We create responsive websites that embody your brand, engage visitors effectively, and are optimized to rank well on search engines.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Secure"],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      delay: 0.1,
    },
    {
      id: 2,
      icon: Smartphone,
      title: "Mobile App Development",
      text: "Developing mobile applications built to align with your business objectives, ensuring strong performance on both Android and iOS platforms.",
      features: ["Native & Cross-Platform", "Clean UI/UX", "API Integration", "Scalable Architecture"],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      delay: 0.2,
    },
    {
      id: 3,
      icon: Palette,
      title: "Graphic & Web Design",
      text: "Delivering consistent and impactful design elements that strengthen brand recognition and provide a user-friendly experience.",
      features: ["UI/UX Design", "Logo & Branding", "Custom Layouts", "Interactive Prototypes"],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      delay: 0.3,
    },
    {
      id: 4,
      icon: Search,
      title: "SEO & Optimization",
      text: "Enhancing your online visibility and website performance through strategic SEO practices and technical improvements.",
      features: ["SEO Audit & Fixes", "Keyword Strategy", "Technical Optimization", "Speed Enhancement"],
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      delay: 0.4,
    },
    {
      id: 5,
      icon: Wrench,
      title: "Maintenance & Support",
      text: "Offering dependable maintenance and timely updates to keep your digital assets secure, fast, and functioning without interruptions.",
      features: ["Regular Updates", "Security Monitoring", "Backup & Restore", "24/7 Technical Support"],
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50 dark:bg-red-900/20",
      delay: 0.5,
    },
    {
      id: 6,
      icon: Cloud,
      title: "Hosting & Domain Services",
      text: "Providing secure hosting solutions and comprehensive domain management to ensure your website remains accessible and protected.",
      features: ["Domain Registration", "SSL Certificates", "Secure Hosting", "Email & DNS Configuration"],
      color: "from-gray-500 to-gray-600",
      bgColor: "bg-gray-50 dark:bg-gray-900/20",
      delay: 0.6,
    },
  ]

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
        <svg className="absolute top-20 right-1/4 w-16 h-16 opacity-10" viewBox="0 0 100 100">
          <polygon
            points="50,10 60,40 90,40 70,60 80,90 50,70 20,90 30,60 10,40 40,40"
            fill="#FCA311"
            className="animate-spin"
            style={{ animationDuration: "20s" }}
          />
        </svg>

        {/* Digital Circuit Lines */}
        <svg
          className="absolute bottom-0 left-0 w-1/3 h-1/2 opacity-5 dark:opacity-10"
          viewBox="0 0 400 400"
          fill="none"
        >
          <g stroke="#FCA311" strokeWidth="1">
            <path d="M0 200 L100 200 L100 100 L200 100 L200 300 L300 300 L300 200 L400 200" />
            <circle cx="100" cy="200" r="3" fill="#FCA311" />
            <circle cx="200" cy="100" r="3" fill="#FCA311" />
            <circle cx="300" cy="300" r="3" fill="#FCA311" />
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
              <Zap size={16} />
              What We Do
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-[#14213D] dark:text-[#E5E5E5] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Services That{" "}
            <span className="relative" style={{ color: "#FCA311" }}>
              Deliver Measurable Growth
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
            From initial concept through launch and ongoing support, we offer complete digital solutions designed to enhance your brand’s presence, engage your audience, and support sustained business success.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
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
        <motion.a
          href="/services"
          className="inline-flex items-center px-8 py-3 text-lg font-semibold text-[#14213D] dark:text-[#E5E5E5] bg-transparent border-2 border-[#14213D]/20 dark:border-[#E5E5E5]/20 rounded-full hover:border-[#FCA311] hover:text-[#FCA311] transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          >
          View All Services
          <ArrowRight className="ml-2 w-5 h-5" />
        </motion.a>
      </div>
    </section>
  )
}

const Style = {
  container: "relative w-full py-20 bg-[#FFFFFF] dark:bg-[#14213D] overflow-hidden",
  section: "relative z-10 w-11/12 max-w-7xl mx-auto flex flex-col items-center justify-center",
}

export default Services
