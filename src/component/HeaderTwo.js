import React from 'react';

const HeaderTwo = ({ children }) => {
    return (
        <h2 
            className="text-5xl font-bold text-[#14213D] mb-4 dark:text-[#E5E5E5] leading-[55px]"
        >
            { children }
        </h2>
    )
}


export default HeaderTwo;