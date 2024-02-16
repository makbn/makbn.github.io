import React from "react";
import PropTypes from "prop-types"
import {Card} from '@nextui-org/react'
const INFO_SECTIONS = [
    "Work Experience / Professional Background",
    "Projects",
    "Technologies",
    "Academic Background",
    "About me / Summery",
    "Contact me"
];


export const InfoSection = () => {

    return (
        <div className="relative h-full mt-8 mb-8">
        <div className="flex flex-col absolute top-0 left-0 bottom-0 right-0 overflow-y-scroll snap-y snap-mandatory mt-8 mb-8">
            {INFO_SECTIONS.map((item, idx) => <InfoCard key={`info_card_${idx}`} title={item}/>)}
        </div>
    </div>
    )
};

const InfoCard = ({title}) => {
    InfoCard.propTypes = {
        title : PropTypes.string.isRequired
    }
    return (
        <div className="flex flex-row flex-shrink-0 snap-start snap-always h-full snap-start" radius="sm">
            <p className="info_card_title border-r-1 mt-4">{`//  ${title}`}</p>
                <div className="relative h-4/5 w-3/4">
                    <Card className="h-full w-full m-10"/>
                </div>
        </div>
    )
}