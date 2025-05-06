import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";


const Footer = () => {
    return (
        <motion.footer className={Style.containre} 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <section className={Style.section}>
                <div className="text-[#14213D] dark:text-[#E5E5E5] text-[16px] flex gap-4 outline-none cursor-pointer max-md:mb-2">
                    <a><FaFacebookF /></a>
                    <a><FaInstagram /></a>
                    <a><FaXTwitter /></a>
                    <a><FaLinkedin /></a>
                </div>

                <p className={Style.p}>© 2025 Lahoucine El Khattaby, All rights reserved.</p>

                <div className="flex items-center justify-center gap-5">        
                    <a href="/sitemap.xml" className={Style.a}>Sitemap</a>
                    <a href="/terms-conditions" className={Style.a}>Terms & Conditions</a>
                </div>
            </section>
        </motion.footer>
    )
}

const Style = {
    "containre": "w-full flex items-center justify-center border-t-[0.1px] border-[#E5E5E5] dark:border-[#666]",
    "section": "w-11/12 py-5 flex flex-wrap items-center justify-between",

    "p": "text-[#14213D] dark:text-[#E5E5E5]",
    "a": "text-[#14213D] dark:text-[#E5E5E5] underline font-base text-sm"
}
export default Footer;