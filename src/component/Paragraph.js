import React from "react"

const Paragraph = ({ children, isCenter = false }) => {
    return (
        <p
            className={` ${ isCenter ? "text-center" : "" } font-base text-md text-[#000000] leading-[24px] mb-4 dark:text-[#E5E5E5]`}
        >
            { children }
        </p>
    )
}

export default Paragraph;