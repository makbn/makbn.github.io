import React from "react";
import ViewTogleComponent from "../../component/ViewToggleComponent";
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocation } from '@fortawesome/free-solid-svg-icons'
import { faCanadianMapleLeaf } from "@fortawesome/free-brands-svg-icons";
import { PROPERTIES, FOOTER_ITEMS } from "../../global";
import { Tooltip, Link }  from "@nextui-org/react"
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <ViewTogleComponent desktopView={<DesktopFooter/>} mobileView={<MobileFooter/>}/>
    );
}

const DesktopFooter = () => (
    <div className="w-full relative rounded-lg shadow z-10">
        <div className="flex flex-row items-start gap-4 mx-4 py-4">
            <span className="flex text-sm text-gray-500 dark:text-gray-400"> 
                <Tooltip content={<Link href={PROPERTIES.url_source} target="_blank">View on Github!</Link>}>
                    <span className="whitespace-pre">Developed with</span>
                </Tooltip> 
                <FontAwesomeIcon className="mx-1 mt-1 text-sm text-red-800" icon={faHeart} /> 
                by {PROPERTIES.first_name} {PROPERTIES.last_name} | {PROPERTIES.occupation_start_year} - {new Date().getFullYear()}
            </span>
            <ul className="grow flex gap-4 justify-end mt-3 text-sm font-medium text-gray-500 dark:text-gray-400">
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
            <Tooltip content={<Link href={PROPERTIES.url_source} target="_blank">View on Github!</Link>}>
                    <span className="whitespace-pre">Developed with</span>
                </Tooltip> <FontAwesomeIcon className="text-red-800" icon={faHeart} /> by {PROPERTIES.first_name} {PROPERTIES.last_name} | {PROPERTIES.location_abbrv}<FontAwesomeIcon className="text-red-800 ml-1" icon={faCanadianMapleLeaf} />
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