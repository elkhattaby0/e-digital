const HeaderThree = ({ children }) => {
    return (
        <h3
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-semibold leading-snug text-[#14213D] dark:text-[#E5E5E5]"
        >
            { children }
        </h3>
    )
}

export default HeaderThree;