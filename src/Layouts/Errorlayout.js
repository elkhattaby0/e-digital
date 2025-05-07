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
          className="w-11/12 flex items-center gap-8 h-[calc(100lvh-80px)]"
        >
          <div className="flex flex-col items-center justify-center w-full">
            <h1 className="font-bold text-9xl mb-4 text-[#FCA311]">404</h1>
            <h2 className="font-bold text-4xl mb-4 text-[#FCA311]">Page Not Found</h2>
            <Paragraph>Sorry, the page you're looking for doesn't exist.</Paragraph>
            <ButtonArrow>Go home</ButtonArrow>
          </div>
        </div>
      </section>
    )
  }
  

export default Errorlayout;