import React from "react";

const Footer = () => {
    return (
        <footer className={Style.containre} >
            <section className={Style.section}>
                <p className={Style.p}>© 2025 Lahoucine El Khattaby. All rights reserved.</p>

                <div className="flex items-center justify-center gap-5">
                    <a className={Style.a}>Terms & conditions</a>
                    <a className={Style.a}>Privicy policy</a>
                </div>
            </section>
        </footer>
    )
}

const Style = {
    "containre": "w-full flex items-center justify-center border-t-[0.1px] border-[#E5E5E5] ",
    "section": "w-11/12 py-5 flex flex-wrap items-center justify-between",

    "p": "text-[#14213D] dark:text-[#E5E5E5]",
    "a": "text-[#14213D] dark:text-[#E5E5E5] underline font-base text-sm"
}
export default Footer;