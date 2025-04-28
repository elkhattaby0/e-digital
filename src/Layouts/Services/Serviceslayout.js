import React from "react";

import HeroSection from "../../component/HeroSection";
import Services from "./Services";
const imageURL = "https://img.freepik.com/free-vector/security-robots-cartoon-characters-pc-chatbot_107791-8463.jpg?t=st=1745791699~exp=1745795299~hmac=2345a6659f8c4089d164c1df6a3e63a5955554caaa1d31b4ba625dab895d3956&w=1380"

const Serviceslayout = () => {
    return (
        <main>
            <HeroSection img={imageURL} text="Our Services" />
            <Services />
        </main>
    )
}

export default Serviceslayout;