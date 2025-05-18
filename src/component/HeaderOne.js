const HeaderOne = ({ children }) => {
    return (
        <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl font-extrabold leading-tight tracking-tight text-[#14213D] dark:text-[#E5E5E5]"
        >
            { children }
        </h1>
    )
}

export default HeaderOne;