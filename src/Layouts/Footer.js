import React from "react";

// import { FaFacebookF } from "react-icons/fa";
// // import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
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
                <div className="text-[#14213D] dark:text-[#E5E5E5] text-[16px] flex items-center gap-1 outline-none cursor-pointer max-md:mb-2">
                    {/* <a href=""><FaFacebookF /></a> */}
                    <a href="https://www.linkedin.com/in/lahoucine-el-khattaby-0335341bb/"><FaLinkedin /></a>
                    <a href="https://www.instagram.com/lahoucine_elkhattaby"><FaInstagram /></a>                    {/* <a href=""><FaXTwitter /></a> */} |
                    <p className={Style.p}>© 2025 Lahoucine El Khattaby, All rights reserved.</p>
                </div>

                

                <div className="flex items-center justify-center gap-1 text-[#14213D] dark:text-[#E5E5E5]">        
                    <a href="/sitemap.xml" className={Style.a}>Sitemap</a> |
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
    "a": "text-[#14213D] dark:text-[#E5E5E5] under line font-base text-sm"
}
export default Footer;