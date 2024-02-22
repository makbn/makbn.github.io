import { useState, useEffect } from "react";
import PropTypes from "prop-types"
import React from "react";


export const MOBILE_DEVICE_WIIDTH = 640;

export const ViewTogleComponent = ({ mobileView, desktopView}) => {
    ViewTogleComponent.propTypes = {
        mobileView : PropTypes.elementType.isRequired,
        desktopView: PropTypes.elementType.isRequired
    };

    const [width, setWidth] = useState(0)
    
    useEffect(() => {
      function handleResize() {
        setWidth(window.innerWidth)
      }
      
      window.addEventListener("resize", handleResize)
      
      handleResize()
      
      return () => { 
        window.removeEventListener("resize", handleResize)
      }
    }, [setWidth])
  
    return ( width < MOBILE_DEVICE_WIIDTH ?  <>{mobileView}</> : <>{desktopView}</>);
  }

  export default ViewTogleComponent;