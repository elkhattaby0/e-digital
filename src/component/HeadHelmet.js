import React from "react";
import { Helmet } from "react-helmet";
import { titleIdentify } from "../index";

const HeadHelmet = ({ 
  title = "", 
  description = "", 
  keywords = "", 
  url = "https://edigital-seven.vercel.app/", 
  image = "https://raw.githubusercontent.com/elkhattaby0/e-digital/refs/heads/main/public/logo512.png" 
}) => {
  const fullTitle = titleIdentify + (title ? ` | ${title}` : ""); 

  return (
    <Helmet>
      <meta name="author" content="eDigital Team" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
    </Helmet>
  );
};

export default HeadHelmet;
