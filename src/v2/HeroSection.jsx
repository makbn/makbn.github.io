import React from "react";
import PropTypes from 'prop-types';
import { NameSection } from "./subview/NameSection";
import { InfoSection } from "./subview/InfoSection";
import { DeviceViewToggle } from "../helper/DeviceViewToggle";

export const HeroSection = () => {
    return (
        <DeviceViewToggle desktopView={<DesktopHeroSection leftPanel={<NameSection className={""}/>} rightPanel={<InfoSection/>} />} mobileView={<MobileHeroSection/>}/>
    );
}


/**
 * DesktopHeroSection component renders a hero section with two panels side by side for Desktop.
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.leftPanel - The content to render in the left panel.
 * @param {React.ReactNode} props.rightPanel - The content to render in the right panel.
 * @returns {React.ReactNode} - The rendered component.
 */
const DesktopHeroSection = ({leftPanel, rightPanel}) => {
    DesktopHeroSection.propTypes = {
        leftPanel: PropTypes.any.isRequired,
        rightPanel: PropTypes.any.isRequired
    };

    return (
        <div className="w-full min-h-full flex flex-row grow items-stretch relative gap-4 sm:px-2 md:px-2 px-6 ">
            <div className="flex-1 self-stretch" > {leftPanel} </div>
            <div className="flex-1 self-stretch"> {rightPanel} </div>
        </div>
    );
}

const MobileHeroSection = () => {
    return (
        <div className="w-full flex flex-col grow relative gap-2 px-2">
            <NameSection/>
        </div>
    );
}

