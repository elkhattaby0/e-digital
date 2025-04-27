import React from "react";

const HeaderThree = ({ children }) => {
    return (
        <h3
            className="font-semibold text-3xl text-[#14213D] dark:text-[#E5E5E5]"
        >
            { children }
        </h3>
    )
}

export default HeaderThree;