"use client"

import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowRight, LucideMenu, Phone, X, Zap } from "lucide-react"
import Logo from "../../public/assets/logo.svg"
import useScrollProgress from "@/component/useScrollProgress"

// Company identifier - you can move this to a config file
export const identify = "Trusted Web Agency"

const menu = [
  { name: "Homepage", link: "/" },
  { name: "About Us", link: "/about" },
  { name: "How We Work", link: "/approach" },
  { name: "Services", link: "/services" },
  { name: "Portfolio", link: "/projects" },
  { name: "Blog", link: "/blogs" },
  { name: "Contact", link: "/contact" },
]

const Header = () => {
  const [isOpened, setIsOpened] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const scrollProgress = useScrollProgress()
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleRes = () => {
    setIsOpened((prev) => !prev)
  }

  const ResponsiveMenu = () => {
    const StyleResp = {
      menu: `bg-[#14213D]/95 backdrop-blur-md w-full h-[100vh] fixed top-[80px] left-0 z-10 flex items-center justify-center transition-all duration-300 ease-in-out`,
      ul: "flex flex-col w-11/12 max-w-md",
      link: "flex items-center justify-between font-medium text-2xl my-3 px-4 py-3 text-[#E5E5E5] cursor-pointer outline-none group transition-all duration-300 ease-in-out hover:bg-[#FCA311]/10 rounded-xl border border-transparent hover:border-[#FCA311]/20",
      activeLink: "bg-[#FCA311]/10 border-[#FCA311]/20 text-[#FCA311]",
      cta: "mt-6 w-full flex items-center justify-center px-6 py-4 text-lg font-semibold text-[#FFFFFF] bg-[#FCA311] hover:bg-[#FCA311]/90 rounded-full transition-all duration-300 hover:scale-105 shadow-lg",
    }

    const menuVariants = {
      hidden: { y: "-100%", opacity: 0 },
      visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
      exit: { y: "-100%", opacity: 0, transition: { duration: 0.3, ease: "easeIn" } },
    }

    const itemVariants = {
      hidden: { x: -30, opacity: 0 },
      visible: (i) => ({
        x: 0,
        opacity: 1,
        transition: { delay: 0.1 + i * 0.1, duration: 0.3, ease: "easeOut" },
      }),
    }

    return (
      <motion.nav className={StyleResp.menu} initial="hidden" animate="visible" exit="exit" variants={menuVariants}>
        <ul className={StyleResp.ul}>
          {menu.map((n, index) => {
            const isActive = pathname === n.link
            return (
              <motion.li key={n.name} custom={index} initial="hidden" animate="visible" variants={itemVariants}>
                <Link
                  href={n.link}
                  className={`${StyleResp.link} ${isActive ? StyleResp.activeLink : ""}`}
                  onClick={() => setIsOpened(false)}
                >
                  {n.name}
                  <ArrowRight
                    size="1.2em"
                    className="-rotate-45 group-hover:rotate-0 group-hover:text-[#FCA311] transition-all duration-300"
                  />
                </Link>
              </motion.li>
            )
          })}
          <motion.li
            custom={menu.length}
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            className="border-t border-[#E5E5E5]/20 pt-4"
          >
            <Link href="/contact" className={StyleResp.cta} onClick={() => setIsOpened(false)}>
              <Phone size={18} className="mr-2" />
              Get Free Quote
              <Zap size={18} className="ml-2" />
            </Link>
          </motion.li>
        </ul>
      </motion.nav>
    )
  }

  return (
    <>
      <motion.header
        className={`${Style.container} ${isScrolled ? Style.scrolled : ""}`}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Blue Gradient Background */}
          <div
            className="absolute inset-0"
            style={{
              background: isScrolled
                ? "linear-gradient(135deg, rgba(20, 33, 61, 0.98) 0%, rgba(20, 33, 61, 0.95) 100%)"
                : "linear-gradient(135deg, rgba(20, 33, 61, 0.95) 0%, rgba(20, 33, 61, 0.90) 100%)",
            }}
          />

          {/* Digital Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `
                                linear-gradient(rgba(252, 163, 17, 0.1) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(252, 163, 17, 0.1) 1px, transparent 1px)
                                `,
                backgroundSize: "20px 20px",
              }}
            />
          </div>

          {/* Floating Accent Elements */}
          <div className="absolute top-2 right-20 w-2 h-2 bg-[#FCA311]/40 rounded-full animate-pulse" />
          <div className="absolute top-4 right-40 w-1 h-1 bg-[#FCA311]/30 rounded-full animate-ping" />
          <div className="absolute top-6 left-1/4 w-1.5 h-1.5 bg-[#FCA311]/35 rounded-full animate-pulse" />

          {/* Additional Blue Accent Elements */}
          <div className="absolute top-3 left-20 w-1 h-1 bg-[#E5E5E5]/20 rounded-full animate-pulse" />
          <div className="absolute bottom-4 right-1/3 w-1.5 h-1.5 bg-[#E5E5E5]/15 rounded-full animate-ping" />
        </div>

        <section className={Style.section}>
          {/* Enhanced Logo */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link className={Style.logo} href="/">
              <div className={Style.logoContainer}>
                <Image
                  src={Logo}
                  alt={`${identify} Logo`}
                  className={Style.logoImage}
                  width={40}
                  height={40}
                  priority
                />
              </div>
              {/* <span className={Style.logoText}>{identify}</span> */}
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav>
            <ul className={Style.ul}>
              {menu.map((n, index) => {
                const isActive = pathname === n.link
                return (
                  <motion.li
                    key={n.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link className={`${Style.link} ${isActive ? Style.activeLink : ""}`} href={n.link}>
                      <span className="relative group">
                        {n.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FCA311] transition-all duration-300 group-hover:w-full rounded-full" />
                      </span>
                    </Link>
                  </motion.li>
                )
              })}
            </ul>
          </nav>

          {/* Right Section */}
          <div className={Style.ul2}>
            {/* <div className="gtranslate_wrapper" /> */}

            <motion.button
              aria-label="Toggle navigation menu"
              className={Style.menu}
              onClick={handleRes}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: isOpened ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center"
              >
                {isOpened ? <X size="1.23em" /> : <LucideMenu size="1.23em" />}
              </motion.div>
            </motion.button>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className={Style.btn}>
                <Phone size={16} className="mr-2" />
                Get Free Quote
              </Link>
            </motion.div>
          </div>
        </section>

        <AnimatePresence>{isOpened && <ResponsiveMenu />}</AnimatePresence>

        {/* Enhanced Scroll Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-transparent z-[100]">
          <motion.div
            className="bg-gradient-to-r from-[#FCA311] to-[#FCA311]/70 transition-all duration-100 rounded-full h-1 shadow-sm"
            style={{ width: `${scrollProgress}%` }}
            initial={{ width: 0 }}
            animate={{ width: `${scrollProgress}%` }}
          />
        </div>
      </motion.header>

      {/* Enhanced Backdrop Overlay */}
      <AnimatePresence>
        {isOpened && (
          <motion.div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[5] top-[80px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpened(false)}
          />
        )}
      </AnimatePresence>
      <div className="gtranslate_wrapper" ></div>
    </>
  )
}

const Style = {
  container:
    "relative w-full flex flex-col items-center justify-center border-b border-[#E5E5E5]/20 sticky top-0 transition-all duration-300 ease-in-out z-[99] h-[80px] backdrop-blur-md",
  scrolled: "shadow-xl border-b-[#E5E5E5]/30 bg-[#14213D]/98 backdrop-blur-lg",
  section: "w-11/12 max-w-7xl py-5 flex items-center justify-between relative z-10",
  logo: "outline-none cursor-pointer font-bold text-xl text-[#E5E5E5] flex items-center gap-3 group transition-all duration-300",
  logoContainer:
    "relative w-10 h-10",
  logoImage: "w-full h-full",
  logoText: "font-bold text-lg hidden sm:block group-hover:text-[#FCA311] transition-colors duration-300",
  ul: "flex items-center justify-center uppercase gap-2",
  link: "px-4 py-2 rounded-full text-sm outline-none cursor-pointer transition-all duration-300 ease-in-out text-[#E5E5E5] hover:bg-[#FCA311]/10 hover:text-[#FCA311] max-lg:hidden group",
  activeLink: "bg-[#FCA311]/10 text-[#FCA311]",
  ul2: "flex items-center justify-center gap-3",
  btn: "group inline-flex items-center text-sm sm:text-base font-semibold px-6 py-2.5 rounded-full outline-none cursor-pointer transition-all duration-300 ease-in-out bg-[#FCA311] text-[#FFFFFF] hover:bg-[#FCA311]/90 hover:shadow-lg border-2 border-[#FCA311] hover:scale-105 shadow-md",
  menu: "hidden max-lg:flex items-center border border-[#E5E5E5]/30 hover:bg-[#E5E5E5]/10 rounded-full px-3 py-2 text-sm font-medium outline-none cursor-pointer transition-all duration-300 ease-in-out text-[#E5E5E5] hover:shadow-md",
}

export default Header
