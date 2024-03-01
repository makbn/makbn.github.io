import React from "react"
import Experience from "../model/Experience";
import Company from "../model/Company";
import {Image, Chip} from "@nextui-org/react";
import Skill from "../model/Skill";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFull, faCircle } from "@fortawesome/free-solid-svg-icons";

const ExperienceComponent = ({experience}) => {
    ExperienceComponent.propTypes = {
        experience : PropTypes.instanceOf(Experience).isRequired
    };

    return (
        <div className="flex flext-col justify-start items-start">
            {/* year start-end section */}
            <div className="h-200 flex flex-row experience_year font-thin uppercase mt-2">
                <p>{experience.start}</p>
                <div className="vertical-line"></div>
                <p>{experience.end}</p>
            </div>
            {/* main experience container */}
            <div className="flex flex-col grow">
                <CompanyComponent company={experience.company}/>
                <SkillComponent skills={experience.getSkills()}/>
                <PositionComponent positionTitle={experience.title}/>
                <DescriptionConponent description={experience.getDescriptions()}/>
            </div>
        </div>
    )
}

const CompanyComponent = ({company}) => {
    CompanyComponent.propTypes = {
        company: PropTypes.instanceOf(Company).isRequired,
    };

    return (
        <div className="flex flex-row ml-4 mt-2">
            <Image width={38} height={38} alt={company.name} src={company.icon} className="hover:scale-75 mr-2"/>
            <div  className="flex flex-col ml-4">
                <div className="text-lg">{company.name}</div>
                <div className="text-sm text-stone-600">{company.location}</div> 
            </div>
        </div>
    )

}

const SkillComponent = ({skills}) => {
    SkillComponent.propTypes = {
        skills: PropTypes.arrayOf(PropTypes.instanceOf(Skill)).isRequired
    };

    return(
        <div className="flex flex-row gap-2 ml-4 mt-4">
            {skills.map((skill, idx) => <Chip key={`skill_${idx}`} variant="bordered" size="sm" className="text-stone-400">{skill.title}</Chip>)}
        </div>
    )
}

const PositionComponent = ({positionTitle}) => {
    PositionComponent.propTypes = {
        positionTitle: PropTypes.string.isRequired,
    };

    return (
        <div className="flex flex-row m-4 font-bold text-stone-400 uppercase">
            <FontAwesomeIcon className="mr-2 mt-1" icon={faSquareFull}/>
            <p>{positionTitle}</p>
        </div>
    )
} 

const DescriptionConponent = ({description}) => {
    DescriptionConponent.propTypes = {
        description: PropTypes.arrayOf(PropTypes.string).isRequired
    };
    return (
        <div className="flex flex-col ml-4 divide-y divide-dashed divide-stone-800 gap-2">
            {description.map((desc, idx)=> 
            <div key={`exp_desc_${idx}`} className="flex flex-row">
                <FontAwesomeIcon className="ml-6 mr-4 mt-2 text-stone-400" size="2xs" icon={faCircle}/>
                <div className="font-thin text-stone-400" >{desc}</div>
            </div>)}
        </div>
    )
}

export default ExperienceComponent