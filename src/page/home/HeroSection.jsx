import React, { useState } from "react";
import { NameSection } from "./subview/NameSection";
import { InfoSection } from "./subview/InfoSection";
import { ViewTogleComponent } from "../../component/ViewToggleComponent";

export const HeroSection = () => {
    return (
        <ViewTogleComponent 
            desktopView={<DesktopHeroSection/>} 
            mobileView={<MobileHeroSection/>}/>
    );
}


/**
 * DesktopHeroSection component renders a hero section with two panels side by side for Desktop.
 * @returns {React.ReactNode} - The rendered component.
 */
const DesktopHeroSection = () => {
    const [scrollInfoTo, setScrollInfoTo] = useState(0);

    return (
        <div className="w-full min-h-full flex flex-row grow items-stretch relative gap-4 sm:px-2 md:px-2 px-6 ">
            <div className="basis-1/3 self-stretch" > <NameSection isMobile={false} setScrollTo={setScrollInfoTo}/> </div>
            <div className="basis-2/3 self-stretch"> <InfoSection scrollTo={scrollInfoTo} setScrollTo={setScrollInfoTo}/> </div>
        </div>
    );
}

const MobileHeroSection = () => {
    return (
        <div className="w-full flex flex-col grow relative gap-2 px-2">
            <NameSection isMobile={true}/>
        </div>
    );
}

