"use client"
import { motion } from "framer-motion"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  // FaLinkedin,
  // FaTwitter,
  // FaGithub,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa"
// import { Zap, ArrowUp, Heart } from "lucide-react"
import { identify } from "./Header"
import Logo from "../../public/assets/logo.svg"

const Footer = () => {
  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" })
  // }

  const currentYear = new Date().getFullYear()

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "How We Work", href: "/approach" },
    { name: "Tools", href: "/tools" },
    { name: "Contact", href: "/contact" },
  ]

  const serviceLinks = [
    { name: "Web Development", href: "/services" },
    { name: "Mobile Apps", href: "/services" },
    { name: "UI/UX Design", href: "/services" },
    { name: "SEO & Marketing", href: "/services" },
  ]

  const resourceLinks = [
    { name: "Blog", href: "/blogs" },
    { name: "Case Studies", href: "/" },
    { name: "Portfolio", href: "/projects" },
    { name: "Testimonials", href: "/" },
  ]

  const legalLinks = [
    // { name: "Privacy Policy", href: "/privacy-policy" },
    // { name: "Terms of Service", href: "/terms-of-service" },
    { name: "Sitemap", href: "/sitemap.xml" },
    // { name: "Cookies", href: "/cookies" },
  ]

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61576069447823",
      icon: FaFacebook,
      color: "hover:bg-blue-600",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/trustedwebagency/",
      icon: FaInstagram,
      color: "hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500",
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/212709872603",
      icon: FaWhatsapp,
      color: "hover:bg-green-500",
    },
    // {
    //   name: "LinkedIn",
    //   href: "#",
    //   icon: FaLinkedin,
    //   color: "hover:bg-blue-700",
    // },
    // {
    //   name: "Twitter",
    //   href: "#",
    //   icon: FaTwitter,
    //   color: "hover:bg-blue-400",
    // },
    // {
    //   name: "GitHub",
    //   href: "#",
    //   icon: FaGithub,
    //   color: "hover:bg-gray-800",
    // },
  ]

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      text: "Agadir, Morocco",
      href: "https://maps.google.com/?q=Agadir,Morocco",
    },
    {
      icon: FaEnvelope,
      text: "contact@trustedwebagency.com",
      href: "mailto:contact@trustedwebagency.com",
    },
    {
      icon: FaPhone,
      text: "+212 709 872 603",
      href: "tel:+212709872603",
    },
  ]

  return (
    <footer className={Style.container}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFFFFF] to-[#F8F9FA] dark:from-[#14213D] dark:to-[#0c1526]" />

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
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 w-11/12 max-w-7xl mx-auto pt-16 pb-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              className="mb-6 flex items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-10 h-10] rounded-lg p -2 mr-3">
                {/* <Zap className="w-full h-full text-[#FFFFFF]" /> */}
                <Image
                  src={Logo}
                  alt={`${identify} Logo`}
                  // className={Style.logoImage}
                  width={40}
                  height={40}
                  priority
                />
              </div>
              <span className="font-bold text-xl text-[#14213D] dark:text-[#E5E5E5]">{identify}</span>
            </motion.div>

            <motion.p
              className="text-[#14213D]/70 dark:text-[#CCCCCC] mb-6 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              We help businesses build strong online presence through expert Full Stack and SEO-focused WordPress solutions, designed to grow with them in today’s digital world.
            </motion.p>

            {/* Contact Information */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#14213D]/70 dark:text-[#CCCCCC] hover:text-[#FCA311] transition-colors duration-300"
                >
                  <div className="w-8 h-8 bg-[#FCA311]/10 rounded-full flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-[#FCA311]" />
                  </div>
                  <span>{item.text}</span>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-[#14213D] dark:text-[#E5E5E5] relative">
              Company
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#FCA311] rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#14213D]/70 dark:text-[#CCCCCC] hover:text-[#FCA311] transition-colors duration-300 flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-[#FCA311] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-[#14213D] dark:text-[#E5E5E5] relative">
              Services
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#FCA311] rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#14213D]/70 dark:text-[#CCCCCC] hover:text-[#FCA311] transition-colors duration-300 flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-[#FCA311] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-[#14213D] dark:text-[#E5E5E5] relative">
              Resources
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#FCA311] rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#14213D]/70 dark:text-[#CCCCCC] hover:text-[#FCA311] transition-colors duration-300 flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-[#FCA311] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Subscription */}
        <motion.div
          className="bg-gradient-to-r from-[#FCA311]/10 to-[#14213D]/10 rounded-2xl p-8 mb-16 border border-[#FCA311]/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="md:w-1/2">
              <h3 className="text-xl font-bold text-[#14213D] dark:text-[#E5E5E5] mb-2">Stay Connected</h3>
              <p className="text-[#14213D]/70 dark:text-[#CCCCCC]">
                Subscribe to our newsletter for the latest updates and insights.
              </p>
            </div>
            <div className="md:w-1/2 w-full">
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-[#E5E5E5]/30 dark:border-[#E5E5E5]/20 bg-[#FFFFFF] dark:bg-[#1a2332] text-[#14213D] dark:text-[#E5E5E5] focus:outline-none focus:border-[#FCA311]"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#FCA311] text-[#FFFFFF] rounded-lg font-medium hover:bg-[#FCA311]/90 transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-[#FFFFFF] bg-[#14213D]/80 dark:bg-[#E5E5E5]/20 ${social.color} transition-all duration-300 hover:scale-110`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <div className="border-t border-[#E5E5E5]/20 dark:border-[#666]/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <motion.div
              className="text-[#14213D]/70 dark:text-[#CCCCCC] text-sm"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="flex items-center">
                © {currentYear} {identify}. All rights reserved.
                
              </p>
            </motion.div>

            {/* Legal Links */}
            <motion.div
              className="flex flex-wrap items-center gap-4 text-sm"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {legalLinks.map((link, index) => (
                <React.Fragment key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#14213D]/70 dark:text-[#CCCCCC] hover:text-[#FCA311] transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                  {index < legalLinks.length - 1 && <span className="text-[#14213D]/30 dark:text-[#CCCCCC]">|</span>}
                </React.Fragment>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Back to Top Button */}
        {/* <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-[#FCA311] text-[#FFFFFF] rounded-full flex items-center justify-center shadow-lg hover:bg-[#FCA311]/90 transition-all duration-300 z-50"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button> */}
      </div>
    </footer>
  )
}

const Style = {
  container: "relative w-full bg-[#FFFFFF] dark:bg-[#14213D] overflow-hidden",
}

export default Footer
