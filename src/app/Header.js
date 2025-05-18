"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, LucideMenu, MoonIcon, SunIcon, X } from "lucide-react";
import { identify } from "./layout";
import Logo from "../../public/assets/logo.svg";
import useScrollProgress from "@/component/useScrollProgress";

const menu = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "How We Work", link: "/approach" },
    { name: "Services", link: "/services" },
    { name: "Portfolio", link: "/projects" },
    { name: "Contact", link: "/contact" },
    
];

const Header = () => {
    // const [toggle, setToggle] = React.useState(false);
    const [isOpned, setIsOpened] = React.useState(false);
    const scrollProgress = useScrollProgress()

    // React.useEffect(() => {
    //     const savedMode = localStorage.getItem("darkMode");
    //     if (savedMode === "true" ) {
    //         setToggle(true);
    //         document.body.classList.add("dark");
    //     }
    // }, []);

    // const handleToggle = () => {
    //     setToggle((prevToggle) => {
    //         const newToggle = !prevToggle;
    //         if (newToggle) {
    //             document.body.classList.add("dark");
    //         } else {
    //             document.body.classList.remove("dark");
    //         }
    //         localStorage.setItem("darkMode", newToggle);
    //         return newToggle;
    //     });
    // };

    const haddleRes = () => {
        setIsOpened((prev) => !prev);
    };

    const ResponsiveMenu = () => {
        const StyleResp = {
            menu: `bg-[#FFFFFF] dark:bg-[#14213D] w-full h-[100vh] fixed top-[73px] left-0 z-10 flex items-center justify-center transition-all duration-300 ease-in-out`,
            ul: "flex flex-col w-11/12 ",
            link: "flex items-center justify-between font-lg text-3xl my-2 text-[#14213D] cursor-pointer outline-none group dark:text-[#E5E5E5] transition-all duration-300 ease-in-out",
        };

        const menuVariants = {
            hidden: { y: "-100%", opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
            exit: { y: "100%", opacity: 0, transition: { duration: 0.3, ease: "easeIn" } },
        };

        return (
            <motion.nav
                className={StyleResp.menu}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={menuVariants}
            >
                <ul className={StyleResp.ul}>
                    {menu.map((n) => (
                        <li key={n.name}>
                            <Link href={n.link} className={StyleResp.link}>
                                {n.name}
                                    <ArrowRight size="1em" className="-rotate-45 group-hover:rotate-0 group-hover:text-[#FCA311]" />
                            </Link>
                        </li>
                    ))}
                </ul>
            </motion.nav>
        );
    };

    return (
        <motion.header
            className={Style.containre}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <section className={Style.section}>
                <Link className={Style.logo} href="/">
                    <Image
                        src={Logo}
                        alt={identify}
                        className="w-10 h-10 bg-[#14213D] rounded-br-3xl rounded-md"
                    />
                </Link>
                <nav>
                    <ul className={Style.ul}>
                        {menu.map((n) => (
                            <li key={n.name}>
                                <Link className={Style.link} href={n.link}>
                                    {n.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className={Style.ul2}>
                    {/* <button aria-label="Toggle dark mode" className={Style.mode} onClick={handleToggle}>
                        {!toggle ? (
                            <MoonIcon size="22px" color="#14213D" />
                        ) : (
                            <SunIcon size="22px" />
                        )}
                    </button> */}
                    <button aria-label="Toggle navigation menu" className={Style.menu} onClick={haddleRes}>
                        {isOpned ? <X size="1.23em" /> : <LucideMenu size="1.23em" />} 
                        <span className="mx-1 ">Menu</span>
                    </button>
                    <Link href="/contact" className={Style.btn}>
                        Let&apos;s Talk
                    </Link>                    
                </div>
            </section>

            <AnimatePresence>
                {isOpned && <ResponsiveMenu />}
            </AnimatePresence>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-transparent z-[100]">
                <div 
                    className="bg-[#FCA311] transition-all duration-100 rounded-full h-1"
                    style={{ width: `${scrollProgress}%` }}
                />
            </div>
        </motion.header>
    );
};

const Style = {
    containre: "bg-[#FFFFFF] dark:bg-[#14213D] w-full flex flex-col items-center justify-center borde r-b-[0.1px] border-[#E5E5E5] dark:border-[#666] sticky top-0  transition-all duration-300 ease-in-out z-[99] h-[80px]",
    section: "w-11/12 py-5 flex items-center justify-between",
    logo: "outline-none cursor-pointer font-bold text-xl text-[#14213D] dark:text-[#E5E5E5]",
    ul: "flex items-center justify-center",
    link: "px-3 py-1 rounded-full text-md outline-none cursor-pointer transition-all duration-300 ease-in-out text-[#14213D] hover:bg-[#14213D] hover:text-[#FFFFFF] dark:text-[#E5E5E5] dark:hover:bg-[#E5E5E5] dark:hover:text-[#14213D] max-lg:hidden ",
    ul2: "flex items-center justify-center gap-2",
    mode: "border border-[#E5E5E5] hover:bg-[#E5E5E5] rounded-full p-1 outline-none cursor-pointer transition-all duration-300 ease-in-out dark:bg-[#14213D] dark:text-[#E5E5E5] dark:hover:bg-[#E5E5E5] dark:hover:text-[#14213D]",
    btn: "text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-xl font-medium px-4 py-1 rounded-full text-md outline-none cursor-pointer transition-all duration-300 ease-in-out bg-[#14213D] text-[#FFFFFF] hover:text-[#14213D] hover:bg-[#FFFFFF] border dark:border-[#E5E5E5] dark:text-[#E5E5E5] dark:hover:bg-[#E5E5E5] dark:hover:text-[#14213D]",
    menu: "hidden max-lg:flex items-center border border-[#E5E5E5] hover:bg-[#E5E5E5] rounded-full px-2 p-1 text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-xl font-medium outline-none cursor-pointer transition-all duration-300 ease-in-out dark:bg-[#14213D] text-[#14213D] dark:text-[#E5E5E5] dark:hover:bg-[#E5E5E5] dark:hover:text-[#14213D]",
};

export default Header;
