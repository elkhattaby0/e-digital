const HeaderTwo = ({ children }) => {
    return (
        <h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-bold leading-tight text-[#14213D] dark:text-[#E5E5E5]"
        >
            { children }
        </h2>
    )
}


export default HeaderTwo;