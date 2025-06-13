"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { Quote, Star, Heart, Users, Award, CheckCircle } from "lucide-react"
import HeaderTwo from "@/component/HeaderTwo"

import UPImg from "../../../public/assets/Unknown_person.jpg"
const data = [
  {
    id: 1,
    name: "Khadija J.",
    msg: "This team truly understood my vision and brought it to life with a website that is fast and elegant. Their care and professionalism made all the difference.",
    post: "Small Business Owner",
    company: "",
    star: 5,
    avatar: "/placeholder.svg?height=80&width=80",
    project: "E-commerce Website",
    location: "Casablanca, Morocco",
  },
  {
    id: 2,
    name: "Ahmed M.",
    msg: "Their support was quick and effective, helping my online shop grow by 300% in just six months. Their skill in e-commerce is clear and reliable.",
    post: "E-commerce Manager",
    company: "",
    star: 5,
    avatar: "/placeholder.svg?height=80&width=80",
    project: "Online Store Redesign",
    location: "Casablanca, Morocco",
  },
  {
    id: 3,
    name: "Amina B.",
    msg: "I’m very pleased with my new mobile app. It works perfectly and looks professional. The team’s creativity gave life to my startup idea with great care.",
    post: "Startup Founder",
    company: "",
    star: 5,
    avatar: "/placeholder.svg?height=80&width=80",
    project: "Mobile App Development",
    location: "Rabat, Morocco",
  },
  {
    id: 4,
    name: "Ismal I.",
    msg: "They are professional, dependable, and talented. They finished our corporate website ahead of time, and it has been performing strongly since. I highly recommend them.",
    post: "Marketing Director",
    company: "",
    star: 5,
    avatar: "/placeholder.svg?height=80&width=80",
    project: "Corporate Website",
    location: "Agadir, Morocco",
  },
]


const stats = [
  { number: "150+", label: "Happy Clients", icon: Users },
  { number: "98%", label: "Satisfaction Rate", icon: Heart },
  { number: "5.0", label: "Average Rating", icon: Star },
  { number: "100%", label: "Project Success", icon: Award },
]

const Testimonials = () => {
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

        {/* Testimonial Bubbles */}
        <svg className="absolute top-20 right-1/4 w-16 h-16 opacity-10" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#FCA311" strokeWidth="2" />
          <circle cx="50" cy="50" r="20" fill="#FCA311" opacity="0.3" />
        </svg>

        {/* Quote Symbols */}
        <div className="absolute bottom-20 left-1/4 text-6xl text-[#FCA311]/10 font-serif select-none">&quot;</div>
        <div className="absolute top-1/4 right-1/3 text-4xl text-[#FCA311]/10 font-serif select-none">&quot;</div>
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
              <Heart size={16} />
              Client Testimonials
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <HeaderTwo>
              What Our{" "}
              <span className="relative" style={{ color: "#FCA311" }}>
                Happy Clients
                <div
                  className="absolute -bottom-1 left-0 w-full h-1 rounded-full"
                  style={{ background: "linear-gradient(to right, #FCA311, #FCA311, transparent)" }}
                />
              </span>{" "}
              Say
            </HeaderTwo>
          </motion.div>

          <motion.p
            className="text-lg max-w-3xl mx-auto leading-relaxed text-[#14213D]/80 dark:text-[#E5E5E5]/80 mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say about working with us.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-[#FCA311]/10 rounded-full flex items-center justify-center group-hover:bg-[#FCA311]/20 transition-colors duration-300">
                  <stat.icon className="w-8 h-8 text-[#FCA311]" />
                </div>
              </div>
              <div className="text-3xl font-bold text-[#FCA311] mb-2">{stat.number}</div>
              <div className="text-sm uppercase tracking-wider text-[#14213D]/60 dark:text-[#E5E5E5]/60">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {data.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className={Style.card}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Quote Icon */}
              <div className="relative mb-6">
                <div className="w-12 h-12 bg-[#FCA311]/10 rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-[#FCA311]" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#FCA311] rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-[#FFFFFF]" />
                </div>
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-base md:text-lg font-normal leading-relaxed text-[#14213D] dark:text-[#E5E5E5] mb-6">
                &quot;{testimonial.msg}&quot;
              </blockquote>

              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-6">
                {Array.from({ length: testimonial.star }).map((_, i) => (
                  <Star key={i} size={18} className="fill-[#FCA311] text-[#FCA311]" />
                ))}
                {Array.from({ length: 5 - testimonial.star }).map((_, i) => (
                  <Star key={i} size={18} className="fill-[#E5E5E5]/30 text-[#E5E5E5]/30" />
                ))}
                <span className="ml-2 text-sm text-[#14213D]/60 dark:text-[#E5E5E5]/60">{testimonial.star}.0/5.0</span>
              </div>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Image
                    src={UPImg}
                    alt={`${testimonial.name} - ${testimonial.post} - Trusted Web Agency`}
                    width={60}
                    height={60}
                    className="rounded-full border-2 border-[#FCA311]/20"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#FCA311] rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-[#FFFFFF]" />
                  </div>
                </div>
                <div className="flex-1">
                  <cite className="text-lg font-semibold text-[#14213D] dark:text-[#E5E5E5] not-italic">
                    {testimonial.name}
                  </cite>
                  <p className="text-sm text-[#14213D]/70 dark:text-[#E5E5E5]/70">{testimonial.post}</p>
                  <p className="text-sm font-medium text-[#FCA311]">{testimonial.company}</p>
                </div>
              </div>

              {/* Project Info */}
              <div className="mt-4 pt-4 border-t border-[#E5E5E5]/20 dark:border-[#E5E5E5]/10">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[#14213D]/60 dark:text-[#E5E5E5]/60">Project:</span>
                  <span className="font-medium text-[#14213D] dark:text-[#E5E5E5]">{testimonial.project}</span>
                </div>
                <div className="flex justify-between items-center text-sm mt-1">
                  <span className="text-[#14213D]/60 dark:text-[#E5E5E5]/60">Location:</span>
                  <span className="font-medium text-[#14213D] dark:text-[#E5E5E5]">{testimonial.location}</span>
                </div>
              </div>

              {/* Background Gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FCA311]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

const Style = {
  container: "relative w-full flex items-center justify-center py-20 bg-[#FFFFFF] dark:bg-[#14213D] overflow-hidden",
  section: "relative z-10 w-11/12 max-w-7xl flex flex-col items-center justify-center",
  card: "group relative cursor-pointer border border-[#E5E5E5]/20 dark:border-[#666666]/30 rounded-2xl p-8 transition-all duration-300 ease-in-out hover:shadow-xl hover:border-[#FCA311]/30 bg-[#FFFFFF] dark:bg-[#1a2332] overflow-hidden",
}

export default Testimonials
