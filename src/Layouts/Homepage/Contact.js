import React from "react";
import { ArrowRight, LucideMail, LucideMapPin, LucidePhone } from "lucide-react";
import HeaderTwo from "../../component/HeaderTwo";
import Paragraph from "../../component/Paragraph";
import emailjs from 'emailjs-com';

emailjs.init('4UGpHdCAb_fLz0-ub');  // ← your Public Key


const Contact = () => {
    const contactinfo = [
        { "name": "Phone", "value": "+212 650 999 953", "href": "tel:+212650999953", "icon": <LucidePhone size="35px" className="text-[#14213D] dark:text-[#E5E5E5]"/> },
        { "name": "Email", "value": "contact@edigital.com", "href": "mailto:contact@edigital.com", "icon": <LucideMail size="35px" className="text-[#14213D] dark:text-[#E5E5E5]"/> },
        { "name": "Address", "value": "86000 Agadir, Morocco", "href": "Agadir, Morocco", "icon": <LucideMapPin size="35px" className="text-[#14213D] dark:text-[#E5E5E5]"/> }
    ]

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
          .sendForm(
            'service_862cvdc',     // ← your Service ID
            'template_67a3k3o',    // ← your Template ID
            e.target              // the form element
            // no need to pass the key here since we called init()
          )
          .then(
            () => {
              alert('✅ Message sent!');
              e.target.reset();
            },
            (err) => {
              alert('❌ Failed to send: ' + err.text);
            }
          );
      };

    return (
        <section className={Style.container} >
            <div className={Style.section} >
                <div className="w-1/2 max-md:w-full max-md:mb-4">
                    <HeaderTwo>Let’s Work Together</HeaderTwo>
                    <Paragraph>Ready to start your next project ? Contact us today for a free consultation.</Paragraph>
                    <div className="flex flex-col gap-4">
                        {
                            contactinfo.map(n=> (
                                <div className="flex items-center gap-4" key={n.name}>
                                    {n.icon}
                                    <div className="flex flex-col">
                                        <label
                                            className="text-[#14213D] dark:text-[#E5E5E5] font-semibold text-xl"
                                        >{n.name}</label>
                                        <a 
                                            href={n.href}
                                            className="text-[#14213D] dark:text-[#E5E5E5] font-base text-sm"
                                        >{n.value}</a>
                                    </div>
                                </div>
                            ))
                        }
                        
                    </div>
                </div>
                <div className="w-1/2 max-md:w-full">
                    <form onSubmit={sendEmail}>
                        <div className="w-full block gap-2 my-2">
                            <label htmlFor="name" className="font-base text-sm text-[#14213D] dark:text-[#E5E5E5] mb-1">Name</label>
                            <input type="text" placeholder="Your Name" required 
                            id="name"
                            name="name" 
                            className="text-[#14213D] border border-[#14213D] outline-none px-3 py-2 rounded-md w-full dark:bg-[#14213D] dark:border-[#E5E5E5] dark:text-[#E5E5E5]" />
                        </div>
                        <div className="w-full block gap-2 my-2">
                            <label htmlFor="object" className="font-base text-sm text-[#14213D] dark:text-[#E5E5E5] mb-1">Object</label>
                            <input type="text" placeholder="What's your object" required
                            id="subject"
                            name="subject"
                            className="text-[#14213D] border border-[#14213D] outline-none px-3 py-2 rounded-md w-full dark:bg-[#14213D] dark:border-[#E5E5E5] dark:text-[#E5E5E5]" />
                        </div>
                        <div className="w-full block gap-2 my-2">
                            <label htmlFor="email" className="font-base text-sm text-[#14213D] dark:text-[#E5E5E5] mb-1">Email</label>
                            <input type="email" placeholder="your.email@example.com" required
                            id="email"
                            name="email"
                            className="text-[#14213D] border border-[#14213D] outline-none px-3 py-2 rounded-md w-full dark:bg-[#14213D] dark:border-[#E5E5E5] dark:text-[#E5E5E5]" />
                        </div>
                        <div className="w-full block gap-2 my-2">
                            <label htmlFor="message" className="font-base text-sm text-[#14213D] dark:text-[#E5E5E5] mb-1">Message</label>
                            <textarea rows="5" placeholder="How can we help you ?" required
                                id="message"
                                name="message"
                                className="text-[#14213D] border border-[#14213D] outline-none px-3 py-2 rounded-md w-full dark:bg-[#14213D] dark:border-[#E5E5E5] dark:text-[#E5E5E5]"
                            ></textarea>
                        </div>
                        <button type="submit" className={Style.a}>
                            Send
                            <ArrowRight size="20px" className="ml-1 -rotate-45 group-hover:-rotate-0 transition-all duration-300 ease-in-out" />  
                        </button>          
                    </form>
                </div>
            </div>
        </section>
    )
}

const Style = {
    "container": "w-full flex items-center justify-center py-10 my-10",
    "section": "w-11/12 flex max-md:flex-col  justify-center",
    
    "a": "flex items-center justify-between bg-[#FFFFFF] border-[#14213D] text-[#14213D] rounded-full mt-2 px-4 py-2 dark:bg-[#14213D] dark:text-[#E5E5E5] dark:border-[#E5E5E5] outline-none cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#14213D] hover:text-[#FFFFFF] dark:hover:bg-[#E5E5E5] dark:hover:text-[#14213D] border-[1px] dark:hover:border-[#E5E5E5] w-1/3 max-md:w-1/2 group"
}

export default Contact;