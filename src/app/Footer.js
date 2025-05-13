"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
    return (
        <motion.footer className={Style.containre} 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <section className={Style.section}>
                <div className="text-[#14213D] dark:text-[#E5E5E5] text-[16px] flex items-center gap-1 outline-none cursor-pointer max-md:mb-2">
                    <Link href="https://www.linkedin.com/"><FaLinkedin /></Link>
                    <Link href="https://www.instagram.com/"><FaInstagram /></Link> |
                    <p className={Style.p}>© 2025 Trusted Web Agency, All rights reserved.</p>
                </div>

                

                <div className="flex items-center justify-center gap-1 text-[#14213D] dark:text-[#E5E5E5]">        
                    <Link href="/sitemap.xml" className={Style.a}>Sitemap</Link> |
                    <Link href="/terms-conditions" className={Style.a}>Terms & Conditions</Link>
                </div>
            </section>
        </motion.footer>
    )
}

const Style = {
    "containre": "w-full flex items-center justify-center border-t-[0.1px] border-[#E5E5E5] dark:border-[#666] bg-[#FFFFFF] dark:bg-[#14213D]",
    "section": "w-11/12 py-5 flex flex-wrap items-center justify-between",

    "p": "text-[#14213D] dark:text-[#E5E5E5]",
    "a": "text-[#14213D] dark:text-[#E5E5E5] under line font-base text-sm"
}
export default Footer;