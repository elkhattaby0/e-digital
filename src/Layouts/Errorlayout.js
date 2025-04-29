import React from "react"
import Paragraph from "../component/Paragraph";
import ButtonArrow from "../component/ButtonArrow";
import Image from "../assets/error404.png"
import { Helmet } from "react-helmet";
import { titleIdentify } from "../index";

const Errorlayout = () => {
    return (
      <section 
        className="w-full flex items-center justify-center"
      > 
        <Helmet>
            <title>{titleIdentify} - Page Not Found</title>
            <meta 
            name="description" 
            content="Sorry, the page you're looking for doesn't exist. Discover more about our digital services and projects." 
            />
            <meta name="robots" content="noindex" />
        </Helmet>
        <div
          className="w-11/12 flex max-md:flex-col items-center gap-8 my-4 max-md:my-8"
        >
          <div className="w-1/2  max-md:w-full">
            <h1 className="font-bold text-5xl mb-4 text-[#14213D] dark:text-[#E5E5E5]">Page Not Found</h1>
            <Paragraph>Sorry, the page you're looking for doesn't exist.</Paragraph>
            <ButtonArrow>Go back to the homepage</ButtonArrow>
          </div>
          <div className="w-1/2 max-md:w-full">
            <img
              src={Image}
              alt="edigital error"
              className="dark:bg-[#E5E5E5] rounded-3xl"
            />
          </div>
        </div>
      </section>
    )
  }
  

export default Errorlayout;