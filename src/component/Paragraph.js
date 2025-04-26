import React from "react"

const Paragraph = ({ children}) => {
    return (
        <p
            className="font-base text-md text-[#000000] leading-[24px] mb-4 dark:text-[#E5E5E5]"
        >
            { children }
        </p>
    )
}

export default Paragraph;