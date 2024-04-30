import React from "react";
import {ScrollShadow} from "@nextui-org/react";
import PropTypes from "prop-types"
import ContentComponent from "../../../component/ContentComponent";

const ContentSection = ({className, content}) => {

    ContentSection.propTypes = {
        className: PropTypes.string,
        content: PropTypes.array.isRequired
    }
    return(
        <ScrollShadow className={`${className} flex flex-col gap-8 pt-4 divide-dashed divide-stone-800`}>
            {content.map((section, idx) => <ContentComponent key={`content_${idx}`} className={"mx-4"}content={section}></ContentComponent>)}
        </ScrollShadow>
    )
}


export default ContentSection