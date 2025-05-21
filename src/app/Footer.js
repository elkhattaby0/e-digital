"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { identify } from "./layout";
import Paragraph from "@/component/Paragraph";


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
                     
                    <Paragraph>© 2025 { identify }, All rights reserved.</Paragraph>
                </div>

                

                <div className="flex items-center justify-center gap-1 text-[#14213D] dark:text-[#E5E5E5]">        
                    <Link href="/sitemap.xml" className={Style.a}>Sitemap</Link> |
                    {/* <Link href="/terms-conditions" className={Style.a}>Terms & Conditions</Link> */}
                    <Link 
                        className="hover:text-[#FCA311]" aria-label="Facebook"
                        href="https://www.facebook.com/profile.php?id=61576069447823"><FaFacebookSquare /></Link>
                    <Link 
                        className="hover:text-[#FCA311]" aria-label="Instagram"
                        href="https://www.instagram.com/trustedwebagency/"><FaInstagramSquare /></Link>
                    <Link 
                        className="hover:text-[#FCA311]" aria-label="Whatsapp" 
                        href="https://wa.me/212709872603"><FaWhatsappSquare /></Link>
                </div>
            </section>
        </motion.footer>
    )
}

const Style = {
    "containre": "w-full flex items-center justify-center border-t-[0.1px] border-[#E5E5E5] dark:border-[#666] bg-[#FFFFFF] dark:bg-[#14213D]",
    "section": "w-11/12 py-5 flex flex-wrap items-center justify-between",

    "a": "text-[#14213D] dark:text-[#E5E5E5] hover:text-[#FCA311] font-medium "
}
export default Footer;