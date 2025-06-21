"use client"
import { motion } from "framer-motion"
import React from "react"

import { useState } from "react"
import { ArrowRight, Mail, Bell, Gift, Zap, CheckCircle, Users, TrendingUp, Star } from "lucide-react"
import HeaderTwo from "@/component/HeaderTwo"

const Newsletter = () => {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const benefits = [
    { icon: Zap, text: "Latest web development trends and tips" },
    { icon: Gift, text: "Exclusive discounts on our services" },
    { icon: TrendingUp, text: "Industry insights and case studies" },
    { icon: Users, text: "Early access to new features and tools" },
  ]

  const stats = [
    { number: "5K+", label: "Subscribers" },
    { number: "Weekly", label: "Updates" },
    { number: "100%", label: "Free Content" },
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitted(true)
    setIsLoading(false)
    setEmail("")
  }

  return (
    <section className={Style.container}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FCA311]/5 via-[#FFFFFF]/98 to-[#14213D]/5 dark:from-[#FCA311]/10 dark:via-[#14213D]/98 dark:to-[#1a2332]" />

        {/* Digital Grid Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
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

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-[#FCA311]/30 rounded-full animate-pulse" />
        <div className="absolute bottom-32 right-32 w-3 h-3 bg-[#FCA311]/40 rounded-full animate-ping" />
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-[#FCA311]/35 rounded-full animate-pulse" />

        {/* Newsletter Icons */}
        <svg className="absolute top-20 right-1/3 w-16 h-16 opacity-10" viewBox="0 0 100 100">
          <rect x="20" y="30" width="60" height="40" rx="5" fill="none" stroke="#FCA311" strokeWidth="2" />
          <path d="M20 35 L50 55 L80 35" fill="none" stroke="#FCA311" strokeWidth="2" />
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

        {/* Email Symbols */}
        <div className="absolute bottom-20 right-1/4 text-6xl text-[#FCA311]/10 select-none">@</div>
        <div className="absolute top-1/4 left-1/3 text-4xl text-[#FCA311]/10 select-none">✉</div>
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
              <Bell size={16} />
              Stay Updated
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <HeaderTwo>
              Get Our{" "}
              <span className="relative" style={{ color: "#FCA311" }}>
                Latest News
                <div
                  className="absolute -bottom-1 left-0 w-full h-1 rounded-full"
                  style={{ background: "linear-gradient(to right, #FCA311, #FCA311, transparent)" }}
                />
              </span>{" "}
              & Tips
            </HeaderTwo>
          </motion.div>

          <motion.p
            className="text-lg leading-relaxed text-[#14213D]/80 dark:text-[#CCCCCC] mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Join our community of entrepreneurs and get exclusive insights, tips, and updates delivered straight to your
            inbox. No spam, just valuable content.
          </motion.p>

          {/* Benefits List */}
          <motion.div
            className="space-y-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.text}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#FCA311]/5 transition-colors duration-300 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-10 h-10 bg-[#FCA311]/10 rounded-full flex items-center justify-center group-hover:bg-[#FCA311]/20 transition-colors duration-300">
                  <benefit.icon className="w-5 h-5 text-[#FCA311]" />
                </div>
                <span className="text-[#14213D]/80 dark:text-[#CCCCCC] font-medium">{benefit.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Newsletter Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-[#14213D]/40 dark:text-[#CCCCCC]" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full pl-12 pr-4 py-4 text-[#14213D] dark:text-[#E5E5E5] bg-[#FFFFFF] dark:bg-[#1a2332] border-2 border-[#E5E5E5]/30 dark:border-[#E5E5E5]/20 rounded-xl outline-none focus:border-[#FCA311] transition-colors duration-300 text-lg"
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className={`${Style.button} ${isLoading ? "opacity-70 cursor-not-allowed" : ""}`}
                  whileHover={!isLoading ? { scale: 1.05 } : {}}
                  whileTap={!isLoading ? { scale: 0.95 } : {}}
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-[#FFFFFF] border-t-transparent rounded-full animate-spin mr-2" />
                      Subscribing...
                    </>
                  ) : (
                    <>
                      Subscribe Now
                      <ArrowRight
                        size={20}
                        className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                      />
                    </>
                  )}
                </motion.button>
              </form>
            ) : (
              <motion.div
                className="p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-[#FFFFFF]" />
                  </div>
                  <h3 className="text-lg font-semibold text-green-800 dark:text-green-200">Successfully Subscribed!</h3>
                </div>
                <p className="text-green-700 dark:text-green-300">
                  Thank you for joining our newsletter! Check your email for a welcome message.
                </p>
              </motion.div>
            )}

            {/* Trust Indicators */}
            <div className="mt-6 text-sm text-[#14213D]/60 dark:text-[#CCCCCC]">
              <p className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                No spam, unsubscribe at any time
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content - Stats & Visual */}
        <motion.div
          className={Style.right}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Newsletter Stats */}
          <div className="space-y-6">
            {/* Main Visual */}
            <div className="relative p-8 bg-gradient-to-br from-[#FCA311] to-[#14213D] rounded-2xl text-[#FFFFFF] overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `
                                    linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                                    linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
                                    `,
                    backgroundSize: "20px 20px",
                  }}
                />
              </div>

              <div className="relative text-center">
                <div className="w-16 h-16 bg-[#FFFFFF]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-[#FFFFFF]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Join Our Community</h3>
                <p className="text-[#FFFFFF]/80 mb-6">Get exclusive content and stay ahead of the curve</p>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="text-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-2xl font-bold">{stat.number}</div>
                      <div className="text-xs text-[#FFFFFF]/70">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-6 h-6 bg-[#FFFFFF]/20 rounded-full animate-pulse" />
              <div className="absolute bottom-4 left-4 w-4 h-4 bg-[#FFFFFF]/30 rounded-full animate-ping" />
            </div>

            {/* Social Proof */}
            <div className="p-6 bg-[#FFFFFF] dark:bg-[#1a2332] rounded-xl border border-[#E5E5E5]/20 dark:border-[#E5E5E5]/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#FCA311] fill-current" />
                  ))}
                </div>
                <span className="font-semibold text-[#14213D] dark:text-[#E5E5E5]">5.0</span>
              </div>
              <p className="text-sm text-[#14213D]/70 dark:text-[#CCCCCC] mb-3">
                &quot;The best newsletter for web development insights. Highly recommended!&quot;
              </p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#FCA311] rounded-full flex items-center justify-center text-[#FFFFFF] text-sm font-bold">
                  A
                </div>
                <div>
                  <div className="text-sm font-medium text-[#14213D] dark:text-[#E5E5E5]">Ahmed K.</div>
                  <div className="text-xs text-[#14213D]/60 dark:text-[#CCCCCC]">Subscriber since 2023</div>
                </div>
              </div>
            </div>

            {/* Recent Topics */}
            <div className="p-6 bg-[#FFFFFF] dark:bg-[#1a2332] rounded-xl border border-[#E5E5E5]/20 dark:border-[#E5E5E5]/10">
              <h4 className="font-semibold text-[#14213D] dark:text-[#E5E5E5] mb-4">Recent Topics</h4>
              <div className="space-y-3">
                {["Next.js 14 Features", "AI in Web Design", "Performance Tips"].map((topic, index) => (
                  <div key={topic} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#FCA311] rounded-full" />
                    <span className="text-sm text-[#14213D]/70 dark:text-[#CCCCCC]">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const Style = {
  container: "relative w-full flex items-center justify-center py-20 bg-[#FFFFFF] dark:bg-[#14213D] overflow-hidden",
  section: "relative z-10 w-11/12 max-w-7xl flex max-lg:flex-col items-start justify-center gap-16 max-lg:gap-12",
  left: "w-2/3 max-lg:w-full",
  right: "w-1/3 max-lg:w-full",
  button:
    "group w-full flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#FFFFFF] bg-[#FCA311] rounded-xl hover:bg-[#FCA311]/90 transition-all duration-300 hover:shadow-lg",
}

export default Newsletter
