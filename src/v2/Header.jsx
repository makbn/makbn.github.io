import React from "react";
import { useState } from "react";
import {User, Navbar, NavbarBrand, NavbarMenu, NavbarContent, NavbarMenuToggle, NavbarItem, Tooltip, Link, Button} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlog, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { PropTypes } from 'prop-types'
import { properties } from "../global";
import DeviceViewToggle from "../helper/DeviceViewToggle";

const MENU_ITEMS = [
  {title: "Blog", url: properties.url_blog, icon: faBlog},
  {title: "Portfolio", url: properties.url_portfolio, icon: faInstagram},
  {title: "Github", url: properties.url_github, icon: faGithub},
];


const Header = () => {
 
  return (
    <DeviceViewToggle mobileView={<MobileNavbar/>} desktopView={<DesktopNavbar/>}/>
  );
}

const DesktopNavbar = () => (
  <Navbar shouldHideOnScroll maxWidth="full">
  <NavbarBrand>
    <Logo abbrv={false}/>
  </NavbarBrand>
  <NavbarContent className="sm:flex gap-10" justify="end">
    {MENU_ITEMS.map((item, idx) => <CustomNavbarItem key={`nav_item_${idx}`} title={item.title} icon={item.icon} href={item.url}/>)}
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
        {MENU_ITEMS.map((item, idx) => <CustomNavbarItem key={`nav_item_${idx}`} title={item.title} icon={item.icon} href={item.url}/> )}
        <div className="flex flex-col h-full">
          <div className="flex grow"></div>
          <Link className="flex-1 justify-center" color="foreground" onClick={() => setIsMenuOpen(false)}> <FontAwesomeIcon icon={faChevronUp}/></Link>
        </div>
      </NavbarMenu>
  
    </Navbar>
  )
}

const CustomNavbarItem = ({title, icon, href}) => {
  CustomNavbarItem.propTypes = {
    title : PropTypes.string.isRequired,
    icon : PropTypes.any.isRequired,
    href: PropTypes.string.isRequired
  };

  return (
    <NavbarItem className="w-full">
      <Tooltip className="w-full" content={title} placement="bottom">
        <Link className="w-full" color="foreground" href={href} target="_blank" size="lg">
          <div className="w-full flex flex-row gap-4 px-2 py-1 border-b border-divider">
            <FontAwesomeIcon icon={icon} />
            <p>{title}</p>
          </div>
        </Link>
      </Tooltip>
    </NavbarItem> 
  );
}

const PrimaryAction = () => (
  <NavbarItem>
    <Tooltip content="Let's connect!">
      <Button as={Link} color="primary" href={properties.url_linkedin} variant="flat" target="_blank">
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
    <User className="font-bold"   
      name={properties.nick_name}
      description={abbrv ? properties.occupation_abbrv : properties.occupation}
      avatarProps={{src: properties.url_avatar}}
    />
  )
}

export default Header