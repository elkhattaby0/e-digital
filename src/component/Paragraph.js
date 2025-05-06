import React from "react"
import { motion } from "framer-motion";

const Paragraph = ({ children, isCenter = false }) => {
    return (
        <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className={` ${ isCenter ? "text-center" : "" } font-base text-md text-[#000000] leading-relaxed mb-4 dark:text-[#E5E5E5]`}
        >
            { children }
        </motion.p>
    )
}

export default Paragraph;