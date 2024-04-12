import React from "react"
import { TECHNOLOGIES } from "../../../global"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquareFull } from "@fortawesome/free-solid-svg-icons"
import PropTypes from 'prop-types';


const TechnologiesSection = () => {

    return(
        <div className="flex flex-col gap-6 my-8">
            {TECHNOLOGIES.map((part, idx) => <TechnologhiesComponent key={`tech_part_${idx}`} sectionTitle={part.title} items={part.list}/> )}
        </div>
    )
}

const TechnologhiesComponent = ({sectionTitle, items}) => {

    TechnologhiesComponent.propTypes = {
        sectionTitle: PropTypes.string.isRequired,
        items: PropTypes.arrayOf(PropTypes.string).isRequired
    };

    return (
        <div className="flex-1 flex flex-col">
            <div className="flex flex-row m-4 font-bold text-stone-400 uppercase">
            <FontAwesomeIcon className="mr-2 mt-1" icon={faSquareFull}/>
            <p>{sectionTitle}</p>
        </div>
            <div className="grow min-h-[100px] ml-4 tech_section_background border-stone-600 border-[1px]">
                {items.map((item, idx) =>  <span className="tech_item text-xl mx-2" key={`item_${idx}`}>{`${item}${idx == items.length-1 ? "" : ","} `}</span> )}
            </div>
        </div>
        
    )
}

export default TechnologiesSection