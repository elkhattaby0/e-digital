import React, { useState } from "react";
import { ArrowRight, LucideMail, LucideMapPin, LucidePhone } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import HeaderTwo from "../../component/HeaderTwo";
import Paragraph from "../../component/Paragraph";
import HeaderThree from "../../component/HeaderThree";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        email: '',
        message: ''
    });

    const [isCaptchaValid, setIsCaptchaValid] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    const contactinfo = [
        { "name": "Phone", "value": "+212 650 999 953", "href": "tel:+212650999953", "icon": <LucidePhone size="35px" className="text-[#14213D] dark:text-[#E5E5E5]" /> },
        { "name": "Whatsapp", "value": "+212 650 999 953", "href": "https://wa.me/212650999953", "icon": <BsWhatsapp size="35px" className="text-[#14213D] dark:text-[#E5E5E5]" /> },
        { "name": "Email", "value": "eelkhattaby@gmail.com", "href": "mailto:contact@edigital.com", "icon": <LucideMail size="35px" className="text-[#14213D] dark:text-[#E5E5E5]" /> },
        { "name": "Address", "value": "86000 Agadir, Morocco", "href": "Agadir, Morocco", "icon": <LucideMapPin size="35px" className="text-[#14213D] dark:text-[#E5E5E5]" /> }
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleCaptcha = (value) => {
        if (value) {
            setIsCaptchaValid(true);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isCaptchaValid) {
            alert('Please complete the CAPTCHA');
            return;
        }

        const response = await fetch('https://formspree.io/f/xyzwkjoa', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            setIsSubmitted(true);
            setFormData({ name: '', subject: '', email: '', message: '' });
            setError('');
        } else {
            setError('Error sending message!');
        }
    };

    return (
        <section className={Style.container} >
            <div className={Style.section} >
                <div className="w-1/2 max-md:w-full max-md:mb-4">
                    <HeaderTwo>Let’s Work Together</HeaderTwo>
                    <Paragraph>Ready to start your next project? Contact us today for a free consultation.</Paragraph>
                    <div className="flex flex-col gap-4">
                        {
                            contactinfo.map(n => (
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
                <div className="w-1/2 max-md:w-full mt-3">
                    <HeaderThree>Send us a message</HeaderThree>
                    {isSubmitted ? (
                        <p>Your message has been sent. Thank you!</p>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            {error && <p className="text-red-500">{error}</p>}
                            <div className="w-full block gap-2 my-2">
                                <label htmlFor="name" className="font-base text-sm text-[#14213D] dark:text-[#E5E5E5] mb-1">Name</label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    required
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="text-[#14213D] border border-[#14213D] outline-none px-3 py-2 rounded-md w-full dark:bg-[#14213D] dark:border-[#E5E5E5] dark:text-[#E5E5E5]"
                                />
                            </div>
                            <div className="w-full block gap-2 my-2">
                                <label htmlFor="subject" className="font-base text-sm text-[#14213D] dark:text-[#E5E5E5] mb-1">Subject</label>
                                <input
                                    type="text"
                                    placeholder="What's your subject?"
                                    required
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="text-[#14213D] border border-[#14213D] outline-none px-3 py-2 rounded-md w-full dark:bg-[#14213D] dark:border-[#E5E5E5] dark:text-[#E5E5E5]"
                                />
                            </div>
                            <div className="w-full block gap-2 my-2">
                                <label htmlFor="email" className="font-base text-sm text-[#14213D] dark:text-[#E5E5E5] mb-1">Email</label>
                                <input
                                    type="email"
                                    placeholder="your.email@example.com"
                                    required
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="text-[#14213D] border border-[#14213D] outline-none px-3 py-2 rounded-md w-full dark:bg-[#14213D] dark:border-[#E5E5E5] dark:text-[#E5E5E5]"
                                />
                            </div>
                            <div className="w-full block gap-2 my-2">
                                <label htmlFor="message" className="font-base text-sm text-[#14213D] dark:text-[#E5E5E5] mb-1">Message</label>
                                <textarea
                                    rows="5"
                                    placeholder="How can we help you?"
                                    required
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="text-[#14213D] border border-[#14213D] outline-none px-3 py-2 rounded-md w-full dark:bg-[#14213D] dark:border-[#E5E5E5] dark:text-[#E5E5E5]"
                                ></textarea>
                            </div>

                            {/* Google reCAPTCHA */}
                            <ReCAPTCHA
                                sitekey="6LeLnSgrAAAAAG5o-pobI4__kpSAw3LSlCZkE2H2" // Your provided site key
                                onChange={handleCaptcha}
                            />

                            <button type="submit" className={Style.a} disabled={!isCaptchaValid}>
                                Send
                                <ArrowRight size="20px" className="ml-1 -rotate-45 group-hover:-rotate-0 transition-all duration-300 ease-in-out" />
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

const Style = {
    "container": "w-full flex items-center justify-center py-10 my-10",
    "section": "w-11/12 flex max-md:flex-col justify-center",
    "a": "flex items-center justify-between bg-[#FFFFFF] border-[#14213D] text-[#14213D] rounded-full mt-2 px-4 py-2 dark:bg-[#14213D] dark:text-[#E5E5E5] dark:border-[#E5E5E5] outline-none cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#14213D] hover:text-[#FFFFFF] dark:hover:bg-[#E5E5E5] dark:hover:text-[#14213D] border-[1px] dark:hover:border-[#E5E5E5] w-1/3 max-md:w-1/2 group"
};

export default Contact;
