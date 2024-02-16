import React from "react";
import { useState } from "react";
import {User, Navbar, NavbarBrand, NavbarMenu, NavbarContent, NavbarMenuToggle, NavbarItem, Tooltip, Link, Button} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { PropTypes } from 'prop-types'
import { PROPERTIES, HEADER_ITEMS } from "../Global";
import DeviceViewToggle from "../helper/DeviceViewToggle";


const Header = () => {
 
  return (
    <DeviceViewToggle mobileView={<MobileNavbar/>} desktopView={<DesktopNavbar/>}/>
  );
}

const DesktopNavbar = () => (
  <Navbar 
  shouldHideOnScroll maxWidth="full">
  <NavbarBrand>
    <Logo abbrv={false}/>
  </NavbarBrand>
  <NavbarContent className="sm:flex gap-10" justify="end">
    {HEADER_ITEMS.map((item, idx) => <CustomNavbarItem key={`nav_item_${idx}`} title={item.title} icon={item.icon} href={item.url}/>)}
    <PrimaryAction/>
  </NavbarContent>
</Navbar>
);

const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Navbar
    isBordered
    isMenuOpen={isMenuOpen}
    onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
        <Logo abbrv={true}/>
      </NavbarContent>
      <NavbarContent justify="end">
        <PrimaryAction/>
      </NavbarContent>

      <NavbarMenu>
        {HEADER_ITEMS.map((item, idx) => <CustomNavbarItem key={`nav_item_${idx}`} title={item.title} icon={item.icon} href={item.url} mobile={true}/> )}
        <div className="flex flex-col h-full">
          <div className="flex grow"></div>
          <Link className="flex-1 justify-center" color="foreground" onClick={() => setIsMenuOpen(false)}> <FontAwesomeIcon icon={faChevronUp}/></Link>
        </div>
      </NavbarMenu>
  
    </Navbar>
  )
}

const CustomNavbarItem = ({title, icon, href, mobile=false}) => {
  CustomNavbarItem.propTypes = {
    title : PropTypes.string.isRequired,
    icon : PropTypes.any.isRequired,
    href: PropTypes.string.isRequired,
    mobile: PropTypes.bool
  };

  const width =mobile ? "w-full" : "";
  const itemStyle = mobile ? "w-full flex flex-row gap-4 px-2 py-1 border-b border-divider": "";
  
  return (
    <NavbarItem className={width}>
      <Tooltip className={width} content={title} placement="bottom">
        <Link className={width} color="foreground" href={href} target="_blank" size="lg">
          <div className={itemStyle}>
            <FontAwesomeIcon icon={icon} />
            {mobile ? <p>{title}</p> : <></>}
          </div>
        </Link>
      </Tooltip>
    </NavbarItem> 
  );
}

const PrimaryAction = () => (
  <NavbarItem>
    <Tooltip content="Let's connect!">
      <Button as={Link} color="primary" href={PROPERTIES.url_linkedin} variant="flat" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
      </Button>
    </Tooltip>
  </NavbarItem>
);

const Logo = ({abbrv}) => {
  Logo.propTypes = {
    abbrv: PropTypes.bool.isRequired
  };

  return (
    <User id="logo" className="font-bold select-none "   
      name={PROPERTIES.nick_name}
      description={abbrv ? PROPERTIES.occupation_abbrv : PROPERTIES.occupation}
      avatarProps={{src: process.env.PUBLIC_URL + PROPERTIES.url_avatar}}
    />
  )
}

export default Header