import React from "react";

const HeaderOne = ({ children }) => {
    return (
        <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl font-extrabold leading-tight tracking-tigh text-[#14213D] dark:text-[#E5E5E5]"
        >
            { children }
        </h1>
    )
}

export default HeaderOne;