import React from "react"
import PropTypes from "prop-types"
import { Link } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import PROPERTIES from "../../../global";


const ContactMeSection = ({isMobile}) => {

    ContactMeSection.propTypes = {
        isMobile: PropTypes.bool.isRequired
    }

    return (
        isMobile ? <Link className="ml-4 mb-8 " as={Link} color="primary" href={PROPERTIES.url_linkedin} variant="flat" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} /> {PROPERTIES.url_linkedin}
      </Link> :

        <iframe src="https://www.cognitoforms.com/f/WhM2Wdcw7EGm6vsHVBWlzQ/1" className={`bg-transparent w-full ${isMobile ? "" : "h-[540px]"}`}
        height={'60%'}></iframe>
    )
}

export default ContactMeSection