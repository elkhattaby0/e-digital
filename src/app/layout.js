import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poppins",
});


import GoogleAnalytics from "@/component/GoogleAnalytics";
import Header from "./Header";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
export const identify = "Trusted Web Agency"



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta name="google-site-verification" content="aMir4NjOllJRZ3ygzGlLzt7R1k3LRTyMQYzmQueab88" />
      </head>
      <body
        className={`${poppins.variable} antialiased transition-all duration-300 ease-in-out`}
      >
        <GoogleAnalytics />
        <Header />
        {children}
        <Newsletter />
        <Footer />
      </body>
    </html>
  );
}
