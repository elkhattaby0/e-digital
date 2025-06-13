const Paragraph = ({ children, isCenter = false }) => {
    return (
        <p
            className={` ${ isCenter ? "text-center" : "" } text-[#000000] dark:text-[#E5E5E5] text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-lg font-normal leading-relaxed `}
        >
            { children }
        </p>
    )
}

export default Paragraph;