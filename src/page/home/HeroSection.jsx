import React, { useState } from "react";
import { NameSection } from "./subview/NameSection";
import { InfoSection, MobileInfoSection } from "./subview/InfoSection";
import { ViewTogleComponent } from "../../component/ViewToggleComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong, faCaretRight } from "@fortawesome/free-solid-svg-icons";

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

    const [infoSectionWidth, setInfoSectionWidth] = useState("translate-x-0")
    const [detailsPanelWidth, setDetailsPanelWidth] = useState("translate-x-full")
    const [datilsPanelContent, setDetailsPanelContent] = useState(<></>)
    

    function showDetailsPanel(breadcrum, content) {
        setInfoSectionWidth(currentWidth =>  currentWidth === "translate-x-0" ? "-translate-x-full" : "translate-x-0")
        setDetailsPanelWidth(currentWidth =>  currentWidth === "translate-x-full" ? "translate-x-0" : "translate-x-full")
        setDetailsPanelContent(createDetailsPanelView(breadcrum, content, showDetailsPanel))
    }

    return (
        <div className="w-full min-h-full flex flex-row grow items-stretch relative gap-4 sm:px-2 md:px-2 px-6 ">
            <div className="basis-1/3 self-stretch" >
                 <NameSection isMobile={false} setScrollTo={setScrollInfoTo}/> 
            </div>
            <div className="relative basis-2/3 self-stretch flex flex-row overflow-x-hidden" > 
                <InfoSection className={`w-full duration-300 relative h-full my-8 ${infoSectionWidth}`} 
                scrollTo={scrollInfoTo} 
                setScrollTo={setScrollInfoTo} 
                showDetailsPanel={showDetailsPanel}/> 

                <div className={`absolute top-0 left-50 bottom-0 right-0 w-full  duration-300 self-stretch ${detailsPanelWidth}`}>
                    <div className="w-full h-full m-8">
                        {datilsPanelContent}
                    </div>
                </div>
            </div>
        </div>
    );
}

const createDetailsPanelView = (breadcrum, content, closeCallback) => {
    const segments = breadcrum != null ? breadcrum.split("\\") : [];
    return content ? <div className="w-full h-full my-16">
        <div onClick={() => closeCallback(null, null)} className="flex flex-row gap-2 items-center font-thin uppercase text-stone-400">
            <FontAwesomeIcon icon={faArrowLeftLong}/> 
            { segments.map((seg, idx) => 
            <div key={`seg_${idx}`} className="flex flex-row gap-2 items-center"> 
                <span>{seg}</span> 
                {idx < segments.length-1 ? <FontAwesomeIcon icon={faCaretRight}/> : null}
            </div>) }
        </div>
        <p>{content}</p>
    </div> : <></>;
}

const MobileHeroSection = () => {
    return (
        <MobileInfoSection id="mobile_info_section" className={`h-full h-min-full w-full duration-300 relative my-8`} 
        showDetailsPanel={() => {}}/> 
    );
}

