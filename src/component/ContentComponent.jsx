import React from "react";
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFull } from "@fortawesome/free-solid-svg-icons";

const ContentComponent = ({className, content}) => {

    ContentComponent.propTypes = {
        className: PropTypes.string.isRequired,
        content: PropTypes.object.isRequired
    }
    return(
        <div className={`${className} flex flex-col gap-3`}>
            {Object.hasOwn(content, 'header') && content.header != null ? 
            <div className="flex flex-row text-stone-400">
                <FontAwesomeIcon className="mr-2 mt-2" icon={faSquareFull}/>
                <h2 className="text-2xl">{content.header}</h2>
            </div> : null}
            {Object.hasOwn(content, 'content') && content.content != null ? <p className="mr-8 text-pretty indent-8 font-thin text-stone-400">{content.content}</p> : null}
        </div>
    )
}


export default ContentComponent