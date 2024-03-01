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
    const [scrollInfoTo, setScrollInfoTo] = useState(0);1

    const [infoSectionWidth, setInfoSectionWidth] = useState("translate-x-0")
    const [detailsPanelWidth, setDetailsPanelWidth] = useState("translate-x-full")
    const [datilsPanelContent, setDetailsPanelContent] = useState(<></>)
    

    const showDetailsPanel = (breadcrum, content) => {
        setInfoSectionWidth(currentWidth =>  currentWidth === "translate-x-0" ? "-translate-x-full" : "translate-x-0")
        setDetailsPanelWidth(currentWidth =>  currentWidth === "translate-x-full" ? "translate-x-0" : "translate-x-full")
        setDetailsPanelContent(createDetailsPanelView(breadcrum, content, showDetailsPanel))
    };

    return (
        <div className="w-full min-h-full flex flex-row grow items-stretch relative gap-4 sm:px-2 md:px-2 px-6 ">
            <div className="basis-1/3 self-stretch" > <NameSection isMobile={false} setScrollTo={setScrollInfoTo}/> </div>
            <button onClick={() => showDetailsPanel("Click", "<></>")}>Click</button>
            <div className="relative basis-2/3 self-stretch flex flex-row overflow-x-hidden" > 
                <InfoSection className={`w-full duration-300 relative h-full mt-8 mb-8 ${infoSectionWidth}`} scrollTo={scrollInfoTo} setScrollTo={setScrollInfoTo} setDetailPanelContent={setDetailsPanelContent}/> 
                <div className={`absolute top-0 left-50 bottom-0 right-0 w-full  duration-300 self-stretch ${detailsPanelWidth}`}>
                    <div className="bg-stone-400 w-full h-full m-8">
                        {datilsPanelContent}
                    </div>
                </div>
            </div>
        </div>
    );
}

const createDetailsPanelView = (breadcrum, content, closeCallback) => {
    return content ? <div>
        <p onClick={() => closeCallback(null, null)}>{"Breadcrum: " + breadcrum + " content: " + content}</p>
        <p>{Date.now()}</p>
    </div> : <></>;
}

const MobileHeroSection = () => {
    return (
        <div className="w-full flex flex-col grow relative gap-2 px-2">
            <NameSection isMobile={true}/>
        </div>
    );
}

