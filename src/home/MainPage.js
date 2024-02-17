import React from "react";
import Header from "./Header"
import Footer from "./Footer";
import { HeroSection } from "./HeroSection";
const MainPage = () => {
    return (
        // make the view full screen by setting h-full and w-full
        // make it flex to allow the hero section to grow and fill parent
         <div className="min-h-screen w-full flex flex-col max-w-screen-2xl lg:px-8 md:px-8 sm:px-0 relative">
            <Header className="w-full "/>
            <HeroSection/>
            <Footer/>
         </div>
    );
}

export default MainPage