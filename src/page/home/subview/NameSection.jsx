import React from "react";
import PROPERTIES from "../../../global";
import PropTypes from "prop-types"
import { faJava } from "@fortawesome/free-brands-svg-icons";
import { faLongArrowRight, faLongArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CommonUtil } from "../../../helper/CommonUtil";
import {Link} from "@nextui-org/react";
import { Typewriter } from 'react-simple-typewriter'

export const NameSection = ({isMobile, setScrollTo, className=""}) => {

    NameSection.propTypes = {
        isMobile: PropTypes.bool,
        setScrollTo: PropTypes.any.isRequired,
        className: PropTypes.string
    };
    var nameSectionContainerClass = isMobile ? "" : "mt-6"
    return(
        <div id="name_section_container" className={`${className} ${isMobile ? "h-[calc(100svh-65px)] w-svw" : "h-full max-h-full gap-4"} flex grow flex-col`}>
            <div></div>
            <div id="name_section" className={`${nameSectionContainerClass}`}>
                <p className={`ease-out ${isMobile ? "text-7xl" : "text-8xl" } grow text-stone-400`}> Hey there! <br></br> I&apos;m </p>
                <div className={`ease-out ${isMobile ? "text-7xl" : "text-8xl" } grow text-stone-400`}>
                <Typewriter 
                    words={['Mehdi', 'Matt']}
                    loop={0}
                    cursor
                    cursorStyle='_'
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={7000}
                />
                </div>
                
                <p className={`ease-out ${isMobile ? "text-6xl" : "text-7xl" } grow text-stone-400`}> {PROPERTIES.last_name},</p>
            </div>
            {isMobile ? <div className="grow"/> : null}
            <div id="slogan_section" className="ease-out relative lg:mt-8 md:mt-8 sm:mt-0 border-l-4 border-stone-400 pl-2 font-bold
                lg:font-light lg:text-3xl/[3.2rem]">
                <p> 
                    A 
                    <br></br> 
                    Software Engineer 
                    <br></br> 
                    Focused on 
                    <br></br> 
                    Java <FontAwesomeIcon icon={faJava}/> web development frameworks 
                    <br></br> 
                    With + {CommonUtil.numberToText(new Date().getFullYear() - PROPERTIES.occupation_start_year)} years of experience; 
                    {isMobile ? <br></br> :
                    <Link className="cursor-pointer ml-6 font-thin" color="foreground" onPress={() => setScrollTo(4)}> 
                        <>READ MORE <FontAwesomeIcon className="pl-2 pt-1"icon={faLongArrowRight}/></>
                    </Link>
                    }
                </p>
    
            </div>
            {isMobile ?  <div className="relative"><div className="absolute bottom-0 right-0 cursor-pointer next_info_card_caption">
                <FontAwesomeIcon className="justify-end cursor-pointer py-4 px-2"icon={faLongArrowDown}/></div></div> : null}
    
            <div className="mb-8"></div>
        </div>
    )
};
