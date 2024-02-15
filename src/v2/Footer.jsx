import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocation } from '@fortawesome/free-solid-svg-icons'
import { faCanadianMapleLeaf } from "@fortawesome/free-brands-svg-icons";
import { PROPERTIES, FOOTER_ITEMS } from "../global";
import DeviceViewToggle from "../helper/DeviceViewToggle";
import PropTypes from "prop-types"
import {Tooltip, Link}  from "@nextui-org/react"
import { faHeart } from "@fortawesome/free-solid-svg-icons";



  
const Footer = () => {
    return (
        <DeviceViewToggle desktopView={<DesktopFooter/>} mobileView={<MobileFooter/>}/>
    );
}

const DesktopFooter = () => (
    <div className="w-full relative rounded-lg shadow z-10">
            <div className="flex flex-row items-start gap-4 mx-6 py-4">
                <span className="flex text-sm text-gray-500 sm:text-center dark:text-gray-400"> 
                    All Rights Reserved by {PROPERTIES.first_name} {PROPERTIES.last_name} | 2018 - {new Date().getFullYear()}
                </span>
                <ul className="grow flex gap-4 justify-end mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 sm:text-center">
                    <li>
                    <div><FontAwesomeIcon className="mr-2" icon={faMapLocation} /> {PROPERTIES.location}</div>
                    </li>
                    <li>
                    <FontAwesomeIcon className="text-red-800" icon={faCanadianMapleLeaf} />
                    </li>
                </ul>
            </div>
        </div>
);

const MobileFooter = () => (
    <div className="w-full flex flex-col justify-center">  
        <div className="flex w-full py-2 border-t border-divider justify-self-center">
            <span className="w-full text-sm text-gray-500 text-center dark:text-gray-400"> 
                        Developed with <FontAwesomeIcon className="mx-1 text-red-800" icon={faHeart} /> by {PROPERTIES.first_name} {PROPERTIES.last_name} | {PROPERTIES.location_abbrv}<FontAwesomeIcon className="text-red-800 ml-1" icon={faCanadianMapleLeaf} />
                    </span>
            </div>
        <div className="flex pb-4 gap-6 items-stretch justify-center">
            {FOOTER_ITEMS.map((item, idx) =>  <CustomFooterItem key={`footer_item_${idx}`} className="flex-1" title={item.title} icon={item.icon} href={item.url}/>)}
        </div>
    </div>
);

const CustomFooterItem = ({title, icon, href}) => {
    CustomFooterItem.propTypes = {
      title : PropTypes.string.isRequired,
      icon : PropTypes.any.isRequired,
      href: PropTypes.string.isRequired
    };
  
    return (
        <Tooltip content={title} placement="bottom">
            <Link color="foreground" href={href} target="_blank" size="lg">
            <FontAwesomeIcon icon={icon} />
            </Link>
        </Tooltip>
    );
  }

export default Footer