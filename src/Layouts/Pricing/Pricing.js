import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ButtonArrow from "../../component/ButtonArrow";
import Paragraph from "../../component/Paragraph";
import HeaderThree from "../../component/HeaderThree";
import ListCheck from "../../component/ListCheck";

const data = [
    {
        id: 1,
        type: "Starter Plan",
        description: "Perfect for small projects.",
        benefits: [
            "1 page website",
            "Mobile-friendly",
            "Contact form",
            "Delivery : 3 days"
        ],
        price: "$100",
        link: "contact"
    },
    {
        id: 2,
        type: "Business Plan",
        description: "Best for growing companies.",
        benefits: [
            "Up to 5 pages",
            "Basic SEO",
            "Fast loading speed",
            "Delivery : 5 days"
        ],
        price: "$300",
        link: "contact"
    },
    {
        id: 3,
        type: "Pro Plan",
        description: "Full service for serious businesses.",
        benefits: [
            "10+ pages or app",
            "SEO & Analytics",
            "1 month free support",
            "Delivery : 7–10 days"
        ],
        price: "Custom",
        link: "contact"
    }
];

const Pricing = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    centerMode: true
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    centerMode: true
                }
            }
        ]
    };

    return (
        <section className={Style.container}>
            <div className={Style.section}>
                <Paragraph isCenter={true}>
                    We offer fair prices for quality work.
                    Choose a plan that fits your needs, or ask us for a custom offer.
                </Paragraph>
                <Slider {...settings} className="w-full mt-6">
                    {data.map((n) => (
                        <article key={n.id} className="px-2">
                            <div className={Style.card}>
                                <HeaderThree>{n.type}</HeaderThree>

                                <p className="font-base text-sm my-2 text-[#000000] leading-[20px] dark:text-[#E5E5E5]">
                                    {n.description}
                                </p>

                                <strong className="font-semibold text-5xl text-[#14213D] my-4 max-md:my-2 dark:text-[#E5E5E5]">
                                    {n.price}
                                </strong>

                                <ul className="list-none my-4 max-md:my-2">
                                    {n.benefits.map((n) => (
                                        <ListCheck key={n}>
                                            { n }
                                        </ListCheck>
                                    ))}
                                </ul>

                                <ButtonArrow link={n.link}>
                                    Get started
                                </ButtonArrow>
                            </div>
                        </article>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

const Style = {
    container: "w-full flex items-center justify-center py-8",
    section: "w-11/12 flex flex-col items-center justify-center",
    card: "flex flex-col justify-between  h-full min-h-[420px] max-md:min-h-[530px] cursor-pointer border border-[#14213D] rounded-xl p-6 hover:shadow-md dark:border-[#E5E5E5] transition-all duration-300 ease-in-out group",
};

export default Pricing;
